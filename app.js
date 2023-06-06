const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const body = $('body')

const popupDownloadElement = $('.popup-download')
const downloadElement = $('.nav-flex__download')
const popupNotiElement = $('.popup-noti')
const notiElement = $('.nav-links__noti')
const popupLanguageElement = $('.popup-language')
const languageElement = $('.nav-links__language')
const searchInputBar = $('.search-input__bar')
const boxSearchResultBar = $('.box-search-result')
const searchResultBar = $('.search-result')
const searchText = $('#search-text')
const resultSearchText = $('.result-text')
const popupCardElement = $('.popup-cart')
const cartElement = $('.wrapper__shopcart i')



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

        //hover vào giỏ hàng
        cartElement.onmouseover = function() {
            popupCardElement.classList.add('popup-active')
        }
        cartElement.onmouseout = function() {
            popupCardElement.classList.remove('popup-active')
        }
        popupCardElement.onmouseover = function() {
            popupCardElement.classList.add('popup-active')
        }
        popupCardElement.onmouseout = function() {
            popupCardElement.classList.remove('popup-active')
        }
        
    },

    handleSearchBar() {
        searchText.onclick = function(e) {
            searchResultBar.classList.add('search-result-active')
        }
        
        body.onclick = function(e) {
            searchResultBar.classList.remove('search-result-active')
        }

        searchInputBar.onclick = function(e) {
            e.stopPropagation()
        }

        boxSearchResultBar.onclick = function(e) {
            e.stopPropagation()
        }


        searchText.placeholder = 'Đăng ký và nhận voucher bạn mới đến 70k!'
        resultSearchText.innerHTML = searchText.value || searchText.placeholder
        
        searchText.onkeyup = function(e) {
            if (searchText.value != '') {
                resultSearchText.innerHTML = `
                    <i class="fas fa-store"></i> Tìm Shop "
                    ${searchText.value}"
                `
                searchResultBar.style.height = 36 + 'px'
            } else {
                resultSearchText.innerHTML = searchText.placeholder
                searchResultBar.style.height = 44 + 'px'
            }
        }
    },

    

    start() {
        this.handleHover()

        this.handleSearchBar()
    }
}

app.start()