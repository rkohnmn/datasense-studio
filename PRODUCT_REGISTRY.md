# Canonical Product Registry & URL Contract

All components read exclusively from `src/config/products/registry.json`.

| ID | Display Name | Live Website URL (`Open App`) | GitHub Repository URL (`View Source`) |
|---|---|---|---|
| `datamend-lab` | DataMend Lab | `https://rkohnmn.github.io/datamend-lab/` | `https://github.com/rkohnmn/datamend-lab` |
| `visualgrammar` | VisualGrammar | `https://rkohnmn.github.io/visualgrammar/` | `https://github.com/rkohnmn/visualgrammar` |
| `quartetlab` | QuartetLab | `https://rkohnmn.github.io/quartetlab/` | `https://github.com/rkohnmn/quartetlab` |
| `resamplelab` | ResampleLab | `https://rkohnmn.github.io/resamplelab/` | `https://github.com/rkohnmn/resamplelab` |
| `forecastlab` | ForecastLab | `https://rkohnmn.github.io/forecastlab/` | `https://github.com/rkohnmn/forecastlab` |

## Adding a Sixth Product
Append a new object conforming to `ProductRecord` (`src/types/registry.ts`) into `src/config/products/registry.json`. The homepage Bento grid, showcases, directory filters, search modal, and footer automatically render the new entry.
