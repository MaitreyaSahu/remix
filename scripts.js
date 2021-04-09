//console.log('connected');

document.addEventListener('keydown', play);

function play(e){
    //console.log(e.target.dataset.key);
    const keyCode = e.target.dataset.key || e.keyCode;
    const audio = document.querySelector(`audio[data-key = "${keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${keyCode}"]`);

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
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', play)
});

function removeTransition(e){
    //console.log(e)
    e.target.classList.remove('playing');
}