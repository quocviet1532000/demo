const addfriendBox = document.querySelector('.header__nav-addfriend')
const notiBox = document.querySelector('.header__nav-noti')
const messengerBox = document.querySelector('.header__nav-messenger')
const accountBox = document.querySelector('.header__nav-account')
const messengerShow = document.querySelector('.container__messenger')
const messengerHeading = document.querySelector('.container__messenger-heading')
const searchBox = document.querySelector('.header__search-input')


const friendBtn = document.querySelector('.addfriend')
const notiBtn = document.querySelector('.noti')
const messengerBtn = document.querySelector('.messenger')
const accountBtn = document.querySelector('.account')
const searchBtn = document.querySelector('.header__search-box')

friendBtn.onclick = function() {
    addfriendBox.classList.toggle('open')
    notiBox.classList.remove('open')
    messengerBox.classList.remove('open')
    accountBox.classList.remove('open')
}

notiBtn.onclick = function() {
    notiBox.classList.toggle('open')
    messengerBox.classList.remove('open')
    addfriendBox.classList.remove('open')
    accountBox.classList.remove('open')
    searchBtn.classList.remove('open')
    searchBtn.classList.remove('open')


}

messengerBtn.onclick = function() {
    messengerBox.classList.toggle('open')
    notiBox.classList.remove('open')
    addfriendBox.classList.remove('open')
    accountBox.classList.remove('open')
    searchBtn.classList.remove('open')

}

accountBtn.onclick = function() {
    accountBox.classList.toggle('open')
    addfriendBox.classList.remove('open')
    notiBox.classList.remove('open')
    messengerBox.classList.remove('open')
    searchBtn.classList.remove('open')

}

searchBox.onclick = function() {
    searchBtn.classList.toggle('open')
    accountBox.classList.remove('open')
    addfriendBox.classList.remove('open')
    notiBox.classList.remove('open')
    messengerBox.classList.remove('open')
}



messengerBox.onclick = function() {
    searchShow.style.transform = 'translateY(0)'
}