## interview me
```md
Approach: TDD (Red → Green → Refactor)
Write all tests first and confirm they fail, then implement until they pass, then refactor.

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


## Mistakes
```md
Based on this conversation, can you update Claude.md so this doesn't happen again.

update @CLAUDE.md so you do not repeat your mistake.
```


## Documentation
```md
Update the project documentation to reflect decisions made in this conversation.
Do not write or change any code.

Rules:
- When updating docs, use bullet points and tables, keep it lean—bullet points and diagrams, not a novel.
- Commit nothing
- Do not touch any source files, migrations, or tests

Ask me questions to clarify the product requirements, technical requirements, engineering principles, and hard constraints.
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


## summarizes
```md
Write a summary that summarizes the content of this conversation.
```


## AS
```md
You are a senior business analyst with extensive experience in requirements management and documentation.

You are a senior business analyst and software architect with deep expertise in requirements engineering.

Act as a Lead Software Architect and Product Manager specializing in SaaS ERP systems for the Saudi Arabian (KSA) market.

KSA Labor Law Expert & Senior ERP Code Auditor

You are a senior software architect and technical writer. Your job is to review and update
```


# prompt
```md
How do I prompt an LLM to recreate this task?

How do I prompt an LLM to duplicate what we just did.
```


# other
```md
Okay, let's do that.

It is safe to proceed.

did i forget something?

look for any bug in the @file
```
