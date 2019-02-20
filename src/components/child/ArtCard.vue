<template>
	<v-card dark>
    <!-- Art Image  -->
    <v-img
      :src="detail.webImage.url"
      :lazy-src="detail.webImage.url"
      contain
      max-height="720px">
      <v-layout
        slot="placeholder"
        fill-height
        align-center
        justify-center
        ma-0
      >
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center row>
          <!-- Art Title -->
          <v-flex sm8>
            <v-card-title primary-title >
              <div>
                <h3 class="headline text-md-center">
                  {{ detail.longTitle }}
                </h3>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <!-- Art Detail -->
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex sm12>
          <v-layout row align-center justify-center>
            <v-flex sm10>
              <v-card-text v-if="!show">
                <div>
                  <h4 class="text-md-center text-wrap">{{ description.slice(0,150) }}...</h4>
                </div>
              </v-card-text>
              <v-slide-y-transition>
                <v-card-text v-show="show">
                  <div>
                    <h4 class="text-wrap text-md-center">
                      {{ description }}
                    </h4>
                  </div>
                </v-card-text>
              </v-slide-y-transition> 
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-card-actions class="fill-height align-center justify-center">
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
	
</script>