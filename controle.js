let livros = [];

const adicionarLivro = (livro) => {
    livros.push(livro);
};

const listarLivros = () => {
    if (livros.length === 0) {
        console.log('Nenhum livro cadastrado.');
    } else {
        livros.forEach(livro => {
            console.log(`ID: ${livro.id}, Título: ${livro.title}, Autor: ${livro.author}, Ano: ${livro.year}, Gênero: ${livro.genre}, Versões Novas: ${livro.year_new_versions.join(', ')}`);
        });
    }
};

const atualizarLivro = (id, novosDados) => {
    const index = livros.findIndex(livro => livro.id === id);
    if (index !== -1) {
        livros[index] = { ...livros[index], ...novosDados };
    } else {
        console.log('Livro não encontrado.');
    }
};

const deletarLivro = (id) => {
    livros = livros.filter(livro => livro.id !== id);
};

const buscarLivros = (criterio, valor) => {
    const livrosEncontrados = livros.filter(livro => livro[criterio] && livro[criterio].toLowerCase().includes(valor.toLowerCase()));
    if (livrosEncontrados.length === 0) {
        console.log('Nenhum livro encontrado.');
    } else {
        livrosEncontrados.forEach(livro => {
            console.log(`ID: ${livro.id}, Título: ${livro.title}, Autor: ${livro.author}, Ano: ${livro.year}, Gênero: ${livro.genre}, Versões Novas: ${livro.year_new_versions.join(', ')}`);
        });
    }
};

module.exports = { adicionarLivro, listarLivros, atualizarLivro, deletarLivro, buscarLivros };