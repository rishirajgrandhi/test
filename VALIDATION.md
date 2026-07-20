# Data Cleansing and Validation Rules

This document summarizes the data cleansing and validation rules defined in the
project knowledge base (`vault/md/r2og60-kb-rules.md`). Every incoming record
must satisfy all rules below **before** it is persisted.

## Rules

| # | Rule | Description |
|---|------|-------------|
| 1 | Null-checks | All incoming records must pass null-checks — required fields may not be null/missing. |
| 2 | Type validation | All incoming records must pass type validation before persistence. |
| 3 | Date format | Dates must use the ISO-8601 format. |

## Details

### 1. Null-checks
Every incoming record is checked for null or missing values. Records that fail
null-checks must not be persisted.

### 2. Type validation
Each field in an incoming record is validated against its expected type. Records
that fail type validation must not be persisted.

### 3. Date format (ISO-8601)
All date values must be expressed using the ISO-8601 standard
(e.g. `2026-07-20` or `2026-07-20T16:13:00Z`).

## Enforcement point
These checks run on **all incoming records prior to persistence**. A record must
pass null-checks and type validation (and use ISO-8601 dates) before it is
written to storage.

---
_Source: `vault/md/r2og60-kb-rules.md`. Update this document if the knowledge
base rules change._
