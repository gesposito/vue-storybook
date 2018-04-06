import { storiesOf } from "@storybook/vue";

import BadgeExample from "./BadgeExample.vue";
import BadgeVariantsExample from "./BadgeVariantsExample.vue";

storiesOf("Badge", module)
  .add("Esempi", () => ({
    components: { BadgeExample },
    template: '<badge-example :rounded="true"></badge-example>'
  }))
  .add("Notifiche", () => ({
    template: `
      <b-button variant="primary">
        Notifiche <b-badge variant="light">4</b-badge>
      </b-button>
    `
  }))
  .add("Variazioni contestuali", () => ({
    components: { BadgeVariantsExample },
    template: `
      <badge-variants-example>
      </badge-variants-example>
    `
  }))
  .add("Badges arrotondati", () => ({
    components: { BadgeVariantsExample },
    template: `
      <badge-variants-example :rounded="true">
      </badge-variants-example>
    `
  }))
  .add("Link", () => ({
    components: { BadgeVariantsExample },
    template: `
      <badge-variants-example :link="true">
      </badge-variants-example>
    `
  }));
