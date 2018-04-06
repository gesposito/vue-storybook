import Vue from "vue";

import { storiesOf } from "@storybook/vue";

storiesOf("Alert", module)
  .add("Esempi", () => ({
    template: `
      <section>
        <b-alert variant="success" show>Questo è un alert di <em>success</em>!</b-alert>
        <b-alert variant="danger" show>Questo è un alert di <em>danger</em>!</b-alert>
        <b-alert variant="warning" show>Questo è un alert di <em>warning</em>!</b-alert>
      </section>
    `
  }))
  .add("Link evidenziato", () => ({
    template: `
      <b-alert variant="danger" show>
        Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
      </b-alert>
    `
  }))
  .add("Contenuto aggiuntivo", () => ({
    template: `
      <b-alert variant="success" show>
        <h4 class="alert-heading">Avviso di successo!</h4>
        <p>Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.</p>
        <hr>
        <p class="mb-0">Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.</p>
      </b-alert>
    `
  }))
  .add("Chiusura", () => ({
    template: `
      <b-alert variant="warning"
        dismissible
        :show="showDismissibleAlert"
        @dismissed="showDismissibleAlert=false">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
      </b-alert>
    `,
    data() {
      return { showDismissibleAlert: true };
    }
  }));
