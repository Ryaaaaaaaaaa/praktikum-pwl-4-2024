function addTask() {
	const taskInput = document.getElementById('taskInput')
	const taskList = document.getElementById('taskList')
	const taskText = taskInput.value.trim()

	if (taskText !== '') {
		const li = document.createElement('li')
		li.className = 'flex justify-between items-center bg-gray-200 p-2 rounded'

		const taskSpan = document.createElement('span')
		taskSpan.textContent = taskText

		const buttonContainer = document.createElement('div')
		buttonContainer.className = 'space-x-2'

		const selesaiButton = document.createElement('button')
		selesaiButton.className = 'bg-green-500 text-white px-2 py-1 rounded'
		selesaiButton.textContent = 'SELESAI'
		selesaiButton.onclick = () => li.classList.toggle('line-through')

		const hapusButton = document.createElement('button')
		hapusButton.className = 'bg-red-500 text-white px-2 py-1 rounded'
		hapusButton.textContent = 'HAPUS'
		hapusButton.onclick = () => taskList.removeChild(li)

		buttonContainer.appendChild(selesaiButton)
		buttonContainer.appendChild(hapusButton)

		li.appendChild(taskSpan)
		li.appendChild(buttonContainer)

		taskList.appendChild(li)
		taskInput.value = ''
	}
}
