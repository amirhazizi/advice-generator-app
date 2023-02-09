const adviceID = getElement("#advice-id")
const adviceText = getElement("#advice-text")
const adviceBtn = getElement("#advice-btn")
// button eventlistener
adviceBtn.addEventListener("click", () => getAdvice())
// function api
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      setAdvice(data.slip)
    })
}
// domcontent loaded advice
fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => {
    setAdvice(data.slip)
  })
// set advice function
function setAdvice(data) {
  const id = data.id
  const text = data.advice
  adviceID.textContent = id
  adviceText.textContent = text
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
