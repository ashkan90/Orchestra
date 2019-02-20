<template>
  <div id="app">
    <v-app light>
      <v-toolbar dense>
        <v-icon @click="$router.push({ name: 'home'})">home</v-icon>
  	    <v-toolbar-title>Karma-Museum</v-toolbar-title>
  	    <v-spacer></v-spacer>
  	    <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/art/explore">
            <v-icon left>explore</v-icon>
            Explore
          </v-btn>
  	    	<v-btn flat>
            <v-icon left>favorite</v-icon>
            Collections From Users
          </v-btn>
  	    </v-toolbar-items>
  	  </v-toolbar>
      <v-content>
      	<router-view/>
      </v-content>
    </v-app>
  </div>
</template>

