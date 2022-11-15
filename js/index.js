const ratingButton = document.querySelectorAll(".rating__button")

ratingButton.forEach((item) => {
  item.addEventListener("click", event => {
      event.preventDefault()
      item.classList.toggle("activate")
  })
  console.log(item.className);
})