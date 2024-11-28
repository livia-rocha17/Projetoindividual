document.getElementById('botaoAdicionar').addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    const listaTarefas = document.getElementById('listaTarefas');
    const inputTarefa = document.getElementById('inputTarefa');

    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'tarefa';

    const span = document.createElement('span');
    span.textContent = textoTarefa;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'botaoRemover';
    botaoRemover.addEventListener('click', () => {
        listaTarefas.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(botaoRemover);
    listaTarefas.appendChild(li);

    inputTarefa.value = '';
}
