// ==========================================
// МАТЮКАТОР v2.0 - WINDOWS 2000 EDITION
// ==========================================

const MEDIA_FILES = [
  { type: 'image', src: 'photo_5352800832178558106_y.jpg' },
  { type: 'image', src: 'photo_5352800832178558107_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558108_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558109_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558110_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558111_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558112_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558113_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558114_m.jpg' },
  { type: 'image', src: 'photo_5352800832178558115_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558116_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558124_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558126_x.jpg' },
  { type: 'image', src: 'photo_5352800832178558127_x.jpg' },
  { type: 'video', src: 'video (1).mp4' },
  { type: 'video', src: 'video (2).mp4' },
  { type: 'video', src: 'video (3).mp4' },
  { type: 'video', src: 'video (4).mp4' },
  { type: 'video', src: 'video (5).mp4' },
  { type: 'video', src: 'video (6).mp4' },
  { type: 'video', src: 'video (7).mp4' },
];

const GREETINGS = ['Дорогой ты наш человек', 'Уважаемый именинник', 'Дружище', 'Браток', 'Золотой ты наш друг', 'С праздничком тебя', 'Дорогой кум'];
const INTROS = ['В этот светлый денек', 'От всей души и от чистого сердца', 'Как говорится в народе,', 'Поднимая эту чарочку,', 'В этот замечательный праздник'];
const WISH_1 = ['желаю чтоб здоровье было сибирским и кавказское долголетие', 'хочу пожелать море пива и океан позитива', 'желаю чтоб в кошельке всегда шуршали купюры', 'пусть в гараже всегда стоит надежная иномарка', 'желаю семейного благополучия и огромного счастья'];
const CONNECTORS = ['А к этому добавлю:', 'Ну и самое главное —', 'И еще, как говорится у нас,', 'И чтоб не забыть:', 'А вдобавок к этому:'];
const WISH_2 = ['чтоб жена не пилила, а теща только любила', 'чтоб на даче шашлычок всегда аппетитно жарился', 'чтоб гаишники честь отдавали при встрече', 'чтоб клев на рыбалке был бешеный', 'чтоб дети радовали, а внуки гордились'];
const TOASTS = ['Ну, за сбычу мечт! *DRINK*', 'С Днём Варенья! :D', 'Будь здоров, братан! B)', 'Хлебнем пивка за именинника! *DRINK*', 'За тебя, дорогой! :)'];
const EXTRAS = ['P.S. Почему тортик кушать полагается? Потому что, к сожаленью, свечи в пиво не втыкаются! O_o', 'P.S. Главное, ребята, сердцем не стареть! ;)', 'P.S. Возраст — это только цифры в паспорте! :D', 'P.S. Пусть каждый день будет как праздник! :D', 'P.S. Не старей!!! :P'];

const NAMES = ['Юрий', 'Юра', 'Юрок', 'Юрочка', 'Юрик', 'Юран', 'Юрка'];
const MAIL_SUBJECTS = [
  'С Днём Варенья!!!',
  'Fwd: ПОЗДРАВЛЯЮ!!! :)',
  'RE: Тебе тут передали...',
  'С ДНЮХОЙ БРАТАН!!!',
  'Fwd: Fwd: Fwd: поздравление',
  'RE: RE: С праздником!',
  'Прочитай обязательно!!!',
  'Тост за именинника!',
  'Fwd: открытка.jpg',
  'RE: Тебе от всех нас!',
];
const MAIL_SENDERS = ['Петрович', 'Коля', 'Валера', 'Михалыч', 'Лёха', 'Серёга', 'Дядя Витя', 'Тузик228', 'Димон_крутой'];

function randomFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

let lastMediaIndex = -1;
function getRandomMedia() {
  let idx;
  do { idx = Math.floor(Math.random() * MEDIA_FILES.length); } while (idx === lastMediaIndex && MEDIA_FILES.length > 1);
  lastMediaIndex = idx;
  return MEDIA_FILES[idx];
}

function generateToast(name) {
  const g = randomFrom(GREETINGS);
  const i = randomFrom(INTROS);
  const w1 = randomFrom(WISH_1);
  const c = randomFrom(CONNECTORS);
  const w2 = randomFrom(WISH_2);
  const t = randomFrom(TOASTS);
  const e = Math.random() > 0.5 ? '\n\n' + randomFrom(EXTRAS) : '';
  const n = name ? `, ${name}` : '';
  return `${g}${n}!\n\n${i} ${w1}.\n\n${c} ${w2}.\n\n${t}${e}`;
}

// Retro Mail.ru Agent / ICQ / Odnoklassniki smileys as inline SVGs
const SMILEY = {
  ':)': "<img class='smiley' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='9' fill='%23ffcc00' stroke='%23c8a000' stroke-width='1'/%3E%3Ccircle cx='7' cy='8' r='1.5' fill='%23000'/%3E%3Ccircle cx='13' cy='8' r='1.5' fill='%23000'/%3E%3Cpath d='M6 12q4 4 8 0' stroke='%23000' fill='none' stroke-width='1.2'/%3E%3C/svg%3E\">",
  ':D': "<img class='smiley' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='9' fill='%23ffcc00' stroke='%23c8a000' stroke-width='1'/%3E%3Ccircle cx='7' cy='8' r='1.5' fill='%23000'/%3E%3Ccircle cx='13' cy='8' r='1.5' fill='%23000'/%3E%3Cpath d='M5 11q5 6 10 0' stroke='%23000' fill='%23fff' stroke-width='1.2'/%3E%3C/svg%3E\">",
  ';)': "<img class='smiley' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='9' fill='%23ffcc00' stroke='%23c8a000' stroke-width='1'/%3E%3Cline x1='5.5' y1='8' x2='8.5' y2='8' stroke='%23000' stroke-width='1.5'/%3E%3Ccircle cx='13' cy='8' r='1.5' fill='%23000'/%3E%3Cpath d='M6 12q4 4 8 0' stroke='%23000' fill='none' stroke-width='1.2'/%3E%3C/svg%3E\">",
  ':P': "<img class='smiley' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='9' fill='%23ffcc00' stroke='%23c8a000' stroke-width='1'/%3E%3Ccircle cx='7' cy='8' r='1.5' fill='%23000'/%3E%3Ccircle cx='13' cy='8' r='1.5' fill='%23000'/%3E%3Cpath d='M6 12q4 2 8 0' stroke='%23000' fill='none' stroke-width='1'/%3E%3Crect x='9' y='12' width='3' height='4' rx='1' fill='%23ff6666'/%3E%3C/svg%3E\">",
  'B)': "<img class='smiley' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='9' fill='%23ffcc00' stroke='%23c8a000' stroke-width='1'/%3E%3Crect x='4' y='6' width='12' height='5' rx='2' fill='%23222' opacity='0.8'/%3E%3Cpath d='M6 13q4 3 8 0' stroke='%23000' fill='none' stroke-width='1.2'/%3E%3C/svg%3E\">",
  'O_o': "<img class='smiley' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='9' fill='%23ffcc00' stroke='%23c8a000' stroke-width='1'/%3E%3Ccircle cx='7' cy='8' r='2.5' fill='%23fff' stroke='%23000'/%3E%3Ccircle cx='7' cy='8' r='1' fill='%23000'/%3E%3Ccircle cx='13' cy='8' r='1.5' fill='%23fff' stroke='%23000'/%3E%3Ccircle cx='13' cy='8' r='0.7' fill='%23000'/%3E%3Cellipse cx='10' cy='14' rx='2' ry='1.5' fill='%23000'/%3E%3C/svg%3E\">",
  '*DRINK*': "<img class='smiley' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Crect x='6' y='4' width='8' height='12' rx='1' fill='%23daa520' stroke='%23996600'/%3E%3Crect x='7' y='5' width='6' height='4' fill='%23fff8dc'/%3E%3Crect x='5' y='3' width='10' height='2' rx='1' fill='%23fff8dc' stroke='%23996600'/%3E%3Cellipse cx='10' cy='5' rx='3' ry='2' fill='%23fff'/%3E%3C/svg%3E\">",
};

function insertSmileys(html) {
  // Replace text smileys with SVG images, order matters for longer tokens first
  const order = ['*DRINK*', 'O_o', ':D', ':P', 'B)', ';)', ':)'];
  for (const key of order) {
    html = html.split(key).join(SMILEY[key]);
  }
  return html;
}

// Load sounds
const sndTada = new Audio('tada3.mp3');
const sndStop = new Audio('windows-xp-critical-stop.mp3');
const sndNav = new Audio('windows-navigation-start.mp3');

window.openWindow = function (winId, tbId) {
  document.getElementById(winId).classList.remove('hidden');
  document.getElementById(tbId).classList.remove('hidden');
  document.getElementById(tbId).classList.add('active');
  sndNav.cloneNode().play().catch(e => { });
};
window.toggleWindow = function (winId, tbId) {
  const win = document.getElementById(winId);
  const tb = document.getElementById(tbId);
  win.classList.toggle('hidden');
  tb.classList.toggle('active', !win.classList.contains('hidden'));
  sndNav.cloneNode().play().catch(e => { });
};
window.closeWindow = function (winId, tbId) {
  document.getElementById(winId).classList.add('hidden');
  document.getElementById(tbId).classList.add('hidden');
  document.getElementById(tbId).classList.remove('active');
  sndNav.cloneNode().play().catch(e => { });
};

// Custom Win2000 Dialog
const DIALOG_ICONS = {
  error: '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'14\' fill=\'%23ff0000\' stroke=\'%23800000\' stroke-width=\'2\'/%3E%3Ctext x=\'16\' y=\'22\' text-anchor=\'middle\' font-size=\'20\' font-weight=\'bold\' fill=\'%23fff\'%3EX%3C/text%3E%3C/svg%3E" width="32" height="32">',
  warning: '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M16 2L1 30h30z\' fill=\'%23ffcc00\' stroke=\'%23808000\' stroke-width=\'1\'/%3E%3Ctext x=\'16\' y=\'26\' text-anchor=\'middle\' font-size=\'20\' font-weight=\'bold\' fill=\'%23000\'%3E!%3C/text%3E%3C/svg%3E" width="32" height="32">',
  info: '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'14\' fill=\'%230a246a\' stroke=\'%23000\' stroke-width=\'1\'/%3E%3Ctext x=\'16\' y=\'22\' text-anchor=\'middle\' font-size=\'18\' font-weight=\'bold\' fill=\'%23fff\'%3Ei%3C/text%3E%3C/svg%3E" width="32" height="32">',
};
const DIALOG_TITLES = {
  error: 'Windows - Критическая ошибка',
  warning: 'Windows - Предупреждение',
  info: 'Windows',
};
window.winAlert = function (msg, type) {
  type = type || 'info';
  document.getElementById('dialog-icon').innerHTML = DIALOG_ICONS[type] || DIALOG_ICONS.info;
  document.getElementById('dialog-text').textContent = msg;
  document.getElementById('dialog-title').textContent = DIALOG_TITLES[type] || DIALOG_TITLES.info;
  document.getElementById('win-overlay').classList.remove('hidden');
  if (type === 'error') { sndStop.currentTime = 0; sndStop.play().catch(e => { }); }
  else { sndNav.cloneNode().play().catch(e => { }); }
};
window.closeDialog = function () {
  document.getElementById('win-overlay').classList.add('hidden');
};

document.addEventListener('click', (e) => {
  // Play navigation sound on any click, but lower volume
  const navClone = sndNav.cloneNode();
  navClone.volume = 0.4;
  navClone.play().catch(err => { /* Autoplay block */ });
}, true);

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  const toastText = document.getElementById('toast-text');
  const mediaContainer = document.getElementById('media-container');
  const copiedToast = document.getElementById('copied-toast');
  const statusText = document.getElementById('status-text');
  const mailTbody = document.querySelector('.mail-table tbody');
  const desktopMailIcon = document.querySelector('.desktop-icon-mail span');

  let currentText = '';
  let mailCount = 0;
  const mailStore = []; // store {text, media} for each mail row

  // Generate a new mail entry
  function receiveMail() {
    const name = randomFrom(NAMES);
    const text = generateToast(name);
    const media = getRandomMedia();
    const subject = randomFrom(MAIL_SUBJECTS);
    const sender = randomFrom(MAIL_SENDERS);
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
    const idx = mailStore.length;
    mailStore.push({ text, media });

    // Create mail row
    const tr = document.createElement('tr');
    tr.className = 'mail-row';
    tr.innerHTML = `<td style="font-weight:bold;">*</td><td>${sender}</td><td class="mail-subject">${subject}</td><td>${time}</td>`;
    tr.addEventListener('click', () => selectMail(idx, tr));
    mailTbody.insertBefore(tr, mailTbody.firstChild);

    // Auto-select the new mail
    selectMail(idx, tr);

    // Update unread counter
    mailCount++;
    if (desktopMailIcon) {
      desktopMailIcon.innerHTML = `Outlook Express <b style="color:#ff5f56">(${mailCount})</b>`;
    }
    statusText.textContent = `Сообщений: ${mailCount}`;
    document.querySelector('.status-sz').textContent = Math.floor(Math.random() * 900 + 100) + ' KB';

    // Update folder tree count
    const inboxEl = document.querySelector('.tree-selected');
    if (inboxEl) inboxEl.innerHTML = `<span class="tree-icon">&#9993;</span> Входящие <b>(${mailCount})</b>`;

    sndTada.currentTime = 0;
    sndTada.play().catch(e => { });
  }

  function selectMail(idx, rowEl) {
    // Deselect all rows
    mailTbody.querySelectorAll('.mail-selected').forEach(r => r.classList.remove('mail-selected'));
    rowEl.classList.add('mail-selected');
    // Mark as read
    rowEl.children[0].style.fontWeight = 'normal';
    rowEl.children[0].textContent = '';

    const entry = mailStore[idx];
    currentText = entry.text;

    // Render text
    let html = currentText
      .replace(/\n/g, '<br>')
      .replace(/(пив|рыбалк|шашлы|здоров|счасть|деньг|денежн|купюр)/gi, '<b>$1</b>')
      .replace(/(варень|мечт|сердц|праздник)/gi, '<b>$1</b>');
    toastText.innerHTML = insertSmileys(html);
    toastText.scrollTop = 0;

    // Render media
    mediaContainer.innerHTML = '';
    if (entry.media.type === 'image') {
      const img = document.createElement('img');
      img.src = entry.media.src;
      img.alt = 'Media';
      mediaContainer.appendChild(img);
    } else {
      const video = document.createElement('video');
      video.src = entry.media.src;
      video.controls = false;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      mediaContainer.appendChild(video);
    }

    // Update reading pane header
    const hdr = document.querySelector('.readpane-header');
    if (hdr) {
      const sender = rowEl.children[1].textContent;
      const subj = rowEl.children[2].textContent;
      hdr.innerHTML = `<div><b>From:</b> ${sender}@mail.ru</div><div><b>Subject:</b> ${subj}</div>`;
    }
  }

  // Auto-generate first greeting when Outlook opens
  const origOpen = window.openWindow;
  window.openWindow = function (winId, tbId) {
    origOpen(winId, tbId);
    if (winId === 'win-main' && mailStore.length === 0) {
      receiveMail();
    }
  };

  // Send/Receive = new mail
  btn.addEventListener('click', receiveMail);

  // Copy button
  copyBtn.addEventListener('click', () => {
    if (!currentText) return;
    navigator.clipboard.writeText(currentText).then(() => {
      copiedToast.classList.add('show');
      setTimeout(() => copiedToast.classList.remove('show'), 2000);
    });
  });

  // Close button
  const closeBtn = document.querySelector('.btn-close-main');
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sndStop.currentTime = 0;
    sndStop.play().catch(err => { });
    winAlert('Критическая ошибка:\n\nТы не можешь закрыть Microsoft Outlook.\nПоздравления не заканчиваются!', 'error');
  });

  // Start Menu toggle
  const startBtn = document.getElementById('start-btn');
  const startMenu = document.getElementById('start-menu');
  startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu.classList.toggle('show');
    startBtn.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      startMenu.classList.remove('show');
      startBtn.classList.remove('open');
    }
  });

  // Taskbar Clock
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('tray-time').textContent = `${hours}:${minutes} ${ampm}`;
  }
  setInterval(updateClock, 1000);
  updateClock();
});
