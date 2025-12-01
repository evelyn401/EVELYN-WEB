export function SwitchTab() {
    // 宣告變數 讀取選單按鈕 開啟選單按鈕
    let MenuBtn = document.getElementById("MenuBtn");
    // 宣告變數 讀取導覽列
    let NavBox = document.getElementById("NavBox");
    // 宣告變數 讀取關閉按鈕
    let Close = document.getElementById("Close");

    // 宣告變數 讀取 About 按鈕
    let AboutBtn = document.getElementById("AboutBtn");
    // 宣告變數 讀取 Skills 按鈕
    let SkillBtn = document.getElementById("SkillBtn");
    // 宣告變數 讀取 Work 按鈕
    let WorkBtn = document.getElementById("WorkBtn");
    // 宣告變數 讀取 Contact 按鈕
    let ContactBtn = document.getElementById("ContactBtn");

    // 點擊選單按鈕時
    MenuBtn.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "block";
    });

    // 點擊關閉按鈕時
    Close.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "none";
    });
    // 點擊 About 按鈕時
    AboutBtn.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "none";
    });
    // 點擊 Skills 按鈕時
    SkillBtn.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "none";
    });
    // 點擊 Work 按鈕時
    WorkBtn.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "none";
    });
    // 點擊 Contact 按鈕時
    ContactBtn.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "none";
    });
}
// 優化版本
export function SwitchTab2() {
    // 宣告變數 讀取選單按鈕 開啟選單按鈕
    let MenuBtn = document.getElementById("MenuBtn");
    // 宣告變數 讀取導覽列
    let NavBox = document.getElementById("NavBox");
    // 宣告變數 讀取關閉按鈕
    let Close = document.getElementById("Close");

    // 宣告變數 讀取 About 按鈕
    let AboutBtn = document.getElementById("AboutBtn");
    // 宣告變數 讀取 Skills 按鈕
    let SkillBtn = document.getElementById("SkillBtn");
    // 宣告變數 讀取 Work 按鈕
    let WorkBtn = document.getElementById("WorkBtn");
    // 宣告變數 讀取 Contact 按鈕
    let ContactBtn = document.getElementById("ContactBtn");

    // 函式：關閉導覽列（僅在 xs 版本）
    function closeNavOnMobile() {
        // 檢查是否為小螢幕 (Bootstrap md 斷點為 768px)
        if (window.innerWidth < 768) {
            NavBox.style.display = "none";
        }
    }

    // 點擊選單按鈕時
    MenuBtn.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "block";
    });

    // 點擊關閉按鈕時
    Close.addEventListener("click", function() {
        // 切換導覽列的顯示狀態
        NavBox.style.display = "none";
    });

    // 點擊 About 按鈕時
    AboutBtn.addEventListener("click", closeNavOnMobile);
    
    // 點擊 Skills 按鈕時
    SkillBtn.addEventListener("click", closeNavOnMobile);
    
    // 點擊 Work 按鈕時
    WorkBtn.addEventListener("click", closeNavOnMobile);
    
    // 點擊 Contact 按鈕時
    ContactBtn.addEventListener("click", closeNavOnMobile);
}