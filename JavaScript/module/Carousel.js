export function Carousel(){
    // 圖片索引（幾張圖片）
    let index = 0;
    // 取得圖片元素 宣告「常數」變數 ; 常數指的是「值不能更改」
    const images = document.querySelectorAll('#Banners .Images');
    // 計算圖片總數（圖片張數）
    const totalImages = images.length;

    // 上一張 下一張按鈕
    document.getElementById('NextBtn').addEventListener('click', showNextImage);
    document.getElementById('PrevBtn').addEventListener('click', showPreviousImage);

    // 下一張圖片的函數（右手邊按鈕））
    function showNextImage(){
        // 隱藏當前圖片
        images[index].classList.remove('Active');
        // 計算索引值
        index = (index + 1) % totalImages;
        // 讀取圖片索引值 加入類別
        images[index].classList.add('Active');
    }

    // 上一張圖片的函數（左手邊按鈕）
    function showPreviousImage(){
        // 隱藏當前圖片
        images[index].classList.remove('Active');
        // 計算索引值
        index = (index - 1 + totalImages) % totalImages;
        // 讀取圖片索引值 加入類別
        images[index].classList.add('Active');
    }

    // 自動播放功能，每隔一段時間切換圖片，直到使用者手動切換為止
    // 設定每3秒切換一次圖片
    let autoPlayInterval = setInterval(showNextImage, 3000); 
}

// 優化版本
export function CarouselTwo(){
    // 圖片索引(幾張圖片)
    let index = 0;
    let autoPlayInterval;
    
    // 函式:取得當前應該顯示的圖片群組
    function getCurrentImages(){
        // 判斷螢幕寬度,決定使用哪個版本的圖片
        // 768px 以下使用手機版,以上使用平板/桌機版
        if(window.innerWidth < 768){
            return document.querySelectorAll('#PhoneBanner .Images');
        } else {
            return document.querySelectorAll('#MDBanner .Images');
        }
    }
    
    // 取得圖片元素
    let images = getCurrentImages();
    let totalImages = images.length;
    
    // 初始化:顯示第一張圖片
    if(images.length > 0){
        images[0].classList.add('Active');
    }

    // 下一張圖片的函式(右手邊按鈕)
    function showNextImage(){
        // 重新取得當前圖片群組
        images = getCurrentImages();
        totalImages = images.length;
        
        // 隱藏當前圖片
        images[index].classList.remove('Active');
        // 計算索引值
        index = (index + 1) % totalImages;
        // 讀取圖片索引值 加入類別
        images[index].classList.add('Active');
    }

    // 上一張圖片的函式(左手邊按鈕)
    function showPreviousImage(){
        // 重新取得當前圖片群組
        images = getCurrentImages();
        totalImages = images.length;
        
        // 隱藏當前圖片
        images[index].classList.remove('Active');
        // 計算索引值
        index = (index - 1 + totalImages) % totalImages;
        // 讀取圖片索引值 加入類別
        images[index].classList.add('Active');
    }

    // 上一張 下一張按鈕
    document.getElementById('NextBtn').addEventListener('click', showNextImage);
    document.getElementById('PrevBtn').addEventListener('click', showPreviousImage);

    // 自動播放功能,每隔一段時間切換圖片
    // 設定每3秒切換一次圖片
    autoPlayInterval = setInterval(showNextImage, 3000);
    
    // 監聽視窗大小變化,切換圖片群組
    window.addEventListener('resize', function(){
        // 清除所有圖片的 Active 類別
        document.querySelectorAll('#PhoneBanner .Images, #MDBanner .Images').forEach(img => {
            img.classList.remove('Active');
        });
        
        // 重置索引
        index = 0;
        
        // 重新取得圖片並顯示第一張
        images = getCurrentImages();
        totalImages = images.length;
        if(images.length > 0){
            images[0].classList.add('Active');
        }
        
        // 重新啟動自動播放
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(showNextImage, 3000);
    });
}