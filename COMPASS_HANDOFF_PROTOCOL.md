# DataSense Compass × DataMend Lab Interoperability & Handoff Protocol

DataSense Compass provides three clearly distinguished, non-destructive pathways for cleaning datasets with **DataMend Lab** (`https://rkohnmn.github.io/datamend-lab/`):

## 1. Operational File-Based Workflow (Recommended Today — Works Immediately with Live DataMend Lab)
1. In DataSense Compass, click **↓ Download Raw CSV** (or **↓ Download DataSense JSON Envelope**).
2. Open **[DataMend Lab](https://rkohnmn.github.io/datamend-lab/)** (`https://rkohnmn.github.io/datamend-lab/`), load the exported file, perform your cleaning operations, and export the cleaned CSV.
3. Return to DataSense Compass and click **↑ Re-Import Cleaned File** to inspect the updated readiness status (*Ready to explore*) and before/after lineage diff.

## 2. Same-Origin Browser Handoff Protocol (`datasense_compass_handoff_v1`) + Drop-In Adapter
- When you open the DataMend Round-Trip Workbench in Compass, Compass stages a signed `datasense_compass_handoff_v1` envelope (with FNV-1a integrity digest, primary variable context, and flagged hygiene issues) in browser `IndexedDB` (`DataSenseCompassHandoffDB`) and `localStorage`.
- Because `rkohnmn/datamend-lab` is an independent repository, automatic cross-tab consumption requires adding the included `datamend-adapter/datamend-compass-adapter.js` script to the `rkohnmn/datamend-lab` repository. Compass states this transparently in the UI so users are never misled about external repository state.

## 3. Interactive Cleaning Preview Inside Compass (User-Approved Local Simulation)
- Inside the Round-Trip modal, users can explicitly review and toggle individual hygiene rules (*Recode numeric sentinels -999 → null*, *Strip embedded units*, *Normalize category casing & whitespace*, *Repair dates to ISO-8601*, *Deduplicate rows*) and click **✓ Execute DataMend Cleaning & Return to Compass** to preview how cleaning changes readiness and correlations locally.
- **100% Non-Destructive**: Compass backs up the unmodified dataset in memory and provides a 1-click **↺ Restore Original Unmodified Dataset** button.
