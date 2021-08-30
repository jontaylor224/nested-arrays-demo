let appElement = document.querySelector("#app")

let dataArray = [
    ["apple", "banana", "coconut", "durian"],
    ["wheat", "rye", "sourdough"],
    ["carrot", "tomato", "peach", "mango"]
]
console.log(dataArray[0])

for (let outerIndex = 0; outerIndex < dataArray.length; outerIndex += 1) {
    const currentArray = dataArray[outerIndex];
    let newList = document.createElement("ol")
    appElement.append(newList)
    for (let innerIndex = 0; innerIndex < currentArray.length; innerIndex += 1) {
        const currentElement = currentArray[innerIndex];
        let newItem = document.createElement("li")
        newItem.innerText = currentElement
        newList.append(newItem)
    }
}