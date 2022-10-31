
const tableBody = document.getElementById("tableTbody")
const userInput = document.getElementById("userInput")
const manipulationSelector = document.getElementById("manipulationOption")
const manipulationBtn = document.getElementById("manipulationBtn")


manipulationBtn.addEventListener('click', function() {

    if(manipulationSelector.value == "upper") {
        userInput.value = userInput.value.toUpperCase()
    } 
    if(manipulationSelector.value == "lower") {        
        userInput.value = userInput.value.toLowerCase()
    }
    


    const newTr = document.createElement("tr")
    const newTd = document.createElement("td")
    const newTdNumber = document.createElement("td")
    const newTdText = document.createTextNode(userInput.value)
    const newTdNumberText = document.createTextNode(NextId())
    newTdNumber.append(newTdNumberText)
    newTd.append(newTdText)
    newTd.setAttribute("id", NextId())    

    if(NextId() % 2) {
        newTr.style.backgroundColor = "red"
    } else {
        newTr.style.backgroundColor = "green"
    }
    

    newTr.appendChild(newTd)
    newTr.appendChild(newTdNumber)
    tableBody.appendChild(newTr)
})




function NextId() {
    let id = 1;
    for (let i = 0; i < tableBody.childNodes.length; i++) {
        const element = tableBody.childNodes[i];

        if(element.firstChild != null) { // a bit funky
            let elementID = Number(element.childNodes[1].textContent) // prob not optimal
            if(elementID >= id){
                id = elementID + 1;
            }
        }
    }
    return id;
}