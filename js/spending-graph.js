function createChart(data) {
    let chart = document.getElementById("chart")
    
    chart.style.position = "relative";

    chart.style.borderBottomStyle = "solid"
    chart.style.borderBottomWidth = "1px"

    let barPosition = 2
    let barWidth = 4

    for (let i=0; i < data.length; i += 1) {
        let dataItem = data[i]
        let bar = document.createElement("div")
        bar.style.position = "absolute"
        bar.style.left = barPosition + "rem"
        bar.style.width = barWidth + "rem"
        bar.style.backgroundColor = dataItem.color
        bar.style.borderRadius = "8px 8px 0px 0px"
        bar.style.boxShadow = "6px 1px 6px grey"
        bar.style.transition = "height 0.5s ease-out"
        
        bar.style.height = (dataItem.value/5) + "px"
        bar.classList.add("bar")

        let cat = document.createElement("div")
        cat.style.position = "absolute"
        cat.style.height = "4rem"
        cat.style.width = "5rem"
        cat.style.textAlign = "center"
        cat.style.bottom = "-100px"
        cat.textContent = dataItem.category
        bar.appendChild(cat)

        let value = document.createElement("div")
        value.classList.add("spendValue")
        value.style.position = "absolute"
        value.style.textAlign = "center"
        value.style.top = "-25px"
        value.textContent = "$" + (Math.round(dataItem.value * 100) / 100).toFixed(2);
        bar.appendChild(value)


        bar.style.bottom = "0px";
        chart.appendChild(bar);

        barPosition += (barWidth * 2);
    }

    return chart;
}

let colors = [
    { color: "#ED9E2E", category: "Food & Dining", value: 2005.00 },
    { color: "#4D9078", category: "Auto & Transport", value: 1471.31 },
    { color: "#FFA9E7", category: "Shopping", value: 892.86 },
    { color: "#9888A5", category: "Bills & Utilities", value: 531.60 },
    { color: "#2A3874", category: "Mortgage", value: 1646.00 },
    { color: "#B02E0C", category: "Entertainment", value: 179.52 }
]; 


window.onload = function () {
    createChart(colors);

}

function resetChart() {
    for (let i = 0; i < colors.length; i++) {
        colors[i].value = 0
    }

    let values = document.querySelectorAll(".spendValue")
    for (let i = 0; i < values.length; i++) {
        let value = values[i]
        value.textContent = "$" + "0.00"
    }


    let bars = document.querySelectorAll(".bar")
    for (let i = 0; i < bars.length; i++) {
        let bar = bars[i]
        bar.style.height = "0px"
    }

    console.log(colors)

}