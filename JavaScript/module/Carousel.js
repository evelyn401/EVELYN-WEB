export function Carousel(){
    // 圖片索引（幾張圖片）
    let index = 0;
    // 取得圖片元素 宣告「常數」變數 ; 常數指的是「值不能更改」
    const images = document.querySelectorAll('#Banners .Images');
    // 計算圖片總數（圖片張數）
    const totalImages = images.length;

    // 上一張 下一張按鈕

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
}