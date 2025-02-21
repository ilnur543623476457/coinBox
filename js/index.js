const tg = window.Telegram.WebApp;
tg.expand();
window.addEventListener('load', () => {
    const user_id = tg.initDataUnsafe.query_id
    var elem = document.getElementById('name');
    // elem.innerHTML = user_id
  });