<template>
<v-card 
  width="100" 
  max-with="300" 
  flat
  :to="link()">
  <v-img
  :src="item.webImage.url"
  :lazy-src="item.webImage.url"
  >
    <v-layout
      slot="placeholder"
      fill-height
      align-center
      justify-center
      ma-0
    >
      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
    </v-layout>
  </v-img>
  <v-card-text >
    <div class="text-truncate">{{ item.title }}</div>
  </v-card-text>
</v-card>
</template>

<script>
export default {
	props: ['item'],
  methods: {
    link(){
      return `/art/object/${this.item.objectNumber}`
    }
  },
  
}
</script>