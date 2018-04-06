<template>
  <section>
    <template v-for="variant in ['primary','secondary','success','danger','warning']">
      <b-badge
        :key="variant"
        :variant="variant"
        :pill="rounded"
        :href="link ? '#' : ''"
        class="capitalize mr-1"
      >
        {{variant}}
      </b-badge>
    </template>
  </section>
</template>

<script>
  export default {
    props: {
      rounded: Boolean,
      link: Boolean,
    }
  }
</script>

<style>
  .capitalize {
    text-transform: capitalize;
  }
</style>