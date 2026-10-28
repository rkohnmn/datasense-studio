# DataSense Compass — Analysis-Aware Quality Gate Specification

## 1. Three Contextual Readiness States
Compass evaluates dataset readiness relative to the selected **Primary Variable** and active **Comparison Pair**, assigning one of three states:
1. **`Ready` (`READY`)**: No structural parse errors, no coded sentinels, no unit-contaminated numeric cells, and sufficient variation in the selected variables.
2. **`Ready with cautions` (`READY_WITH_CAUTIONS`)**: Dataset is structurally sound for exploration, but contains analytical cautions such as legitimate 1.5×IQR outliers, moderate missingness (<25%), mixed slash/ISO dates, or timestamp spacing gaps. Compass never auto-deletes legitimate extreme values.
3. **`Cleaning or correction required` (`CLEANING_REQUIRED`)**: Blocking hygiene defects are present, such as `-999` numeric sentinels, unparsed unit strings (`"138 mmHg"`), malformed dates (`"2025-19-40"`), duplicate identifier keys, inconsistent category casing/whitespace (`"control"` vs `"Control "`), or zero-variance primary variable.

## 2. Issue Diagnostic Contract
Every flagged issue reports:
- Severity (`blocking` vs `caution`)
- Scope (`Dataset Structure`, `Primary Variable`, `Selected Variable`, or `Variable`)
- Exact affected observation count and percentage
- Statistical rationale (*Why it matters*)
- Concrete remediation action in **DataMend Lab**
