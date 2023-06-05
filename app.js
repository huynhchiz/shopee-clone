const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const popupDownloadElement = $('.popup-download')
const downloadElement = $('.nav-flex__download')
const popupNotiElement = $('.popup-noti')
const notiElement = $('.nav-links__noti')
const popupLanguageElement = $('.popup-language')
const languageElement = $('.nav-links__language')



const app = {
    handleHover() {
        //hover vào tải ứng dụng
        downloadElement.onmouseover = function() {
            popupDownloadElement.classList.add('popup-active')
        }
        downloadElement.onmouseout = function() {
            popupDownloadElement.classList.remove('popup-active')
        }
        popupDownloadElement.onmouseover = function() {
            popupDownloadElement.classList.add('popup-active')
        }
        popupDownloadElement.onmouseout = function() {
            popupDownloadElement.classList.remove('popup-active')
        }

        //hover vào thông báo
        notiElement.onmouseover = function() {
            popupNotiElement.classList.add('popup-active')
        }
        notiElement.onmouseout = function() {
            popupNotiElement.classList.remove('popup-active')
        }
        popupNotiElement.onmouseover = function() {
            popupNotiElement.classList.add('popup-active')
        }
        popupNotiElement.onmouseout = function() {
            popupNotiElement.classList.remove('popup-active')
        }

        //hover vào language
        languageElement.onmouseover = function() {
            popupLanguageElement.classList.add('popup-active')
        }
        languageElement.onmouseout = function() {
            popupLanguageElement.classList.remove('popup-active')
        }
        popupLanguageElement.onmouseover = function() {
            popupLanguageElement.classList.add('popup-active')
        }
        popupLanguageElement.onmouseout = function() {
            popupLanguageElement.classList.remove('popup-active')
        }
    },

    start() {
        this.handleHover()
    }
}

app.start()