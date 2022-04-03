const refs = {
  modalAge: document.querySelector('.js-modal-age'),
  modalAgeCloseBtn: document.querySelector('.js-age-close'),
  modalOpenBtn: document.querySelector('.js-modal-open'),
  modalCloseBtn: document.querySelector('.js-modal-close'),
  modal: document.querySelector('.js-modal'),
  mofalForm: document.querySelector('.js-form'),
};

refs.modalAgeCloseBtn.addEventListener('click', closeModalAge);
refs.modalOpenBtn.addEventListener('click', toggleModal);
refs.modalCloseBtn.addEventListener('click', toggleModal);
refs.mofalForm.addEventListener('submit', onFormSubmit);

function closeModalAge() {
  document.body.classList.remove('blocked-body');
  refs.modalAge.classList.add('is-hidden');
}

function toggleModal() {
  document.body.classList.toggle('blocked-body');
  refs.modal.classList.toggle('is-hidden');
}

function onFormSubmit(e) {
  e.preventDefault();
  toggleModal();
}
