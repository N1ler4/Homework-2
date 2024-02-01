let menu = document.querySelector(".menu")
let katalog = document.querySelector(".katalog")

menu.addEventListener('click' , () => {

    if(katalog.classList.contains('katalog-none') == true){
        katalog.classList.remove('katalog-none')
    }else{
        katalog.classList.add('katalog-none')
    }

})