// 用var宣告之變數，無視大括號做區隔;用let宣告之變數，會受大括號區隔影響    
// 變數再宣告時，它的作用區分「全域變數」與「區域變數」
/*
全域變數：在程式碼任何地方都能存取的變數
區域變數：只能在特定區域內存取的變數
*/

export function Years(){
    // 宣告變數，承接「時間」實體化
    let Years = new Date().getFullYear();
    // 寫入 HTML 標籤內，讀取邊簽的 id選擇器
    let Content = document.getElementById("Years");
}