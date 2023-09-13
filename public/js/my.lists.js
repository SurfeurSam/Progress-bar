const { ShowShablon, BackFromShablon } = document.forms
const ol = document.querySelector("ol")
const DeleteListBtn = document.getElementsByClassName('DeleteListBtn');
const deleteArr = Array.from(DeleteListBtn);

ol.addEventListener("click", async (e) => {
    e.preventDefault()
    if(e.target.classList.contains("ShowListBtn")){
        console.log("button pressed")
        window.location.href = `/mylists/${e.target.id}`
    }
})

ol.addEventListener("click", async (e) => {
    e.preventDefault()
    if(e.target.classList.contains("EditListBtn")){
        console.log("button pressed")
        window.location.href = `/profile/show.shablon/${e.target.id}`
    }
})

  console.log(DeleteListBtn);
  
  deleteArr.forEach((element) => {
    element.addEventListener('click', async (event) => {
      event.preventDefault();
      const { shablonid } = event.target.dataset;
      console.log("🚀🚀🚀🚀🚀 ~ shablonid:", shablonid)
      
      try {
        const response = await fetch(`/mylists/${shablonid}`, {
          method: 'DELETE',
          redirect: 'follow',
        });
        if (response.redirected) {
          window.location.href = response.url;
        }
      } catch (error) {
        console.error(error);
      }
    });
  });