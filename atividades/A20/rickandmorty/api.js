const doc = document.querySelector('#characterSection')
axios
	.get(`https://rickandmortyapi.com/api/character`)
	.then(({ data: { results } }) => {
		const html = results.map(
			item =>
				`
        		<div class="card my-3 bg-dark border-light" style="width: 15rem;">
				 <img class="card-img-top img-fluid" src =` +
				item.image +
				`  > 
					<div class="card-body text-light"> 
						<div class='card-header text-center bg-success fw-bolder fst-italic'>` +
				item.name +
				`  </div> 
						<div class="card-text text-light text-center"> 	
					` +
				item.status +
				` - ` +
				item.species +
				`
						</div>
						<div class="text-light text-center"> 
						Gender: 
							` +
				item.gender +
				`
						</div>
					</div>
					
				</div>
        `
		)

		doc.innerHTML = html.join('')
	})
	.catch(error => console.log(error))
