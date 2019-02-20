import Structure from  '@/api/Structure.js'

class Rijks {

	constructor(data){
		this.data = data
		for(let field in data){
			this[field] = data[field]
		}
		this.Structure = new Structure(this.data)
	}

	// View, 'Explore', dataType, 'highlightedArtists'
	//https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/?key=[API_KEY]&format=json
	
	highlightedArtists(){
		this.Structure.get(`https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/?key=[API_KEY]&format=json`)
		.then(response => {
			this.data = response.data.contentPage.highlights
		})
	}


	// View, 'Home', dataType, 'collectionWithColors'
	//https://www.rijksmuseum.nl/api/en/collection?key=[API_KEY]&format=json&ps=25&f.normalized32Colors.hex=%20%23367614

	collectionWithColors(){
		this.Structure.get(`https://www.rijksmuseum.nl/api/en/collection?key=[API_KEY]&format=json&ps=25&f.normalized32Colors`)
		.then(response => {
			this.data = response.data.artObjects
		})
	}


	// View, 'Single', dataType, 'singleCollectionDetail'
	//https://www.rijksmuseum.nl/api/en/collection/${this.item}?key=[API_KEY]&format=json

	detail(id){
		this.Structure.get(`https://www.rijksmuseum.nl/api/en/collection/${id}?key=[API_KEY]&format=json`)
		.then(response => {
			this.data = response.data.artObject
		})
	}


	// View-Component, 'Detail', dataType, 'releatedCollections'
	//https://www.rijksmuseum.nl/api/en/collection?key=[API_KEY]&format=json&f.normalized32Colors.hex=${this.colors[0]}

	releatedCollections(hexColors){
		this.Structure.get(`https://www.rijksmuseum.nl/api/en/collection?key=[API_KEY]&format=json&f.normalized32Colors.hex=${hexColors}`)
		.then(response => {
			this.data = reponse.data.artObjects

			/*const items = ['a', 'b', 'c', 'd', 'e', 'f']
			const valueToRemove = 'c'
			const filteredItems = items.filter(item => item !== valueToRemove)
			// ["a", "b", "d", "e", "f"]*/

			// TEST AŞAMASINDADIR.
			for(let i in response.data.artObjects){
				if(this.data.objectNumber === reponse.data.artObjects[i].objectNumber){
					this.data = this.data.filter(item => item !== this.data.objectNumber)
				}
			}
		})
	}
}


export default Rijks;