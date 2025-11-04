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
export function AddLabelFor($Number) {
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
export function AddLabelForOptimized($MainId, $Number, $DivClass, $DivClass2, $Images, $Title, $Description) {
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

export function PhotoBox(){
    // 新增多筆的 li
    // 主架構 宣告變數
    let photobox = document.getElementById("photobox");
    // 建立 li 元素
    let li = document.createElement("li");
    // 給予 li 元素 class 屬性
    li.className = "one";
    // 在 主架構 內 動態 新增 li 元素
    photobox.appendChild(li);

    // 新增 a 標籤
    let a = document.createElement("a");
    // 設定 a 標籤的 href 屬性
    a.href = "javascript:;";
    // 設定 a 標籤的文字內容
    a.innerText = "Packaging Design";
    // 在 li 內動態新增 a 元素
    li.appendChild(a);
}

export function PhotoBoxFor(){
    // 新增多筆的 li
    // 主架構 宣告變數
    let photobox = document.getElementById("photobox");
    
    // 有迴圈
    for( let i =0; i < 9 ; i++ ){
    // 建立 li 元素
    let li = document.createElement("li");
    // 給予 li 元素 class 屬性
    li.className = "one";
    // 在 主架構 內 動態 新增 li 元素
    photobox.appendChild(li);

    // 新增 a 標籤
    let a = document.createElement("a");
    // 設定 a 標籤的 href 屬性
    a.href = "javascript:;";
    // 設定 a 標籤的文字內容
    a.innerText = "Packaging Design";
    // 在 li 內動態新增 a 元素
    li.appendChild(a);
    }
}

export function PhotoBoxForArray(){
    // 新增多筆的 li
    // 主架構 宣告變數
    let photobox = document.getElementById("photobox");

    // 宣告li 迴圈變數
    let liclass = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let texts = ["Packaging Design", "Business Card Design", "Storybook Design", "Calendar Design", "Board game Design", "Website Design", "Stamp Design", "APP Design", "Premiere"];
    
    // 有迴圈
    for( let i =0; i < liclass.length ; i++ ){
    // 建立 li 元素
    let li = document.createElement("li");
    // 給予 li 元素 class 屬性
    li.className = liclass[i];
    // 在 主架構 內 動態 新增 li 元素
    photobox.appendChild(li);

    // 新增 a 標籤
    let a = document.createElement("a");
    // 設定 a 標籤的 href 屬性
    a.href = "javascript:;";
    // 設定 a 標籤的文字內容
    a.innerText = texts[i];
    // 在 li 內動態新增 a 元素
    li.appendChild(a);
    }
}

// 資料陣列版本
export function PhotoBoxDataArray(){
    // 新增多筆的 li
    // 主架構 宣告變數
    let photobox = document.getElementById("photobox");

    // 宣告 物件陣列變數
    let dataArray = [
        { className: "one", text: "Packaging Design", Images: "../../images/work/work1.png", href: "javascript:;" },
        { className: "two", text: "Business Card Design", Images: "../../images/work/work2.png", href: "javascript:;" },
        { className: "three", text: "Storybook Design", Images: "../../images/work/work3.png", href: "javascript:;" },
        { className: "four", text: "Calendar Design", Images: "../../images/work/work4.png", href: "javascript:;" },
        { className: "five", text: "Board game Design", Images: "../../images/work/work5.png", href: "javascript:;" },
        { className: "six", text: "Website Design", Images: "../../images/work/work6.png", href: "javascript:;" },
        { className: "seven", text: "Stamp Design", Images: "../../images/work/work7.png", href: "javascript:;" },
        { className: "eight", text: "APP Design", Images: "../../images/work/work8.png", href: "javascript:;" },
        { className: "nine", text: "Premiere", Images: "../../images/work/work9.png", href: "javascript:;" }
    ];
    
    // for...of 迴圈，是用來遍歷可迭代物件（如陣列、字串、Map、Set等）中的每一個元素。它的語法簡潔且易於閱讀，能依序讀取每個元素。
    /*
        for ( let variable of iterable ){
            在每次迴圈中要執行的程式碼
        }
        variable：在每次迴圈中代表當前元素的變數，可以是任何合法的變數名稱。
        iterable：要遍歷的可迭代物件，如陣列、字串、Map、Set等。
    */
    
    for ( let Photos of dataArray ) {
        // 建立 li 元素
        let li = document.createElement("li");
        // 給予 li 元素 class 屬性
        li.className = Photos.className;
        // 在 主架構 內 動態 新增 li 元素
        photobox.appendChild(li);

        // 新增 a 標籤
        let a = document.createElement("a");
        // 設定 a 標籤的 href 屬性
        a.href = Photos.href;
        // 設定 a 標籤的文字內容
        a.innerText = Photos.text;
        // 在 li 內動態新增 a 元素
        li.appendChild(a);
    }
}