let audio = document.getElementById("myAudio");
// ฟังก์ชันเล่นเสียง
function playSound() {
    audio.play();
}
// ฟังก์ชันหยุดเสียง
function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}
// ฟังก์ชันสำหรับปรับระดับเสียงจากแถบเลื่อน
function setVolume(value) {
    audio.volume = value;
}

let audio2 = document.getElementById("myAudio2");
function playSound2(){
    audio2.play();
}
function stopSound2(){
    audio2.pause();
    audio2.currentTime = 0;
}
function setVolume2(value) {
    audio2.volume = value;
}

let audio3 = document.getElementById("myAudio3");
function playSound3(){
    audio3.play();
}
function stopSound3(){
    audio3.pause();
    audio3.currentTime = 0;
}
function setVolume3(value) {
    audio3.volume = value;
}

let audio4 = document.getElementById("myAudio4");
function playSound4(){
    audio4.play();
}
function stopSound4(){
    audio4.pause();
    audio4.currentTime = 0;
}
function setVolume4(value) {
    audio4.volume = value;
}

let audio5 = document.getElementById("myAudio5");
function playSound5(){
    audio5.play();
}
function stopSound5(){
    audio5.pause();
    audio5.currentTime = 0;
}
function setVolume5(value) {
    audio5.volume = value;
}

let audio6 = document.getElementById("myAudio6");
function playSound6(){
    audio6.play();
}
function stopSound6(){
    audio6.pause();
    audio6.currentTime = 0;
}
function setVolume6(value) {
    audio6.volume = value;
}

let audio7 = document.getElementById("myAudio7");
function playSound7(){
    audio7.play();
}
function stopSound7(){
    audio7.pause();
    audio7.currentTime = 0;
}
function setVolume7(value) {
    audio7.volume = value;
}

let audio8 = document.getElementById("myAudio8");
function playSound8(){
    audio8.play();
}
function stopSound8(){
    audio8.pause();
    audio8.currentTime = 0;
}
function setVolume8(value) {
    audio8.volume = value;
}

let audio9 = document.getElementById("myAudio9");
function playSound9(){
    audio9.play();
}
function stopSound9(){
    audio9.pause();
    audio9.currentTime = 0;
}
function setVolume9(value) {
    audio9.volume = value;
}

let audio10 = document.getElementById("myAudio10");
function playSound10(){
    audio10.play();
}
function stopSound10(){
    audio10.pause();
    audio10.currentTime = 0;
}
function setVolume10(value) {
    audio10.volume = value;
}

let audio11 = document.getElementById("myAudio11");
function playSound11(){
    audio11.play();
}
function stopSound11(){
    audio11.pause();
    audio11.currentTime = 0;
}
function setVolume11(value) {
    audio11.volume = value;
}

let audio12 = document.getElementById("myAudio12");
function playSound12(){
    audio12.play();
}
function stopSound12(){
    audio12.pause();
    audio12.currentTime = 0;
}
function setVolume12(value) {
    audio12.volume = value;
}

let audio13 = document.getElementById("myAudio13");
function playSound13(){
    audio13.play();
}
function stopSound13(){
    audio13.pause();
    audio13.currentTime = 0;
}
function setVolume13(value) {
    audio13.volume = value;
}


// เมื่อเพลงเริ่มเล่น
document.getElementById('myAudio').addEventListener('play', function() {
    var button = document.getElementById('playButton');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
// เมื่อเพลงหยุดเล่น
document.getElementById('myAudio').addEventListener('pause', function() {
    var button = document.getElementById('playButton');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});


document.getElementById('myAudio2').addEventListener('play', function() {
    var button = document.getElementById('playButton2');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio2').addEventListener('pause', function() {
    var button = document.getElementById('playButton2');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio3').addEventListener('play', function() {
    var button = document.getElementById('playButton3');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio3').addEventListener('pause', function() {
    var button = document.getElementById('playButton3');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio4').addEventListener('play', function() {
    var button = document.getElementById('playButton4');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio4').addEventListener('pause', function() {
    var button = document.getElementById('playButton4');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio5').addEventListener('play', function() {
    var button = document.getElementById('playButton5');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio5').addEventListener('pause', function() {
    var button = document.getElementById('playButton5');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio6').addEventListener('play', function() {
    var button = document.getElementById('playButton6');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio6').addEventListener('pause', function() {
    var button = document.getElementById('playButton6');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio7').addEventListener('play', function() {
    var button = document.getElementById('playButton7');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio7').addEventListener('pause', function() {
    var button = document.getElementById('playButton7');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio8').addEventListener('play', function() {
    var button = document.getElementById('playButton8');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio8').addEventListener('pause', function() {
    var button = document.getElementById('playButton8');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio9').addEventListener('play', function() {
    var button = document.getElementById('playButton9');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio9').addEventListener('pause', function() {
    var button = document.getElementById('playButton9');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio10').addEventListener('play', function() {
    var button = document.getElementById('playButton10');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio10').addEventListener('pause', function() {
    var button = document.getElementById('playButton10');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio11').addEventListener('play', function() {
    var button = document.getElementById('playButton11');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio11').addEventListener('pause', function() {
    var button = document.getElementById('playButton11');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio12').addEventListener('play', function() {
    var button = document.getElementById('playButton12');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio12').addEventListener('pause', function() {
    var button = document.getElementById('playButton12');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});

document.getElementById('myAudio13').addEventListener('play', function() {
    var button = document.getElementById('playButton13');
    button.classList.add('playing'); // เพิ่มคลาส 'playing' เพื่อเปลี่ยนขอบปุ่มเป็นสีเขียว
});
document.getElementById('myAudio13').addEventListener('pause', function() {
    var button = document.getElementById('playButton13');
    button.classList.remove('playing'); // ลบคลาส 'playing' ออก
});