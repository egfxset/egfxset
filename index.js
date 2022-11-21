window.addEventListener('load', init, false);
function init() {
  try {
    audioContext = new AudioContext();
  }
  catch (e) {
    alert('Web Audio API is not supported in this browser');
  }
}

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

function sonido() {
  audioContext.resume();
  var BD2 = document.getElementById("BD-2");
  var TS = document.getElementById("TS");
  var RAT = document.getElementById("RAT");
  var CH3 = document.getElementById("CH-3");
  var FL = document.getElementById("FL");
  var PH = document.getElementById("PH");
  var TE = document.getElementById("TE");
  var DD = document.getElementById("DD");
  var SE = document.getElementById("SE");
  var PR = document.getElementById("PR");
  var HR = document.getElementById("HR");
  var SR = document.getElementById("SR");

  BD2.onclick = e => {
    const gainNode1 = audioContext.createGain();
    var audio1 = new Audio("/Audios/BD-2/1-0.wav");
    audio1.volume = 0.5;
    let track1 = audioContext.createMediaElementSource(audio1);
    track1.connect(gainNode1);
    gainNode1.connect(audioContext.destination);
    gainNode1.gain.setValueAtTime(1, audioContext.currentTime);
    audio1.play();
    gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('BD-2');
  }

  TS.onclick = e => {
    const gainNode2 = audioContext.createGain();
    var audio2 = new Audio("/Audios/TS/1-0.wav");
    audio2.volume = 0.5;
    let track2 = audioContext.createMediaElementSource(audio2);
    track2.connect(gainNode2);
    gainNode2.connect(audioContext.destination);
    gainNode2.gain.setValueAtTime(1, audioContext.currentTime);
    audio2.play();
    gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('TS');
  }

  RAT.onclick = e => {
    const gainNode3 = audioContext.createGain();
    var audio3 = new Audio("/Audios/RAT/1-0.wav");
    audio3.volume = 0.5;
    let track3 = audioContext.createMediaElementSource(audio3);
    track3.connect(gainNode3);
    gainNode3.connect(audioContext.destination);
    gainNode3.gain.setValueAtTime(1, audioContext.currentTime);
    audio3.play();
    gainNode3.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('RAT');
  }

  CH3.onclick = e => {
    const gainNode4 = audioContext.createGain();
    var audio4 = new Audio("/Audios/CH3/1-0.wav");
    audio4.volume = 0.5;
    let track4 = audioContext.createMediaElementSource(audio4);
    track4.connect(gainNode4);
    gainNode4.connect(audioContext.destination);
    gainNode4.gain.setValueAtTime(1, audioContext.currentTime);
    audio4.play();
    gainNode4.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('CH3');
  }

  FL.onclick = e => {
    const gainNode5 = audioContext.createGain();
    var audio5 = new Audio("/Audios/FL/1-0.wav");
    audio5.volume = 0.5;
    let track5 = audioContext.createMediaElementSource(audio5);
    track5.connect(gainNode5);
    gainNode5.connect(audioContext.destination);
    gainNode5.gain.setValueAtTime(1, audioContext.currentTime);
    audio5.play();
    gainNode5.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('FL');
  }

  PH.onclick = e => {
    const gainNode6 = audioContext.createGain();
    var audio6 = new Audio("/Audios/PH/1-0.wav");
    audio6.volume = 0.5;
    let track6 = audioContext.createMediaElementSource(audio6);
    track6.connect(gainNode6);
    gainNode6.connect(audioContext.destination);
    gainNode6.gain.setValueAtTime(1, audioContext.currentTime);
    audio6.play();
    gainNode6.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('PH');
  }

  TE.onclick = e => {
    const gainNode7 = audioContext.createGain();
    var audio7 = new Audio("/Audios/TE/1-0.wav");
    audio7.volume = 0.5;
    let track7 = audioContext.createMediaElementSource(audio7);
    track7.connect(gainNode7);
    gainNode7.connect(audioContext.destination);
    gainNode7.gain.setValueAtTime(1, audioContext.currentTime);
    audio7.play();
    gainNode7.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('TE');
  }

  DD.onclick = e => {
    const gainNode8 = audioContext.createGain();
    var audio8 = new Audio("/Audios/DD/1-0.wav");
    audio8.volume = 0.5;
    let track8 = audioContext.createMediaElementSource(audio8);
    track8.connect(gainNode8);
    gainNode8.connect(audioContext.destination);
    gainNode8.gain.setValueAtTime(1, audioContext.currentTime);
    audio8.play();
    gainNode8.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('DD');
  }

  SE.onclick = e => {
    const gainNode9 = audioContext.createGain();
    var audio9 = new Audio("/Audios/SE/1-0.wav");
    audio9.volume = 0.5;
    let track9 = audioContext.createMediaElementSource(audio9);
    track9.connect(gainNode9);
    gainNode9.connect(audioContext.destination);
    gainNode9.gain.setValueAtTime(1, audioContext.currentTime);
    audio9.play();
    gainNode9.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('SE');
  }

  PR.onclick = e => {
    const gainNode10 = audioContext.createGain();
    var audio10 = new Audio("/Audios/PR/1-0.wav");
    audio10.volume = 0.5;
    let track10 = audioContext.createMediaElementSource(audio10);
    track10.connect(gainNode10);
    gainNode10.connect(audioContext.destination);
    gainNode10.gain.setValueAtTime(1, audioContext.currentTime);
    audio10.play();
    gainNode10.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('PR');
  }

  HR.onclick = e => {
    const gainNode11 = audioContext.createGain();
    var audio11 = new Audio("/Audios/HR/1-0.wav");
    audio11.volume = 0.5;
    let track11 = audioContext.createMediaElementSource(audio11);
    track11.connect(gainNode11);
    gainNode11.connect(audioContext.destination);
    gainNode11.gain.setValueAtTime(1, audioContext.currentTime);
    audio11.play();
    gainNode11.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('HR');
  }

  SR.onclick = e => {
    const gainNode12 = audioContext.createGain();
    var audio12 = new Audio("/Audios/SR/1-0.wav");
    audio12.volume = 0.5;
    let track12 = audioContext.createMediaElementSource(audio12);
    track12.connect(gainNode12);
    gainNode12.connect(audioContext.destination);
    gainNode12.gain.setValueAtTime(1, audioContext.currentTime);
    audio12.play();
    gainNode12.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.5);
    console.log('SR');
  }

}

function mailIran() {
  window.location.href = "mailto:roman@nyu.edu";
}

function mailHeg() {
  window.location.href = "mailto:hepv12@gmail.com";
}

function mailGer() {
  window.location.href = "mailto:mezaga93@gmail.com";
}

function ismir(){
  var w = window.open(
    "https://ismir2022program.ismir.net/lbd_367.html", "_blank");
}