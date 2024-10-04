document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // valores dos campos de entrada
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    // verifica se o campo nomr tem pelo menos duas palavras (nome e sobrenome)
    if (nome.split(' ').length < 2) {
        alert('Por favor, insira o nome completo (nome e sobrenome).');
        return;
    }

    // verifica se o telefone ja existe na tabela
    const contactList = document.getElementById('contactList');
    let isDuplicatePhone = false;
    const rows = contactList.getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const existingPhone = cells[1].textContent;

        if (existingPhone === telefone) {
            isDuplicatePhone = true;
            break;
        }
    }

    if (isDuplicatePhone) {
        alert('Esse número de telefone já foi adicionado por outro contato!');
        return;
    }

    // cria uma nova linha na tabela para o contato
    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = nome;
    const phoneCell = document.createElement('td');
    phoneCell.textContent = telefone;

    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);

    contactList.appendChild(newRow);

    // limpa os canmpos de entrada
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});
