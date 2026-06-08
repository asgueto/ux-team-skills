---
name: spec-ideation
description: Structured framework for working with AI to generate thoughtful solutions through expansion, contraction, and documentation phases. Use when users need to develop ideas, make decisions, or create specifications for design, development, research, or any domain requiring structured thinking. Triggers include requests to ideate, plan, specify, or work through complex problems.
---
 
**Version:** 1.0.0 | **Author:** TechOps Design Team
**Last Updated:** 2026-05-18
 
# Spec Ideation Framework
 
A structured process for working with AI to transform vague ideas into clear, documented specifications through conscious decision-making.
 
## Core Concept
 
**Spec Design vs Vibe Design:**
- **Vibe Design**: Asking AI for massive unstructured ideas → results in paralysis and lack of control
- **Spec Design**: Structuring the problem before asking, documenting after → results in specific solutions and clear decisions
The framework is **domain-agnostic** (works for research, development, design, data analysis) and **tool-agnostic** (works in any AI interface).
 
## The Three-Phase Process
 
### Phase 1: Expansion
 
**Goal**: Discover what you don't know you don't know.
 
**How it works:**
1. Start with **what you have + what you're trying to solve**:
   - The specs, brief, or problem description (in whatever form you have it)
   - The intent: what goal or problem are you solving?
   - Who it's for (if known)
2. AI expands: suggests components, edge cases, implications, alternatives
3. You receive information you hadn't considered
4. Your understanding of the problem grows

**Minimal starting point:**
- What do you know about the problem? (specs, brief, user story, or just a description)
- What are you trying to accomplish? (the goal/intent/problem)
- Who is this for? (optional, but helpful)

**When to use:**
- There are unanswered questions
- AI suggests things you don't understand
- You're unsure if your initial approach is correct

**Example interaction:**
```
User: "We need to normalize contact data from spreadsheets. Separate first/last names, apply title case"
Claude: "What about compound names? Prefixes? Accents? Duplicate entries? How will this integrate with our systems?"
User: "I hadn't considered those"
```
 
### Phase 2: Contraction (The Iterative Loop)
 
**Goal**: Make conscious decisions, not magical ones.
 
**How it works** (non-linear loop):
1. **Ask for clarity** - "Why this architecture vs that one?" → Understand better
2. **Expand requirements** - Include new constraints, define additional context → Scope refines
3. **Identify edge cases** - Ask "what if...?" → More robust decisions
4. **AI clarifies** - Reformulates, defends, or questions your assumptions → New knowledge
5. **Return to step 1** - Answers generate new questions until sufficient clarity
**Signs you're in contraction:**
- Asking specific questions, not general ones
- AI makes you think differently
- Discovering missing information
- Scope is refining, not expanding
**When you need more contraction:**
- Decisions still unmade
- Unsure why to choose X over Y
- Trade-offs not considered
**Example loop:**
```
User: "I need a CLI tool to normalize contacts"
Claude: "CLI vs web? Different implications"
User: "What are they?"
Claude: "CLI more portable, web more accessible for non-technical users"
User: "That changes everything. I need web then"
Claude: "Then you'll need these components..."
(Loop continues)
```
 
### Phase 3: Documentation
 
**Goal**: Transform conversation into action.
 
**When to document:**
When you have sufficient clarity (a "feel", not a checklist):
- Covered most use cases
- Identified main trade-offs
- Decisions have justification
- Scope is closed
**What to document:**
Artifacts that emerge are **thought synthesis**, not templates:
 
1. **Product Brief** - What, why, for whom (synthesis of expansion + contraction)
2. **Roadmap** - Phases, priorities, dependencies (reflects decisions made)
3. **Implementation Plan** - Architecture, components, technical details (specific because conscious)
**Important**: Documentation is **living**, not frozen:
- Version changes (changelog)
- Record decisions during implementation
- Adjust if context changes
- Serves as reference for why each decision was made
## How to Start: Input Formats

Your team uses different formats depending on the PM. All are valid starting points. Pick whatever works for you.

### User Stories
**Format**: "As [role], I need [action], to [benefit]"
**Example**: "As a product manager, I need to track feature requests from multiple sources, to prioritize what to build"
**Use**: Helpful for clarity, but not required. If you have it, use it.

### Specs/Brief
**Format**: Written description of requirements, constraints, context
**Example**: "Build a dashboard showing user engagement metrics. Show last 30 days. Real-time updates. Works on mobile."
**Use**: What most of your team brings. Claude works with this directly.

### Problem Statement
**Format**: "We need to [solve X]" or "The problem is [Y]"
**Example**: "We need to reduce onboarding time for new users from 2 hours to 30 minutes"
**Use**: If you don't have specs yet, start here. Claude helps you flesh it out.

### Structured Requirement (Optional)
**Format**: Breaking down the problem into context, condition, and outcome:
- **Given** [context/background]
- **When** [action/event]
- **Then** [expected result/goal]

**Example**:
- **Given**: New users don't know where to start
- **When**: They log in for the first time
- **Then**: We want them to complete 3 key setup steps in under 5 minutes

**Use**: If you want to be more structured in describing the requirement, this format helps Claude understand all the angles.

### Custom Instructions
**Concept**: Your team's priorities that you control
**Example**: "When suggesting solutions, prioritize: simplicity first, then scalability. Avoid over-engineering."
**Use in framework**: Give Claude context on what matters to your team so suggestions are aligned
 
## Clarity Metrics
 
**Positive signals (ready to document):**
- Can explain decisions without doubts
- Considered at least 2 alternatives
- Identified main trade-offs
- Scope is defined (what's in, what's out)
- No unanswered questions
**Negative signals (need more contraction):**
- Still doubting between options
- Can't justify why this choice
- Don't understand a trade-off
- Vague scope
- New questions constantly arising
## Claude's Role in Each Phase
 
### During Expansion
- Sparring partner that broadens perspective
- Suggests what you didn't see
- Asks uncomfortable questions
- Brings external context
### During Contraction
- Trade-off clarifier
- Explains why one option vs another
- Identifies implications
- Questions your assumptions
### During Documentation
- Synthesizer
- Organizes thinking into artifacts
- Verifies coherence
- Generates variants if needed
### During Execution
- Validated executor
- Implements according to specification
- You validate output
- Adjust as needed
**Key point**: In each phase, YOU decide. AI expands information. You process it with criteria.
 
## Antipatterns to Avoid
 
1. **Expansion without Contraction** - Infinite ideas, never deciding → paralysis
2. **Contraction without Expansion** - Quick decisions without questioning → mediocre solutions
3. **Documentation without Process** - Documents without thought → empty artifacts
4. **Confusing Tool with Framework** - Thinking Lovable/Cursor = the framework → tool dependency
5. **Accepting Hidden Subprompts** - Not questioning how the tool modifies responses → lack of control
## Working Instructions for Claude
 
When a user engages this skill:
 
1. **Identify the current phase** based on their request:
   - Starting a new idea? → Expansion
   - Refining understanding? → Contraction
   - Ready to document? → Documentation

2. **At the start, get clarity on:**
   - What information do they have? (specs, brief, user story, problem statement — any format)
   - What are they trying to accomplish? (the goal/intent/problem)
   - Who is it for? (optional but helpful)
   - Don't expect perfect structure — accept what they bring

3. **During Expansion:**
   - Ask probing questions about aspects they haven't considered
   - Suggest components, implications, alternatives, edge cases
   - Identify gaps in their thinking
   - If the problem is vague, ask clarifying questions to understand the intent

4. **During Contraction:**
   - Present trade-offs clearly
   - Explain WHY, not just WHAT
   - Question assumptions (theirs and yours)
   - Identify edge cases and implications
   - Help refine scope through iterative questioning
   - Signal when they might need more expansion

5. **During Documentation:**
   - Only proceed when user shows signs of sufficient clarity
   - Structure artifacts that reflect the decisions made
   - Include justifications for choices
   - Make trade-offs explicit
   - Suggest next steps or validation approaches

6. **Throughout all phases:**
   - Be direct but thoughtful
   - Avoid list-heavy responses unless specifically requested
   - Use prose with natural language lists ("things include: x, y, and z")
   - Make decisions transparent and questionable
   - Remember: you amplify their thinking, you don't replace it
For detailed examples and domain-specific applications, see [EXAMPLES.md](references/EXAMPLES.md)
