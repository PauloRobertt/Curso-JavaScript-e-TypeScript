const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

function estruturaProject() {
    const container = document.querySelector('.container');
    const div = document.createElement('div');

    for (let i = 0; i < elementos.length; i++) {
        const { tag, texto } = elementos[i];

        const element = document.createElement(tag);
        
        element.innerText = texto;
        div.appendChild(element);
    }

    container.appendChild(div)
}

estruturaProject();
