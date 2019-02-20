<template >
	<detail v-if="state" :detail="detail"></detail>
	<div v-else>Loading</div>
</template>

<script>
import Detail from '@/components/Detail.vue'
export default {
	props: ['item'],
	name: 'Single',
	components: {
		Detail
	},
	data(){
		return {
			detail: [],
			state: false,
		}
	},
	methods: {
		take(){
			this.axios.get(`https://www.rijksmuseum.nl/api/en/collection/${this.item}?key=[API_KEY]&format=json`)
			.then(response => {
				this.detail = response.data.artObject
				this.state = true
			})
		}
	},
	created(){
		this.take()
	},
	watch: {
		'$route.path': function(){
			this.take()
		}
	}
}
</script>