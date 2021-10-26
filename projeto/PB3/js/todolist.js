// Todo
const Storage = {
	get() {
		return JSON.parse(localStorage.getItem('tomatorolist:tasks')) || []
	},

	set(tasks) {
		localStorage.setItem('tomatorolist:tasks', JSON.stringify(tasks))
	}
}

const Task = {
	all: Storage.get(),

	add(task) {
		Task.all.push(task)

		App.reload()
	},
	remove(index) {
		Task.all.splice(index, 1)
		App.reload()
	}
}

const DOM = {
	tasksContainer: document.querySelector('#todo #data-list ul'),

	addTask(task, index) {
		const li = document.createElement('li')
		li.innerHTML = DOM.innerHTMLTask(task, index)
		li.dataset.index = index

		DOM.tasksContainer.appendChild(li)
	},

	innerHTMLTask(task, index) {
		const html = `
		
			<li class="list-group-item d-flex
					justify-content-between
					align-items-center
					border-start-0 border-top-0 border-end-0 border-bottom
					rounded-0
					mb-2">
					<div class="d-flex align-items-center">
						<input class="
								form-check-input
								me-2
								bg-danger
								border-danger
							"
							type="checkbox"
						/>
						${task.description}
					</div>
					<span
						href=" "
						data-mdb-toggle="tooltip"
						title="Remove item"
						onclick="Task.remove(${index})">
						<i class="fas fa-times text-danger"></i>
					</span>
		</li>

		`
		return html
	},

	clearTasks() {
		DOM.tasksContainer.innerHTML = ''
	}
}

const Form = {
	description: document.querySelector('input#description'),

	getValues() {
		return {
			description: Form.description.value
		}
	},

	validateFields() {
		const description = Form.getValues()

		if (description.trim() === '') {
			throw new Error('Por favor, preencha todos os campos')
		}
	},

	formatValues() {
		let description = Form.getValues()

		return description
	},

	clearFields() {
		Form.description.value = ''
	},

	submit(event) {
		event.preventDefault()

		try {
			const task = Form.formatValues()

			Task.add(task)
			Form.clearFields()
		} catch (error) {
			alert(error.message)
		}
	}
}

const App = {
	init() {
		Task.all.forEach(DOM.addTask)
		Storage.set(Task.all)
	},
	reload() {
		DOM.clearTasks()
		App.init()
	}
}

App.init()
