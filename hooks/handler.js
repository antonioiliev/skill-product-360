// product-360 bootstrap hook
// Injects a slim product knowledge reminder on agent:bootstrap events.
// Full PM methodology lives in SKILL.md and loads on-demand when the skill triggers.

const REMINDER_CONTENT = `## Product Knowledge Reminder

Product docs: \`memory/product-360/\` (canvas, personas, journeys, competitive notes).
When product topics come up, check those files before answering.

**Trigger the product-360 skill** for structured workflows (canvas building, persona creation, journey mapping).
**Delegate browser walkthroughs** to the browser sub-agent.

When product context is missing, offer to build it — don't guess.`.trim();

module.exports = {
  name: "product-360-bootstrap",
  events: ["agent:bootstrap"],
  handler(event) {
    if (event.type !== "agent:bootstrap") return;

    // Inject slim product knowledge reminder
    if (!event.context.bootstrapFiles) {
      event.context.bootstrapFiles = [];
    }

    event.context.bootstrapFiles.push({
      name: "PRODUCT_REMINDER.md",
      content: REMINDER_CONTENT,
    });
  },
};
