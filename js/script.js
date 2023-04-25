document.addEventListener('mousemove',function(e){
  let body = document.querySelector('body');
  let heart = document.createElement('span');
  let x = e.offsetX;
  let y = e.offsetY;

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  
  let size  = Math.random()*40;
  heart.style.width = 20 + size + 'px';
  heart.style.height = 20 + size + 'px';

  let transformValue = Math.random()*360;
  heart.style.transform = 'rotate('+ transformValue + 'deg)';
  body.appendChild(heart);

  setTimeout(function(){
      heart.remove();
  },1000)
  })  
     function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const phrases = ["HI MAHAL KO :)","HAPPY 6TH ANNIVERSARY PO", "I LOVE YOU SO MUCH PO!"];
    const el = document.getElementById("typewriter");

    let sleepTime = 100;

    let curPhraseIndex = 0;

    const writeLoop = async () => {
      while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
          el.innerText = curWord.substring(0, i + 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
          el.innerText = curWord.substring(0, i - 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
          curPhraseIndex = 0;
        } else {
          curPhraseIndex++;
        }
      }
    };

    writeLoop();