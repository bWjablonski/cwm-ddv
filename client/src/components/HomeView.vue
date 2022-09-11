<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
        search="false"
    >
      <v-container class="py-0 fill-height">
        <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
        ></v-avatar>

        <v-btn
            v-for="link in links"
            :key="link"
            text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                    v-for="item in items"
                    :key="item"
                    link
                >
                  <v-list-item-content>
                    <v-list-item-title @click="reloadEntity">
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                    link
                    color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
              <EntityView name="links"></EntityView>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import EntityView from "@/components/EntityView";

  export default {
    name: 'HomeView',
    components: {
      EntityView
    },
    methods:
        {
          reloadEntity: (e) => {
            this.activeEntity = e;
          }
        },
    data: () => ({
      activeEntity: null,
      links: [
        'Data',
        'Logout'
      ],
      items: [
          'Links',
          'Tasks'
      ]
    }),
  }
</script>
