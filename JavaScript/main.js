// 匯入 AddLabel.js 中的函式
import { CreateMultipleCards, PhotoBoxDataArray } from './module/AddLabel.js';

// 當 DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 建立技能卡片
    CreateMultipleCards();
    
    // 建立作品集相片盒
    PhotoBoxDataArray();
});