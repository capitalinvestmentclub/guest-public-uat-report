# Guest / Public deployed defect-delivery retest

Completed: 2026-09-18T10:10:00Z

Environment: deployed development · Google Chrome · 1792x976 by default; additional sizes only for responsive findings.

This report records terminal disposition for every Guest / Public entry in the 276-finding delivery batch. PASS means the deployed behavior was verified. FAIL means the deployed defect remains reproducible. PASSED_OVER means the bounded attempt could not produce trustworthy proof, commonly because an exact fixture, actor, reversible mutation, or stable protected page was unavailable. DUPLICATE_COVERAGE points to another finding that exercised the same behavior.

## Summary

| Total | PASS | FAIL | DUPLICATE_COVERAGE | PASSED_OVER |
|---:|---:|---:|---:|---:|
| 4 | 1 | 1 | 0 | 2 |

Severity inventory: HIGH 1 · MEDIUM 3. Outcome reconciliation: FAIL 1 · PASS 1 · PASSED_OVER 2.

## Finding dispositions

| ID | Severity | Outcome | Title | Disposition | Tested |
|---|---|---|---|---|---|
| PUB006-PROFILE-001 | MEDIUM | FAIL | Public creator links redirect guests to Login | REPRODUCED_ON_DEPLOYED_CANDIDATE | 2026-09-18T05:18:36.000Z |
| PUB007-COVERAGE-001 | HIGH | PASSED_OVER | Role, biodata and verification branches remain behind account creation | PASSED_OVER_MISSING_RUN_SCOPED_FIXTURES | 2026-09-18T05:20:00.000Z |
| PUB013-DRAFT-001 | MEDIUM | PASS | Auto-restored signup drafts have no Resume or Discard controls | VERIFIED_FIXED_DEPLOYED | 2026-09-18T05:16:08.792Z |
| PUB017-COVERAGE-001 | MEDIUM | PASSED_OVER | Allowed/restricted account pair was not available | PASSED_OVER_MISSING_RUN_SCOPED_FIXTURES | 2026-09-18T05:20:00.000Z |

The machine-readable companion file preserves target URLs, evidence paths, notes, browser, viewport, and API provenance for each entry.
