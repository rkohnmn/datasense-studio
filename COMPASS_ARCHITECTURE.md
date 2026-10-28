# DataSense Compass — Architecture Specification

## 1. Purpose & System Role
**DataSense Compass** is the intelligent dataset discovery, analysis-aware quality gate, target-variable relationship explorer, and deterministic cross-application router integrated into **DataSense Studio**.

It answers three core questions for every dataset:
1. **Is this dataset ready for the analysis I want to perform?**
2. **Which variables are related to the variable I care about, and how?**
3. **Which DataSense application should I use next?**

## 2. Dual-Surface Architecture
- **Homepage Signature Entry (`#compass-home-entry`)**: Positioned directly below the Hero workbench on the flagship homepage, providing live dataset switching across 6 benchmark scenarios, target variable selection, instant readiness gating, family-specific relationship rankings, drag-and-drop local file upload, and ordered ecosystem routing.
- **Dedicated `/compass/` Workspace (`#view-compass` & `/compass/index.html`)**: A 3-region analytical workspace:
  - **Left Column**: Primary Target Variable selector (*"What variable do you want to understand?"*), conditional Temporal Outcome selector, Subset/Category Filter, and Interactive Variable Browser with 13-type Semantic Inference and user type-override controls.
  - **Center Column**: Primary Variable Univariate Profile Card + 4-Layer Analytical Stage (`1 · Target Relationship Explorer`, `2 · Compact Relationship Matrix (ggpairs)`, `3 · Detailed Pair View & SVG Chart`, `4 · Raw Data & Hygiene Inspector`).
  - **Right Column**: Analysis Readiness Gate, DataMend Lab Round-Trip Handoff & Cleaning Workbench, and Ordered Multi-Tool Ecosystem Recommendations.

## 3. Privacy & Deterministic Execution
All parsing, type inference, statistical estimation, SVG chart generation, and IndexedDB handoff packaging run 100% client-side in the browser with zero network calls or external LLM dependencies.
