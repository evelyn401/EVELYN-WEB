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
    // querySelector 是用來選取特定的元素，在JavaScript中用來操作DOM，專門用來選取符合CSS選擇器的第一個元素，例如：ID、class、標籤名稱等
    document.querySelector(".cardcontent").appendChild(div2);

    // 新增 img 標籤
    let img = document.createElement("img");
    // 設定 img 的 src 屬性
    img.src = "images/icons/ai.png";
    // 在 .imagebox 內動態新增 img 元素
    document.querySelector(".imagebox").appendChild(img);
    
    // 新增 h3 標籤
    let h3 = document.createElement("h3");
    // 寫入文字
    h3.innerText = "Graphic Design";
    // 在 .cardcontent 內動態新增 h3 元素
    document.querySelector(".cardcontent").appendChild(h3);

    // 新增 p 標籤
    let p = document.createElement("p");
    // 寫入文字
    p.innerText = "Illustrator、Business Card Design、Packaging Design、Board game Design";
    // 在 .cardcontent 內動態新增 p 元素
    document.querySelector(".cardcontent").appendChild(p);
}

// 這個模組的功能是動態地在網頁中新增一個技能卡片，包含圖片、標題和描述文字，提升網頁的互動性和可維護性。
export function AddLabelfor($Number) {
    // 主架構 宣告變數
    let card = document.getElementById("SkillsCard");
    // 有迴圈
    for( let i =0; i < $Number ; i++){
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
        // querySelector 是用來選取特定的元素，在JavaScript中用來操作DOM，專門用來選取符合CSS選擇器的第一個元素，例如：ID、class、標籤名稱等
        // 在 .cardcontent 內動態新增 div 元素，需要指定是哪一個 .cardcontent，這裡使用 querySelectorAll 來選取所有的 .cardcontent，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll(".cardcontent")[i].appendChild(div2);

        // 新增 img 標籤
        let img = document.createElement("img");
        // 設定 img 的 src 屬性
        img.src = "images/icons/ai.png";
        // 在 .imagebox 內動態新增 img 元素，需要指定是哪一個 .imagebox，同樣使用 querySelectorAll 來選取所有的 .imagebox，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll(".imagebox")[i].appendChild(img);

        // 新增 h3 標籤
        let h3 = document.createElement("h3");
        // 寫入文字
        h3.innerText = "Graphic Design";
        // 在 .cardcontent 內動態新增 h3 元素，需要指定是哪一個 .cardcontent，使用 querySelectorAll 來選取所有的 .cardcontent，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll(".cardcontent")[i].appendChild(h3);

        // 新增 p 標籤
        let p = document.createElement("p");
        // 寫入文字
        p.innerText = "Illustrator、Business Card Design、Packaging Design、Board game Design";
        // 在 .cardcontent 內動態新增 p 元素，需要指定是哪一個 .cardcontent，使用 querySelectorAll 來選取所有的 .cardcontent，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll(".cardcontent")[i].appendChild(p);
    }
}

// 此為優化版本
export function AddLabelforOptimized($MainId, $Number, $DivClass, $DivClass2, $Images, $Title, $Description) {
    // 主架構 宣告變數
    let card = document.getElementById($MainId);
    // 有迴圈
    for (let i = 0; i < $Number; i++) {
        // 1. 在 .card 之內加入 div,cardcontent
        let div = document.createElement("div");
        // 2. 設定上述元素的 class 屬性為 cardcontent
        div.className = $DivClass;
        // 3. 在 主架構之內 動態 新增 div 元素
        card.appendChild(div);

        // 新增第二個區塊 屬性 imagebox 的 div
        // 若是用動態創建標籤 createElement 這方式不能省略
        let div2 = document.createElement("div");
        // 設定要新增的 div 元素
        div2.className = $DivClass2;
        // querySelector 是用來選取特定的元素，在JavaScript中用來操作DOM，專門用來選取符合CSS選擇器的第一個元素，例如：ID、class、標籤名稱等
        // 在 .cardcontent 內動態新增 div 元素，需要指定是哪一個 .cardcontent，這裡使用 querySelectorAll 來選取所有的 .cardcontent，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll("." + $DivClass)[i].appendChild(div2);

        // 新增 img 標籤
        let img = document.createElement("img");
        // 設定 img 的 src 屬性
        img.src = $Images;
        // 在 .imagebox 內動態新增 img 元素，需要指定是哪一個 .imagebox，同樣使用 querySelectorAll 來選取所有的 .imagebox，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll("." + $DivClass2)[i].appendChild(img);

        // 新增 h3 標籤
        let h3 = document.createElement("h3");
        // 寫入文字
        h3.innerText = $Title;
        // 在 .cardcontent 內動態新增 h3 元素，需要指定是哪一個 .cardcontent，使用 querySelectorAll 來選取所有的 .cardcontent，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll("." + $DivClass)[i].appendChild(h3);

        // 新增 p 標籤
        let p = document.createElement("p");
        // 寫入文字
        p.innerText = $Description;
        // 在 .cardcontent 內動態新增 p 元素，需要指定是哪一個 .cardcontent，使用 querySelectorAll 來選取所有的 .cardcontent，然後根據迴圈的索引 i 來選擇對應的元素
        document.querySelectorAll("." + $DivClass)[i].appendChild(p);
    }
}