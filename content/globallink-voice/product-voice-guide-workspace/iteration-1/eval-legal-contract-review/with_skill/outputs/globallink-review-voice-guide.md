# GlobalLink Review — Voice & Tone Guide

**Version 1.0** | Product: GlobalLink Review
**Extends**: Compass Master Guide v2.1
**Created**: 2026-05-22 | **Next review**: 2026-08-22
**Product owner**: [PM name or role] | **Content owner**: [Design lead name or role]

---

## 1. Product context

GlobalLink Review is a contract review workflow platform for legal teams. It helps legal operations managers route contracts to the right reviewers, track approval progress, and maintain a complete, searchable audit trail. Users are legal professionals working on contracts that carry real financial and legal consequences.

| | |
|---|---|
| **Stakes** | High — contracts have direct financial and legal consequences; missed deadlines or lost records can expose clients to liability |
| **Industry** | Legal |
| **Registers** | Legal Operations Manager (A), Contract Reviewer (B), Compliance Auditor (C) |

**North star**: Users feel in complete control of every contract's status, ownership, and history — with no ambiguity about what has happened, who is responsible, and what needs to happen next.

**Highest-stakes moments**:
1. A contract is stuck in review and a deadline is approaching — time is running out and the right person must act immediately
2. A reviewer misses their approval window — the workflow is blocked and the consequences may be contractual or financial
3. An auditor cannot locate a record they need — a compliance review or legal dispute is on the line and the evidence must be surfaced quickly

---

## 2. Registers

### Register A — Legal Operations Manager

| | |
|---|---|
| **Profile** | Legal operations professional responsible for configuring workflows, assigning reviewers, setting deadlines, and ensuring contracts move through review on time. Domain expert. Accountable for workflow outcomes and compliance posture. |
| **Context** | Primarily desktop, working across multiple active contracts simultaneously. Often managing competing deadlines. Checks the platform throughout the day; acts on blockers quickly when alerted. |
| **North star** | "Every workflow I own is visible, auditable, and under control — I can see exactly where anything is and act on it immediately." |

**Tone markers**: 1. Direct and precise 2. Authoritative without condescension 3. Efficient — no filler 4. Transparent about status and ownership 5. Action-oriented at every point of friction

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 8/10 | Legal domain; stakes are high; informality reads as unprofessional to this user |
| Formal ↔ Casual | 8/10 | Legal calibration floor; this user expects formal, precise language |
| Concise ↔ Detailed | 5/10 | Slightly above default — errors and status messages need enough context to act on, but no excess |
| Respectful ↔ Irreverent | 5/10 | Maximally respectful; this user is accountable and expects to be treated as the expert they are |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error | "Workflow could not be saved. One or more required fields are incomplete. Check the reviewer assignments and deadline fields, then save again." | Names exactly what failed and where to look. No blame, no vague apology. Gives a concrete next step. |
| Success | "Workflow created. Contract routed to 3 reviewers. Deadline: 28 May 2026." | Confirms the specific action and surfaces the key facts the manager needs to verify — routing and deadline. |
| Empty state | "No active workflows. Create a workflow to route a contract to reviewers and begin tracking approvals." | States what the space is for and gives a direct first action. No filler, no reassurance. |
| CTA | "Create workflow" | Verb-first, matches the outcome exactly, no embellishment. |
| Notification | "Contract #2847 is overdue. The deadline passed 2 hours ago. Reassign or extend the deadline to unblock the review." | Leads with the specific contract and what happened. Gives two concrete options immediately. |
| Destructive action | "Delete this workflow? All review history and audit records for this workflow will be permanently deleted. This cannot be undone. Delete workflow" | Names the exact consequence (all history and audit records). Button label matches the action, not a generic "Confirm". |
| Onboarding | "Set up your first workflow. Assign reviewers, set a deadline, and route a contract for review — all from this screen. Your audit trail starts automatically when the first reviewer opens the contract." | Frames around what the manager achieves. Mentions the audit trail because that is a core differentiator for this user. One concept per sentence. |

---

### Register B — Contract Reviewer

| | |
|---|---|
| **Profile** | Lawyer or paralegal assigned to review and approve specific contracts. Expert in their review domain, but not responsible for workflow configuration. Has limited visibility into the broader workflow; can only act on what has been assigned to them. |
| **Context** | Desktop, task-focused. Opens the platform when notified of a review assignment or a deadline reminder. May be managing review tasks across multiple platforms. Does not administer the system and cannot fix workflow issues themselves — they need a clear escalation path when something is wrong. |
| **North star** | "I know exactly what I need to review, when it is due, and what happens after I approve — I can complete my work without ambiguity or interruption." |

**Tone markers**: 1. Clear and direct 2. Professionally warm — not cold, not casual 3. One clear action at a time 4. Transparent about deadlines and consequences 5. Always provides an escalation path when action is blocked

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 8/10 | High-stakes legal work; same seriousness as Register A |
| Formal ↔ Casual | 7/10 | Slightly less formal than the operator — this user is doing assigned work, not administering a system; a touch of directness without coldness is appropriate |
| Concise ↔ Detailed | 4/10 | Default — one sentence of context is acceptable when it helps the reviewer act; never pad |
| Respectful ↔ Irreverent | 5/10 | Maximally respectful; this user is a legal professional with significant expertise |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error | "Your approval could not be submitted. The contract has been modified since you last opened it. Reload the contract and review the changes before submitting your approval." | Explains why the submission failed (a modified contract) and gives a specific next step. No blame. |
| Success | "Approval submitted. The workflow has been updated and the next reviewer has been notified." | Confirms the action and tells the reviewer what happens next — removing uncertainty about whether their task is complete. |
| Empty state | "No contracts assigned for review. Your assigned contracts will appear here when they are routed to you. Contact your legal operations manager if you are expecting an assignment." | Explains why the screen is empty and provides an escalation path. Does not leave the reviewer stranded. |
| CTA | "Submit approval" | Verb-first, specific to the outcome, matches the weight of the legal action. |
| Notification | "Review due: NDA-2026-0441. Deadline: tomorrow at 17:00. Open contract" | Leads with the deadline and contract identity — the two things the reviewer needs immediately. Includes a direct link to act. |
| Destructive action | "Reject this contract? The contract will be returned to the routing manager with your comments. This action is recorded in the audit trail. Reject contract" | Names the consequence (returned to manager, recorded in audit). The reviewer needs to know the action is permanent and visible. |

---

### Register C — Compliance Auditor

| | |
|---|---|
| **Profile** | Internal or external auditor checking that review workflows were followed correctly — correct reviewers assigned, approvals obtained, deadlines met, records complete. Works from the audit trail. High accountability; their findings can have regulatory or legal consequences. |
| **Context** | Desktop, typically performing a focused review during a compliance audit, legal dispute, or internal investigation. Does not participate in the workflow itself. Needs to retrieve specific records quickly and trust that what they see is complete and accurate. |
| **North star** | "Every record I need is here, complete, and trustworthy — I can produce evidence without uncertainty about what happened or whether something is missing." |

**Tone markers**: 1. Precise and factual 2. No ambiguity about completeness or accuracy 3. Direct — no reassurance, no softening 4. Surfaces the information that matters for compliance 5. Never hides gaps or errors

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 8/10 | Audit context is maximally serious |
| Formal ↔ Casual | 8/10 | Full legal formality; this user is producing or reviewing legal evidence |
| Concise ↔ Detailed | 6/10 | Audit records need enough detail to be legally sufficient; completeness matters more than brevity here |
| Respectful ↔ Irreverent | 5/10 | Maximally respectful; the auditor is the highest-accountability user in the system |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error | "Audit record could not be exported. The date range you selected contains records that are still pending finalisation. Adjust the date range or wait until all reviews in this period are complete, then export again." | Explains exactly why the export failed and gives two options. No vague error. |
| Success | "Audit report exported. 47 records included. Date range: 1 January 2026 – 31 March 2026. Downloaded to your default folder." | Confirms the count and date range so the auditor can immediately verify the export covers what they need. |
| Empty state | "No audit records match your search. Adjust the filters or confirm the date range with the legal operations manager responsible for this workflow period." | States that nothing was found and provides an escalation path. Does not suggest the records do not exist — they may be filtered out. |
| CTA | "Export audit report" | Specific, accurate label. Matches the legal weight of the action. |
| Notification | "Workflow #1093 has a missing approval record. One reviewer did not complete their approval before the workflow was closed. View affected record" | Surfaces the specific gap and names the consequence. The auditor needs to know immediately if a record is incomplete. |
| Destructive action | n/a — auditors have read-only access to audit records by design | Destructive actions are not applicable in this register; the audit trail is immutable. |
| Onboarding | "Your audit view shows the complete history of every workflow — reviewer assignments, approval timestamps, deadline changes, and any escalations. Use the filters to search by contract, reviewer, date range, or workflow status." | Explains what is available and how to navigate it. Frames around what the auditor can find, not what the product does. |

---

## 3. Terminology

| Concept | Use | Never use | Why |
|---|---|---|---|
| The document under review | "Contract" | "Document", "file", "item" | Legal teams use "contract" consistently; generic terms reduce precision and can cause confusion in audit records |
| The sequence of review steps | "Workflow" | "Process", "flow", "pipeline" | "Workflow" is the established product term; "pipeline" is borrowed from software and is unfamiliar to legal users; "process" is too vague |
| A person assigned to review a contract | "Reviewer" | "Approver", "assignee", "user" | "Reviewer" reflects the role accurately; "approver" implies the outcome rather than the role and should only be used when referring to the approval action itself |
| The act of completing a review with a positive decision | "Approve" | "Sign off", "confirm", "accept" | "Approve" is the legal standard term; "sign off" is informal and does not translate well; "accept" implies acceptance of terms rather than completion of a review |
| The act of completing a review with a negative decision | "Reject" | "Decline", "send back", "flag" | "Reject" is precise and matches legal usage; "decline" is ambiguous; "send back" is informal and non-translatable |
| The record of all actions taken in a workflow | "Audit trail" | "History", "log", "activity feed" | "Audit trail" is the correct legal and compliance term; "history" is informal; "log" is a technical term that may confuse legal users |
| A point in the workflow where no action has been taken for longer than the expected window | "Overdue" | "Late", "delayed", "stuck" | "Overdue" is precise and unambiguous in legal contexts; "delayed" implies external causation; "stuck" is informal |
| The person configuring and managing workflows | "Legal operations manager" (full), "workflow manager" (in-product context) | "Admin", "administrator", "ops" | "Admin" is too generic; "legal operations manager" reflects the actual role title used by GlobalLink's target customers |
| A date by which a review must be completed | "Deadline" | "Due date", "target date", "SLA" | "Deadline" is the term legal professionals use; "due date" is more casual; "SLA" is internal jargon that does not belong in user-facing copy |

---

## 4. Key patterns

### Deadline-critical status messages

When a contract review deadline is approaching or has passed, the copy must make the time pressure explicit without being alarmist. Legal operations managers need facts, not urgency theater.

**Structure**: What is at risk (contract + deadline) → How much time remains → What action resolves it

**Example** (approaching deadline):
"Contract #2847 review is due in 4 hours. Sarah Chen has not yet submitted their approval. Reassign or send a reminder."

**Example** (passed deadline):
"Contract #2847 review deadline passed 2 hours ago. No approval on record. Reassign the review or extend the deadline to continue the workflow."

---

### Blocked workflow notifications

When a workflow is blocked — a reviewer missed their window, an approval is absent, or a required step was skipped — copy must name the specific blocker and give the operations manager an immediate resolution path. Never use a generic "workflow blocked" message.

**Structure**: Which workflow is blocked → What specifically caused the block → Two resolution options (when both exist)

**Example**:
"Workflow #1093 is blocked. Reviewer J. Martinez did not complete their approval before the deadline. Reassign to another reviewer or extend the deadline to continue."

---

### Audit trail gaps

When the system detects a gap in the audit record — a missing approval, a skipped step, or a record that cannot be verified — the copy must surface this clearly to auditors. The system must not suggest records are complete when they are not.

**Structure**: What record or step is missing → Which workflow and reviewer it affects → What the auditor should do to resolve or escalate

**Example**:
"Approval record missing. Workflow #1093, reviewer J. Martinez. The review window closed without a recorded approval or rejection. Contact the legal operations manager to investigate."

---

### Immutable audit trail messaging

When an auditor or reviewer asks to edit, delete, or modify a record in the audit trail, copy must explain that the audit trail is immutable — without making this feel like an error or a system failure.

**Structure**: Name what they attempted → Explain why it is not possible → Offer the appropriate alternative action

**Example**:
"Audit records cannot be edited. The audit trail is a permanent, unmodified record of all actions taken in GlobalLink Review. If you believe a record is incorrect, contact your legal operations manager to file a correction request."

---

## 5. Cross-references

- **Voice attributes, tone spectrum, core principles**: Compass Master Guide §2 (Voice & tone) and §4 (Style & usage)
- **Accessibility & inclusion** (gender-neutral language, alt text, anti-racist language): Compass Master Guide §3
- **Style & usage** (capitalisation, punctuation, product naming, emoji, "please"): Compass Master Guide §4
- **Scenario patterns** (errors, success, onboarding, destructive actions): Compass Master Guide §6 (Talking to users)
- **UI element patterns** (CTAs, confirmations, fields, tooltips, consent): Compass Master Guide §7 (Product & UI)
- **AI features** (if this product uses AI-generated content): Compass Master Guide §9
- **Email copy** (if this product sends transactional or operational emails): Compass Master Guide §10
- **Translatability**: Compass Master Guide §8

---

## 6. Review & maintenance

**Review cadence**: Quarterly
**Next review**: 2026-08-22
**Last updated**: 2026-05-22

Update this guide when:
- A new user type or major feature is added
- The product moves into a new industry vertical
- The Compass master guide updates a rule this guide inherits
- The quarterly review flags inconsistencies with shipped copy
- New highest-stakes scenarios are identified through user research or support escalations

---

*Built using the [Compass Product Voice Workbook](../COMPASS_PRODUCT_VOICE_WORKBOOK.md). Extends [Compass Voice & Tone v2.1](../COMPASS_VOICE_AND_TONE.md).*
