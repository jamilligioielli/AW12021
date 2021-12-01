fetch('https://rickandmortyapi.com/api/character', {
	method: 'GET'
})
	.then(response => response.json())
	.then(function (json) {
		const doc = document.querySelector('#characterSection')

		json.results.map(function (results) {
			doc.innerHTML +=
				`
        		<div class="card my-3 bg-dark border-light" style="width: 15rem;">
				 <img class="card-img-top img-fluid" src =` + results.image + `  > 
					<div class="card-body text-light"> 
						<div class='card-header text-center bg-success fw-bolder fst-italic'>` +
							results.name +
					`  </div> 
						<div class="card-text text-light text-center"> 	
					` +
							results.status + ` - ` + results.species +
					`
						</div>
						<div class="text-light text-center"> 
						Gender: 
							` +
							results.gender +
					`
						</div>
					</div>
					
				</div>
        `
		})
	})


