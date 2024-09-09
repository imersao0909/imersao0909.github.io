const BTN_NEXT_1 = document.getElementById('next1');
const BTN_NEXT_2 = document.getElementById('next2');

const DIV_STEP_1 = document.getElementById('step1');
const DIV_STEP_2 = document.getElementById('step2');
const DIV_STEP_3 = document.getElementById('step3');

BTN_NEXT_1.addEventListener('click', () => {
    DIV_STEP_1.classList.add('d-none');
    DIV_STEP_2.classList.remove('d-none');
});

BTN_NEXT_2.addEventListener('click', () => {
    DIV_STEP_2.classList.add('d-none');
    DIV_STEP_3.classList.remove('d-none');
});

document.getElementById('prev2').addEventListener('click', () => {
    DIV_STEP_2.classList.add('d-none');
    DIV_STEP_1.classList.remove('d-none');
});

document.getElementById('prev3').addEventListener('click', () => {
    DIV_STEP_3.classList.add('d-none');
    DIV_STEP_2.classList.remove('d-none');
});


// segredo

const BTN_SEGREDO = document.getElementById('btn_segredo');

BTN_SEGREDO.addEventListener('click', () => {
    BTN_SEGREDO.style.display = 'none';
});