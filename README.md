# Product 360

An [OpenClaw](https://github.com/openclaw/openclaw) skill that turns your AI agent into a product-aware collaborator. It teaches the agent product management thinking and provides structured workflows for documenting, analyzing, and mapping your product.

## What It Does

**Product 360** gives your OpenClaw agent a product management lens. Once installed, it:

- **Thinks like a PM** — automatically applies product thinking when features, bugs, ideas, or growth topics come up in conversation
- **Documents products** — creates structured product canvases covering problem, solution, value prop, metrics, and competitive positioning
- **Builds personas** — generates detailed customer persona profiles with goals, frustrations, and behaviors
- **Maps user journeys** — produces journey maps either from a live browser walkthrough (with screenshots) or from existing knowledge
- **Runs health checks** — audits your product documentation for completeness and suggests what to fill in next

## Installation

Install from ClawHub:

```bash
clawhub install product-360
```

Or manually clone into your skills directory:

```bash
# Workspace-level (this agent only)
git clone https://github.com/antonioiliev/skill-product-360.git ./skills/product-360

# User-level (shared across all agents)
git clone https://github.com/antonioiliev/skill-product-360.git ~/.openclaw/skills/product-360
```

The skill is picked up automatically on the next session start.

## Usage

The skill activates automatically when product-related topics come up in conversation. You can also trigger it directly with phrases like:

| What you want | What to say |
|---|---|
| Document your product | *"Create a product canvas for [product]"* |
| Define a target user | *"Create a customer persona for [audience]"* |
| Map a user flow (browser) | *"Walk through the onboarding flow at [URL] and map the journey"* |
| Map a user flow (text) | *"Map the user journey for [scenario]"* |
| Audit product docs | *"Run a product health check"* |
| Competitive analysis | *"Analyze our competitive landscape"* |
| Value proposition | *"What's our value proposition?"* |

### Example: Building a Product Canvas

```
You: Create a product canvas for our analytics dashboard

Agent: I'll build a product canvas for your analytics dashboard.
       Let me ask a few questions to fill in the key sections...

       [Guides you through problem, segments, value prop, metrics, etc.]
       [Saves to memory/product-360/canvas.md]
```

### Example: Browser-Based Journey Mapping

```
You: Walk through the signup flow at https://myapp.com and map the user journey

Agent: I'll spawn a browser session to walk through the signup flow,
       take screenshots at each step, and compile a journey map.

       [Opens browser, navigates the flow, captures screenshots]
       [Saves journey map to memory/product-360/journey-signup.md]
       [Saves screenshots to memory/product-360/screenshots/]
```

## How It Works

### `SKILL.md`

The core of the skill. Contains YAML frontmatter (name, description, metadata) and markdown instructions that get injected into the agent's system prompt. This teaches the agent all product management workflows — when to use them, how to execute them, and where to store the results.

The `metadata.openclaw.always: true` flag means this skill's instructions are always included in the prompt, enabling passive PM thinking even when the skill isn't explicitly invoked.

### `hooks/handler.js`

A bootstrap hook that injects a **PM methodology framework** into the agent's context at startup. This includes:

- PM thinking triggers (feature discussions, bug triage, idea evaluation)
- Data collection guidelines (analytics, user feedback, behavioral data)
- The AAARRR pirate metrics framework
- Proactive discovery questions when product context is thin

### `references/`

Templates that structure the output of each workflow:

| Template | Purpose |
|---|---|
| `product-canvas-template.md` | Problem/solution/metrics product overview |
| `persona-template.md` | Customer persona profile |
| `journey-map-template.md` | User journey map with stages, pain points, and recommendations |

## Where Data Is Stored

All product knowledge is saved to workspace memory:

```
memory/product-360/
├── canvas.md                  # Product canvas
├── persona-<archetype>.md     # One file per persona
├── journey-<name>.md          # One file per journey map
├── competitive.md             # Competitive analysis notes
└── screenshots/               # Browser walkthrough screenshots
```

Files are created from the templates in `references/` and updated in place — the skill never creates duplicates.

## Requirements

No external binaries or API keys required. The skill is purely instructional — it teaches the agent workflows using tools already available (file read/write, browser, bash).

## License

MIT
