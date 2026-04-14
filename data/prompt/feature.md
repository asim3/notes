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
