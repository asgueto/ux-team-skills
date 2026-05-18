# GlobalLink Voice — Examples Reference

> This file contains all illustrative copy examples for the `globallink-voice` skill.
> For rules, frameworks, and tone guidance, see [SKILL.md](./SKILL.md).

---

## Voice attribute examples

Copy pairs demonstrating each voice attribute in practice.

### Trustworthy

| ✓ This sounds like | ✗ This does NOT sound like |
|---|---|
| "We couldn't save your changes due to a technical problem. Try again in a moment." | "An error has occurred. Please contact your system administrator for further assistance." |
| "Your session expired after 30 minutes of inactivity. Sign in again to continue." | "For security reasons, your session has been terminated. Please re-authenticate to regain access to the system." |
| "Translation failed for 2 files. The file format isn't supported. Upload XLIFF, DOCX, or PDF files." | "There was an issue processing your request. Please try again or contact support." |

### Practical

| ✓ This sounds like | ✗ This does NOT sound like |
|---|---|
| "Send an invite to anyone with an email address. It's fast and free." | "Utilize our efficient and user-friendly platform to send invitations to individuals via their email addresses." |
| "Select a target language to continue." | "In order to proceed, it is necessary to first select your desired target language from the available options." |
| "3 files need review. Open the project to see what's flagged." | "We wish to inform you that there are currently 3 files within your project that have been flagged and require your attention at your earliest convenience." |

### Innovative

| ✓ This sounds like | ✗ This does NOT sound like |
|---|---|
| "GlobalLink automatically detects language pairs so you can start reviewing right away." | "Leverage our cutting-edge AI-powered paradigm-shifting translation ecosystem." |
| "Translation memory suggests a match for this segment. Accept or edit." | "Our state-of-the-art TM technology has identified a groundbreaking match for your content." |
| "Machine translation is ready. Review and post-edit before delivery." | "Experience the revolutionary power of our next-generation MT engine, transforming how you do business globally." |

### Modern

| ✓ This sounds like | ✗ This does NOT sound like |
|---|---|
| "Your project is ready. 3 files translated, 1 needs review." | "We are pleased to inform you that your translation project has been successfully processed and is now available for your review." |
| "Upload complete. Files are queued for translation." | "Your file upload has been received and your files have been placed into the translation queue." |
| "No activity in the last 30 days." | "There has been a notable absence of user activity within your account over the past 30-day period." |

---

## Tone spectrum examples

Copy pairs illustrating the floor, default, and ceiling of each tone dimension.

### Dimension 1 — Funny ↔ Serious (range: 4–8)

| Position | Example |
|---|---|
| Floor (4 / 10 — most casual allowed) | "You're all caught up. No files waiting for review." |
| Default (6 / 10) | "No pending reviews. All files are up to date." |
| Ceiling (8 / 10 — most formal) | "There are no files currently pending review." |
| **Never** (below floor) | "What did you do?! You broke it! (Just kidding. We're experiencing a problem.)" |

### Dimension 2 — Formal ↔ Casual (range: 3–8)

| Position | Example |
|---|---|
| Floor (3 / 10 — most casual allowed) | "You've got a new submission." |
| Default (5 / 10) | "A new submission is ready for review." |
| Ceiling (8 / 10 — most formal) | "A new submission has been received and is pending review." |
| **Never** (below floor) | "Look what we've got there! Your awesome new submission!" |
| **Never** (above ceiling) | "We wish to formally notify you that a submission has been received into the system." |

### Dimension 3 — Concise ↔ Detailed (range: 2–7)

| Position | Example |
|---|---|
| Floor (2 / 10 — most concise allowed) | "Save failed. Try again." |
| Default (4 / 10) | "We couldn't save your changes. Try again in a bit." |
| Ceiling (7 / 10 — most detailed allowed) | "We couldn't save your changes due to a connection issue. Check your network and try again. If the problem persists, contact your administrator." |
| **Never** (above ceiling) | "We regret to inform you that the changes you attempted to make to your document were not saved successfully due to a technical difficulty experienced on our end, and we would kindly ask that you attempt the action again at your earliest convenience." |

### Dimension 4 — Respectful ↔ Irreverent (range: 1–5)

| Position | Example |
|---|---|
| Default (3 / 10) | "Please upload the files that need to be translated." |
| Floor (5 / 10 — most relaxed allowed) | "Upload the files you'd like translated." |
| **Never** (below floor) | "Hey, could you please upload the files? Come on, we're waiting!" |

---

## Industry copy examples

The same message written for different industry contexts, showing tone shift within the valid range.

### File upload error

| Industry | Copy | Tone position |
|---|---|---|
| Life Sciences | "Upload failed. The file does not meet submission requirements. Verify the file format and size limits before resubmitting." | Formal (near ceiling) |
| Legal | "Upload failed. Check that the file format and size comply with project requirements before resubmitting." | Formal |
| Banking | "Upload failed. The file format isn't supported. Upload an XLIFF, DOCX, or PDF file." | Formal to balanced |
| Retail | "We couldn't upload that file. Try an XLIFF, DOCX, or PDF — those work best." | Balanced to slightly casual |

### Empty state — no active projects

| Industry | Copy | Tone position |
|---|---|---|
| Life Sciences | "No active submissions. Create a submission to begin the translation and review workflow." | Formal |
| Legal | "No active matters. Create a project to start managing your translation workflow." | Formal |
| Banking | "No active projects. Create a project to get started." | Balanced |
| Retail | "No campaigns yet. Create your first campaign to start translating content for your markets." | Balanced to slightly casual |

### Onboarding welcome

| Industry | Copy | Tone position |
|---|---|---|
| Life Sciences | "Welcome to GlobalLink. Set up your first submission to begin managing regulatory translation workflows." | Formal |
| Legal | "Welcome to GlobalLink. Set up your first matter to start managing translation projects." | Formal |
| Retail | "Welcome to GlobalLink. Set up your first campaign to start reaching customers in new markets." | Balanced to slightly casual |

### Completion / success state

| Industry | Copy | Tone position |
|---|---|---|
| Life Sciences | "Submission complete. All required documents have been submitted for review." | Formal |
| Legal | "Project complete. All translated files are ready for download." | Formal |
| Banking | "Translation complete. Your files are ready to download." | Balanced |
| Retail | "All done! Your translated files are ready." | Balanced to slightly casual |

---

## Copy pattern examples

Worked examples for each content type, showing structure applied with correct and incorrect copy.

### Error messages

**Structure: What failed → Why (if actionable) → What to do next**

| ✓ Do | ✗ Don't |
|---|---|
| "We couldn't process the file. The format isn't supported. Upload an XLIFF, DOCX, or PDF file." | "Oops! Something went wrong. Please try again later." |
| "Connection lost. Your changes weren't saved. Reconnect and try again." | "Error: connection failure. Code: NET_ERR_502." |
| "Submission failed validation. The target language field is required. Complete all required fields before resubmitting." *(Life Sciences)* | "Whoops! Something doesn't look right. Give it another go!" |
| "We couldn't send the invitation. Check that the email address is correct and try again." | "Invitation error. Please contact support." |

### Destructive action confirmations

**Structure: Name the action → State consequences → Action-labelled buttons**

| ✓ Do | ✗ Don't |
|---|---|
| Title: "Delete this project?" / Body: "This will permanently remove all files, translation memory, and project history. This cannot be undone." / Buttons: "Delete project" / "Keep project" | Title: "Are you sure?" / Body: "This action cannot be reversed." / Buttons: "Yes" / "No" |
| Title: "Remove this user?" / Body: "They will lose access to all projects immediately." / Buttons: "Remove user" / "Keep access" | Title: "Confirm" / Buttons: "OK" / "Cancel" |

### Empty states

**Structure: What this area is for → Why it's empty → What to do to get started**

| ✓ Do | ✗ Don't |
|---|---|
| "No files yet. Upload files to start a new project." | "Nothing here." |
| "No team members added. Invite your team to collaborate on projects." | "No data available." |
| "No translation memory for this language pair. Add files to start building TM." | "It's lonely here… nothing to see!" |
| "No notifications. We'll let you know when something needs your attention." | "Your inbox is empty 🎉" |

### CTAs

| ✓ Do | ✗ Don't |
|---|---|
| "Submit for review" | "Proceed" |
| "Add target language" | "Click here" |
| "Export translation memory" | "OK" |
| "Create project" | "Get started!" |
| "Download report" | "Continue" |

### Onboarding

**Structure: Welcome → What they can do here → First action**

| ✓ Do | ✗ Don't |
|---|---|
| "Welcome to GlobalLink. Set up your first project to start managing your translation workflow." | "Hey there! Welcome to our awesome digital product. It's designed just for you!" |
| "This is your project dashboard. Track status, manage files, and collaborate with your team from here. Create a project to get started." | "Welcome aboard! We deeply value your trust and appreciate your decision to choose our digital product. Rest assured, we're here to support you every step of the way." |

### Success / completion states

| ✓ Do | ✗ Don't |
|---|---|
| "Project submitted. Your team will be notified when review begins." | "Woohoo! You're done! 🎉" |
| "Files uploaded. Translation is in progress — we'll notify you when it's ready." | "Amazing! You did it!" |
| "Submission complete. All documents have been submitted for review." *(Life Sciences)* | "You're crushing it! 🚀" |
| "All set. Your campaign files are ready to download." *(Retail)* | "Yay, great job!" |

### Notifications

| ✓ Do | ✗ Don't |
|---|---|
| "Review complete. 3 segments require your attention. [View segments]" | "Hello! We wanted to let you know that your review has been completed and there are some segments that may need attention." |
| "New submission received. [Review now]" | "You've got mail! A new submission is waiting for you." |
| "Export ready. Your translation memory file is available to download. [Download]" | "Good news! We have some great news to share — your export is done!" |

### Tooltips

| Element | ✓ Do | ✗ Don't |
|---|---|---|
| TM leverage field | "Percentage of new content matched against existing translation memory. Higher leverage typically reduces cost and turnaround time." | "Translation memory leverage." |
| Submit button (disabled) | "Complete all required fields to submit." | "This button submits your project." |
| Target language selector | "Choose the language this content will be translated into. Add multiple target languages to run parallel workflows." | "Select language." |

---

## Quick reference — Do / Don't

| Situation | Do | Don't |
|---|---|---|
| Technical error | "We couldn't save your file. Try again in a moment." | "Oops! Something went wrong 😬" |
| Success confirmation | "Your project was submitted successfully." | "Woohoo! You're done!" |
| Onboarding welcome | "Welcome to GlobalLink. Let's get your first project set up." | "Hey there! Welcome to our awesome platform!" |
| CTA label | "Submit for review" | "Proceed" / "Click here" / "OK" |
| Empty state | "No files yet. Upload files to start a new project." | "It's lonely here… nothing to see!" |
| Destructive action | "Deleting this project will remove all files and translation memory. This cannot be undone." | "Are you sure? This will delete everything!" |
| Feature description | "GlobalLink detects language pairs automatically." | "Leverage our cutting-edge AI-powered language detection ecosystem." |
| Life Sciences error | "Submission failed validation. Review the flagged fields before resubmitting." | "Whoops! Something doesn't look right. Give it another go!" |
| Retail empty state | "No campaigns yet. Create your first campaign to get started." | "Your dashboard awaits its destiny…" |
| Translatable copy | "Delete this project." | "Delete it." |
| CTA with character limit | "Save" [note: 8 char EN limit — flag for translators] | "Save changes" with no constraint noted |
| Tooltip | "Percentage of content matched against existing TM. Higher leverage reduces cost." | "Click here to learn more about TM leverage." |
