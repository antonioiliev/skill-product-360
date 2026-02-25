---
name: product-360
description: "Product knowledge hub: product documentation, customer personas, value proposition, problem/solution framing, user journey mapping (browser walkthroughs with screenshots and text-based maps), competitive analysis. Use when: (1) documenting what a product does, (2) creating or reviewing customer personas, (3) mapping user journeys or flows, (4) building a product canvas, (5) analyzing product positioning. Triggers on: 'product overview', 'customer persona', 'user journey', 'map the user flow', 'what does the product do', 'product canvas', 'analyze the product', 'value proposition', 'competitive analysis'."
metadata:
  { "openclaw": { "always": true } }
---

# Product 360 Skill

A product knowledge hub for documenting, analyzing, and mapping everything about a product — what it does, who it serves, how users experience it, and where it can improve.

## When to Use

- Documenting product purpose, value proposition, or positioning
- Creating or updating customer personas
- Mapping user journeys (via browser walkthrough or structured text)
- Building or reviewing a product canvas (problem/solution/metrics)
- Competitive landscape notes
- Product health checks (reviewing completeness of product docs)

## When NOT to Use

- Pure engineering tasks (code changes, debugging) — use coding tools directly
- Marketing copy or blog content — write directly
- Financial modeling — use spreadsheet tools

---

## 1. Product Knowledge Management

Store all product knowledge in workspace memory under `memory/product-360/`. Use descriptive filenames:

| Document | File | Template |
|----------|------|----------|
| Product canvas | `memory/product-360/canvas.md` | `references/product-canvas-template.md` |
| Personas | `memory/product-360/persona-<name>.md` | `references/persona-template.md` |
| Journey maps | `memory/product-360/journey-<name>.md` | `references/journey-map-template.md` |
| Competitive notes | `memory/product-360/competitive.md` | (freeform) |

### Conventions

- Always check if a file already exists before creating a new one — update in place.
- Use the templates in `references/` as starting points; adapt sections as needed.
- Keep each file focused on one topic (one persona per file, one journey per file).
- Include a `Last updated: YYYY-MM-DD` line at the top of each document.

---

## 2. Browser-Based Journey Mapping

When the user wants to map a user journey by walking through a live product, spawn the **browser** sub-agent to do the interactive walkthrough, then compile the results into a journey map.

1. **Spawn browser** — instruct it to open the product URL, navigate the key user flow step by step, take a `screenshot` after each meaningful step, and optionally take a `snapshot` for accessibility tree analysis. Ask it to report back with step descriptions, screenshot paths, and observations.
2. **Compile the journey map** from the browser's report:
   - Step number and description
   - What the user sees (from screenshot)
   - What the user does (action taken)
   - Observations: friction, confusion, delight
3. **Save** using the template from `references/journey-map-template.md` to `memory/product-360/journey-<name>.md`.
4. **Save screenshots** to `memory/product-360/screenshots/`.

### Tips

- Focus on the critical path first (happy path), then note where users might deviate.
- Note page load states, error states, and empty states when visible.
- Record the exact URLs visited at each step for reproducibility.

---

## 3. Text-Based Journey Maps

When no browser walkthrough is needed (or the product isn't web-based), create journey maps from knowledge:

1. Identify the **persona** and **scenario** (ask the user if not specified).
2. Define **stages** — typical stages: Awareness, Consideration, Onboarding, First Use, Ongoing Use, Advocacy/Churn.
3. For each stage fill in: user action, touchpoint, thought/emotion, pain point, opportunity.
4. Summarize **key insights** and **improvement recommendations** ranked by priority.
5. Use the template from `references/journey-map-template.md`.
6. Save to `memory/product-360/journey-<name>.md`.

---

## 4. Workflows

### Build a Product Canvas

1. Ask the user about the product (or read existing docs/code/website).
2. Read the template: `references/product-canvas-template.md`.
3. Fill in each section collaboratively — ask clarifying questions for gaps.
4. Save to `memory/product-360/canvas.md`.

### Create a Persona

1. Ask who the target user is (or infer from product context).
2. Read the template: `references/persona-template.md`.
3. Fill in demographics, goals, frustrations, behaviors.
4. Save to `memory/product-360/persona-<archetype>.md`.

### Map a User Journey (Browser)

Follow the steps in section 2 above.

### Map a User Journey (Text)

Follow the steps in section 3 above.

### Product Health Check

Review all files in `memory/product-360/` for completeness:

1. List all existing product-360 documents.
2. Check: is there a canvas? At least one persona? At least one journey map?
3. For each document, flag empty or placeholder sections.
4. Suggest next steps to fill gaps.
5. Report a summary: what's documented, what's missing, what needs updating.

---

## 5. Storage Conventions

- **Base directory:** `memory/product-360/`
- **Screenshots:** `memory/product-360/screenshots/`
- **File naming:** lowercase, hyphen-separated (e.g., `persona-power-user.md`, `journey-onboarding.md`)
- **Updates:** always read the existing file first, then edit in place — never create duplicates.
- **Dates:** include `Last updated: YYYY-MM-DD` in every document header.
