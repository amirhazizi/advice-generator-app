const adviceID = getElement("#advice-id")
const adviceText = getElement("#advice-text")
const adviceBtn = getElement("#advice-btn")
// get advice api
fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => getAdvice(data.slip))
//   function api
function getAdvice(obj) {
  const id = obj.id
  const text = obj.advice
  adviceID.textContent = id
  adviceText.textContent = text
  adviceBtn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => getAdvice(data.slip))
  })
}
// get element checker
function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw new Error(`check selection: ${selection}`)
  }
}
