<template>
  <v-container fluid>
    <explore-slider :highlights="highlights" />
	  <explore-masonry :explore="explore" />
  </v-container>
</template>

<script>
import ExploreSlider from '@/components/child/ExploreSlider.vue'
import ExploreMasonry from '@/components/child/ExploreMasonry.vue'

export default {
  components: {
    ExploreSlider,
    ExploreMasonry
  },
  name: 'Explore',
  data(){
  	return {
  		highlights: [],
  		explore: [],
  	}
  },
  /* www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/?key=[API_KEY]&format=json*/ // Highlited artists

  /* https://www.rijksmuseum.nl/api/en/collection?key=[API_KEY]&format=json&type=schilderij&toppieces=true&s=chronologic*/
  methods: {
  	take(){
      var per_page = 15
  		this.axios.get(`https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/?key=[API_KEY]&format=json`)
  		.then(response => {
  			this.highlights = response.data.contentPage.highlights
  		})

  		this.axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=[API_KEY]&format=json&f.dating.period=16&ps=${per_page}`)
  		.then(response => {
  			this.explore = response.data.artObjects
  		})
  	}
  },
  created(){
  	this.take()
  }
}
</script>