const main_menu = document.querySelector('.wr_main_win')
const account_menu = document.querySelector('.account-center')
const shop_menu = document.querySelector('.game-center')

function account(){
    account_menu.classList.add('on_win')
    shop_menu.classList.remove('on_win')

    main_menu.classList.add('off_win')
    shop_menu.classList.add('off_win')
}


function option(){
    shop_menu.classList.add('on_win')
    account_menu.classList.remove('on_win')

    main_menu.classList.add('off_win')
    shop_menu.classList.add('off_win')
}

function main(){
    main_menu.classList.remove('off_win')
    main_menu.classList.remove('on_win')


    account_menu.classList.remove('on_win')
    shop_menu.classList.remove('on_win')
    account_menu.classList.remove('off_win')
    shop_menu.classList.remove('off_win')
}















