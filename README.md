[10:15, 28/11/2024] Livia Rocha: <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Tarefas</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Gerenciador de Tarefas</h1>
        <div class="entrada-tarefa">
            <input type="text" id="inputTarefa" placeholder="Digite uma nova tarefa">
            <button id="botaoAdicionar">Adicionar</button>
        </div>
        <ul id="listaTarefas"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
[10:15, 28/11/2024] Livia Rocha: body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
}

h1 {
    color: #333;
}

.entrada-tarefa {
    display: flex;
    margin-bottom: 20px;
}

#inputTarefa {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#botaoAdicionar {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
}

#botaoAdicionar:hover {
    background-color: #218838;
}

#listaTarefas {
    list-style: none;
    padding: 0;
}

.tarefa {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
}

.botaoRemover {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
}

.botaoRemover:hover {
    background-color: #c82333;
}
[10:16, 28/11/2024] Livia Rocha: document.getElementById('botaoAdicionar').addEventListener('click', adicionarTarefa);

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
