<template>
  <v-layout row wrap>
    <v-flex sm12>
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
    </v-flex>
    <v-container fluid>
      <v-flex xs12>
        <v-card>
          <v-layout>
            <v-flex xs12>
              <!-- Artist-Art detail -->
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ detail.principalMaker }}</div>
                  <div>{{ detail.label.makerLine }}</div>
                  <div>{{ detail.subTitle }}, {{ detail.physicalMedium }}</div>
                </div>
                <v-spacer></v-spacer>
                <v-flex xs4>
                  <v-btn icon v-for="(color, i) in colors" :key="i">
                    <v-icon :style="{ color: color}">fiber_manual_record</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>get_app</v-icon>
                  </v-btn>
                </v-flex>
              </v-card-title>
              <v-divider></v-divider>
              <!-- Releated art  -->
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
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-container>   
  </v-layout> 
</template>

<script>
import Card from '@/components/Cards.vue'

export default {
	props: ['detail'],
  components: {
    Card,
  },
  data(){
    return {
      show: false,
      size: false,
      artist: 'undefined',
      colors: [],
      technique: 'undefined',
      description: '',
      releated: []
    }
  },
  methods: {
    take(){
      this.artist = this.detail.principalMakers[0]
      this.colors = this.detail.normalized32Colors
      this.technique = this.detail.techniques[0]
      this.axios.get(`https://www.rijksmuseum.nl/api/en/collection?key=[API_KEY]&format=json&f.normalized32Colors.hex=${this.colors[0]}`)
      .then(reponse => {
        this.releated = reponse.data.artObjects
        if (this.detail.label.description !== null) {
          this.description = this.detail.label.description
        }else {
          this.description = this.detail.plaqueDescriptionEnglish
        }
        
      })
    }
  },
  created(){
    this.take()
  },

}
</script>