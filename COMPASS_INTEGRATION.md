# DataSense Compass × DataMend Lab — Cross-Repository Integration Guide

## 1. Permission & Environment Transparency (Section 32.6)
Within this sandboxed build environment, direct git push access to external repository `https://github.com/rkohnmn/datamend-lab` is not available. In accordance with **Section 32.6 (Permission Limitations)**:
1. **Complete Handoff Protocol Implemented in Hub**: DataSense Studio (`/compass/`) implements the full `IndexedDB` (`datasense_compass_handoff_v1`) + `BroadcastChannel` (`datasense_compass_channel_v1`) + `SHA-256` digest state machine.
2. **In-App DataMend Round-Trip Cleaning Workbench**: Users can test and verify the complete browser round trip (`CREATED → ACCEPTED → IN_PROGRESS → RETURN_READY → RETURN_CONSUMED`), including variable renaming and lineage restoration, directly inside the `/compass/` modal workbench.
3. **Drop-In Adapter Provided for `rkohnmn/datamend-lab`**: The file `datamend-adapter/datamend-compass-adapter.js` is included in this repository archive for one-line inclusion in `datamend-lab`.
4. **Full File-Based Fallback**: Users can export DataSense JSON or CSV packages from Compass and re-import cleaned files from DataMend Lab at any time.

## 2. Adding the Adapter to `rkohnmn/datamend-lab`
Include `datamend-compass-adapter.js` in `datamend-lab/index.html`:
```html
<script src="datamend-compass-adapter.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', async () => {
    const incoming = await window.DataMendCompassAdapter.acceptIncomingCompassHandoff();
    if (incoming) {
      // Load incoming.envelope.dataset into DataMend Lab table state
      console.log('Accepted Compass Handoff:', incoming.envelope.handoffId);
    }
  });
</script>
```
