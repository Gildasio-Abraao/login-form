function button_cadastro()  {
    let back = document.querySelector('.back_cadastro');
    let login = document.querySelector('#tela_login');

    back.classList.toggle('animation_cadastro');
    login.classList.toggle('index');
}
function button_login()  {
  let backLogin = document.querySelector('.back_login');
  let signup = document.querySelector('#tela_login');
  
  backLogin.classList.toggle('animation_login');
  signup.classList.toggle('index');
}
