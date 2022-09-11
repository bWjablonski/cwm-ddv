<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Id
        </th>
        <th class="text-left">
          Name
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in items"
          :key="item.id"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  import {mapActions} from "vuex";

export default {
    name: 'EntityView',
    props: ['name'],

    methods:{
      ...mapActions(["syncEntity"]),
    },
  mounted: async function (){
    await this.syncEntity(this.$props.name);
    this.items = this.$store.getters.entities[this.$props.name];
  },
    data: () => ({
      items: []
    }),
  }
</script>
