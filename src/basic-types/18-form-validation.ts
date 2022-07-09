import isEmail from 'validator/lib/isEmail';

const showErrorClassName: string = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const usernameInput = document.querySelector('.username') as HTMLInputElement;
const emailInput = document.querySelector('.email') as HTMLInputElement;
const passwordInput = document.querySelector('.password') as HTMLInputElement;
const password2Input = document.querySelector('.password2') as HTMLInputElement;

function hideErrorMessages(form: HTMLFormElement): void {
  const divsWithErrorMessages = form.querySelectorAll(`.${showErrorClassName}`);

  divsWithErrorMessages.forEach((div) => {
    div.classList.remove(`.${showErrorClassName}`);
  });
};

function checkEmail(input: HTMLInputElement): void {
  if(!isEmail(input.value)) showErrorMessage(input, 'Invalid email');
};

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(showErrorClassName);
};

function checkForEmptyFields(...inputs: Array<HTMLInputElement>): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, `${input.name} is required!`);
  })
};

function checkEqualPasswords(password1: string, password2: string): void {
  if (password1 !== password2) {
    [passwordInput, password2Input].forEach((input) => {
      showErrorMessage(input, 'Passwords must be equal')
    })
  }
};

function shouldSendForm(form: HTMLFormElement): boolean {
  const errorMessagesArray = form.getElementsByClassName(showErrorClassName);

  if (errorMessagesArray.length > 0) {
    return false;
  }

  return true;
};

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();

  hideErrorMessages(this);

  checkForEmptyFields(usernameInput, emailInput, passwordInput, password2Input);

  checkEmail(emailInput);

  checkEqualPasswords(passwordInput.value, password2Input.value);

  if (shouldSendForm(this)) {
    console.log(shouldSendForm(this));
    alert('Congratulations!! :)');
  }
});
