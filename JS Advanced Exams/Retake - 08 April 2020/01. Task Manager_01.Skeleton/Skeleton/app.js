function solve() {
    const sections = Array.from(document.getElementsByTagName('section')).slice(1);
    const openSection = sections[0].getElementsByTagName('div')[1];
    const inProgressSection = sections[1].getElementsByTagName('div')[1];
    const completeSection = sections[2].getElementsByTagName('div')[1];
    const inputTask = document.getElementById('task');
    const inputDescription = document.getElementById('description');
    const inputDueDate = document.getElementById('date');
    const btnAdd = document.getElementById('add');

    btnAdd.addEventListener('click', addToOpen);

    function addToOpen(e) {
        e.preventDefault();

        if (inputTask.value === '' || 
            inputDescription.value === '' || 
            inputDueDate.value === '') {
            return;
        }

        const article = createOpenArticle();

        openSection.appendChild(article);
        inputTask.value = '';
        inputDescription.value = '';
        inputDueDate.value = '';
    }

    function createOpenArticle() {
        const startBtn = createElement('button', 'Start', {className: 'green'});
        startBtn.addEventListener('click', moveToInProgress);
        const deleteBtn = createElement('button', 'Delete', {className: 'red'});
        deleteBtn.addEventListener('click', deleteArticle);

        const articleToAdd = createElement('article', [
            createElement('h3', inputTask.value),
            createElement('p', 'Description: ' + inputDescription.value),
            createElement('p', 'Due Date: ' + inputDueDate.value),
            createElement('div', [
                startBtn,
                deleteBtn
            ], {className: 'flex'})
        ]);

        return articleToAdd;
    }

    function moveToInProgress(e) {
        e.preventDefault();

        const articleParts = Array.from(e.target.parentElement.parentElement.children).slice(0, 3);

        const btnDelete = createElement('button', 'Delete', {className: 'red'});
        btnDelete.addEventListener('click', deleteArticle);
        const btnFinish = createElement('button', 'Finish', {className: 'orange'});
        btnFinish.addEventListener('click', moveToComplete);

        const articleToAdd = createElement('article', [
            articleParts[0],
            articleParts[1],
            articleParts[2],
            createElement('div', [
                btnDelete,
                btnFinish
            ], {className: 'flex'})
        ]);

        e.target.parentElement.parentElement.remove();
        inProgressSection.appendChild(articleToAdd);
    }

    function moveToComplete(e) {
        e.preventDefault();

        const articleParts = Array.from(e.target.parentElement.parentElement.children).slice(0, 3);

        const articleToAdd = createElement('article', [
            articleParts[0],
            articleParts[1],
            articleParts[2]
        ]);

        e.target.parentElement.parentElement.remove();
        completeSection.appendChild(articleToAdd);
    }

    function deleteArticle(e) {
        e.preventDefault();
        
        e.target.parentElement.parentElement.remove();
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