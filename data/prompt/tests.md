# tests
```md
Identify potential edge cases and scenarios missed by the Django backend tests.
```


# Django
```md
You are a senior backend engineer performing a test coverage audit. For each app in this Django project, read the implementation files and their corresponding test files, then identify:

1. Missing sad-path tests — error conditions the code handles (early returns, ValidationError, DoesNotExist, missing keys) that have no test exercising them.
2. Missing guard tests — inputs that would crash the code (unhandled KeyError, unguarded .get() vs [] access, missing try/except) with no test proving they're safe.
3. Missing happy-path variants — branches in the implementation (feature flags, idempotent operations, status transitions) that are reachable but untested.
For each gap found, state: the function name and file, what the missing scenario is, whether it exposes a bug or just lacks coverage, and the minimal test to add.
Prioritise by risk: production crashes first, silent data corruption second, coverage gaps third.

---

The key parts that make it work well:

- "read implementation AND tests" — forces it to compare the two rather than guess
- The three categories — gives it a framework so it doesn't just list obvious things
- "state whether it's a bug or coverage gap" — separates "write a test" from "fix + write a test"
- Prioritise by risk — keeps the output actionable rather than exhaustive
```

