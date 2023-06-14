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
const sixthBlockContentProducts = $('.sixth-block__content-products')

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

        this.renderSixthBlockContent()
    }
}

app.start()