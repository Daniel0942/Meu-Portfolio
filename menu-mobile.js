let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay=menu')
let fechar = document.getElementById('fechar')
let nav = document.getElementById('nav')

btnMenu.addEventListener('click', ()=>{       /* Pra abrir o menu*/ 
    menu.classList.add('abrir-menu')
})
fechar.addEventListener('click', ()=>{        /* Pra quando clicar no botão de fechar, ele fechar o menu */ 
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{       /* Pra quando clicar no menu, ele fechar */ 
    menu.classList.remove('abrir-menu')
})

nav.addEventListener('click', ()=>{          /* Pra quando clicar na tag nav(inicio, especialidades...), ele fechar o menu */ 
    menu.classList.remove('abrir-menu')
})