const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.course');

for(let course of courses) {
  course.addEventListener('click', () => {
    const idCurso = course.id;
    modalOverlay.classList.add('maximize');
    modalOverlay.querySelector('iframe').src=`https://rocketseat.com.br/${idCurso}`;
  });
};

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('maximize');
  modalOverlay.querySelector('iframe').src='';
})
