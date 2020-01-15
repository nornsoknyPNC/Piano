const WHITE_KEY = ['z','x','c','v','b','n','m'];
const BLACK_KEY = ['a','s','d','f','g'];
const keys = document.querySelectorAll('.key');
const whitekeys = document.querySelectorAll('.key.white');
const blackkeys = document.querySelectorAll('.key.black');
// console.log(whitekeys);
// console.log(blackkeys);
// console.log(keys);
keys.forEach(key => {
    // console.log(key);
    key.addEventListener('click', () => onPlayPiano(key));
        // console.log(key);
});
document.addEventListener('keydown', event => {
    const keyboard = event.key;
    const whiteIndex = WHITE_KEY.indexOf(keyboard);
    console.log(whiteIndex);
    // console.log(keyboard);
})
function onPlayPiano(key) {
    const audio = document.getElementById(key.dataset.note);
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
    audio.addEventListener('ended', () => {
        key.classList.remove("active");
    })
}