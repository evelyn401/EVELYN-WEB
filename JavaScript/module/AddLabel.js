export function AddLabel() {
    // 主架構 宣告變數
    let card = document.getElementById("SkillsCard");
    // 無迴圈
    // 1. 在 .card 之內加入 div,cardcontent
    let div = document.createElement("div");
    // 2. 設定上述元素的 class 屬性為 cardcontent
    div.className = "cardcontent";
    // 3. 在 主架構之內 動態 新增 div 元素
    card.appendChild(div);

    // 新增第二個區塊 屬性 imagebox 的 div
    // 若是用動態創建標籤 createElement 這方式不能省略
    let div2 = document.createElement("div");
    // 設定要新增的 div 元素
    div2.className = "imagebox";
    // 在 .cardcontent 內動態新增 div 元素
    document.querySelector(".cardcontent").appendChild(div2);

}