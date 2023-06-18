Number.prototype.format = function(){
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
 };

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
const popupCartElement = $('.popup-cart')
const cartElement = $('.wrapper__shopcart')
const leftBanner = $('.left-banners')
const bannerImgs = $('.banner-imgs')
const bannerImg = $('.banner-img')
const bannerImgimg = $$('.banner-img img')
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
const sixthBlockContentProducts = $('.sixth-block__content-products')
const footerContentCategory = $('.footer-content-category-content')
const minichatSmall = $('.mini-chat-with-admin-unclick')
const minichatBig = $('.mini-chat-with-admin-clicked')
const arrowSlideSmallChat = $('.mini-chat-with-admin-clicked-title-right-ic1')
const arrowSlideBigChat = $('.mini-chat-with-admin-clicked-title-right-ic2')
const arrowHideBigChat = $('.mini-chat-with-admin-clicked-title-right-ic3')
const miniChatImg = $('.mini-chat-with-admin-clicked-main-img')

const app = {
    //HEADER + BANNER + MENU
    handleHoverHeader() {
        notiElement.onmouseover = () => {
            popupNotiElement.style.display = 'block'
            popupNotiElement.style.animation = 'minichat-showup ease 150ms forwards'
        }
        notiElement.onmouseout = () => {
            popupNotiElement.style.animation = 'minichat-hide ease 150ms forwards'
        }

        languageElement.onmouseover = () => {
            popupLanguageElement.style.display = 'block'
            popupLanguageElement.style.animation = 'minichat-showup ease 150ms forwards'
        }
        languageElement.onmouseout = () => {
            popupLanguageElement.style.animation = 'minichat-hide ease 150ms forwards'
        }

        cartElement.onmouseover = () => {
            popupCartElement.style.display = 'block'
            popupCartElement.style.animation = 'minichat-showup ease 150ms forwards'
        }
        cartElement.onmouseout = () => {
            popupCartElement.style.animation = 'minichat-hide ease 150ms forwards'
        }

    },

    handleSearchBar() {
        searchText.onclick = function(e) {
            searchResultBar.classList.add('search-result-active')
            boxSearchResultBar.style.zIndex = "9999"
        }
        
        body.onclick = function(e) {
            searchResultBar.classList.remove('search-result-active')
            boxSearchResultBar.style.zIndex = "0"
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
        function renderBanner() {
            let html = ''
            for (let i = 0; i < 13; i++) {
                html += `
                    <div class="banner-img">
                        <img class="imgbanner" src="./css/img/banner/w${i}.jpg">
                    </div>
                `
            } 
            bannerImgs.innerHTML = 
            `
                <div class="banner-img">
                    <img class="imgbanner" src="./css/img/banner/w${12}.jpg">
                </div>
            ` + 
            html +
            `
                <div class="banner-img">
                    <img class="imgbanner" src="./css/img/banner/w${0}.jpg">
                </div>
            ` 
        }
        renderBanner()

        let index = 0       
        
        function slideToCurrentDotBanner() {            
            setTimeout(function() {
                if ($('.dot-active') !== dotsBanner[index]) {
                    $('.dot-active').classList.remove('dot-active')
                }
                dotsBanner[index].classList.add('dot-active')
            }, 500)
        }

        function checkIndexMax() {
            setTimeout(function() {
                if(index === 13) {
                    bannerImgs.style.transition = `none`
                    index = 0;
                    bannerImgs.style.transform = `translateX(-${100 + (index * 100)}%)`
                    console.log(index)
                }
            }, 500)
        }
        function checkIndexMin() {
            setTimeout(function() {
                if(index === -1) {
                    bannerImgs.style.transition = `none`
                    index = 12;
                    bannerImgs.style.transform = `translateX(-${100 + (index * 100)}%)`
                    console.log(index)
                }
            }, 500)
        }

        bannerArrowRight.onclick = function() {
            index++
            bannerImgs.style.transition = `500ms ease`
            bannerImgs.style.transform = `translateX(-${100 + (index * 100)}%)`
            console.log(index)
            checkIndexMax()
            slideToCurrentDotBanner()
        }

        bannerArrowLeft.onclick = function() {
            index--
            bannerImgs.style.transition = `500ms ease`
            bannerImgs.style.transform = `translateX(-${100 + (index * 100)}%)`
            console.log(index)
            checkIndexMin()
            slideToCurrentDotBanner()
        }
        
        //click vào dot hiện banner
        for (let i = 0; i < dotsBanner.length; i++) {
            dotsBanner[i].onclick = function() {
                index = i
                bannerImgs.style.transform = `translateX(-${100 + (index * 100)}%)`
                console.log(index)
                slideToCurrentDotBanner()
            }
        }

        setInterval(function() {
            index++
            bannerImgs.style.transition = `500ms ease`
            bannerImgs.style.transform = `translateX(-${100 + (index * 100)}%)`
            console.log(index)
            checkIndexMax()
            slideToCurrentDotBanner()
        }, 5000)
    }
    ,

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
                    <img class="fourth-block__content-left-img" src="./css/img/block4/block4-${i}.jpg">
                </div>
            `   
        } fourthBlockBanners.innerHTML = 
        `
            <div class="fourth-block__content-left-img-div">
                <img class="fourth-block__content-left-img" src="./css/img/block4/block4-${4}.jpg">
            </div>
        ` +
        html +
        `
            <div class="fourth-block__content-left-img-div">
                <img class="fourth-block__content-left-img" src="./css/img/block4/block4-${0}.jpg">
            </div>
        `
    },

    handleFourthBlockBanner() { 
        let index = 0   
        function slideToCurrentDotBanner() {            
            setTimeout(function() {
                if ($('.fb-dot-active') !== fourthBlockDots[index]) {
                    $('.fb-dot-active').classList.remove('fb-dot-active')
                }
                fourthBlockDots[index].classList.add('fb-dot-active')
            }, 500)
        }

        function checkIndexMax() {
            setTimeout(function() {
                if(index === 5) {
                    fourthBlockBanners.style.transition = `none`
                    index = 0;
                    fourthBlockBanners.style.transform = `translateX(-${100 + (index * 100)}%)`
                    console.log(index)
                }
            }, 500)
        }

        function checkIndexMin() {
            setTimeout(function() {
                if(index === -1) {
                    fourthBlockBanners.style.transition = `none`
                    index = 4;
                    fourthBlockBanners.style.transform = `translateX(-${100 + (index * 100)}%)`
                    console.log(index)
                }
            }, 500)
        }

        fourthBlockArrowRight.onclick = function() {
            index++
            fourthBlockBanners.style.transition = `500ms ease`
            fourthBlockBanners.style.transform = `translateX(-${100 + (index * 100)}%)`
            console.log(index)
            checkIndexMax()
            slideToCurrentDotBanner()
        }

        fourthBlockArrowLeft.onclick = function() {
            index--
            fourthBlockBanners.style.transition = `500ms ease`
            fourthBlockBanners.style.transform = `translateX(-${100 + (index * 100)}%)`
            console.log(index)
            checkIndexMin()
            slideToCurrentDotBanner()
        }
        
        //click vào dot hiện banner
        for (let i = 0; i < fourthBlockDots.length; i++) {
            fourthBlockDots[i].onclick = function() {
                index = i
                fourthBlockBanners.style.transform = `translateX(-${100 + (index * 100)}%)`
                console.log(index)
                slideToCurrentDotBanner()
            }
        }

        setInterval(function() {
            index++
            fourthBlockBanners.style.transition = `500ms ease`
            fourthBlockBanners.style.transform = `translateX(-${100 + (index * 100)}%)`
            console.log(index)
            checkIndexMax()
            slideToCurrentDotBanner()
        }, 5000)
        
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

    ////sixth-block
    listSixBlockProduct: [
        {pid: 1, name: "Tai nghe Bluetooth M10 Pro, Tai nghe không dây M10 Pro phiên bản nâng cấp Pin trâu, chạm cảm ứng",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leqivbzdtgaa75_tn",
        price: 119000, sold: 121, discount: 21, flashsale: false},
        {pid: 2, name: "Vỏ bảo vệ hộp tai nghe bằng silicon dẻo cao cấp cho AirPods Pro 2nd Airpods pro / Airpod 3 / Airpod 1/2（Not Airpods)",
        url: "https://down-vn.img.susercontent.com/file/41a3a6eb048036feb7f4c6eb534c1a1a_tn",
        price: 9000, sold: 1300, discount: 10, flashsale: true},
        {pid: 3, name: "Áo Phông In Chữ SAINT Áo Thun Nam Tay Lỡ Unisex Form Rộng Cao Cấp 100% Thấm Hút Mồ Hôi Hot Trend 2023 ABC",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lg2j0add9nqi82_tn",
        price: 13000, sold: 121, discount: 50, flashsale: false},
        {pid: 4, name: "Dép nam nữ quai ngang đúc chữ CD thời trang sành điệu, dép cao cấp, mẫu mới nhất, hot trend, hithot 2023",
        url: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh7tgu32kzxv73_tn",
        price: 2400, sold: 947, discount: 56, flashsale: true},
        {pid: 5, name: "Loa bluetooth mini 311 BINTECH không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
        url: "https://down-vn.img.susercontent.com/file/86b8dcbdbbb78a8453922910804434ec_tn",
        price: 99000, sold: 1500, discount: 34, flashsale: false},
        {pid: 6, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 7, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 8, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 9, name: "Tai nghe Bluetooth M10 Pro, Tai nghe không dây M10 Pro phiên bản nâng cấp Pin trâu, chạm cảm ứng",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leqivbzdtgaa75_tn",
        price: 119000, sold: 121, discount: 21, flashsale: false},
        {pid: 10, name: "Vỏ bảo vệ hộp tai nghe bằng silicon dẻo cao cấp cho AirPods Pro 2nd Airpods pro / Airpod 3 / Airpod 1/2（Not Airpods)",
        url: "https://down-vn.img.susercontent.com/file/41a3a6eb048036feb7f4c6eb534c1a1a_tn",
        price: 9000, sold: 1300, discount: 10, flashsale: true},
        {pid: 11, name: "Áo Phông In Chữ SAINT Áo Thun Nam Tay Lỡ Unisex Form Rộng Cao Cấp 100% Thấm Hút Mồ Hôi Hot Trend 2023 ABC",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lg2j0add9nqi82_tn",
        price: 13000, sold: 121, discount: 50, flashsale: false},
        {pid: 12, name: "Dép nam nữ quai ngang đúc chữ CD thời trang sành điệu, dép cao cấp, mẫu mới nhất, hot trend, hithot 2023",
        url: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh7tgu32kzxv73_tn",
        price: 2400, sold: 947, discount: 13, flashsale: true},
        {pid: 13, name: "Loa bluetooth mini 311 BINTECH không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
        url: "https://down-vn.img.susercontent.com/file/86b8dcbdbbb78a8453922910804434ec_tn",
        price: 99000, sold: 1500, discount: 34, flashsale: false},
        {pid: 14, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 15, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 16, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 17, name: "Tai nghe Bluetooth M10 Pro, Tai nghe không dây M10 Pro phiên bản nâng cấp Pin trâu, chạm cảm ứng",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leqivbzdtgaa75_tn",
        price: 119000, sold: 121, discount: 21, flashsale: false},
        {pid: 18, name: "Vỏ bảo vệ hộp tai nghe bằng silicon dẻo cao cấp cho AirPods Pro 2nd Airpods pro / Airpod 3 / Airpod 1/2（Not Airpods)",
        url: "https://down-vn.img.susercontent.com/file/41a3a6eb048036feb7f4c6eb534c1a1a_tn",
        price: 9000, sold: 1300, discount: 10, flashsale: true},
        {pid: 19, name: "Áo Phông In Chữ SAINT Áo Thun Nam Tay Lỡ Unisex Form Rộng Cao Cấp 100% Thấm Hút Mồ Hôi Hot Trend 2023 ABC",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lg2j0add9nqi82_tn",
        price: 13000, sold: 121, discount: 50, flashsale: false},
        {pid: 20, name: "Dép nam nữ quai ngang đúc chữ CD thời trang sành điệu, dép cao cấp, mẫu mới nhất, hot trend, hithot 2023",
        url: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh7tgu32kzxv73_tn",
        price: 2400, sold: 947, discount: 12, flashsale: true},
        {pid: 21, name: "Loa bluetooth mini 311 BINTECH không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
        url: "https://down-vn.img.susercontent.com/file/86b8dcbdbbb78a8453922910804434ec_tn",
        price: 99000, sold: 1500, discount: 34, flashsale: false},
        {pid: 22, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 23, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 24, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 25, name: "Tai nghe Bluetooth M10 Pro, Tai nghe không dây M10 Pro phiên bản nâng cấp Pin trâu, chạm cảm ứng",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leqivbzdtgaa75_tn",
        price: 119000, sold: 121, discount: 21, flashsale: false},
        {pid: 26, name: "Vỏ bảo vệ hộp tai nghe bằng silicon dẻo cao cấp cho AirPods Pro 2nd Airpods pro / Airpod 3 / Airpod 1/2（Not Airpods)",
        url: "https://down-vn.img.susercontent.com/file/41a3a6eb048036feb7f4c6eb534c1a1a_tn",
        price: 9000, sold: 1300, discount: 10, flashsale: true},
        {pid: 27, name: "Áo Phông In Chữ SAINT Áo Thun Nam Tay Lỡ Unisex Form Rộng Cao Cấp 100% Thấm Hút Mồ Hôi Hot Trend 2023 ABC",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lg2j0add9nqi82_tn",
        price: 13000, sold: 121, discount: 50, flashsale: false},
        {pid: 28, name: "Dép nam nữ quai ngang đúc chữ CD thời trang sành điệu, dép cao cấp, mẫu mới nhất, hot trend, hithot 2023",
        url: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh7tgu32kzxv73_tn",
        price: 2400, sold: 947, discount: 12, flashsale: true},
        {pid: 29, name: "Loa bluetooth mini 311 BINTECH không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
        url: "https://down-vn.img.susercontent.com/file/86b8dcbdbbb78a8453922910804434ec_tn",
        price: 99000, sold: 1500, discount: 34, flashsale: false},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},
        {pid: 30, name: "Quạt tản nhiệt G6 Làm mát điện thoại Phụ kiện chơi game Pubg Mobile giá rẻ cho điện thoại di động",
        url: "https://down-vn.img.susercontent.com/file/29b434ddd879def894707a0880a441ff_tn",
        price: 81000, sold: 851, discount: 19, flashsale: false},
        {pid: 31, name: "Áo Sơmi BASIC CỔ VEST FULLTAG | Sơ Mi Lụa Mềm CNK 100% | CHUẨN CAO CẤP",
        url: "https://down-vn.img.susercontent.com/file/6b5d7dab6e8d64b6bf6d9210833d8119_tn",
        price: 85000, sold: 22300, discount: 50, flashsale: false},
        {pid: 32, name: "Dép đúc Bánh Mì Nam Nữ Hình Gấu chất liệu EVA cao cấp không thấm nước đế cao 5cm - VeoStore",
        url: "https://down-vn.img.susercontent.com/file/vn-11134201-23030-52h666xe5fov0b_tn",
        price: 75000, sold: 2800, discount: 50, flashsale: true},

    ],

    renderSixthBlockContent() {
        let html = ''
        for (let i =0; i < 48; i++) {
            let product = this.listSixBlockProduct[i]
            html += `
            <div class="sixth-block__content-item-div">
            <div class="sixth-block__content-item-border">

                <div class="sixth-block__content-item">
                    <div class="sixth-block__content-item-main">
                        <img class="sixth-block__content-item-main-img" src="${product.url}" alt="">
                        <p class="sixth-block__content-item-main-favourite">Yêu thích</p>
                        <div class="sixth-block__content-item-main-favourite-under"></div>
                        <div class="sixth-block__content-item-main-discount">
                            <p class="sixth-block__content-item-main-discount-percent">${product.discount}%</p>
                            <p class="sixth-block__content-item-main-discount-giam">GIẢM</p>
                        </div>
                    </div>

                    <div class="sixth-block__content-item-info">
                        <p class="sixth-block__content-item-info-name">${product.name}</p>
                        <div class="sixth-block__content-item-info-undername">
                            <p class="sixth-block__content-item-info-undername-price">₫${product.price.format()}</p>
                            <p class="sixth-block__content-item-info-undername-sold">Đã bán ${product.sold.format()}</p>
                        </div>
                    </div>
                </div>

                <div class="sixth-block__content-item-hover-findmore">
                    <p>Tìm sản phẩm tương tự</p>
                 </div>                        
            </div>
        </div>
            `
        } sixthBlockContentProducts.innerHTML = html
    },

    //CONTENT-footer
    listFooterCategory: [
        {name: "Thời trang nam", list: [
            "Áo Khoác","Áo Vest và Blazer","Áo Hoodie, Áo Len & Áo Nỉ","Quần Jeans","Quần Dài/Quần Âu",
            "Quần Short","Áo","Áo Ba Lỗ","Đồ Lót","Đồ Ngủ","Đồ Bộ","Vớ/Tất","Trang Phục Truyền Thống","Đồ Hóa Trang","Trang Phục Ngành Nghề",
            "Khác","Trang Sức Nam","Kính Mắt Nam","Thắt Lưng Nam","Cà vạt & Nơ cổ","Phụ Kiện Nam"
        ]},
        {name: "thời trang nữ", list: [
            "Quần","Quần đùi","Chân váy","Quần jeans","Đầm/Váy","Váy cưới","Đồ liền thân",
            "Áo khoác, Áo choàng & Vest","Áo len & Cardigan","Hoodie và Áo nỉ","Bộ","Đồ lót","Đồ ngủ","Áo",
            "Đồ tập","Đồ Bầu","Đồ truyền thống","Đồ hóa trang","Vải","Vớ/ Tất","Khác"
        ]},
        {name: "điện thoại & phụ kiện", list: [
            "Điện thoại","Máy tính bảng","Pin Dự Phòng","Pin Gắn Trong, Cáp và Bộ Sạc",
            "Ốp lưng, bao da, Miếng dán điện thoại","Bảo vệ màn hình","Đế giữ điện thoại",
            "Thẻ nhớ","Sim","Phụ kiện khác","Thiết bị khác"
        ]},
        {name: "mẹ & bé", list: [
            "Đồ dùng du lịch cho bé","Đồ dùng ăn dặm cho bé","Phụ kiện cho mẹ","Chăm sóc sức khỏe mẹ",
            "Đồ dùng phòng tắm & Chăm sóc cơ thể bé","Đồ dùng phòng ngủ cho bé","An toàn cho bé",
            "Thực phẩm cho bé","Chăm sóc sức khỏe bé","Tã & bô em bé","Đồ chơi","Bộ & Gói quà tặng",
            "Khác","Sữa công thức trên 24 tháng","Sữa công thức 0-24 tháng tuổi"
        ]},
        {name: "thiết bị điện tử", list: [
            "Thiết bị đeo thông minh","Phụ kiện tivi","Máy Game Console","Phụ kiện Console","Đĩa game",
            "Linh phụ kiện","Tai nghe nhét tai","Loa","Tivi","Tivi Box","Headphones"
        ]},
        {name: "NHÀ CỬA VÀ ĐỜI SỐNG", list: [
            "Chăn, Ga, Gối & Nệm","Đồ nội thất","Trang trí nhà cửa","Dụng cụ & Thiết bị tiện ích",
            "Đồ dùng nhà bếp và hộp đựng thực phẩm","Đèn","Ngoài trời & Sân vườn","Đồ dùng phòng tắm",
            "Vật phẩm thờ cúng","Đồ trang trí tiệc","Chăm sóc nhà cửa và giặt ủi","Sắp xếp nhà cửa",
            "Dụng cụ pha chế","Tinh dầu thơm phòng","Đồ dùng phòng ăn"
        ]},
        {name: "máy tính & laptop", list: [
            "Máy Tính Bàn","Màn Hình","Linh Kiện Máy Tính","Thiết Bị Lưu Trữ","Thiết Bị Mạng",
            "Máy In, Máy Scan & Máy Chiếu","Phụ Kiện Máy Tính","Laptop","Khác","Gaming"
        ]},
        {name: "sắc đẹp", list: [
            "Chăm sóc da mặt","Tắm & chăm sóc cơ thể","Trang điểm","Chăm sóc tóc",
            "Dụng cụ & Phụ kiện Làm đẹp","Vệ sinh răng miệng","Nước hoa","Chăm sóc nam giới",
            "Khác","Chăm sóc phụ nữ","Bộ sản phẩm làm đẹp"
        ]},
        {name: "máy ảnh & máy quay phim", list: [
            "Máy ảnh - Máy quay phim","Camera giám sát & Camera hệ thống","Thẻ nhớ","Ống kính",
            "Phụ kiện máy ảnh","Máy bay camera & Phụ kiện"
        ]},
        {name: "sức khỏe", list: [
            "Vật tư y tế","Chống muỗi & xua đuổi côn trùng","Thực phẩm chức năng","Tã người lớn",
            "Hỗ trợ làm đẹp","Hỗ trợ tình dục","Dụng cụ massage và trị liệu","Khác"
        ]},
        {name: "đồng hồ", list: [
            'Đồng Hồ Nam','Đồng Hồ Nữ','Bộ Đồng Hồ & Đồng Hồ Cặp','Đồng Hồ Trẻ Em','Phụ Kiện Đồng Hồ',"Khác"
        ]},
        {name: "giày dép nữ", list: [
            "Bốt","Giày Thể Thao/ Sneaker","Giày Đế Bằng","Giày Cao Gót","Giày Đế Xuồng","Xăng-đan Và Dép",
            "Phụ Kiện Giày","Giày Khác"
        ]},
        {name: "giày dép nam", list: [
            "Bốt","Giày Thể Thao/ Sneakers","Giày Sục","Giày Tây Lười",
            "Giày Oxfords & Giày Buộc Dây","Xăng-đan và Dép","Phụ kiện giày dép","Khác"
        ]},
        {name: "túi ví nữ", list: [
            "Ba Lô Nữ","Cặp Laptop","Ví Dự Tiệc & Ví Cầm Tay","Túi Đeo Hông & Túi Đeo Ngực",
            "Túi Tote","Túi Quai Xách","Túi Đeo Chéo & Túi Đeo Vai","Ví/Bóp Nữ","Phụ Kiện Túi","Khác"
        ]},
        {name: "thiết bị điện gia dụng", list: [
            "Đồ gia dụng nhà bếp","Đồ gia dụng lớn","Máy hút bụi & Thiết bị làm sạch",
            "Quạt & Máy nóng lạnh","Thiết bị chăm sóc quần áo","Khác",
            "Máy xay, ép, máy đánh trứng trộn bột, máy xay thực phẩm","Bếp điện"
        ]},
        {name: "phụ kiện & trang sức nữ", list: [
            "Nhẫn","Bông tai","Khăn choàng","Găng tay","Phụ kiện tóc","Vòng tay & Lắc tay","Lắc chân","Mũ",
            "Dây chuyền","Kính mắt","Kim loại quý","Thắt lưng","Cà vạt & Nơ cổ","Phụ kiện thêm","Bộ phụ kiện",
            "Khác","Vớ/ Tất","Ô/Dù"
        ]},
        {name: "thể thao & du lịch", list: [
            "Vali","Túi du lịch","Phụ kiện du lịch","Dụng Cụ Thể Thao & Dã Ngoại","Giày Thể Thao",
            "Thời Trang Thể Thao & Dã Ngoại","Phụ Kiện Thể Thao & Dã Ngoại","Khác"
        ]},
        {name: "bách hóa online", list: [
            "Đồ ăn vặt","Đồ chế biến sẵn","Nhu yếu phẩm","Nguyên liệu nấu ăn","Đồ làm bánh",
            "Sữa - trứng","Đồ uống","Ngũ cốc & mứt","Các loại bánh","Đồ uống có cồn","Bộ quà tặng",
            "Thực phẩm tươi sống và thực phẩm đông lạnh","Khác"
        ]},
        {name: "ô tô & xe máy & xe đạp", list: [
            "Xe đạp, xe điện","Mô tô, xe máy","Xe Ô tô","Mũ bảo hiểm","Phụ kiện xe máy",
            "Phụ kiện xe đạp","Phụ kiện bên trong ô tô","Dầu nhớt & dầu nhờn","Phụ tùng ô tô",
            "Phụ tùng xe máy","Phụ kiện bên ngoài ô tô","Chăm sóc ô tô","Dịch vụ cho xe"
        ]},
        {name: "nhà sách online", list: [
            "Sách Tiếng Việt ","Sách ngoại văn ","Gói Quà ","Bút viết ","Dụng cụ học sinh & văn phòng ",
            "Màu, Họa Cụ và Đồ Thủ Công ","Sổ và Giấy Các Loại ","Quà Lưu Niệm ",
            "Nhạc cụ và phụ kiện âm nhạc"
        ]},
        {name: "balo & túi ví nam", list: [
            "Ba Lô Nam","Ba Lô Laptop Nam","Túi & Cặp Đựng Laptop","Túi Chống Sốc Laptop Nam","Túi Tote Nam",
            "Cặp Xách Công Sở Nam","Ví Cầm Tay Nam","Túi Đeo Hông & Túi Đeo Ngực Nam","Túi Đeo Chéo Nam",
            "Bóp/Ví Nam","Khác"
        ]},
        {name: "thời trang trẻ em", list: [
            "Trang phục bé trai","Trang phục bé gái","Giày dép bé trai","Giày dép bé gái","Khác",
            "Quần áo em bé","Giày tập đi & Tất sơ sinh","Phụ kiện trẻ em"
        ]},
        {name: "đồ chơi", list: [
            "Đồ chơi mô hình","Đồ chơi giải trí","Đồ chơi giáo dục","Đồ chơi cho trẻ sơ sinh & trẻ nhỏ",
            "Đồ chơi vận động & ngoài trời","Búp bê & Đồ chơi nhồi bông"
        ]},
        {name: "giặt giũ & chăm sóc nhà cửa", list: [
            "Giặt giũ & Chăm sóc nhà cửa","Giấy vệ sinh, khăn giấy","Vệ sinh nhà cửa","Vệ sinh bát đĩa",
            "Dụng cụ vệ sinh","Chất khử mùi, làm thơm","Thuốc diệt côn trùng","Túi, màng bọc thực phẩm",
            "Bao bì, túi đựng rác"
        ]},
        {name: "chăm sóc thú cưng", list: [
            "Thức ăn cho thú cưng","Phụ kiện cho thú cưng","Vệ sinh cho thú cưng","Quần áo thú cưng",
            "Chăm sóc sức khỏe","Làm đẹp cho thú cưng","Khác"
        ]},
        {name: "voucher & dịch vụ", list: [
            "Nhà hàng & Ăn uống","Sự kiện & Giải trí","Nạp tiền tài khoản","Sức khỏe & Làm đẹp","Gọi xe",
            "Khóa học","Du lịch & Khách sạn","Mua sắm","Mã quà tặng Shopee","Thanh toán hóa đơn","Dịch vụ khác"
        ]},
        {name: "dụng cụ và thiết bị tiện ích", list: [
            "Dụng cụ cầm tay","Dụng cụ điện và thiết bị lớn","Thiết bị mạch điện","Vật liệu xây dựng",
            "Thiết bị và phụ kiện xây dựng"
        ]},
    ],

    renderFooterCategory() {
        function chunkArray(myArray, chunk_size) {
            var results = [];

            while (myArray.length) {
                results.push(myArray.splice(0, chunk_size));
            }

            return results;
        }

        let newList = chunkArray(app.listFooterCategory, 5)
        console.log(newList)
        let htmls = ''
        for (let i = 0; i < newList.length; i++) {
            let html = ''
            for (let j = 0; j < newList[i].length; j++) {
                let htmlp = ''
                for (let y = 0; y < newList[i][j].list.length; y++) {
                    htmlp += `<p>${newList[i][j].list[y]}</p>`
                }   
                html += `
                    <div class="footer-category-column-div">
                        <h2>${newList[i][j].name}</h2>
                        <div class="footer-category-column-div-items">
                            ${htmlp}
                        </div>
                    </div>
                `
            }   
            htmls += `
                <div class="footer-content-category-content-column">
                    ${html}
                </div>
            `
        }  footerContentCategory.innerHTML = htmls;
    },

    handleMiniChat() {
        minichatSmall.onclick = () => {
            minichatBig.style.animation = 'minichat-showup ease 250ms'
            minichatSmall.style.display = 'none'
            minichatBig.style.display = 'block'
        }

        arrowSlideSmallChat.onclick = () => {
            arrowSlideSmallChat.classList.remove('mini-chat-active-icon-slide')
            arrowSlideBigChat.classList.add('mini-chat-active-icon-slide')
            minichatBig.style.width = '222px'
            miniChatImg.style.scale = '0.5'
        }

        arrowSlideBigChat.onclick = () => {
            arrowSlideBigChat.classList.remove('mini-chat-active-icon-slide')
            arrowSlideSmallChat.classList.add('mini-chat-active-icon-slide')
            minichatBig.style.width = '632px'
            miniChatImg.style.scale = '1'
        }

        arrowHideBigChat.onclick = () => {
            setTimeout(function() {
                minichatSmall.style.display = 'flex'
                minichatBig.style.display = 'none'
            }, 250)
            minichatBig.style.animation = 'minichat-hide ease 250ms forwards'
        }

        miniChatImg.onclick = () => {
            window.open('https://www.facebook.com/profile.php?id=100044276865706', '_blank')
        }

    },

    start() {
        //header
        this.handleHoverHeader()

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

        this.renderSixthBlockContent()

        this.renderFooterCategory()

        //minichat
        this.handleMiniChat()
    }
}

app.start()