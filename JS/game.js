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
    'oid2',
    'traigan2',
    've2',
    'construyan2',
    'conoced2',
    'cae2',
    'seguid2',
    'siente2',
    'conduzca2',
    'elija2',
    'destruye2',
];

const create_element = (tag, className) => {


    const element = document.createElement(tag);
    element.className = className;
    return element;

}

let first_card = '';
let second_card = '';

const check_endgame = () => {
    const disabled_cards = document.querySelectorAll('.disabled-card');

    if (disabled_cards.length == 22){
        alert('Parabéns, voccê completou o jogo');
    }

}

const check_cards = () => {

    let first_verb = first_card.getAttribute('data-verb');
    let second_verb = second_card.getAttribute('data-verb');

    if (first_verb == second_verb + '2' || second_verb == first_verb + '2'){
        
        first_card.firstChild.classList.add('disabled-card');
        second_card.firstChild.classList.add('disabled-card');

        first_card = '';
        second_card = '';

        check_endgame();

    }
    else{

        setTimeout(() => {
            
            first_card.classList.remove('reveal-card');
            second_card.classList.remove('reveal-card');
        
            first_card = '';
            second_card = '';

        }, 1000);

    }

}

const reveal_card = ( { target } ) => {

    if (target.parentNode.className.includes('reveal-card')){

        return;

    }

    if (first_card == ''){

        target.parentNode.classList.add('reveal-card');
        first_card = target.parentNode;
    }
    else if (second_card == ''){

        target.parentNode.classList.add('reveal-card');
        second_card = target.parentNode;

        check_cards();

    }
    

}

const create_card = (verbo) => {

    const card = create_element('div', 'card');
    const front = create_element('div', 'face front');
    const back = create_element('div', 'face back');

    front.style.backgroundImage = `url('../images/${verbo}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', reveal_card);
    card.setAttribute('data-verb', verbo);

    grid.appendChild(card);

    return card;
}

const load_game = () => {

    const shuffled_array = verbos.sort(() => Math.random() - 0.5);

    shuffled_array.forEach((verbo) => {

        const card = create_card(verbo);
        grid.appendChild(card);

        

    });

}

load_game();


