const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', () => {
  handleContactBtn();
});

function handleContactBtn() {
  console.log("contactBtn pressed!");

  const backdrop =  document.createElement('div');
  backdrop.classList.add('backdrop');
  backdrop.id = "backdrop";

  backdrop.addEventListener('click', () => {
    backdrop.classList.remove("show");
    promptWindowContainer.classList.remove("show");
  })

  const promptWindowContainer = document.createElement('div');
  promptWindowContainer.classList.add('prompt-window-container');
  promptWindowContainer.id = "promptWindowContainer";

  

  const promptWindow = document.createElement('div');
  promptWindow.classList.add('bg-white', 'no-hover');
  promptWindowContainer.appendChild(promptWindow);
  
  const titleBar = document.createElement('div');
  titleBar.classList.add('title-bar');
  promptWindow.appendChild(titleBar);

  const windowBody = document.createElement('div');
  windowBody.classList.add('window-body');
  windowBody.style.display = "flex";
  windowBody.style.flexDirection = "column";
  promptWindow.appendChild(windowBody);

  const promptText = document.createElement('p');
  promptText.innerText = "Before proceeding, please read our guide on how to send us files properly";
  windowBody.appendChild(promptText);

  const buttonSection = document.createElement('section');
  buttonSection.classList.add('field-row');
  buttonSection.style.display = "flex";
  buttonSection.style.justifyContent = "flex-end";

  // const buttonContainer = document.createElement('div');
  // buttonContainer.style.display = "flex";
  // buttonSection.style.justifyContent = "space-between";

  
  const viewPDFBtn = document.createElement('div');
  viewPDFBtn.classList.add('bg-black', 'btn');
  viewPDFBtn.addEventListener('click', () => {

    

    backdrop.classList.remove("show");
    promptWindowContainer.classList.remove("show");
  })

  const pdfBtnText = document.createElement('div');
  pdfBtnText.textContent = "file sharing guidelines";
  // pdfBtnText.classList.add('')

  const pdfBtnIcon = document.createElement('div');
  pdfBtnIcon.classList.add('btn-icon');
  pdfBtnIcon.innerHTML = `<i class="fa-solid fa-file-lines"></i>`;

  viewPDFBtn.appendChild(pdfBtnText);
  viewPDFBtn.appendChild(pdfBtnIcon);

  const continueToEmailBtn = document.createElement('div');
  continueToEmailBtn.classList.add('bg-black', 'btn');
  continueToEmailBtn.style.marginLeft = "2%";
  continueToEmailBtn.addEventListener('click', () => {

    setWindowToSongQtySelector(windowBody);

    // backdrop.classList.remove("show");
    // promptWindowContainer.classList.remove("show");
  })

  const continueToEmailText = document.createElement('div');
  continueToEmailText.textContent = "contact";

  const continueToEmailIcon = document.createElement('div');
  continueToEmailIcon.classList.add('btn-icon');
  continueToEmailIcon.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;

  continueToEmailBtn.appendChild(continueToEmailText);
  continueToEmailBtn.appendChild(continueToEmailIcon);
  
  buttonSection.appendChild(viewPDFBtn);
  buttonSection.appendChild(continueToEmailBtn);
  windowBody.appendChild(buttonSection);

  backdrop.classList.add("show");
  promptWindowContainer.classList.add("show");

  document.body.appendChild(backdrop);
  document.body.appendChild(promptWindowContainer);
}

function setWindowToSongQtySelector(window) {
  window.innerHTML = ``;

  const contentContainer = document.createElement('div');
  contentContainer.style.display = "flex";
  contentContainer.style.justifyContent = "center";

  const textContainer = document.createElement('div');
  textContainer.innerText = "how many songs do you plan on sending?";

  const songQtySelector = document.createElement('input');
  songQtySelector.type = "number";
  songQtySelector.id = "songQty";
  songQtySelector.min = "1";
  // songQtySelector.required = true;

  const songQtySelectorLabel = document.createElement('label');
  songQtySelectorLabel.htmlFor = "songQty";
  songQtySelectorLabel.textContent = "Number of songs";
  songQtySelectorLabel.style.fontSize = "24px";

  const songQtySelectorContainer = document.createElement('div');
  songQtySelectorContainer.style.display = "flex";
  songQtySelectorContainer.style.flexDirection = "column";

  songQtySelectorContainer.appendChild(songQtySelectorLabel);
  songQtySelectorContainer.appendChild(songQtySelector);

  const emailBtn = document.createElement('button');
  emailBtn.innerText = `send`;
  emailBtn.onclick = () => proceedToEmailDraft(songQtySelector.value);
  
  



  const songQtyAndEmailBtnContainer = document.createElement('div');
  songQtyAndEmailBtnContainer.style.display = "flex";
  songQtyAndEmailBtnContainer.style.flexDirection = "column";

  songQtyAndEmailBtnContainer.appendChild(songQtySelectorContainer);
  songQtyAndEmailBtnContainer.appendChild(emailBtn);
  


  // songQtySelectorContainer.style.justifyContent = "center";

  contentContainer.appendChild(textContainer);
  contentContainer.appendChild(songQtyAndEmailBtnContainer);

  window.appendChild(contentContainer);
}

function proceedToEmailDraft(songQty) {
  if (songQty < 1) {
    console.error("Please select a song quantity of greater than or equal to 1");
    return;
  } 
  console.log("proceedToEmailDraft function reached!");
  const email = "ryan@makebelievestudio.com";
  const subject = "Reamping Inquiry";
  const emailBody = `Ryan, \n\nI'm looking to get ${songQty} songs reamped. Please let me know if you have availability currently.`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(emailBody);

  document.location = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
}

const bgImgsUrlArr = [
  '../public/assets/imgs/studio-b-b&w-min.png',
  '../public/assets/imgs/pedal-pic-1-min.jpg',
  '../public/assets/imgs/amp-wall-full-blurred-min.png'
];



let i = 0;
// while (true) {
//   if (i <= 3) i = 0;

//   setTimeout(() => {
//     document.body.style.backgroundImage = bgImgsUrlArr[i];
//   }, 5000);

//   i += 1;
// }