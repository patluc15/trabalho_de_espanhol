const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form')


const validate_input = ({target}) => {
   if(target.value.length > 2){
        button.removeAttribute('disabled');
   }
   else{
        button.setAttribute('disabled', '');
   }
}
    
const handle_submit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location =  'pages/game.html'
}

input.addEventListener('input', validate_input);
form.addEventListener('submit', handle_submit );