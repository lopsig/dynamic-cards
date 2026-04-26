
const createCards = () => {
  let container = "";
  let divCards = document.getElementById("divCards")
  
  //recuperar valor del Input
  let from = document.getElementById("txtFrom")
  let fromValue = parseInt(from.value)
  console.log(fromValue)
  let to = document.getElementById("txtTo")
  let toValue = parseInt(to.value)
  console.log(toValue)
  let jump = document.getElementById("txtJump")
  let jumpValue = parseInt(jump.value)
  console.log(jumpValue)
  for (let i = fromValue; i <= toValue; i+=jumpValue){
    container += "<div class = 'item'>" + i + "</div>"
    divCards.innerHTML = container
  }

}