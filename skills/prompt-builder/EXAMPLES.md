# Prompt Builder — Examples & References

**Version:** 2.0.0 | Examples, do/don't pairs, and art direction anatomy for the enhanced Prompt Builder skill.

---

## Quick Index

1. **Design Prompt Examples** — Real examples across artifact types
2. **Research Prompt Examples** — Screeners, discussion guides, synthesis
3. **Do/Don't Pairs** — By component (Object, Style, Context, Constraints)
4. **Art Direction Anatomy** — How to extract visual language from products
5. **Visual Vocabulary Examples** — Specific language for color, typography, spacing, motion
6. **Researcher Credibility Checklist** — What makes research prompts trustworthy

---

## DESIGN PROMPT EXAMPLES

### Example 1: B2B SaaS Dashboard

**Product References cited by designer:**
- Linear (organization and hierarchy)
- Figma (confidence-inspiring details)
- Stripe Dashboard (data presentation, subtle motion)

**Complete Prompt:**

```
OBJECT
Generate a control panel dashboard for engineering team leads showing:
- Active sprint progress: completed tasks, in-progress, blocked, with status color coding
- Team health metrics: cycle time trend, deployment frequency, bug escape rate (last 7/14/30 days)
- Incidents and alerts: unresolved incidents by severity, on-call rotation status, alert rules currently triggered
- Quick actions: start a standup, trigger a deployment, resolve an incident (modal, 2–3 clicks)
- All in a single viewport without horizontal scrolling on 27" monitors at 1440px

STYLE

**Feeling:** Trustworthy command center. Like stepping into Linear's planning page — calm, organized, nothing surprising. Users should feel in control but not overwhelmed by data.

**Experience:** When a team lead lands on the dashboard after a 2-day absence, they glance left-to-right top-to-bottom and instantly know: are we on track, is anyone blocked, did anything break? Then they take one action (resolve an incident, kick off a standup). They feel informed and decisive.

**Emotional Beats:**
- Landing state (first glance): clarity and confidence — "I know what's happening"
- Healthy state (good metrics): subtle green accent, no drama
- Alert state (something's wrong): color rises, but not alarming — more "needs attention" than "panic"

**Language:**
- Linear's organizational language meets Stripe's restraint
- Spare, intentional. Open space between sections. Type is confident but not bold
- Color: primary brand color (blue or teal), grays for neutrals, red only for severity
- Interaction: smooth but not playful. When a modal opens or a section expands, it slides in with a 200ms ease-out

**Color:** 
- Primary palette: 1 brand blue, grays from light to dark (6 shades), red for critical only
- No more than 3 colors in the main view at rest
- Reference: Stripe's blue + Linear's gray restraint

**Typography:**
- Headings: bold, larger (16px+), white-space dominant
- Body/metrics: regular weight, breathing room between lines
- No more than 2 font sizes for the main data area; labels get their own smaller scale

**Spacing & Density:**
- Generous margins (24px–32px) between major sections
- Internal density (within a card): tight but not cramped, 12px–16px gutters
- Whitespace is a feature, not an absence of content

**Motion:**
- Section expansions: 200ms ease-out (smooth, not playful)
- Color transitions (alert states): 300ms smooth fade
- No bounces, no springs — confidence over delight
- Loading states: linear progress bar, no skeleton screens (data loads fast or we've failed)

CONTEXT
Engineering team leads (5–20 people per team) at mid-stage SaaS startups (20–200 engineers total). They check this dashboard during standup prep, after deployments, and when triaging incidents. They're context-switching from Slack, email, Jira. They need to scan in <30 seconds and drill into one metric if needed. They're familiar with dashboards but hate "dashboard bloat" — they've seen too many Datadog-style walls of data that teach you nothing.

CONSTRAINTS
- Must work on 27" monitors (1440px viewport) — no horizontal scrolling under any conditions
- Must render in <1 second on a 4G connection (data is pre-calculated server-side, not computed client)
- No custom charts — use bars, lines, simple numbers only
- Do not include: predictive features, AI-generated insights, anomaly detection (ship the basics first)
- Align with design system [name]: use component library buttons, modals, color tokens only
- Data accuracy is non-negotiable: show "last updated at" timestamp, never estimate or cache stale data
```

---

### Example 2: Mobile Onboarding Flow

**Product References:**
- Headspace (progressive disclosure, calm progression)
- Duolingo (playfulness without distraction)

**Complete Prompt:**

```
OBJECT
Generate a 5-screen mobile onboarding sequence for a new meditation app user. Screens in order:
1. Hero (what is this?) with 1 CTA to continue
2. Permission request (location? notifications? nope, just the ask)
3. User intent (what brought you here? stress relief, better sleep, focus, spiritual?)
4. Preference (how much time can you commit? 5/10/15 min daily?)
5. First guided session offer (invite to a 5-min intro session or browse catalog)
Each screen max 30 words of copy.

STYLE

**Feeling:** Calm and welcoming. Like opening Headspace's app on a Sunday morning — quiet, no pressure, everything takes time. The user should feel they're in a sanctuary, not a pitch.

**Experience:** New user taps the app, sees a beautiful image (not a screenshot of features), reads one question, answers it, moves to the next. They never feel rushed. On the final screen, they feel ready to try a session, not sold on upgrading.

**Emotional Beats:**
- Screen 1 (hero): curiosity — "OK what's this?"
- Screen 3 (intent): validation — "I came here for exactly this"
- Screen 5 (action): readiness — "I'm ready to try this"

**Language:**
- Warm, first-person language (Duolingo style): "What brings you to Meditation?"
- Headspace's pacing: calm, generous, never urgent
- No marketing language, no benefit statements on these screens
- Tone: like a friend asking, not a guide explaining

**Color:**
- Soft, cool palette: off-white background, sage green, lavender, slate blue accents
- High contrast CTA button (one color throughout all 5 screens)
- Avoid: bright gradients, neon, saturation

**Typography:**
- Questions: warm serif or friendly sans (18px, calm breathing room)
- Body: lighter, supporting (14px, high line-height 1.6)
- No more than 2 type styles across all screens

**Spacing & Density:**
- Abundant vertical space (image takes 50%, content 40%, CTA 10%)
- Horizontal padding: generous (32px gutters minimum)
- Breathing room between question and CTA

**Motion:**
- Screen transitions: fade + subtle upward movement (200ms ease-out)
- CTA button on tap: scale-down micro-interaction, no bounce
- Input transitions (selecting an option): color fade, no flash

CONTEXT
First-time meditation app users, ages 25–45, on iOS/Android. Opening the app for the first time after downloading (usually a weekend afternoon or evening). They've never used a meditation app before and are slightly skeptical. They're checking if this is "for them."

CONSTRAINTS
- No permissions modals until at least Screen 2 (let them see value first)
- Keep copy to 30 words per screen maximum (force clarity)
- All images must be illustrations or real photos, never screenshots of other screens
- CTA text is always a question or action, never a tagline ("Continue" or "Let's go" not "Start your journey")
- Do not ask: email, phone, name, age, demographics (defer to post-onboarding)
- Validation of the user's answer should be immediate — no loading states
- Accessibility: all contrast ratios AA minimum, buttons minimum 48px touch target
```

---

### Example 3: Design System Component Prompt

**Product References:**
- Radix UI (clarity, accessibility-first)
- Figma's component library (documentation clarity)

**Complete Prompt:**

```
OBJECT
Generate a checkbox component for our React component library with:
- Unchecked, checked, mixed (indeterminate), disabled (all 4 states), and focus/hover for each
- Accessible: ARIA labels, keyboard navigation (space to toggle), screen reader announces state
- Props: label (optional), disabled (boolean), onChange callback, size (sm/md/lg), color (primary/secondary/neutral)
- Label can be inline or stacked above
- Indeterminate state required for "select all in group" patterns

STYLE

**Visual Approach:** Radix UI's restraint with Figma's documentation precision. The component itself should be invisible when it's working correctly — the user notices the checkbox only when they interact with it or when something's wrong (focus state is clear, disabled state is unmistakable).

**Implementation Language:**
- Input component: 16px square, transparent background, 2px border (neutral color, no fill)
- Checked state: filled with brand color, white checkmark (SVG)
- Focus state: 2px outer ring (brand color, offset by 2px)
- Hover (when interactive): border color lifts to brand color
- Disabled: 40% opacity, cursor not-allowed
- Motion: checked/unchecked transition is 100ms ease-out, no bounce

**Typography:** Label uses body type system. If label is present, 8px horizontal spacing between checkbox and label text. Label inherits product's default body size and weight.

**Spacing:** 8px padding around the interactive hit zone (checkbox + label combined = min 44px height for accessibility)

CONTEXT
React component library for a B2B SaaS product. Designers and developers in the product team will build on this. Component should work in forms (multi-select), tables (select rows), and settings. Should feel native to both web and Figma component library.

CONSTRAINTS
- Must be keyboard accessible: Tab focuses, Space toggles, Escape unfocuses
- WAI-ARIA compliant: aria-checked, aria-label, aria-describedby
- No color beyond the design system (use CSS variables, not hardcoded hex)
- SVG checkmark must be properly sized (no scaling artifacts)
- Must render correctly in light and dark modes (design system already has color tokens)
- Documentation must include: accessibility notes, keyboard shortcuts, 4 usage patterns (form field, table select, settings, group select), do/don't visual examples
- No animation libraries — CSS transitions only
- Backward compatibility: must not break existing uses of the old checkbox
```

---

## RESEARCH PROMPT EXAMPLES

### Example 1: User Research Screener

**Research Goal:** Identify power users of the onboarding feature to understand what's working and what's confusing.

**Complete Prompt:**

```
OBJECT
Create a 10-question pre-screening survey to identify power users of our product's onboarding feature. We want participants who:
- Have completed onboarding in the last 60 days (fresh enough to remember friction)
- Have used the product at least 3 times post-onboarding (took it seriously)
- Are willing to do a 45-minute recorded interview

Output: 10 questions, pass/fail scoring logic, estimated 3-minute completion time.

METHODOLOGY

**Type & Structure:** Short online screener survey (7 qualifying questions + 3 demographic/availability questions). Pass/fail scoring: must score 6+ of 10 to qualify.

**Participant Profile:** Users who self-identify as "made it past the initial setup" but may not be power users yet. Ranging from tech-savvy to less technical. We expect a mix of industries (B2B SaaS, productivity, design tools).

**Sampling:** Run the screener via email to all users who logged in within the last 30 days. Target: 100 responses, filter for 8–12 interviews.

**Tone & Language:** Conversational, never leading. Avoid jargon. Phrase questions so they elicit honest answers, not "helpful" answers. Example: "What was the one thing about onboarding that confused you?" not "Our onboarding is pretty clear, right?"

**Research Constraints:**
- No leading questions (cannot imply "the product is confusing" or "onboarding is great")
- Questions must be answerable in 2–3 minutes total
- Do not ask: company size, role (save for interview), personal data beyond "have you used it?"
- All questions must have a clear pass/fail logic
- Language must be accessible (9th grade reading level max)
- Do not mention: roadmap, planned changes, competitor names

CONTEXT
We just launched a new onboarding flow. We want to understand where people get stuck, what's helpful, and what's boring. We're not validating "is this good?" — we're hunting for specific friction points to iterate on. Interviews will inform the next iteration in 3 weeks.

CONSTRAINTS
- Screener must take <3 minutes to complete
- Questions cannot be modified post-launch (no mid-stream changes)
- Must respect user privacy (no behavioral tracking, no third-party tools)
- Must be mobile-friendly (assume 60% will answer on mobile)
- Consent language must comply with our privacy policy
- Cannot ask about feature requests or product suggestions in the screener (save for interview)
```

---

### Example 2: Discussion Guide for 1:1 Research Interviews

**Research Goal:** Understand feature adoption barriers in power users of analytics dashboards.

**Complete Prompt:**

```
OBJECT
Write a discussion guide for 45-minute 1:1 interviews with 8–10 power users of our analytics dashboard. Goal: understand why some metrics are used heavily and others are ignored, what workflows are missing, and where they rely on workarounds.

Structure: 15 min context, 20 min current workflows, 10 min unmet needs.

METHODOLOGY

**Type & Structure:** Semi-structured interview guide with 5–7 main questions, space for follow-ups and tangents. Designed for 45-minute Zoom calls with users in their own office (no lab). We'll record audio and take light notes.

**Participant Profile:** 8–10 users who've been active on the dashboard for 3+ months, use it at least 3x/week, and have custom dashboards or reports. Mix of roles: operators, analysts, one product manager.

**Sampling:** Recruited from our research panel of willing customers. Incentive: $50 gift card.

**Tone & Language:** Collaborative, curious, not evaluative. We're learning from them, not testing them. Phrase questions to invite storytelling: "Walk me through your typical Tuesday morning with the dashboard. What's the first thing you look at?" rather than "Do you find the dashboard easy to use?"

**Research Constraints:**
- No script — conversation should feel natural, not read from a document
- No leading questions (cannot say "X metric is hard to find" or "Y feature is broken")
- Follow the participant's lead — if they go deep on a topic, stay there rather than checking off all your questions
- Do not ask for feature requests (listen for them, don't ask)
- Do not show mockups or share product roadmap information
- If participant discloses a bug, note it but don't promise a fix

CONTEXT
Analytics adoption is stalling. 60% of users only look at 3 metrics habitually and ignore the other 15. We want to understand if it's discoverability, trust, or irrelevance. Insights will inform our metrics redesign in Q3.

CONSTRAINTS
- Interview must fit in 45 minutes (respect their time)
- Recording consent must be obtained at the start (script provided)
- Guide should have 5–7 main discussion areas, not 20 questions (quality over breadth)
- Do not use the word "metrics" — use "numbers," "reports," "dashboards" (language they actually use)
- Avoid jargon: "cohort analysis," "funnel," "attribution" — ask for clarification if the participant uses these terms
- Must not disclose: roadmap, planned features, competitor features, internal goals (e.g., "we want to increase adoption to 75%")
- Follow-up questions should be open-ended: "Tell me more about that" not "So that was frustrating, right?"
```

---

### Example 3: Synthesis Report Prompt

**Research Goal:** Summarize 12 interview transcripts into findings about customer support workflows.

**Complete Prompt:**

```
OBJECT
Synthesize findings from 12 support team interviews (3 customer support leaders, 4 support reps, 5 customer success managers) into a 5-page report identifying:
- Current support workflows (what actually happens vs. what's documented)
- Top 3 pain points across the team (blockers, workarounds, time sinks)
- Top 3 unmet needs (requests that came up unprompted)
- Recommended research priorities for next phase

Output: Executive summary (1 page), Findings (3 pages with 2–3 quotes per finding), Recommendations (1 page).

METHODOLOGY

**Type & Structure:** Research synthesis report, narrative-driven with supporting quotes. Each finding should be grounded in at least 3 participant mentions (show that it's real, not an outlier). Findings are organized by theme, not by person.

**Source Material:** 12 interview transcripts (45–60 min each), some with rough notes on key moments. Transcripts are complete recordings; not all are word-for-word transcribed (some are summary notes + key quotes).

**Tone & Language:** Professional but accessible. Findings should be written for product and leadership audiences who haven't read the transcripts. Use direct quotes strategically to illustrate a point, not just to fill space. Recommend next research (e.g., "We should validate this finding with customer support users at 2+ larger firms") rather than product decisions.

**Research Constraints:**
- Maintain participant anonymity (no names, no company names, no specific customer mentions)
- Do not extrapolate beyond what participants said (note open questions for future research)
- Do not recommend features or product changes (describe problems, let the product team recommend solutions)
- Each finding should be grounded in at least 2–3 independent mentions (outliers go in "other considerations" section)
- Do not overweight any single participant's experience (if one person had a unique problem, flag it as such)
- Do not include recommendations that rely on assumptions outside the research scope

CONTEXT
We recently launched a new support ticketing integration. Early feedback suggests it's solving some problems but creating new ones. This research will inform whether we iterate on the integration, pivot to a different approach, or double down. Results will be shared with the support team, product, and leadership in a meeting.

CONSTRAINTS
- Report must be 5 pages (1000–1200 words)
- Executive summary must be skimmable (key findings in bullets, <200 words)
- Each finding must have at least 1 supporting quote (unless it's not quotable — then explain why)
- Do not include participant lists, demographic breakdowns, or methodology details (assume readers trust the process)
- Recommendations should be framed as research priorities, not product roadmap items
- Tone: honest about limitations (e.g., "We didn't interview enough customer support teams at enterprises, so we can't speak to their workflows")
```

---

## DO/DON'T PAIRS

### OBJECT Component

#### ❌ WEAK: Missing specificity

> "Create a dashboard for project managers."

**Why it fails:** Every manager, every project, every industry is different. What does the dashboard show? What actions does a manager take there? When do they use it?

#### ✅ STRONG: Specific, constraint-aware

> "Generate a project dashboard for Agile team leads managing a 2-week sprint. Show: sprint goal (1–2 sentences), story status (count of not started / in progress / in review / done), team velocity (actual vs. planned for this sprint), and blockers (stories with red status + comments). Single viewport, no scrolling, updated in real-time. Exclude: burndown charts, historical trends, individual contributor workload."

**Why it works:** You know exactly what's on the screen, who uses it, when they use it, and what they're *not* getting. An AI can design from this.

---

### STYLE Component — FEEL

#### ❌ WEAK: Adjectives that mean nothing

> "Modern, clean, professional."

**Why it fails:** Every designer interprets "modern" differently. Modern like Apple? Modern like Stripe? Modern like a crypto app?

#### ✅ STRONG: Concrete reference + atmosphere

> "Like Stripe's dashboard: confident, minimal, nothing flashy. The user should feel they're in control of something serious. No animations that draw attention. Color is restrained — mostly gray with one accent. When something goes wrong (a payment fails), the error is red but not alarming, more 'needs your attention now' than 'panic.'"

**Why it works:** You've pointed to a real product, described the emotional tone, and shown how that translates to decisions. An AI can build this.

---

### STYLE Component — Visual Vocabulary

#### ❌ WEAK: Vague color guidance

> "Use a nice color palette. Make it feel expensive."

**Why it fails:** "Nice" and "expensive" are subjective. Does expensive mean dark? Saturated? Gold accents? Minimal?

#### ✅ STRONG: Specific, reference-backed

> "Color: Use a restricted palette — off-white background, deep charcoal or navy for text, and one accent color (emerald green or slate blue, not both). No gradients. Inspiration: Notion's restraint + Stripe's premium feeling. Reference these specific products if unsure."

**Why it works:** The AI has actionable constraints and real examples to anchor to.

---

#### ❌ WEAK: Unclear typography intent

> "Good typography. Readable."

#### ✅ STRONG: Specific hierarchy + feeling

> "Typography: Headings should feel confident and bold (22px+, letter-spacing -0.5px). Body text should breathe (16px line-height 1.6, generous letter-spacing). No more than 3 font weights in use. Feeling: like reading a well-designed book, not a document. Reference: Figma's design or Linear's text hierarchy."

**Why it works:** The AI understands visual hierarchy and can implement it.

---

#### ❌ WEAK: Spacing is an afterthought

> "Leave some space between things."

#### ✅ STRONG: Intentional density + example

> "Spacing: Generous top-level margins (32px gutters). Within a card: tighter but not cramped (12–16px between elements). Whitespace is intentional — if I look at the page, I can see breathing room before I see the content. Reference: 60fps.design's layouts or Stripe's dashboard for the density level."

---

### CONTEXT Component

#### ❌ WEAK: Demographic soup

> "For office workers."

**Why it fails:** Too broad. All office workers? Data analysts? Account managers? Coders? What's their context when they use this?

#### ✅ STRONG: Role + moment + friction

> "For project managers at small/mid-size teams (5–30 people) during daily standup prep. They're checking this dashboard in the morning, on their second coffee, context-switching from email. They're frustrated when dashboards are cluttered because they need one number (are we on track?) in the first 3 seconds. They're familiar with Jira but hate Jira dashboards — too much noise."

**Why it works:** The AI understands the user's impatience, context, and what they value. It can design for that moment.

---

#### ❌ WEAK: Vague user description

> "Mobile users."

#### ✅ STRONG: Specific context + mindset

> "iOS users, ages 25–35, checking this app during a morning commute or workout. They've got 2–3 minutes before their train arrives or their run ends. They're slightly skeptical this app will help (they've tried 5 others). They're on older iPhones (iPhone 11 or 12, not the latest). They use one app feature habitually; the others are unknown to them."

---

### CONSTRAINTS Component

#### ❌ WEAK: No real limits

> "Make it work on mobile."

**Why it fails:** "Work on mobile" is assumed. What specifically breaks on mobile? Are we optimizing for 4" or 6" screens? Is the constraint about performance, content, or interaction?

#### ✅ STRONG: Real tradeoffs stated

> "Constraints: Must fit a single viewport on iPhone SE (375px width) — no scrolling. No images (data-heavy users on cellular). Max file size 200KB (slow networks). Navigation is bottom tabs only, not hamburger menus (reachability on one hand). Color contrast must be WCAG AA for light/dark modes."

**Why it works:** The AI understands the tradeoffs and can make intentional choices.

---

#### ❌ WEAK: Vague technical constraint

> "Follow the design system."

#### ✅ STRONG: Specific system + exceptions

> "Constraints: Use only components from [Design System Name] v2.1 (button, card, modal, input, select, toggle). All colors must map to our design system color tokens. Exception: if a new color is needed (e.g., for status states), define it as a new token rather than using a custom hex. All typography uses [Font Name] — no fallback fonts."

---

## ART DIRECTION ANATOMY

### How to Extract Art Direction from a Product (Example: Linear)

When a designer cites a product like Linear as a reference, here's how to ask follow-up questions to get actionable art direction language:

#### Start with the product reference:

**Designer:** "I like Linear's interface."

#### Ask: What specifically appeals to you?

**You:** "When you look at Linear, what pulls your attention? Is it the color, how readable it is, how things move, how much space things take up?"

**Designer:** "It's clean. Everything has breathing room. The type is easy to read. And when you click something, it feels smooth — not flashy but responsive."

#### Translate to art direction:

Now you have specific observations:

| Observation | Translation |
|---|---|
| "Everything has breathing room" | Generous margins (24px–32px between sections), sparse density, whitespace is a design feature |
| "Easy to read" | High contrast (dark text on light), good line-height (1.5–1.6), generous letter-spacing |
| "Smooth, not flashy, responsive" | Fast interactions (100–200ms), easing curves (ease-out), no bounces or playful effects, feels mechanical/confident not delightful |

#### Build the prompt language:

> "Style: Like Linear — the product should feel organized and confident. Whitespace is abundant; nothing feels cramped. Typography is bold and easy to scan. When the user clicks something, it responds immediately and smoothly (200ms ease-out). Color is restrained: mostly neutral (white, gray, black) with one accent color. Inspiration: Linear, Notion's dashboard section, Stripe's minimalism."

---

## VISUAL VOCABULARY EXAMPLES

### Color

#### ❌ Vague

> "Make it colorful but not too much."

#### ✅ Specific

> "Color: Restricted palette. Off-white background (#F7F6F3 or similar), grays for text/borders (5–6 shades: light, medium, dark, with a contrast-checked set for both light/dark modes). Accent color: one brand color (blue, green, or teal — pick one for the whole app). Status colors: green for success, red for error, yellow/amber for warning. No purples, no oranges unless they're part of the brand. Reference: Linear's color palette or Notion's restraint."

---

### Motion

#### ❌ Vague

> "Smooth interactions."

#### ✅ Specific

> "Motion: Interactions feel mechanical and confident, not playful. Easing: ease-out for all transitions (snappy entry, gradual finish). Duration: 100ms for small elements (button feedback), 200ms for larger transitions (slide-in modals), 300ms for multi-step sequences. No bounces, no springs, no delays. Loading states: show a linear progress bar (not indeterminate spinners), update it every 100–200ms so users feel progress. Reference: Stripe's checkout or Linear's column transitions for the timing feel."

---

### Spacing

#### ❌ Vague

> "Leave room between things."

#### ✅ Specific

> "Spacing: 8px base unit. Margins follow a scale: 8px, 16px, 24px, 32px (no arbitrary spacing). Large sections: 32px vertical gap. Cards/components: 16px internal padding. Inputs/buttons: 12px internal padding. Line-height for text: 1.5–1.6. Letter-spacing for body: +0.3–0.5px (breathing room). Whitespace hierarchy: top-level sections have the most air, nested elements get tighter. Reference: Linear's dashboard or 60fps.design layouts."

---

### Typography

#### ❌ Vague

> "Modern typeface. Easy to read."

#### ✅ Specific

> "Typography: Sans-serif, geometric (not humanist). Font: [Choose: -apple-system, or Inter, or Roboto]. Hierarchy: H1 (28px, 700 weight, -0.5px letter-spacing), H2 (22px, 600 weight), H3 (18px, 600 weight), Body (16px, 400 weight, +0.3px letter-spacing), Small (14px, 400 weight). No more than 3 sizes in any given screen. Line-height: 1.5 for headings, 1.6 for body. Reference: Figma's typography or Linear's text styles."

---

## RESEARCHER CREDIBILITY CHECKLIST

When a researcher runs their prompt through the credibility test, use this checklist to spot gaps:

### Pre-Screener Checklist

- [ ] **Scoring logic is explicit:** Can I point to which answers qualify? Does 6/10 mean yes, and 5/10 mean no?
- [ ] **No leading questions:** Does any question imply the "right" answer?
- [ ] **Answerable in 2–3 minutes:** Could someone actually complete this in the time I said?
- [ ] **Questions are independent:** Does answering Q3 telegraph what Q7 should be?
- [ ] **Open to different answers:** If someone says "I use it weekly" vs. "I use it daily," can I still score them fairly?
- [ ] **No jargon:** Would a non-technical user understand every question?

### Discussion Guide Checklist

- [ ] **Main questions are open-ended:** Can I not answer with "yes/no"?
- [ ] **No leading questions:** Would a participant feel judged if they answered differently?
- [ ] **Follow-up prompts are prepared:** If someone says "It was confusing," do I have a follow-up that digs deeper?
- [ ] **Time is realistic:** Could I actually cover all topics in 45 minutes, even with tangents?
- [ ] **Questions are in logical order:** Does the guide build narrative, or does it jump around?
- [ ] **Sensitive topics are late in the guide:** Am I asking for trust before asking for criticism?

### Synthesis Report Checklist

- [ ] **Every finding is grounded in 2+ participant mentions:** Did I cherry-pick quotes or find themes?
- [ ] **Participant anonymity is maintained:** Could anyone identify a participant from the report?
- [ ] **Quotes are not taken out of context:** Do the quotes support the finding, or do they just sound good?
- [ ] **Open questions are stated:** Have I called out what I don't know?
- [ ] **Recommendations are framed as research priorities, not product decisions:** Am I speculating or synthesizing?
- [ ] **Limitations are honest:** Have I noted which user types I didn't interview, which scenarios I didn't explore?

---

## REFERENCE SITES FOR ART DIRECTION

When designers are stuck, point them to these curated collections (mentioned in Step 3 Product References):

| Site | When to use | What to look for |
|------|---|---|
| **60fps.design** | Motion, interaction feel, timing | Pick an app you admire, filter by interaction type (e.g., "swipe," "scroll," "morph"). Watch how fast/smooth the transition is. 1900+ examples. |
| **UXSnaps** | Real app patterns, UI decisions, lessons | Pick a competitor or inspiring app. Read the breakdown of how they solved a problem (e.g., "How Notion handles empty states"). |
| **Mobbin** | Mobile patterns, component states | Search for your artifact type (e.g., "onboarding screens," "dashboard"). See 20+ variations from different apps. Compare approaches. |
| **21st.dev** | Component-level design, interactive examples | If you're designing a component, see how others built it (e.g., 100+ button components). Fork and remix one. |
| **abtest.design** | Conversion patterns, user behavior nudges | If you need to design for a specific outcome (signup, trial conversion, engagement), see what A/B tests proved worked. |
| **DesignSpells** | Color theory, spatial design, style language | If you're stuck on color palette or overall aesthetic, read essays on specific style movements or color psychology. |

---

## QUICK REFERENCE: When to Use Which Reference Site

**I'm designing a button and need component inspiration:**
→ 21st.dev (see 100+ button implementations)

**I want to understand what "smooth interaction" really means:**
→ 60fps.design (watch 50 examples of buttons, scrolls, modals)

**My design feels generic. I need a reference for style:**
→ UXSnaps (read how Notion, Linear, Stripe solved the same problem) + DesignSpells (understand color + spatial theory)

**I'm designing for conversion and need a pattern:**
→ abtest.design (find what converted in similar contexts)

**I need to see mobile design patterns:**
→ Mobbin (see 30+ variations of onboarding, checkout, etc. from mobile apps)

---

## TEMPLATE: Before/After Prompt Evolution

Here's how a weak prompt becomes strong through the skill:

### ITERATION 1: Raw idea

**Designer:** "I need a landing page for a design tool."

### ITERATION 2: After object clarification

> "Generate a landing page for an AI-powered design assistant aimed at in-house design teams at SaaS startups. The page should show: hero (headline, subhead, CTA), 3 key features, social proof (logos + quotes), pricing, FAQ, and footer. Single scroll, no popups."

### ITERATION 3: After product reference (Step 3)

> Designer cites: Figma, Linear, Framer.
> Observations: Confident use of brand color, lots of white space, type is bold and easy to scan, features shown with minimal explanation (image + headline + one sentence).

### ITERATION 4: After Style refinement

> "Style: Like Figma's landing page — confident about the product, doesn't oversell. White space is abundant; the page breathes. Color: background is white/off-white, type is dark, the brand color shows up in CTAs and one accent element per section. Type is bold (headings feel strong), body is readable (good contrast + generous line-height). Interaction: CTAs are fast (200ms), nothing flashy. Feeling: 'This is a serious tool made by people who know design.'"

### ITERATION 5: Final prompt with all components

> "OBJECT: Generate a landing page for [product name], a design assistant for in-house design teams. Show: hero, 3 features, social proof, pricing, FAQ. Single scroll.
> STYLE: Confident, minimal. Like Figma's landing page. White space dominant. Type: bold headings, readable body. Color: white/off-white background, dark text, brand color in CTAs and section accents. Interactions: 200ms ease-out, no animations that distract.
> CONTEXT: Designers at startups (10–100 people). Landing on this page from a paid ad, they have 10 seconds to decide if this is worth exploring. They're already familiar with design tools; they're checking if this one solves a specific problem they have.
> CONSTRAINTS: Must load in <2s. No video (too heavy). No forms above the fold. Pricing must be immediately visible. Do not use marketing clichés: no 'beautiful,' no 'seamless,' no 'game-changing.'"

Notice how each iteration adds specificity and grounds the design in reality.

