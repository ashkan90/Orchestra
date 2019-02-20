<template>
  <v-container fluid grid-list-md>
    <masonry
      :cols="{default: 4, 1000: 3, 700: 2, 400: 2}"
      :gutter="{default: '30px', 700: '15px'}">
      <v-flex mb-2 d-flex v-for="(item, i) in tmp.data" :key="i">
        <card v-if="item.webImage.url" :item="item"></card>
      </v-flex>
    </masonry>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Cards.vue'
import Rijks from '@/util/Rijks.js'

export default {
  name: 'home',
  components: {
    Card
  },
  data(){
    return {
      tmp: new Rijks({}),
    }
  },
  methods: {
    take(){
      this.tmp.collectionWithColors()
    },
  },
  created(){
    this.take()
  },
}
</script>
