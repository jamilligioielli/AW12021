const form = document.querySelector('#lyrics_form')
const lyrics = document.querySelector('#lyrics')
form.addEventListener('submit', el => {
	el.preventDefault()
	doSubmit()
})

// Axios
function doSubmit() {
	axios
		.get(`https://api.lyrics.ovh/v1/${artist.value}/${song.value}`)
		.then(response => {
			lyrics.innerHTML = response.data.lyrics.replace(
				new RegExp('\n', 'g'),
				'<br>'
			)
		})
		.catch(error => console.log(error))
}
