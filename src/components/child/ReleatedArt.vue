<template>
  <v-flex xs12>
	  <v-container fluid grid-list-md>
      <v-card-title primary-title>
        <div>
          <h3 class="headline">Releated on this Art</h3>
        </div>
      </v-card-title>
      <masonry
        v-if="releated.length > 0"
        :cols="{default: 4, 1000: 3, 700: 2, 400: 2}"
        :gutter="{default: '30px', 700: '15px'}">
        <v-flex mb-2 d-flex v-for="(item, i) in releated" :key="i">
          <card :item="item"></card>
        </v-flex>
      </masonry>
    </v-container>
  </v-flex> 
</template>

<script>
	
</script>