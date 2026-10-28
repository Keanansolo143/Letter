const message = [
  "Can I just say that I am really proud of you? Like, I am actually proud of you for not taking your own life. I'm sorry for being blunt, but I really wanted you to know that you made me proud by choosing to stick around. I know it wasn't an easy choice to make, knowing that you're struggling to keep everything together when life isn't easy. Trying to be strong for your mom is taking a toll on you, and dealing with it all is affecting you mentally in a very negative way. And hey, remember you don't have to carry your mom's world on your shoulders all by yourself—it's okay to let your guard down and not be strong every single second.",
  "I know the past few months were rough and extremely shitty, and it got to a point where you almost felt like giving up. But watching you push through it all, regardless of whether or not you're tired, is admirable. Watching a young woman such as yourself gather the strength to fight made me proud, and it inspired me to fight through my own demons as well, so thank you for that.",
  "We still have way too much ahead of us for you to go anywhere, so please remember we made a promise to not carry our burdens alone... I will always be here for you.",
  "Although I do wish you could see yourself the way I do... I know we both have this thing where we fail to see our own worth, our strength, and how much we mean to our friends. We are always doubting ourselves, kinda seeing our lives as something pointless, as if we have no purpose at all, and as if our loved ones would be better off without us. But I have to say that we both are very wrong about this. This might sound cheesy as fuck, but we've got each other, bro. I know we have our other friends like Nami, Bongs, Vushi, and Kaiju, but there are just some things that we can't share with them and that we can only share with each other. So I want you to know that I will always be around when you need to get something difficult off your chest. Regardless of what I am doing, I will always take time out to lend you an ear and be your unpaid therapist.",
  "I don't want to make this extremely long, but what I am trying to say is that I care for you more than you think, Kiara. I have to say that you really are like a little sister to me, and I will do and sacrifice anything and everything for you. I know we've only met each other this year, but the love that I've got for you makes it feel like I've known you for most of my life. I know that's a little weird, but that's really what I feel for ya.",
  "I really am glad that I've met you this year, because meeting you was most certainly the best thing that has happened to me. I really want to thank you for everything that you have done for me; it really means the world to me, and it makes me extremely happy to know I've got you in my life, LMAO."
];

const scene = document.querySelector('.scene');
const envelopeButton = document.getElementById('envelopeButton');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const instruction = document.getElementById('instruction');
const letter = document.getElementById('letter');
const letterMessage = document.getElementById('letterMessage');

message.forEach((paragraph) => {
  const p = document.createElement('p');
  p.textContent = paragraph;
  letterMessage.appendChild(p);
});

function openLetter() {
  scene.classList.add('is-open');
  envelopeButton.setAttribute('aria-expanded', 'true');
  letter.setAttribute('aria-hidden', 'false');
  instruction.textContent = 'A little note, just for you.';
  openButton.hidden = true;
  closeButton.hidden = false;
  // Move the page to the start of the letter on small screens.
  window.setTimeout(() => letter.focus({ preventScroll: true }), 250);
}

function closeLetter() {
  scene.classList.remove('is-open');
  envelopeButton.setAttribute('aria-expanded', 'false');
  letter.setAttribute('aria-hidden', 'true');
  instruction.textContent = 'Tap the envelope to open it.';
  openButton.hidden = false;
  closeButton.hidden = true;
  envelopeButton.focus({ preventScroll: true });
}

envelopeButton.addEventListener('click', openLetter);
openButton.addEventListener('click', openLetter);
closeButton.addEventListener('click', closeLetter);
