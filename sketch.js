let points = [[0, 5], [1, 6], [3, 7], [5, 7], [7, 5], [8, 3], [7, 0], [5, -3], [3, -5], [0, -7], [-3, -5], [-5, -3], [-7, -0], [-8, 3], [-7, 5], [-5, 7], [-3, 7], [-1, 6], [1, 4]];

let zoomLevel = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  translate(width / 2, height / 2, -height / 2); // 將坐標系移動到中心，並將 Y 軸翻轉
}

function draw() {
  background(255);

  translate(width / 2, height / 2, -height / 2); // 將坐標系移動到中心，並將 Y 軸翻轉
  zoomLevel = map(mouseX, 0, width, 0.5, 1.5); // 設定縮放倍數，與滑鼠位置成正比

  
  for (let i = 0; i < 5; i++) {
    let scaleSize = 7 * (i + 1) * zoomLevel; // 計算放大倍數
    strokeWeight(1); // 設定線條粗細
    push(); // 儲存當前繪圖狀態
    scale(scaleSize); // 放大
    drawShape(); // 繪製圖形
    pop(); // 恢復繪圖狀態

  
  }
  textSize(75 * zoomLevel); // 设置文字大小
  textAlign(CENTER, CENTER); // 设置文字居中
  fill("#fb6f92"); // 设置文字颜色
  text("我是愛心", 0, 0); // 添加文字，位置居中
}

function drawShape() {

  
  // 定義兩個颜色
  let color1 = color("#ffafcc");
  let color2 = color("#a2d2ff");

  // 計算漸變位置，範圍為 0~1
  let pos = 0;
  let posIncrement = 1.0 / points.length;

  

  for (let i = 0; i < points.length - 1; i++) {
    let x1 = points[i][0];
    let y1 = -points[i][1]; //將 Y 座標取負號，使圖形上下顛倒
    let x2 = points[i + 1][0];
    let y2 = -points[i + 1][1]; //將 Y 座標取負號，使圖形上下顛倒
    

    // 計算線條顏色
    let c = lerpColor(color1, color2, pos);
    stroke(c);

    line(x1, y1, x2, y2); // 連接相鄰的點

    // 更新漸層位置
    pos += posIncrement;

    

    
  }
}
