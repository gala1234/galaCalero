Vue.component('character', {
	props: ['name','image','house','alive'],
	template:`
	<div>
		<h2>{{name}}</h2>
		<img width="100" v-bind:src="image" v-bind:alt="name" />
		<h3>{{house}}</h3>
		<h3>{{alive}}</h3>
	</div>
	`
});
Vue.component('search', {
	template: `<input type="text" id="input" />`
})

const urlAPI = 'http://hp-api.herokuapp.com/api/characters';


// Vue.filter('filtrar',function(value){
// 	const listName = input.value
// 	return console.log(listName)
// });

new Vue ( {
	el: '.app',
	created: function() {
		this.consultarAPI();
	},
	data: {
		characters: []
		mensaje: ''
	},
	methods: {
		consultarAPI: function (){
			this.$http.get(urlAPI)
			.then(function(response){
				this.characters = response.data;
				// console.log(this.characters);
			})
		}
	}
});
