# DataSense Compass — Supported Data Formats & Parser Contract

## 1. Supported Input Formats
- **CSV (`.csv`) & TSV (`.tsv`, `.txt`)**: Parsed via a custom RFC-4180 state-machine parser supporting quoted fields, embedded commas, embedded CR/LF newlines, escaped double quotes (`""`), UTF-8 BOM stripping, automatic delimiter detection (`,`, `\t`, `;`, `|`), duplicate/empty header disambiguation, and row-width validation.
- **DataSense JSON (`.json`)**: Supports standard arrays of record objects as well as versioned `datasense_compass_handoff_v1` envelopes containing `dataset`, `compassContext`, `typeOverrides`, and `lineage`.

## 2. Export Formats
- **Dataset Profile & Readiness Report (`.json`)**
- **Ranked Relationships Summary (`.csv`)**
- **Pair Visualization Vector Chart (`.svg`)**
- **DataSense Handoff Envelope (`.json`)**
- **Active / Cleaned Dataset (`.csv`)**
