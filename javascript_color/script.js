// JavaScript

//console.log(document.getElementById('myColor').value);

//document.getElementById('bodyText').textContent = 
//document.getElementById('myColor').value;

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//text.textContent = color.value;

//背景色を変更する関数
//function構文を使う書き方
function changeColor(){
    document.body.style.backgroundColor = color.value;
  
    //カラーコードを表示
    if (color.value === '#ffffff') {
      text.textContent = 'コード：' + color.value + '(white)';
    } else if (color.value === '#000000') {
      text.textContent = 'コード：' + color.value + '(black)';
    } else {
      text.textContent = 'コード：' + color.value;
    }
  
  }
color.addEventListener('input', changeColor);
