//console.log('connected');

document.addEventListener('keydown', play);

function play(e){
    //console.log(e.key, e.keyCode);
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);

    //console.log(audio);
    //console.log(key);

    if(audio && key){
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
}

const keys = document.querySelectorAll('.key');
//console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    //console.log(e)
    e.target.classList.remove('playing');
}