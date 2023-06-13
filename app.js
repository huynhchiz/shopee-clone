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
const bannerImgs = $('.banner-imgs')
const bannerImg = $('.banner-img')
const bannerImgimg = $('.banner-img img')
const bannerArrowLeft = $('.left-banners-arrow.arrow-left')
const bannerArrowRight = $('.left-banners-arrow.arrow-right')
const dotsBanner = $$('.dot')
const categories = $('.categories')
const secondBlockArrowLeft = $('.second-block__arrow-left')
const secondBlockArrowRight = $('.second-block__arrow-right')
const thirdBlockProductDiv = $('.third-block-products')
const thirdBlockArrowLeft = $('.third-block__arrow-left')
const thirdBlockArrowRight = $('.third-block__arrow-right')
const fourthBlockBanners = $('.fourth-block__content-left-banners')
const fourthBlockArrowLeft = $('.fourth-block-arrow.arrow-left')
const fourthBlockArrowRight = $('.fourth-block-arrow.arrow-right')
const fourthBlockDots = $$('.fb-dot')
const fourthBlockContentRightDiv = $('.fourth-block__content-right')
const fourthBlockContentRight = $('.fourth-block__content-right-main')
const fourthBlockContentRightItem = $('.fourth-block__content-right-item')
const fourthBlockContentArrowLeft = $('.fourth-block__arrow-left')
const fourthBlockContentArrowRight = $('.fourth-block__arrow-right')
const fifthBlockProducts = $('.fifth-block-products')
const fifthBlockArrowRight = $('.fifth-block__arrow-right')
const fifthBlockArrowLeft = $('.fifth-block__arrow-left')

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

    handleSlideBanner() {
        //render banners
        function renderBanner() {
            let html = ''
            for (let i = 0; i < 13; i++) {
                html += `
                    <div class="banner-img">
                        <img class="imgbanner" src="./css/img/banner/w${i+1}.jpg">
                    </div>
                `
            } 
            bannerImgs.innerHTML = html
        }
        renderBanner()

        let currentIndexBanner = 0;
        let pxTransOnebanner = 796.67;

        function slideToCurrentBanner() {
            let numberTranslateX = (currentIndexBanner * pxTransOnebanner)
            bannerImgs.style.transform = `translateX(-${numberTranslateX}px)`

            setTimeout(function() {
                if ($('.dot-active') !== dotsBanner[currentIndexBanner]) {
                    $('.dot-active').classList.remove('dot-active')
                }
                dotsBanner[currentIndexBanner].classList.add('dot-active')
            }, 500)
        }
        
        //click nút mũi tên trái
        bannerArrowLeft.onclick = function() {
            if (currentIndexBanner > 0) {
                currentIndexBanner--
            } else {
                currentIndexBanner = 12
            }
            slideToCurrentBanner()
        }

        //click nút mũi tên phải
        bannerArrowRight.onclick = function() {
            if (currentIndexBanner <= 11) {
                currentIndexBanner++
            } else {
                currentIndexBanner = 0
            }
            slideToCurrentBanner()
        }

        //click vào dot banner
        for (let i = 0; i < dotsBanner.length; i++) {
            dotsBanner[i].onclick = function() {
                currentIndexBanner = i
                slideToCurrentBanner()
            }
        }

        //banner tiến tới 1 sau mỗi 5 giây
        setInterval(function() {
            if (currentIndexBanner <= 11) {
                currentIndexBanner++
            } else {
                currentIndexBanner = 0
            }
            slideToCurrentBanner()
        }, 5000)
    },

    //CONTENT
    ////second-block
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

    ////third-block
    listProductBlock3: [
        {name: "i1", url: "./css/img/block3/i1.jpg", price: "₫169.000", sold: 63, discount: 50},
        {name: "i2", url: "./css/img/block3/i2.jpg", price: "₫69.000", sold: 0, discount: 56},
        {name: "i3", url: "./css/img/block3/i3.jpg", price: "₫19.000", sold: 0, discount: 12},
        {name: "i4", url: "./css/img/block3/i4.jpg", price: "₫180.000", sold: 5, discount: 45},
        {name: "i5", url: "./css/img/block3/i5.jpg", price: "₫200.000", sold: 0, discount: 78},
        {name: "i6", url: "./css/img/block3/i6.jpg", price: "₫19.000", sold: 0, discount: 90},
        {name: "i7", url: "./css/img/block3/i7.jpg", price: "₫599.000", sold: 0, discount: 12},
        {name: "i8", url: "./css/img/block3/i8.jpg", price: "₫169.000", sold: 79, discount: 5},
        {name: "i9", url: "./css/img/block3/i9.jpg", price: "₫169.000", sold: 0, discount: 67},
        {name: "i10", url: "./css/img/block3/i10.jpg", price: "₫169.000", sold: 0, discount: 80},
        {name: "i11", url: "./css/img/block3/i11.jpg", price: "₫169.000", sold: 10, discount: 88},
        {name: "i12", url: "./css/img/block3/i12.jpg", price: "₫169.000", sold: 0, discount: 50},
        {name: "i13", url: "./css/img/block3/i13.jpg", price: "₫169.000", sold: 0, discount: 11},
        {name: "i14", url: "./css/img/block3/i14.jpg", price: "₫169.000", sold: 0, discount: 56},
        {name: "i15", url: "./css/img/block3/i15.jpg", price: "₫100.000", sold: 0, discount: 50},       
        {name: "i16", url: "./css/img/block3/i16.jpg", price: "₫999.000", sold: 0, discount: 70},       
    ],

    rederProductThirdBlock() {
        let html = ''
        for (let i = 0; i < this.listProductBlock3.length; i++) {
            let product = this.listProductBlock3[i]
            html += `
                <div class="third-block-products-item">
                    <div class="third-block-mall">
                        <img class="mall-img" src="./css/img/mall.png">
                        <div class="triangle-mall"></div>
                        <div class="third-block-discount">
                            <p class="third-block-discount-percent">${product.discount}%</p>
                            <p class="third-block-discount-giam">GIẢM</p>
                        </div>
                        <div class="third-block-discount-tail"></div>
                        <img class="third-block-img" src="${product.url}">
                        <p class="third-block-price">${product.price}
                            ${product.sold > 50 ? '<img class="chayhang-img" src="./css/img/chayhang.png">' : '' }                            
                        </p>
                        <div class="third-block-sold-quantity" style="background: 
                            ${product.sold > 0 ?
                                'linear-gradient(90deg, #ee4d2d ' + product.sold + '%, #ffbda6 ' + (100 - product.sold) + '%)">' :
                                '#ffbda6">'}
                            ${product.sold !== 0 ? "ĐÃ BÁN " + product.sold : "ĐANG BÁN CHẠY"}
                            
                        </div>
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

    ////third-half-block
    handleThirdHalfBlock() {
        $('.thirdhalf-block__option1').onclick = function () {
            console.log('option1')
        }
        $('.thirdhalf-block__option2').onclick = function () {
            console.log('option2')
        }
        $('.thirdhalf-block__option3').onclick = function () {
            console.log('option3')
        }
    },

    ////fourth-block
    renderFourthBlockBanner() {
        let html = ''
        for (let i = 0; i < 5; i++) {
            html += `
                <div class="fourth-block__content-left-img-div">
                    <img class="fourth-block__content-left-img" src="./css/img/block4/block4-${i+1}.jpg">
                </div>
            `   
        } fourthBlockBanners.innerHTML = html
    },

    handleFourthBlockBanner() {
        let currentIndexBanner = 0;
        let pxTransOnebanner = 390;

        function handleFourthBlockDots() {
            if ($('.fb-dot-active') !== fourthBlockDots[currentIndexBanner]) {
                $('.fb-dot-active').classList.remove('fb-dot-active')
            }
            fourthBlockDots[currentIndexBanner].classList.add('fb-dot-active')
        }
        
        function slideToCurrentBanner() {
            let numberTranslateX = (currentIndexBanner * pxTransOnebanner)
            fourthBlockBanners.style.transform = `translateX(-${numberTranslateX}px)`

            setTimeout(handleFourthBlockDots, 500)
        }     

        function forwardBanner() {
            if (currentIndexBanner <= 3) {
                currentIndexBanner++
            } else {
                currentIndexBanner = 0
            }
            slideToCurrentBanner()
        }   

        //banner tiến tới 1 sau mỗi 5 giây
        let autoNextBanner = setInterval(forwardBanner, 5000)

        autoNextBanner

        fourthBlockArrowLeft.onclick = function() {
            if (currentIndexBanner > 0) {
                currentIndexBanner--
            } else {
                currentIndexBanner = 4
            }
            slideToCurrentBanner()
        }

        fourthBlockArrowRight.onclick = function() {                      
            forwardBanner()
        }

        // click vào dot banner
        for (let i = 0; i < fourthBlockDots.length; i++) {
            fourthBlockDots[i].onclick = function() {
                currentIndexBanner = i
                slideToCurrentBanner()            
            }
        }
    },

    listFourthBlockContent: [
        {idCate: 1, src: "./css/img/block4/content/c1.png", description: "Mua là có quà"},
        {idCate: 2, src: "./css/img/block4/content/c2.png", description: "Giảm đến 50%"},
        {idCate: 3, src: "./css/img/block4/content/c3.png", description: "Mua 1 tặng 2"},
        {idCate: 4, src: "./css/img/block4/content/c4.png", description: "Mua là có quà"},
        {idCate: 5, src: "./css/img/block4/content/c5.png", description: "Mua 1 tặng 1"},
        {idCate: 6, src: "./css/img/block4/content/c6.png", description: "Deal bia chất"},
        {idCate: 7, src: "./css/img/block4/content/c7.png", description: "Sale chào hè 50%"},
        {idCate: 8, src: "./css/img/block4/content/c8.png", description: "Siêu ưu đãi độc"},
        {idCate: 9, src: "./css/img/block4/content/c9.png", description: "Nội y Sabina 9k"},
        {idCate: 10, src: "./css/img/block4/content/c10.png", description: "Voucher đến 1 triệu"},
        {idCate: 11, src: "./css/img/block4/content/c11.png", description: "Mua là có quà"},
        {idCate: 12, src: "./css/img/block4/content/c12.png", description: "Collagen da khỏe t"},
        {idCate: 13, src: "./css/img/block4/content/c13.png", description: "Mua 2 tặng 1"},
        {idCate: 14, src: "./css/img/block4/content/c14.png", description: "Mua là có quà"},
        {idCate: 15, src: "./css/img/block4/content/c15.png", description: "Ưu đãi đến 50%"},
        {idCate: 16, src: "./css/img/block4/content/c15.png", description: "Ưu đãi đến 50%"},
    ],

    handleFourthBlockContent() {
        function render() {
            let html = ''
            for (let i = 0; i < app.listFourthBlockContent.length - 1; i+=2) {
                html += `
                    <div class="fourth-block__content-right-item">
                        <div class="fourth-block-item1">
                            <div class="fourth-block-item1-inside">
                                <img src="${app.listFourthBlockContent[i].src}">
                                <p>${app.listFourthBlockContent[i].description}</p>
                            </div>
                        </div>
                        <div class="fourth-block-item2">
                            <div class="fourth-block-item2-inside">
                                ${i >= 13 ? '<div class="last-item-fourthblock"><label>Xem tất cả</label><i class="fas fa-angle-right"></i></div>' : 
                                '<img src="'+ app.listFourthBlockContent[i+1].src + '"><p>'+ app.listFourthBlockContent[i+1].description +'</p>'}
                            </div>
                        </div>
                    </div>
                `
            } fourthBlockContentRight.innerHTML = html
        }
        render()
        
        let countTranslate = 0;
        let pxTranslateAtOne = 800;
        let numberTranslateX = (countTranslate * pxTranslateAtOne)

        fourthBlockContentArrowRight.onclick = function() {
            countTranslate++
            fourthBlockContentRight.style.transform = `translateX(-800px)`
            setTimeout(function() {
                fourthBlockContentArrowLeft.classList.add('fourth-block__arrow-active')
                fourthBlockContentArrowRight.classList.remove('fourth-block__arrow-active')
            }, 600)
        }

        fourthBlockContentArrowLeft.onclick = function() {
            countTranslate++
            fourthBlockContentRight.style.transform = `translateX(0)`
            setTimeout(function() {
                fourthBlockContentArrowLeft.classList.remove('fourth-block__arrow-active')
                fourthBlockContentArrowRight.classList.add('fourth-block__arrow-active')
            }, 600)
        }


    },

    ////fifth-block
    listFifthBlockProduct: [
        {pid: 1, url: "./css/img/block5/i1.jpg", quantitysold: "Bán 15k+ / tháng", des: "Bảng Viết Tự Xóa Màn Hình Led Thông Minh"},
        {pid: 2, url: "./css/img/block5/i2.jpg", quantitysold: "Bán 46k+ / tháng", des: "Áo Thun Nữ Ngắn Tay"},
        {pid: 3, url: "./css/img/block5/i3.jpg", quantitysold: "Bán 21k+ / tháng", des: "Áo Thun Nam Có Cổ"},
        {pid: 4, url: "./css/img/block5/i4.jpg", quantitysold: "Bán 4k+ / tháng", des: "Keycap Pbt"},
        {pid: 5, url: "./css/img/block5/i5.jpg", quantitysold: "Bán 138k+ / tháng", des: "Đầu Motor Quạt"},
        {pid: 6, url: "./css/img/block5/i6.jpg", quantitysold: "Bán 2k+ / tháng", des: "Khẩu Trang Unicham"},
        {pid: 7, url: "./css/img/block5/i7.jpg", quantitysold: "Bán 139k+ / tháng", des: "Áo Thun Polo Nam Ngắn Tay"},
        {pid: 8, url: "./css/img/block5/i8.jpg", quantitysold: "Bán 118k+ / tháng", des: "Bông Tẩy Trang 3 Lớp Cotton Pads"},
        {pid: 9, url: "./css/img/block5/i9.jpg", quantitysold: "Bán 16k+ / tháng", des: "Chân Váy Xếp Ly Dài"},
        {pid: 10, url: "./css/img/block5/i10.jpg", quantitysold: "Bán 115k+ / tháng", des: "Cuộn Len"},
        {pid: 11, url: "./css/img/block5/i11.jpg", quantitysold: "Bán 11k+ / tháng", des: "Áo Thun Croptop Tay Ngắn"},
    ],

    renderFifthBlockProduct() {
        let html = ''
        for (let i = 0; i < this.listFifthBlockProduct.length; i++) {
            html += `
                <div class="fifth-block-product">
                    <div class="fifth-block-product-item">
                        <img class="fifth-block-top-img" src="./css/img/block5/top.png" alt="">
                        <img class="fifth-block-product-item-img" src="${this.listFifthBlockProduct[i].url}">
                        <p class="fifth-block-product-item-quantitysold">${this.listFifthBlockProduct[i].quantitysold}</p>
                    </div>
                    <p class="fifth-block-product-des">${this.listFifthBlockProduct[i].des}</p>
                </div>
            `
        } fifthBlockProducts.innerHTML = html
    },

    handleFifthBlockProduct() {
        fifthBlockArrowRight.onclick = function() {
            fifthBlockProducts.style.transform = `translateX(-1000px)`
            setTimeout(function(){
                fifthBlockArrowLeft.classList.add('fifth-block__arrow-active')
                fifthBlockArrowRight.classList.remove('fifth-block__arrow-active')
            }, 600)
        }

        fifthBlockArrowLeft.onclick = function() {
            fifthBlockProducts.style.transform = `translateX(0px)`
            setTimeout(function(){
                fifthBlockArrowRight.classList.add('fifth-block__arrow-active')
                fifthBlockArrowLeft.classList.remove('fifth-block__arrow-active')
            }, 600)
        }
    },

    start() {
        //header
        this.handleHover()

        this.handleSearchBar()

        //banner + menu
        this.handleSlideBanner()

        //main content
        this.handleSecondblock()

        this.rederProductThirdBlock()

        this.handleThirdBlock()

        this.handleThirdHalfBlock()

        this.renderFourthBlockBanner()

        this.handleFourthBlockBanner()

        this.handleFourthBlockContent()

        this.renderFifthBlockProduct()

        this.handleFifthBlockProduct()
    }
}

app.start()