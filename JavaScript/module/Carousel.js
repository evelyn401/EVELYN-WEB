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

/*
    初始進入頁面，每兩秒自動輪播圖片，並且可以透過前後按鈕切換圖片

    修正 
    1.手動點擊時，會中斷自動輪播的問題
    2.若三秒內沒有手動點擊，則繼續自動輪播
    3.連續快速點擊按鈕時：
    不會導致圖片閃爍的問題，setTimeout()應確保 setInterval() 不會與手動切換圖片的函式衝突，只能有一個在運行
 */

export function CarouselTwo(){
    // 圖片索引(幾張圖片)
    let index = 0;
    // 存放自動播放的計時器
    let autoPlayInterval;

    // 20251224更新
    // 存放延遲重啟的計時器
    let restartTimeout;
    
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
    

    // 啟動自動輪播 每三秒顯示下一張圖片
    // 設定每3秒切換一次圖片
    function startAutoPlay(){
        autoPlayInterval = setInterval(showNextImage, 3000);
    }

    // 停止自動輪播
    function stopAutoPlay(){
        // 清除自動播放計時器
        clearInterval(autoPlayInterval);
        // 防止重複設置重啟計時器
        clearTimeout(restartTimeout);
    }


    // 上一張 下一張按鈕
    document.getElementById('NextBtn').addEventListener('click', showNextImage);
    document.getElementById('PrevBtn').addEventListener('click', showPreviousImage);


    
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