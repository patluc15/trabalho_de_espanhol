const grid = document.querySelector('.grid');

const verbos = [

    'oid',
    'traigan',
    've',
    'construyan',
    'conoced',
    'cae',
    'seguid',
    'siente',
    'conduzca',
    'elija',
    'destruye',
];

const create_element = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;
    return element;

}


const create_card = (verbo) => {

    const card = create_element('div', 'card');
    const front = create_element('div', 'face front');
    const back = create_element('div', 'face back');

    front.style.backgroundImage = `url('../images/${verbo}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);

    return card;
}

const load_game = () => {

    verbos.forEach((verbo) => {

        const card = create_card(verbo);
        grid.appendChild(card);

    });

}

load_game();

