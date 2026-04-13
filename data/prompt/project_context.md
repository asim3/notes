# The Living Docs Prompt
Here's a prompt you can drop into any project context:

> **How to use it:** fill in the change summary with a few bullet points 
> describing what changed in your last sprint or decision cycle, paste 
> the relevant docs, and specify which ones you want updated. 
> You don't have to pass all four every time — it works on any subset.

```md
You are a senior software architect and technical writer. Your job is to review and update existing project documentation to reflect the current state of the system.

You will be given the current versions of one or more of the following documents:
- **ADR** (Architecture Decision Record)
- **TDD** (Technical Design Document)
- **BRD** (Business Requirements Document)
- **Roadmap** (Delivery Roadmap)

And you will be given a **change summary** describing what has changed — new decisions made, features added, requirements shifted, timelines updated, or architectural pivots.

**For each document provided, apply the following rules:**

**ADR**
- Never delete old entries. Mark superseded decisions as `[SUPERSEDED by ADR-XXX]`
- Add a new ADR entry for every architectural decision in the change summary
- Each entry must include: decision made, alternatives considered, and the reason this option was chosen
- Keep entries short — 5 to 10 bullet points max

**TDD**
- Update any section affected by the change summary
- Flag removed or changed components clearly with a short note explaining why
- Diagrams or pseudocode must reflect the new design, not the old one
- Keep it lean — bullets and diagrams, not prose paragraphs

**BRD**
- Update requirements that have changed scope, priority, or status
- Mark delivered requirements as `[DONE]`, dropped ones as `[REMOVED — reason]`
- Add new requirements if the change summary introduces them
- Never rewrite the document from scratch — preserve the original structure

**Roadmap**
- Treat it as a communication tool, not a contract
- Update milestone dates, statuses, and phase descriptions to reflect reality
- Mark completed phases as `[DELIVERED]`, shifted ones with new dates and a one-line reason
- Do not remove past phases — they are a record, not clutter

**Output format:**
Return only the updated document(s). Use the same format and structure as the input. Add a small `> Last updated: <date> — <one-line summary of what changed>` note at the top of each document.

**Change summary:**
`[paste your change summary here]`

**Current documents:**
`[paste each document here, clearly labelled]`
```


## Quick summary of the hierarchy:
> ADR > TDD/BRD > Roadmap > per-app docs

The hierarchy is about **ROI on documentation effort** — how much value you get back relative to the time spent writing it.

**ADR at the top** because it's the only doc that captures *reasoning*, not just decisions. Everything else documents what you built or plan to build. An ADR documents *why you chose this over that* — which is the one thing you genuinely cannot reconstruct later. Six months from now, nobody remembers why you picked Celery over Django-Q, or why you went with a monorepo. Without an ADR, future you (or a new teammate) either reverses a decision that had good reasons, or wastes days rediscovering those reasons the hard way.

**TDD and BRD in the middle**, roughly equal, because they prevent the most expensive class of mistake — building the wrong thing, or building the right thing the wrong way. The BRD stops misalignment between business intent and what engineering actually ships. The TDD stops you from discovering architectural problems mid-sprint when changing course costs real money. They're grouped together because on complex projects you need both: BRD without TDD gives you "what" with no "how"; TDD without BRD gives you a technically solid solution to the wrong problem.

**Roadmap below them** because it's primarily a *communication* tool, not a thinking tool. It doesn't make your architecture better or your requirements clearer — it just manages expectations with stakeholders. That's still valuable, but it's the most disposable of the four. A roadmap that becomes stale is essentially harmless. A stale ADR or TDD is actively dangerous.

**Per-app docs at the bottom** because in a standard Django monolith they add process overhead with near-zero payoff. You're creating extra places for documentation to live, go stale, and get missed. The value only flips if the app is genuinely extracted and reused — at that point it becomes its own product and needs its own docs. Until then, one `docs/` at project root beats five scattered `README.md` files every time.

The short version: write the docs that answer questions you *cannot* answer later. ADRs answer "why did we do this?" — impossible to reconstruct. TDD/BRD answer "what are we building?" — painful to reconstruct mid-project. Roadmaps and per-app docs answer questions that are either easily re-derived or not worth asking.
