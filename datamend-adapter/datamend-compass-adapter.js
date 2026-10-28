/**
 * DataSense Compass × DataMend Lab — Same-Origin Browser Handoff Adapter
 * File: datamend-adapter/datamend-compass-adapter.js
 * Protocol: datasense_compass_handoff_v1
 *
 * Drop-in integration module for https://rkohnmn.github.io/datamend-lab/
 * Reads incoming handoff envelopes from IndexedDB (`datasense_compass_handoff_v1`),
 * transitions state (`READY_FOR_TARGET` -> `ACCEPTED` -> `IN_PROGRESS` -> `RETURN_READY`),
 * and returns the cleaned dataset + audit log back to DataSense Compass (`/compass/`).
 */
(function (root) {
  'use strict';

  const DB_NAME = 'datasense_compass_handoff_v1';
  const STORE_NAME = 'handoffs';
  const CHANNEL_NAME = 'datasense_compass_channel_v1';

  function openHandoffDB() {
    return new Promise((resolve, reject) => {
      if (typeof indexedDB === 'undefined') {
        return reject(new Error('IndexedDB is unavailable in this browser context.'));
      }
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'handoffId' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function readHandoffEnvelope(handoffId) {
    const db = await openHandoffDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(handoffId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async function updateHandoffState(handoffId, patch) {
    const db = await openHandoffDB();
    const existing = await readHandoffEnvelope(handoffId);
    if (!existing) throw new Error(`Handoff envelope ${handoffId} not found.`);
    const updated = Object.assign({}, existing, patch, { updatedAt: new Date().toISOString() });
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(updated);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    if (typeof BroadcastChannel !== 'undefined') {
      const ch = new BroadcastChannel(CHANNEL_NAME);
      ch.postMessage({ type: updated.state, handoffId: updated.handoffId });
      ch.close();
    }
    return updated;
  }

  async function acceptIncomingCompassHandoff() {
    const params = new URLSearchParams(window.location.search);
    const handoffId = params.get('compass_handoff');
    const returnTo = params.get('return_to') || 'https://rkohnmn.github.io/datasense-studio/compass/';
    if (!handoffId) return null;

    const envelope = await readHandoffEnvelope(handoffId);
    if (!envelope) return null;

    await updateHandoffState(handoffId, { state: 'ACCEPTED', acceptedAt: new Date().toISOString() });
    return { envelope, returnTo };
  }

  async function completeRoundTripAndReturn(handoffId, cleanedDataset, auditSummary, returnToUrl) {
    await updateHandoffState(handoffId, {
      state: 'RETURN_READY',
      completedAt: new Date().toISOString(),
      cleanedDataset,
      auditSummary
    });
    if (returnToUrl) {
      window.location.href = returnToUrl;
    }
  }

  root.DataMendCompassAdapter = {
    DB_NAME,
    STORE_NAME,
    CHANNEL_NAME,
    acceptIncomingCompassHandoff,
    readHandoffEnvelope,
    updateHandoffState,
    completeRoundTripAndReturn
  };
})(typeof self !== 'undefined' ? self : this);
