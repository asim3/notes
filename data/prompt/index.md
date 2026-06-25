## Interview me
```md
Please pause our active development here and switch into a Senior Architect and Strategic Product Auditor mindset. I want you to review our entire conversation from the very beginning of this session to perform a comprehensive quality, security, and alignment audit.

First, based on everything we have discussed, explicitly write out brief answers to the following 4 strategic questions to confirm we are aligned on the big picture:
1. Core Problem: What is the exact core problem this implementation is solving?
2. Target Audience: Who is this specifically built for?
3. Definition of Success: What does success look like for this solution (performance, usability, or business goals)?
4. Out of Scope: What should this solution absolutely NOT do?

Once you have defined those boundaries, perform a deep-dive technical audit of the final state of our work against these criteria:

1. Best Practices & Design Patterns: Are we adhering strictly to industry-standard best practices for this specific stack/language? Are there any architectural anti-patterns or shortcuts we accidentally introduced?
2. Efficiency & Performance: Is the code optimized? Are there any hidden performance bottlenecks, redundant operations, or sub-optimal database queries/API structures?
3. Error Prevention & Edge Cases: Look closely for silent failure points. Did we miss critical try/catch blocks, error-handling routines, input validation, or edge cases that could cause issues later?
4. Technical Debt & Maintainability: Is the code clean, readable, well-structured, and properly decoupled?

Structure your response clearly:
- Strategic Alignment: Your brief answers to the 4 questions above.
- Critical Issues (If any): Fixes that must be made immediately to prevent bugs or breaking changes.
- Optimization Recommendations: Adjustments to make the code faster, cleaner, or more robust.
- Clean Final Output: Provide the finalized, fully optimized version of the code/configuration with all improvements integrated.

Do not introduce new features or change our core logic; focus purely on making what we already built as robust, safe, and production-ready as possible.
```


## Technical Product Brief
```md
We have finished our engineering and design session. Please transition into a Lead Technical Product Manager (TPM) mindset. I need you to review our entire conversation from this session and synthesize it into a clean, highly professional Technical Product Brief. 

Please organize the summary into the following clear sections:

1. Executive Summary & Alignment:
   - Core Problem: The exact problem this session addressed.
   - Target Audience: Who this solution is built for.
   - Success Metrics: What success looks like for this implementation.
   - Out of Scope / Boundaries: What we explicitly decided this solution should NOT do.

2. Technical Architecture & Decisions:
   - Bullet points of the key architectural or technical decisions we agreed on.
   - The rationale behind those choices (the "Why").

3. Final Production Blueprint:
   - The absolute final, cleanest version of the code, configuration, or schema we settled on. (Strip out all intermediate, broken, or draft versions discussed earlier in the session).

4. Next Steps & Action Items:
   - A concrete, prioritized list of what needs to be implemented next to build on top of this work.

Make this concise, highly structured, and scannable so it can be immediately pasted into documentation, a repository README, or used as a briefing for the next engineering sprint. Avoid conversational filler; give me pure, actionable documentation.
```


## Meeting Agenda
```md
Act as a Tech PM. Analyze the project directory and file contents provided below to generate a sharp, concise Meeting Agenda for my upcoming team and partner alignment meeting. 

Identify gaps, dependencies, and critical decisions needed based on these files.

@__MY__DIRECTORY

---

Generate the agenda using this concise structure:

1. Objective: The main decision/sign-off needed by the end of the meeting.
2. Agenda Topics (Timeline format):
   - [XX Mins] Topic Name: 
     * Context: Why it matters based on the files.
     * Core Questions: 2-3 pointed questions to ask the team to resolve document gaps.
     * Required Outcome: The exact decision needed.
3. Team Prep Checklist: Specific things partners or employees must review or bring based on these documents.

Skip conversational filler. Keep it dense, actionable, and entirely tailored to the files above.
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


## plan review
```md
Identify any hidden technical pitfalls, edge cases, or potential blockers that could arise during implementation.

Foresee and outline all hidden technical hurdles and edge cases that could derail the implementation.

Highlight all potential technical roadblocks and hidden edge cases for this implementation.
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
Update the project documentation to reflect decisions made in latest module updates.
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


## meeting minutes
```md
Using my current workspace context, please look ONLY inside the directory located at: `[insert/path/to/folder]`

Read all the Markdown (.md) files within this specific folder. Ignore all other code files or directories outside of it. Analyze these project documents and provide the following:

1. **Identify the Gaps:** Look for logical inconsistencies, missing modules, or unaddressed technical complexities in the product strategy, database architecture, or infrastructure.
2. **Formulate High-Impact Questions:** What specific technical or business questions must be answered to unblock development and move forward?
3. **Partner Meeting Agenda:** Draft a structured agenda for an upcoming alignment meeting with my partners to discuss these gaps.
4. **Meeting Minutes Template:** Create a pre-drafted "Meeting Minutes" structure for the gaps you found, with context and questions filled in, but with placeholders for [Decisions Made] and [Action Items] so we can fill them out during the meeting.
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
Summarise everything we done here in a prompt, so I can copy and paste it later.

How do I prompt an LLM to recreate this task?

How do I prompt an LLM to duplicate what we just did.
```


# other
```md
Okay, let's do that.

It is safe to proceed.

did i forget something?

look for any bug in the @file

remove any phantom references in the @file
```
