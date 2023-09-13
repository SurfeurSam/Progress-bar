const { regForm } = document.forms;
const badMessage = document.createElement('div');
const goodMessage = document.createElement('div');
regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(regForm);
  try {
    goodMessage.textContent = '';
    const response = await fetch('/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    console.log('RESULT=====>>', result);

    if (result.msg === 'Такая почта занята!') {
      document.querySelectorAll('.input').forEach((el) => (el.value = ''));
      const errorMessage = document.createElement('h2');
      errorMessage.style.color = 'red';
      errorMessage.textContent = 'Такая почта занята!';
      regForm.insertAdjacentElement('beforeend', errorMessage);
    } else {
      goodMessage.style.color = 'green';
      goodMessage.textContent = 'Регистрация прошла успешно!';
      regForm.insertAdjacentElement('beforeend', goodMessage);
      badMessage.textContent = '';
      setTimeout(() => {
        window.location = '/login';
      }, 700);
    }
  } catch (error) {
    console.log(error);
  }
});
console.log('hi');