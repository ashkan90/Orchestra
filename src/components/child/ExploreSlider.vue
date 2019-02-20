<template>
	<carousel 
    :paginationEnabled="false"
    :scrollPerPage="true"
    :perPageCustom="[[480, 2], [768, 3]]">
  	  <slide v-for="(item, i) in highlights" :key="i">
  	  	<v-container>
  	  	  <v-layout row wrap>
  	  	    <v-flex sm12>
	  	  	  <v-card flat to="">
	  	  	    <v-img :src="item.image.url">
	  	  	    </v-img>
	  	  	    <v-card-title primary-title>
	  	  	      <h3>{{ item.page.title }}</h3>
	  	  	    </v-card-title>	  		
	  	  	  </v-card>
	  	  	</v-flex>
  	  	  </v-layout>
  	  	</v-container>	
  	  </slide>
  	</carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
	props: ['highlights'],
	components: {
		Carousel,
		Slide
	}
}
</script>