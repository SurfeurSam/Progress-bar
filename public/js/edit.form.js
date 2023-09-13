const { editForm } = document.forms;
const inputs = document.querySelectorAll(`input[type="checkbox"]`)
inputs.forEach((el) => {
  el.addEventListener('change', async (e) => {
    e.preventDefault();
    const data = { value: e.target.checked, name: e.target.name }
    console.log("🚀🚀🚀🚀🚀 ~ data:", data)
  
    const { formid } = editForm.dataset;
    console.log("🚀🚀🚀🚀🚀 ~ formid:", formid)
    try {
      await fetch(`/profile/edit.shablon/${formid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  });
});


const inputText = document.querySelector(`input[type="text"]`)
inputText.addEventListener('change', async (e) => {
  e.preventDefault();
  data = { value: e.target.value, name: e.target.name }
  console.log("🚀🚀🚀🚀🚀 ~ data:", data)
  const { formid } = editForm.dataset;
  console.log("🚀🚀🚀🚀🚀 ~ formid:", formid)
  try {
    await fetch(`/profile/edit.shablon/${formid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
});