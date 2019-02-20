<template>
 <masonry
  :cols="{default: 4, 1000: 3, 700: 2, 400: 2}"
  :gutter="{default: '30px', 700: '15px'}">
  <v-flex mb-2 d-flex v-for="(item, i) in explore" :key="i">
    <card v-if="item.webImage.url" :item="item"></card>
  </v-flex>
 </masonry>
</template>

<script>
import Card from '@/components/Cards.vue'

export default {
	props: ['explore'],
	components: {
		Card
	}
}
</script>