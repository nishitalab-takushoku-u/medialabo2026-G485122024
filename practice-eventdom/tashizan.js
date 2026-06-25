const l = document.querySelector('input#left');
const r = document.querySelector('input#right');
const b = document.querySelector('button#calc');
const s = document.querySelector('span#answer');

b.addEventListener('click', tashi);

function tashi() {
    const t = Number(l.value) + Number(r.value);
    s.textContent = t;
}