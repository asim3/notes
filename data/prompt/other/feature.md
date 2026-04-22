## Red Phase — Write Failing Tests
```md
We are writing failing tests for a new feature: "user registration endpoint". Write only tests — no implementation.

Test files are in this directory:
- backend/tests/

Write the following test functions:
- user registration endpoint 
- add new super user commands


Ask me questions to clarify the product requirements, technical requirements, engineering principles, and hard constraints.

Do not write any implementation yet — only tests. All tests must fail (red) before we proceed.
```


## Green Phase — Make Tests Pass
```md
We are working in a Django backend. The failing tests for: "user registration endpoint" are already written in:
- backend/tests/user/test_commands.py
- backend/tests/user/test_registration.py

Implement the following in order:
1. POST /api/v1/register/ — serializer + view + URL entry; creates Tenant + Domain + User(role="owner") atomically, returns JWT pair
2. apps/user/management/commands/bootstrap_tenant.py — accepts --email, --password, --phone, --tenant-name, --slug, --whatsapp; creates Tenant + Domain + superuser


Ask me questions to clarify the product requirements, technical requirements, engineering principles, and hard constraints.

Run: docker compose exec backend pytest tests/user/test_commands.py tests/user/test_registration.py

All tests must be green before stopping.
```


## Refactor Phase — Clean Up
```md
We are working in a Django backend. All "user registration endpoint" tests are passing (green).

Perform a refactor pass on the new user registration endpoint. Do not add any new functionality. Do not change any test.

1. Run: docker compose exec backend ruff check --fix .
2. Run: docker compose exec backend mypy .
3. Run: docker compose exec backend interrogate .
4. Wrap all user-facing strings in gettext_lazy and automatically provide the corresponding Arabic (Modern Standard) translations for these strings.
5. Run: docker compose exec backend pytest

Ask me questions to clarify the product requirements, technical requirements, engineering principles, and hard constraints.

Do not add docstrings or comments to code you did not change, unless it is strictly required to satisfy mandatory linting or documentation coverage checks (e.g., interrogate). Only comment where logic is non-obvious.
```

> Perform a refactor pass across the entire backend/ directory. Do not add any new functionality. Do not change any test.
> 
>Perform a refactor pass on apps/[app_name]/. Do not add any new functionality. Do not change any test.


## document a new planned feature
```md
Update the project documentation to record {{FEATURE_NAME}} as a planned feature. Do not write or change any code.

Context:
- {{ALREADY_DONE}}
- Supporting reference: {{SUPPORTING_FILES}}
- Business need: {{BUSINESS_NEED}}
- Blocker: {{BLOCKER}}
- Reusable as-is: {{REUSABLE_COMPONENTS}}
- New integration points required: {{NEW_INTEGRATION_POINTS}}

Files to update (bullet points and tables only — no prose paragraphs):
1. docs/BRD.md — add {{FEATURE_NAME}} under a "Features" or "Future Scope" section:
   - Business need
   - Regulatory/compliance constraint (if any)
   - Decision gate: {{DECISION_GATE}}

2. docs/TDD.md — add a "{{FEATURE_NAME}}" section covering:
   - New endpoint(s) or entry point(s): {{NEW_INTEGRATION_POINTS}}
   - How existing routing/models handle the channel
   - Any client abstraction required
   - Compliance requirement
   - Note that reusable components are unchanged: {{REUSABLE_COMPONENTS}}

3. docs/Delivery_Roadmap.md — add a placeholder cycle:
   - Label: {{CYCLE_LABEL}}
   - One-line description
   - Status: BLOCKED — {{DECISION_GATE}}

Do not touch any source files, migrations, or tests. Commit nothing.
```
