const b = document.querySelector('button');
b.addEventListener('click', greeting);
const i = document.querySelector('input[name="shimei"]');
const p = document.querySelector('p#message');

function greeting() {
    p.textContent = "こんにちは，" + i.value + "さん．";
}
