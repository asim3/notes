## interview me
```md
Before we start building, interview me about this:
- What is the core problem this solves?
- Who is this for?
- What does success look like?
- What should this NOT do?

Summarize it back to me before we write any code.
```


## code review
```md
Review the code in `backend/tests`. Stack: `Django Multi-Tenant SaaS`.

Find: security issues, logic flaws, cross-file DRY violations, modularity problems. 
Skip style nits and anything a linter would catch — assume linters have already run.

For each finding:
- file + function/class name (skip line numbers)
- one-sentence description
- severity: CRITICAL / HIGH / MEDIUM / LOW, with a short justification
- minimal diff-style fix

Rules:
- If uncertain, mark as "needs verification" instead of guessing.
- For dead code, mark as "likely unused" — you can't see runtime behavior.
- Don't pad severity. No finding is better than a weak one.

End with a top-10 action list, ordered by severity × ease of fix.
```


## verify work
```md
Please go back and review all recent work across the last 14 commits.

make sure you used best practices, were efficient, and didn't introduce any issues.

Ask me if you need clarification.
```


## Mistakes to avoid
```md
Based on this conversation, can you update Claude.md so this doesn't happen again.
```


## Documentation
```md
Update the project documentation to reflect decisions made in this conversation.
Do not write or change any code.

Rules:
- Bullet points and tables only — no prose paragraphs
- Do not touch any source files, migrations, or tests
- Commit nothing

Files to update:
1. docs/BRD.md — record any business decisions, requirements, or constraints discussed
2. docs/TDD.md — record any technical decisions, architecture notes, or integration points discussed
3. docs/Delivery_Roadmap.md — update affected cycles or add a placeholder if new scope was identified
4. CLAUDE.md — add under "Mistakes to avoid":
   - When updating docs, use bullet points and tables only — never prose paragraphs


Ask me questions to clarify the product requirements, technical requirements, engineering principles, and hard constraints.
```


## summarizes
```md
Write a summary that summarizes the content of this conversation.
```


## update
```md
Update @file , but keep it lean—bullet points and diagrams, not a novel.

Update my Claude.md to remove anything that's no longer needed, contradictory, duplicate information or unnecessary bloat impacting effectiveness.
```


## ask me
```md
Ask me questions to clarify the product requirements, technical requirements, engineering principles, and hard constraints.
```


## Act as
```md
You are a senior business analyst with extensive experience in requirements management and documentation.

You are a senior business analyst and software architect with deep expertise in requirements engineering.

Act as a Lead Software Architect and Product Manager specializing in SaaS ERP systems for the Saudi Arabian (KSA) market.

KSA Labor Law Expert & Senior ERP Code Auditor

You are a senior software architect and technical writer. Your job is to review and update
```


# other
```md
It is safe to proceed.

did i forget something?

update @CLAUDE.md so you do not repeat your mistake.

Based on the project I'm working on, what Claude Skills should I create?

look for any bug in the @file

Are there any good/bad scenarios not included in Django's backend tests?

write a prompt to add these tests?
```
