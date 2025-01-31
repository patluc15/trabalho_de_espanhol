const grid = document.querySelector('.grid');

const cards = [

    'oid',
    'traigan',
    've',
    'construyan',
    'conoced',
    'cae',
    'seguid',
    'siente',
    'conduzca',
    'elijja',
    'destruye';

]

const create_element = (tag, className) => {

    const element = document.createElement(tag);
    element.className = className;
    return element;

}


const create_card = () => {

    const card = create_element('div', 'card');
    const front = create_element('div', 'face front');
    const back = create_card('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);

    return card;
}

const load_game = () => {

    cards.forEach(() => );

}

