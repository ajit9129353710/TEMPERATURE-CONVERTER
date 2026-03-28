function convertTemp() {
    let value = document.getElementById("tempValue").value;
    let type = document.getElementById("tempType").value;
    let result = document.getElementById("result");

    if (value === "") {
        result.innerHTML = "Please enter a value!";
        return;
    }

    value = parseFloat(value);
    let c, f, k;

    if (type === "celsius") {
        c = value;
        f = (c * 9/5) + 32;
        k = c + 273;
    } 
    else if (type === "fahrenheit") {
        f = value;
        c = (f - 32) * 5/9;
        k = c + 273;
    } 
    else {
        k = value;
        c = k - 273;
        f = (c * 9/5) + 32;
    }

    result.innerHTML = `
        Celsius: ${c.toFixed(2)} °C <br>
        Fahrenheit: ${f.toFixed(2)} °F <br>
        Kelvin: ${k.toFixed(2)} K
    `;
}