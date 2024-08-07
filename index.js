const prompt = require('prompt-sync')();
const { adicionarLivro, listarLivros, atualizarLivro, deletarLivro, buscarLivros } = require('./controle');

const menu = () => {
    console.log('\nMenu:');
    console.log('1. Adicionar livro');
    console.log('2. Listar livros');
    console.log('3. Atualizar livro');
    console.log('4. Deletar livro');
    console.log('5. Buscar livro');
    console.log('6. Sair');
    
    const opcao = prompt('Escolha uma opção: ');

    switch(opcao) {
        case '1':
            adicionarLivroPrompt();
            break;
        case '2':
            listarLivros();
            break;
        case '3':
            atualizarLivroPrompt();
            break;
        case '4':
            deletarLivroPrompt();
            break;
        case '5':
            buscarLivrosPrompt();
            break;
        case '6':
            console.log('Saindo...');
            return;
        default:
            console.log('Opção inválida. Tente novamente.');
    }
    menu();
};

const adicionarLivroPrompt = () => {
    const id = prompt('ID do livro: ');
    const title = prompt('Título do livro: ');
    const author = prompt('Autor do livro: ');
    const year = prompt('Ano de publicação: ');
    const genre = prompt('Gênero do livro: ');
    const yearNewVersions = prompt('Versões novas (separadas por vírgula): ').split(',');

    adicionarLivro({ id, title, author, year, genre, year_new_versions: yearNewVersions });
    console.log('Livro adicionado com sucesso.');
};

const atualizarLivroPrompt = () => {
    const id = prompt('ID do livro a ser atualizado: ');
    const dados = prompt('Novos dados (Título, Autor, Ano, Gênero, Versões Novas separados por vírgula): ').split(',');

    const [title, author, year, genre, year_new_versions] = dados;
    atualizarLivro(id, { title, author, year, genre, year_new_versions: year_new_versions.split(',') });
    console.log('Livro atualizado com sucesso.');
};

const deletarLivroPrompt = () => {
    const id = prompt('ID do livro a ser deletado: ');
    deletarLivro(id);
    console.log('Livro deletado com sucesso.');
};

const buscarLivrosPrompt = () => {
    const criterio = prompt('Critério de busca (title, author, year, genre): ');
    const valor = prompt('Valor a ser buscado: ');
    buscarLivros(criterio, valor);
};

menu();