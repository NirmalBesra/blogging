
const forms = document.querySelectorAll('.main form');
const loginForm = forms[0];
const registerForm = forms[1];

const tabBtns = document.querySelectorAll('.tab-btn');

function showForm(target) {
  const showLogin = target === 'login';

  loginForm.style.display = showLogin ? 'block' : 'none';
  registerForm.style.display = showLogin ? 'none' : 'block';

  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === target);
  });
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => showForm(btn.dataset.target));
});


showForm('register');