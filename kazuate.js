// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
const s = document.querySelector('span#kaisu');
const a = document.querySelector('span#atai');
const i = document.querySelector('input#yosou');
const r = document.querySelector('p#result');

// 既に正解になったのかを判断する
let fin = false;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = kaisu + 1;
  s.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  yoso = Number(i.value);
  a.textContent = yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if(kaisu > 3 || fin){
    r.textContent = "答えは" + kotae + "です．このゲームはもう終わっています．";
  }else if(kotae === yoso){
    r.textContent = "正解です．おめでとう!";
    fin = true;
  }else{
    r.textContent = "まちがい．";
    if(kaisu === 3){
      r.textContent = r.textContent + "残念でした．答えは" + kotae + "です．";
    }else if(kotae > yoso){
      r.textContent = r.textContent + "答えはもっと大きいですよ";
    }else{
      r.textContent = r.textContent + "答えはもっと小さいですよ";
    }
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
const b = document.querySelector('button#zikou');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
