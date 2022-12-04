Swal.fire('Hai, selamat datang \n di minigame kedua ku, jangan lupa baca Syratnya 🤗 \n Enjoy!!!')


const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const score = document.querySelector('.score')
const pop =document.querySelector('#pop')

let tanahSebelumnya;
let selsai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length)
    const tRandom = tanah[t];

    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function memunculkanTikus() {
    const tRandom = randomTanah(tanah)
    const wRandom = randomWaktu(300, 1000)
    tRandom.classList.add('muncul')

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selsai) {
            memunculkanTikus();
        }
    }, wRandom)

}

function mulai() {
    selsai=false;
skor=0
score.textContent=0
    memunculkanTikus();
    setTimeout(() => {
        selsai = true;
    }, 10000)

}

function pukul() {
     skor ++;
     this.parentNode.classList.remove("muncul");
     pop.play()
     score.textContent=skor
}
tikus.forEach(t => {
    t.addEventListener('click',pukul);
});