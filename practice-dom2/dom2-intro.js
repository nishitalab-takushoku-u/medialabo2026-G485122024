function changeDom() {
    // 練習5-2 「ヨット」を追加してみる
    let u = document.querySelector('ul#kazoeuta');
    let l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = 'ヨット';

    // 練習5-3 ブルームーンと拓殖大学HPのリンクを追加しよう
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let p = document.querySelector('p#takudai');
    let a = document.createElement('a');
    p.insertAdjacentElement('afterend', a);
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    a.textContent = '拓殖大学HP';

    // 練習5-4 ul要素の削除
    l = document.querySelector('li#mochi');
    l.remove();
    u = document.querySelector('ul#kassen');
    u.remove();

    // 練習5-5 ul要素を新規作成する
    u = document.createElement('ul');
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '赤';
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '緑';
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '青';
    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);
}

let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);