const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');
const body = document.querySelector('body');

sunIcon.addEventListener('click', () => {
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
  body.classList.remove('dark');
});

moonIcon.addEventListener('click', () => {
  moonIcon.classList.add('hidden');
  sunIcon.classList.remove('hidden');
  body.classList.add('dark');
});

document.addEventListener ("keydown",run);
function run(emr){
    console.log(emr.keyCode);
    if(emr.keyCode ==116){
        alert("Sayfa Yenileme(F5 Tuşu ile) Engellendi !!");
    }

    emr.preventDefault();
}

