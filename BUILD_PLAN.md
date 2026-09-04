# Day_Tracker — Build Plan

This is the complete phase-by-phase plan for building Day_Tracker as a single self-contained HTML/CSS/JS file with local, on-device data persistence (no backend, no login, no cloud).

Each phase is built, syntax- and logic-checked, then handed over for review before moving to the next. The final phase is a full integration pass across every module together, since bugs often only show up once modules share data (e.g. Analytics reading from Fitness + Coding + Reading logs at once).

---

## Phase 0 — Foundation ✅ *(done)*
- Scope and tech decisions locked: single-file app, local persistence, no Firebase/backend
- Design system: AMOLED dark theme, glassmorphism cards, Space Grotesk / Inter / JetBrains Mono type, green/blue/amber/violet/red accent palette, GitHub-style heatmap as the recurring visual signature
- Data model foundation: versioned local state object, day-rollover logic, XP/level formula

## Phase 1 — Dashboard / Home ✅ *(done)*
- HUD: level, XP bar, coins
- Quote of the day (rotating, categorized)
- Today's progress ring
- Mood / energy / water quick-log
- Daily schedule with checkable tasks, XP rewards, level-up + "perfect day" feedback
- Streak tracking (current + longest)
- 12-week consistency heatmap
- Bottom navigation + quick-add button (stub)

## Phase 2 — Fitness Module
- Weight, BMI, and waist logging over time
- Workout log: push-ups, pull-ups, resistance band, hand gripper, walking, calories
- Workout streak + personal records (highest reps, longest streak)
- Weekly summary chart

## Phase 3 — Reading Module
- Book entries: name, pages read, reading time, current chapter
- Reading streak
- Estimated finish date based on pace
- Weekly summary chart

## Phase 4 — Coding Module
- Session log by category: DSA, Frontend, Backend, AI/ML, Projects
- Built-in Pomodoro timer
- Hours-studied tracking
- Weekly summary chart

## Phase 5 — Academic Module
- Assignment tracker with due dates
- Attendance percentage tracker
- Exam countdown
- CGPA goal tracker
- Revision/notes checklist

## Phase 6 — Goals Module
- Daily / weekly / monthly / yearly goal lists
- Simple vision-board style notes section
- Placement/dream-role roadmap checklist

## Phase 7 — Journal
- Morning journal entry (intentions, plan)
- Night reflection entry (mood, gratitude, wins, lessons learned)
- Simple searchable history by date

## Phase 8 — Analytics Dashboard
- Cross-module charts: line, bar, and heatmap views
- Weekly / monthly / yearly reports
- Habit consistency and streak analysis across all modules
- Time-spent breakdown across fitness / reading / coding / academics

## Phase 9 — Gamification Layer
- Achievements & badges (Early Bird, Iron Discipline, Bookworm, Coding Warrior, Perfect Week, etc.)
- Ranks tied to level milestones
- Daily / weekly / monthly missions
- Optional "Goggins Mode": tiered, original accountability messages based on daily completion %
- Quote library expanded toward the full 365

## Phase 10 — Data Tools
- Export data as JSON (manual backup)
- Import/restore from a previously exported JSON file
- Reset/clear-data option with confirmation

## Phase 11 — Final Polish & QA Pass
- Full integration test: every module exercised together in one sitting, checking cross-module data (Analytics, streaks, XP) stays consistent
- Accessibility pass: keyboard navigation, screen-reader labels, color contrast, reduced-motion support
- Mobile pass: layout and touch-target check on phone-sized viewports
- Edge cases: empty states (no data yet), midnight/day-rollover boundary, rapid repeated taps, very long text inputs
- Final cleanup: remove dead code/stubs, confirm no console errors, confirm data persists correctly across reloads

---

## Explicitly out of scope
These were in the original concept but require real infrastructure this environment can't provide, so they're intentionally excluded rather than left half-built:
- Firebase Authentication / Cloud Firestore / Cloud Functions (cloud sync, multi-device accounts)
- Push notifications (require a backend + real domain)
- GitHub Actions CI/CD pipeline
- Admin panel with role-based access control
- PDF/Excel export (JSON export is included in Phase 10 as the local equivalent)

## Process
1. Build one phase
2. Syntax-check and logic-check before sharing
3. Share the updated file and a summary of what changed
4. Take feedback and adjust before moving on
5. After Phase 11, the app should be feature-complete, error-free, and ready for daily use
