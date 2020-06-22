function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    canvasSetup();
}

function setup(){
    //キャンバスを作成
    canvas = createCanvas(document.documentElement.scrollWidth,document.documentElement.scrollHeight);
    canvas.position(0,0);//canvasをページの原点に固定
    canvas.style('z-index','-1');//canvasを後ろに移動する。
    //背景色
    background(255);
    //図形の線無し
    noStroke();
  }
function draw(){
    frameRate(30);
    //オブジェクトの色をランダム（透明度70）
    fill(random(255),random(255),random(255),70);
    //キャンバスの中心に直径100pxの丸を描画
    ellipse(random(width),random(height),random(100));
}