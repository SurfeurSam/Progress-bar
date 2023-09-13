const { logForm } = document.forms;
const badMessage = document.createElement('h3');
const goodMessage = document.createElement('h3');

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(logForm);
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();

    if (result.email) {
      goodMessage.style.color = 'green';
      goodMessage.textContent = `${result.name}, Вы успешно авторизовались!`;
      logForm.insertAdjacentElement('beforeend', goodMessage);
      badMessage.textContent = '';
      setTimeout(() => {
        window.location = '/';
      }, 700);
    } else {
      badMessage.style.color = 'red';
      badMessage.textContent = 'Неверный email или пароль!';
      document.querySelectorAll('.input').forEach((el) => (el.value = ''));
      logForm.insertAdjacentElement('beforeend', badMessage);
    }
  } catch (error) {
    alert('Вы не смогли войти!');
  }
});
