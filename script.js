let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let contar = list.length
let ativo = 0

next.onclick = () => {
    const removerat = document.querySelector('.ativo')
    removerat.classList.remove('ativo')
    
    ativo = ativo >= contar -1? 0: ativo + 1
    list[ativo].classList.add('ativo')
}


prev.onclick = () => {
    const removerat = document.querySelector('.ativo')
    removerat.classList.remove('ativo')

    ativo = ativo <= 0 ? contar -1: ativo -1 
    list[ativo].classList.add('ativo')
}


