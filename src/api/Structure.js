import axios from 'axios'

class Structure {
	constructor(data) {
		this.originalData = data;
		for(let field in data){
			this[field] = data[field]
		}
	}

	data() {
		let data = {}
		for(let property in this.originalData){
			data[property] = this[property]
		}
		return data
	}

	reset(){
		for(let field in this.originalData){
			this[field] = ''
		}
	}

	submit(requestType, url){
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
			.then(response => {
				resolve(response)
			})
			.catch(error => {
				reject(error.response)
			})
		});
	}


	post(url){
		return this.submit('post', url)
	}

	get(url){
		return this.submit('get', url)
	}

	delete(url){
		return this.submit('delete', url)
	}

	patch(url){
		return this.submit('patch', url)
	}

	onSuccess(response){
		//console.log('success')
		//alert(response.data.message)
		this.originalData = response.data
		this.data()

		this.reset()
	}

}

export default Structure;