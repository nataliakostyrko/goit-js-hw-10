import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    
    const delay = parseInt(form.elements.delay.value);
    const state = form.elements.state.value;

    createPromise(delay, state)
.then((value) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((message) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    })
    .finally(() => {
            form.reset();
        });
};




const createPromise = (delay, state) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
   
};
 
