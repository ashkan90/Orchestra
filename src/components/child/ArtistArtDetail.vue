<template>
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
    </v-flex>
  	</v-card-title>
</template>

<script>

</script>