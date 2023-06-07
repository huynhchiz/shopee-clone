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
const resultVoucherItem = $('.result-voucher')
const resultSearchText = $('.result-text')
const popupCardElement = $('.popup-cart')
const cartElement = $('.wrapper__shopcart i')
const leftBanner = $('.left-banners')
const bannerImg = $('.banner-img')
const bannerArrowLeft = $('.arrow-left')
const bannerArrowRight = $('.arrow-right')
const dotsBanner = $$('.dot')
const categories = $('.categories')
const secondBlockArrowLeft = $('.second-block__arrow-left')
const secondBlockArrowRight = $('.second-block__arrow-right')
const thirdBlockProductDiv = $('.third-block-products')
const thirdBlockArrowLeft = $('.third-block__arrow-left')
const thirdBlockArrowRight = $('.third-block__arrow-right')


const app = {
    //HEADER + BANNER + MENU
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
        
        //hover vào banner left + hover vào mũi tên
        leftBanner.onmouseover = function() {
            bannerArrowLeft.classList.add('display-arrows-banner')
            bannerArrowRight.classList.add('display-arrows-banner')
        },
        leftBanner.onmouseout = function() {
            bannerArrowLeft.classList.remove('display-arrows-banner')
            bannerArrowRight.classList.remove('display-arrows-banner')
        }

        bannerArrowLeft.onmouseover = function() {
            bannerArrowLeft.classList.add('arrow-active')
        }

        bannerArrowLeft.onmouseout = function() {
            bannerArrowLeft.classList.remove('arrow-active')
        }

        bannerArrowRight.onmouseover = function() {
            bannerArrowRight.classList.add('arrow-active')
        }

        bannerArrowRight.onmouseout = function() {
            bannerArrowRight.classList.remove('arrow-active')
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
            if (searchText.value !== '') {
                resultSearchText.innerHTML = `
                    <i class="fas fa-store"></i> Tìm Shop "
                    ${searchText.value}"
                `
                searchResultBar.style.height = 36 + 'px'
                resultVoucherItem.style.display = 'none'
            } else {
                resultSearchText.innerHTML = searchText.placeholder
                searchResultBar.style.height = 44 + 'px'
                resultVoucherItem.style.display = 'block'
            }
        }
    },

    handleBanner() {
        let currentIndexBanner = 1;
        function getCurrentBanner() {
            // bannerImg.style.animation = `slidelefttoright linear 0.5s`

            bannerImg.style.backgroundImage =
            `url(./css/img/banner/w${currentIndexBanner}.jpg)`

            if ($('.dot-active') !== dotsBanner[currentIndexBanner - 1]) {
                $('.dot-active').classList.remove('dot-active')
            }
            dotsBanner[currentIndexBanner - 1].classList.add('dot-active')
        }

        bannerArrowLeft.onclick = function() {
            if (currentIndexBanner > 1) {
                currentIndexBanner--
            } else {
                currentIndexBanner = 13
            }
            getCurrentBanner()
        }

        bannerArrowRight.onclick = function() {
            if (currentIndexBanner <= 12) {
                currentIndexBanner++
            } else {
                currentIndexBanner = 1
            }
            getCurrentBanner()
        }

        //banner tiến tới 1 sau mỗi 5 giây
        setInterval(function() {
            if (currentIndexBanner <= 12) {
                currentIndexBanner++
            } else {
                currentIndexBanner = 1
            }
            getCurrentBanner()
        }, 5000)

        //click vào dot banner
        for (let i = 0; i < dotsBanner.length; i++) {
            dotsBanner[i].onclick = function() {
                currentIndexBanner = i + 1
                getCurrentBanner()
            }
        }
    },

    //CONTENT
    handleSecondblock() {
        secondBlockArrowRight.onclick = function() {
            categories.style.animation = `slideCategoriesToRight 500ms ease forwards`
            setTimeout(function() {
                secondBlockArrowRight.classList.remove('second-block__arrow-active')
                secondBlockArrowLeft.classList.add('second-block__arrow-active')
            }, 600)
        }

        secondBlockArrowLeft.onclick = function() {
            categories.style.animation = `slideCategoriesToLeft 500ms ease forwards`
            setTimeout(function() {
                secondBlockArrowLeft.classList.remove('second-block__arrow-active')
                secondBlockArrowRight.classList.add('second-block__arrow-active')
            }, 600)
        }
    },

    listProductBlock3: [
        {name: "i1", url: "./css/img/block3/i1.jpg", price: "₫169.000", sold: 63},
        {name: "i2", url: "./css/img/block3/i2.jpg", price: "₫69.000", sold: 0},
        {name: "i3", url: "./css/img/block3/i3.jpg", price: "₫19.000", sold: 0},
        {name: "i4", url: "./css/img/block3/i4.jpg", price: "₫180.000", sold: 0},
        {name: "i5", url: "./css/img/block3/i5.jpg", price: "₫200.000", sold: 0},
        {name: "i6", url: "./css/img/block3/i6.jpg", price: "₫19.000", sold: 0},
        {name: "i7", url: "./css/img/block3/i7.jpg", price: "₫599.000", sold: 0},
        {name: "i8", url: "./css/img/block3/i8.jpg", price: "₫169.000", sold: 79},
        {name: "i9", url: "./css/img/block3/i9.jpg", price: "₫169.000", sold: 0},
        {name: "i10", url: "./css/img/block3/i10.jpg", price: "₫169.000", sold: 0},
        {name: "i11", url: "./css/img/block3/i11.jpg", price: "₫169.000", sold: 0},
        {name: "i12", url: "./css/img/block3/i12.jpg", price: "₫169.000", sold: 0},
        {name: "i13", url: "./css/img/block3/i13.jpg", price: "₫169.000", sold: 0},
        {name: "i14", url: "./css/img/block3/i14.jpg", price: "₫169.000", sold: 0},
        {name: "i15", url: "./css/img/block3/i15.jpg", price: "₫100.000", sold: 0},       
        {name: "i16", url: "./css/img/block3/i16.jpg", price: "₫999.000", sold: 0},       
    ],

    rederProductThirdBlock() {
        let html = ''
        for (let i = 0; i < this.listProductBlock3.length; i++) {
            let product = this.listProductBlock3[i]
            html += `
                <div class="third-block-products-item">
                    <img src="${product.url}">
                    <p>${product.price}</p>
                    <div class="third-block-sold-quantity" style="background: linear-gradient(90deg, #ee4d2d 
                        ${product.sold}%, #ffbda6 ${100 - product.sold}%)">${product.sold !== 0 ? "ĐÃ BÁN " +
                        product.sold : "ĐANG BÁN CHẠY"}
                    </div>
                </div>
            `
        }
        thirdBlockProductDiv.innerHTML = html
    },

    handleThirdBlock() {
        let numberTranslateX = 0
        thirdBlockArrowRight.onclick = function() {
            numberTranslateX += 1000
            thirdBlockProductDiv.style.transform = `translateX(-${numberTranslateX}px)`
            if(numberTranslateX === 1000) {
                setTimeout(function() {
                thirdBlockArrowLeft.classList.add('third-block__arrow-active')
            }, 600)
            } else if (numberTranslateX >= 2000) {
                setTimeout(function() {
                    thirdBlockArrowRight.classList.remove('third-block__arrow-active')
                    thirdBlockArrowLeft.classList.add('third-block__arrow-active')
                }, 600)
            }
        }

        thirdBlockArrowLeft.onclick = function() {
            if (numberTranslateX < 1999) {
                numberTranslateX -= 1000
                thirdBlockProductDiv.style.transform = `translateX(0px)`
                setTimeout(function() {
                    thirdBlockArrowLeft.classList.remove('third-block__arrow-active')
                }, 600)
            } else {
                numberTranslateX -= 1000
                thirdBlockProductDiv.style.transform = `translateX(-1000px)`
                setTimeout(function() {
                    thirdBlockArrowRight.classList.add('third-block__arrow-active')
                }, 600)
            }
        }

    },

    start() {
        this.handleHover()

        this.handleSearchBar()

        this.handleBanner()

        this.handleSecondblock()

        this.rederProductThirdBlock()

        this.handleThirdBlock()
    }
}

app.start()