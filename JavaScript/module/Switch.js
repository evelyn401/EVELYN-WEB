export function SwitchTab() {
    // 宣告變數 讀取選單按鈕 開啟選單按鈕
    let MenuBtn = document.getElementById("MenuBtn");
    // 宣告變數 讀取導覽列
    let NavBox = document.getElementById("NavBox");

    // 點擊選單按鈕時
    MenuBtn.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.classList.toggle("active");
    });
}