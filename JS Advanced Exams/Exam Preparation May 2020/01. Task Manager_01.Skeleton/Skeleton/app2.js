function solve() {

    const sections = Array.from(document.getElementsByTagName('section')).slice(1);
    const openSection = sections[0].getElementsByTagName('div')[1]; //.item(1)
    const inProgressSection = sections[1].getElementsByTagName('div')[1]; //.item(1)
    const completeSection = sections[2].getElementsByTagName('div')[1]; //.item(1)
    const inputTask = document.getElementById('task');
    const inputDescription = document.getElementById('description');
    const inputDueDate = document.getElementById('date');
    const btnAdd = document.getElementById('add');

    btnAdd.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        const taskName = inputTask.value.trim();
        const taskDesc = inputDescription.value.trim();
        const taskDate = inputDueDate.value.trim();

        if (taskName.length === 0 || taskDesc.length === 0 && taskDate.length === 0) {
            return;
        }

        const startBtn = createElement('button', 'Start', {
            className: 'green'
        });
        const finishBtn = createElement('button', 'Finish', {
            className: 'orange'
        });
        const deleteBtn = createElement('button', 'Delete', {
            className: 'red'
        });

        const btnDiv = createElement('div', [
            startBtn,
            deleteBtn
        ], {
            className: 'flex'
        });

        const task = createElement('article', [
            createElement('h3', inputTask.value),
            createElement('p', 'Description: ' + inputDescription.value),
            createElement('p', 'Due Date: ' + inputDueDate.value),
            btnDiv
        ]);

        startBtn.addEventListener('click', () => {
            inProgressSection.appendChild(task);
            startBtn.remove();
            btnDiv.appendChild(finishBtn);
        });

        finishBtn.addEventListener('click', () => {
            completeSection.appendChild(task);
            btnDiv.remove();
        });

        deleteBtn.addEventListener('click', () => {
            task.remove();
        });

        openSection.appendChild(task);


    }

    function createElement(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }

            result.appendChild(node);
        }

        return result;
    }
}