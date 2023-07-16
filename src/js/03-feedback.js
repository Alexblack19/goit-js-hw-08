//*============
//* Варіант 1
//*============
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
handlerFillForm();

function onFormInput(e) {
  let formInf = localStorage.getItem(STORAGE_KEY);
  formInf = formInf ? JSON.parse(formInf) : {};
  formInf[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formInf));
}

function handlerFillForm() {
  let saveData = localStorage.getItem(STORAGE_KEY);
  if (saveData) {
    saveData = JSON.parse(saveData);
    Object.entries(saveData).forEach(([key, text]) => {
      formEl.elements[key].value = text || '';
    });
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  } else {
    let formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }
}

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

//*============
//* Варіант 2
//*============

// import throttle from 'lodash.throttle';

// const formEl = document.querySelector('.feedback-form');
// const STORAGE_KEY = 'feedback-form-state';

// formEl.addEventListener('input', throttle(onFormInput, 500));
// formEl.addEventListener('submit', onSubmit);

// let formData = {};

// function onFormInput(e) {
//   const { name, value } = e.target;
//   formData[name] = value;
//   setLocalStorage(STORAGE_KEY, formData);
// }

// populateForm();

// function populateForm() {
//   const parsedValue = getLocalStorage(STORAGE_KEY);

//   if (parsedValue?.email) {
//     formEl.elements.email.value = parsedValue.email;
//     formData.email = parsedValue.email;
//   }

//   if (parsedValue?.message) {
//     formEl.elements.message.value = parsedValue.message;
//     formData.message = parsedValue.message;
//   }
// }

// function onSubmit(e) {
//   e.preventDefault();
//   if (
//     formEl.elements.email.value === '' ||
//     formEl.elements.message.value === ''
//   ) {
//     alert('Please fill in all the fields!');
//     return;
//   }
//   console.log(formData);
//   removeLocalStorage(STORAGE_KEY);
//   e.target.reset();
//   formData = {};
// }
// // ==========================
// // Service for localStorage
// // ==========================
// function setLocalStorage(key, value) {
//   try {
//     if (typeof value !== 'string') {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//       return;
//     }
//     localStorage.setItem(key, value);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// }

// function getLocalStorage(key) {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// }

// function removeLocalStorage(key) {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error('Remove state error: ', error.message);
//   }
// }
