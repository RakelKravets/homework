
const btn = document.querySelector('.btn button');

const modal = document.querySelector('.modal-window');

const closeModalBtn = document.querySelector('.modal-window_btn');

btn.addEventListener('click', (event) => {

    if( event.target) {

        event.target.classList.add('hide');

        modal.classList.remove('hide');

    }

});

closeModalBtn.addEventListener('click', (event) => {

    if (event.target.closest('.modal-window_btn')) { 

        modal.classList.add('hide'); 

        btn.classList.remove('hide'); 

    }
});
