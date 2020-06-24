export const speak = (text, lang) => {
  // check browser compatibility
  if (!window.speechSynthesis) {
    alert('Your browser doesn\'t support text to speech.\nTry Chrome 33+ :)');
  } else {
    const u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = lang;
    u.rate = 0.9;  // optional: change speaking speed (0.1 [slow] - 1 [normal])
    speechSynthesis.speak(u);
  }
}
