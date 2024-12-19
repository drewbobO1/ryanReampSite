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
  buttonSection.style.justifyContent = "flex-end";
  
  const viewPDFBtn = document.createElement('button');
  viewPDFBtn.textContent = "Delete!";
  viewPDFBtn.addEventListener('click', () => {

    

    backdrop.classList.remove("show");
    promptWindowContainer.classList.remove("show");
  })


  const continueToEmailBtn = document.createElement('button');
  continueToEmailBtn.textContent = "No, keep it";
  continueToEmailBtn.addEventListener('click', () => {
    backdrop.classList.remove("show");
    promptWindowContainer.classList.remove("show");
  })
  
  buttonSection.appendChild(viewPDFBtn);
  buttonSection.appendChild(continueToEmailBtn);
  windowBody.appendChild(buttonSection);

  backdrop.classList.add("show");
  promptWindowContainer.classList.add("show");

  document.body.appendChild(backdrop);
  document.body.appendChild(promptWindowContainer);
}