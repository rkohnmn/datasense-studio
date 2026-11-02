# Compass performance baseline

Measured November 2, 2026 with Node 25.9.0 on the local Windows development host. Reproduce with `node scripts/benchmark_compass.js`. These are synchronous engine timings, including profiling and relationships, not browser paint, interaction latency, network measurements or service-level guarantees.

| Fixture | Cells | Three runs (ms) |
| --- | ---: | --- |
| 5,000 rows, 20 numeric columns | 100,000 | 589.0, 540.8, 498.3 |
| 2,500 rows, 40 mixed/high-cardinality columns | 100,000 | 392.0, 297.4, 288.6 |

The current maximum-cell inputs can occupy the main thread for several hundred milliseconds on this host. Import limits therefore remain unchanged. Before increasing limits, move analysis into a worker with cancellation and stale-result protection, and measure representative browser workloads on slower devices. This release does not claim that synchronous analysis is instant or that all allowed datasets have the same cost.
