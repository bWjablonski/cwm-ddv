<template>
  <v-container>
    <v-row class="text-center">
      {{this.msg}}
      <!-- default entity - link, default mode - list -->
      <!-- @todo menu or top-bar to switch entities and view modes -->
      <!-- @rest should be generated based on vuetify, coming from schema-->
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeView',
    props: ['msg'],
    data: () => ({}),
  }
</script>
