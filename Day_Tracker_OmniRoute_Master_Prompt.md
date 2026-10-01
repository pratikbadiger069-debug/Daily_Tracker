# Day_Tracker — OmniRoute Master Development Prompt

## Purpose

You are working on an existing web application called **Day_Tracker**.

Upgrade it into a **professional, premium, mobile-first, iOS-inspired productivity/life-management application**, while fixing bugs and preserving all working functionality.

The project should feel like a real production application rather than a student prototype.

---

## 1. Analyze the Existing Project First

Before changing code:

- Inspect the complete codebase.
- Understand the architecture, components, routes, state management, database/API logic, and styling.
- Identify bugs, console errors, broken interactions, responsive issues, performance problems, duplicate code, and incomplete features.
- Check which features actually work.
- Do not blindly rebuild the application.
- Preserve working functionality.
- Reuse existing components and logic where practical.
- Fix root causes rather than temporary patches.

Create an internal checklist covering:

1. Bugs found
2. UX problems
3. Responsive problems
4. Performance problems
5. Components needing refactoring
6. Incomplete/unreliable features

Then implement the improvements.

---

## 2. Primary Design Goal

Transform Day_Tracker into:

**Professional + Premium + iOS-inspired + Mobile-first + Smooth + Minimal + Modern**

Use modern iOS design principles:

- Clear hierarchy
- Generous spacing
- Rounded surfaces
- Clean typography
- Contextual actions
- Bottom sheets
- Modals
- Subtle depth
- Smooth transitions
- Intuitive touch interaction
- Minimal visual clutter

Do **not** copy Apple's branding, logos, proprietary assets, or exact screens.

The result should be **iOS-inspired**, not an Apple clone.

---

## 3. Three-Dot Action Menu

Every editable item/card/record should have a clear:

**⋯ More / Options button**

Apply this to relevant items such as:

- Habits
- Workouts
- Goals
- Tasks
- Reading entries
- Coding activities
- Academic tasks
- Journal entries
- Schedule items
- Achievements
- User-created records

Relevant actions can include:

- Edit
- Duplicate
- Mark Complete / Incomplete
- Move
- Archive
- Delete

Only show actions relevant to the selected item.

The menu must:

- Open near the selected item.
- Have smooth animation.
- Have rounded corners.
- Have subtle elevation/shadow.
- Have clear icons.
- Have comfortable touch targets.
- Close when tapping outside.
- Close with Escape on desktop.
- Stay inside the viewport.
- Work correctly on mobile.
- Prevent accidental interaction with the underlying page.

---

## 4. Edit + Save System

When the user selects:

**⋯ → Edit**

open an appropriate editing interface.

Prefer:

- Mobile bottom sheet for simple forms.
- Centered modal on desktop.
- Full-screen editor for complex forms.

The editor should:

- Load existing data correctly.
- Pre-fill current values.
- Validate input.
- Provide Cancel.
- Provide Save / Done.
- Preserve entered data if saving fails.

Expected behavior:

1. User opens Edit.
2. Existing data loads.
3. User modifies values.
4. User presses Save.
5. Data is validated.
6. Data is persisted.
7. UI updates immediately.
8. Editor closes smoothly.
9. Updated data remains after refresh.

If saving fails:

- Never silently fail.
- Show a clear error.
- Preserve user input.
- Allow retry.

If offline support exists, handle offline edits safely and synchronize when connectivity returns.

---

## 5. iOS-Inspired Visual System

Create a consistent design system.

### Typography

Use a clean system-style font stack.

Prioritize:

- Large readable page titles
- Clear section titles
- Comfortable body text
- Subtle secondary text
- Compact metadata

Avoid excessive font weights.

### Colors

Use a professional dark theme:

- Near-black / dark charcoal foundation
- Neutral surfaces
- Subtle borders
- White/light-gray typography
- Restrained accent color

A green/electric-lime accent may be used for completion, progress, positive states, and achievements.

Do not make every component highly colorful.

Avoid excessive gradients and neon effects.

### Cards

Cards should have:

- Consistent corner radius
- Subtle borders
- Soft elevation
- Good internal spacing
- Strong information hierarchy

Avoid huge shadows, cartoon-style UI, excessive glassmorphism, and unnecessary decorative effects.

---

## 6. Smooth Animations

Make animations noticeably smoother and more professional.

Use subtle animations for:

- Page transitions
- Cards appearing
- Menus
- Bottom sheets
- Modals
- Buttons
- Checkboxes
- Progress updates
- Navigation
- Success states
- Delete/archive interactions

Animation principles:

- Fast
- Subtle
- Responsive
- Purposeful

Prefer transform/opacity-based animations for performance.

Do not use animations that delay interaction.

Respect:

`prefers-reduced-motion`

---

## 7. Micro-Interactions

Add tasteful micro-interactions:

- Button press feedback
- Checkbox completion animation
- Progress animation
- Desktop hover feedback
- Mobile touch feedback
- Save success feedback
- Menu transitions
- Navigation transitions

The application should feel responsive immediately.

---

## 8. Mobile-First Experience

The primary target device is a **Samsung S24 / modern smartphone**.

The website should feel like a native mobile application.

Requirements:

- Responsive layouts
- No horizontal scrolling
- Comfortable touch targets
- Mobile-friendly forms
- Mobile-friendly menus
- Mobile-friendly charts
- Correct safe spacing
- No overlapping UI
- No clipped text
- No tiny buttons

Desktop must also remain polished.

Do not simply shrink the desktop UI. Design mobile layouts intentionally.

---

## 9. Navigation

Use clean navigation.

For mobile, prefer simple bottom navigation for major sections.

Example:

- Home
- Habits
- Fitness
- Goals
- More

The active section should be obvious but subtle.

Avoid overcrowding navigation.

---

## 10. Dashboard

The dashboard should immediately answer:

**"How am I doing today?"**

Include relevant information such as:

- Today's completion percentage
- Daily score
- Streak
- XP
- Current level
- Today's habits
- Workout
- Coding progress
- Reading progress
- Academic tasks
- Motivation
- Quick actions

Prioritize today's information.

Do not overload the first screen with unnecessary analytics.

---

## 11. Gamification

Keep gamification professional.

Use:

- XP
- Levels
- Streaks
- Achievements
- Badges
- Challenges
- Progress

Avoid childish game-like UI.

Target feeling:

**Apple Fitness + professional productivity software + disciplined personal tracker**

---

## 12. Fitness Section

Create a polished fitness experience.

Include relevant features such as:

- Today's workout
- Workout completion
- Weekly activity
- Exercise history
- Streaks
- Progress
- Workout categories
- Duration where meaningful

Use clean progress indicators and charts.

Do not make unsupported medical claims.

---

## 13. Analytics

Make analytics useful rather than decorative.

Charts should be:

- Responsive
- Readable on mobile
- Interactive where useful
- Consistent with the design

Useful ranges:

- Today
- Week
- Month
- Year

---

## 14. Empty States

Every feature should have a professional empty state.

Example:

**No habits yet**

Then provide:

**Create Habit**

Never leave major sections blank without explanation.

---

## 15. Loading States

Use:

- Skeleton loaders
- Subtle loading indicators
- Appropriate transitions

Avoid unnecessary full-screen loading screens.

---

## 16. Error Handling

Audit the application and fix:

- Console errors
- Broken routes
- Undefined states
- Failed API requests
- Failed database operations
- Invalid forms
- Race conditions
- Stale UI
- Broken buttons
- Mobile layout bugs

Errors must have clear recovery paths.

---

## 17. Data Integrity

When an item is edited/deleted/updated, make sure the change correctly affects:

- UI
- Local state
- Backend/database
- Analytics
- Progress
- Streaks
- XP

where applicable.

After refreshing the page, the correct data must still be present.

---

## 18. Performance

Optimize for mobile performance.

Check:

- Unnecessary re-renders
- Duplicate API calls
- Excessive network requests
- Oversized components
- Large assets
- Excessive animations
- Inefficient state updates

Use lazy loading/code splitting where appropriate.

Keep animations GPU-friendly.

---

## 19. Accessibility

Ensure:

- Good contrast
- Keyboard navigation
- Visible focus states
- Semantic HTML
- Accessible buttons
- Accessible menus
- Accessible dialogs
- Proper labels
- Screen-reader-friendly controls
- Reduced-motion support

The three-dot menu must work with keyboard navigation on desktop.

---

## 20. Code Quality

Create reusable components where appropriate, for example:

- Button
- Card
- MoreMenu
- Modal
- BottomSheet
- Input
- Select
- ProgressRing
- ProgressBar
- Toast
- ConfirmDialog
- Skeleton
- EmptyState

Do not create duplicated UI implementations unnecessarily.

Follow the existing framework and architecture unless there is a compelling technical reason to change it.

---

## 21. Do Not Break Existing Features

Before modifying anything, understand what already works.

Do NOT:

- Remove working features.
- Delete existing user data.
- Replace the database unnecessarily.
- Rewrite the whole application without reason.
- Introduce unnecessary dependencies.
- Change API contracts without checking consumers.

---

# 22. GitHub Learning Habit — VERY IMPORTANT

I am a student and I specifically want to **learn Git and GitHub by manually pushing my work**.

**Do NOT automatically push commits to GitHub for me.**

Do NOT automatically run:

- `git add`
- `git commit`
- `git push`

unless I explicitly ask you to do so.

Instead, make GitHub part of my development learning workflow.

### After meaningful changes

When a feature, bug fix, or milestone is completed:

1. Stop before pushing.
2. Tell me what changed.
3. Explain briefly why the changes were made.
4. Give me the exact Git commands I should run manually.
5. Explain what each command does.
6. Ask me to execute them myself.
7. Wait for my confirmation/output before continuing to the next Git-related step.

Use commands such as:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Explain them simply.

For example:

### Step 1

```bash
git status
```

Purpose: Shows which files have changed.

### Step 2

```bash
git add .
```

Purpose: Stages the changes for the next commit.

### Step 3

```bash
git commit -m "Improve habit editing UI"
```

Purpose: Creates a saved checkpoint in Git with a meaningful message.

### Step 4

```bash
git push
```

Purpose: Uploads the commit to GitHub.

Do not just give me commands. Help me understand the workflow.

### Git learning rule

Whenever I reach a meaningful milestone, encourage me to manually perform the Git workflow.

Help me remember:

**Modify → Check → Stage → Commit → Push**

Do not hide Git behind automation.

The purpose is for me to become comfortable using Git/GitHub independently.

---

## 23. Before Asking Me to Commit

Before asking me to commit, tell me:

### What changed
Short list of modifications.

### Why
Short explanation of the purpose.

### Files affected
Mention important files/components.

### Test
Tell me what I should manually verify in the browser.

Then give me the Git commands.

Example:

```bash
git status
git add .
git commit -m "Fix habit edit and save flow"
git push
```

Do not execute these commands automatically.

---

## 24. Git Commit Quality

Use meaningful commit messages.

Good examples:

```text
feat: add habit edit menu
fix: resolve habit save bug
style: improve mobile dashboard
feat: add workout progress chart
fix: prevent duplicate habit submissions
refactor: extract reusable action menu
```

Avoid meaningless messages such as:

```text
update
changes
final
test
abc
```

Teach me to make commits small and understandable.

---

## 25. Final QA

Before considering the application complete, verify:

- [ ] No major console errors
- [ ] No broken routes
- [ ] No broken buttons
- [ ] Three-dot menus work
- [ ] Edit works
- [ ] Save works
- [ ] Cancel works
- [ ] Delete works
- [ ] Data persists after refresh
- [ ] Mobile layout works
- [ ] Desktop layout works
- [ ] Animations are smooth
- [ ] Reduced-motion works
- [ ] Loading states work
- [ ] Error states work
- [ ] Empty states work
- [ ] Charts work
- [ ] Navigation works
- [ ] Touch targets are comfortable
- [ ] No horizontal overflow
- [ ] No accidental data loss
- [ ] GitHub workflow remains manual

---

# Final Quality Standard

The final application should feel like a **real premium productivity application**.

Ask yourself:

> "If this were released as a professional productivity app, would the UI, interactions, responsiveness, and reliability feel polished enough?"

Prioritize:

**Functionality → Reliability → UX → Visual polish → Animation → Performance**

Do not sacrifice functionality for visual effects.

The final experience should feel:

**Clean. Calm. Fast. Premium. Disciplined. iOS-inspired. Mobile-first.**

