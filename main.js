window.onload = function () {

    document.getElementById('btn_muunna').addEventListener("click", btn_muunna);


};
function btn_muunna() {
    const nimi = document.getElementById('input_lampotila');
    const radiobox = document.getElementById('radiobox');
    const desimaali = document.querySelector('input[name="desimaali"]:checked').value

    selectElement = document.querySelector('#menu');
    menuvalue = selectElement.options[selectElement.selectedIndex].value;
    // 1 Fahrenhait->Celcius
    // 2 Celcius->Fahrenhait
    // 3 Fahrenheit->Kelvin
    // 4 Kelvin->Fahrenheit
    // 5 Kelvin->Celsius
    // 6 Celsius->Kelvin
    absoluuttinen_nolla = 0
    valueof_input_lampotila=Number(nimi.value)
    switch (Number(menuvalue)) {
        case 1:
            output = (valueof_input_lampotila - 32) / 1.8
            absoluuttinen_nolla = output
            break;
        case 2:
            output = (valueof_input_lampotila * 1.8) + 32
            absoluuttinen_nolla = valueof_input_lampotila
            break;
        case 3:
            output = (valueof_input_lampotila + 459.67) / 1.8
            absoluuttinen_nolla = (valueof_input_lampotila - 32) + 1.8
            break;
        case 4:
            output = (valueof_input_lampotila * 1.8) - 459.67
            absoluuttinen_nolla = (valueof_input_lampotila) - 273.15
            break;
        case 5:
            output = (valueof_input_lampotila) - 273.15
            absoluuttinen_nolla = output
            break;
        case 6:
            absoluuttinen_nolla = valueof_input_lampotila
            output = (valueof_input_lampotila) + 273.15
            break;
        default:
            absoluuttinen_nolla =-300
    }


    if (absoluuttinen_nolla < -273.15) {

        document.querySelector('.output').textContent = "incorrect value";

    }
    else {
        outputstr = output.toFixed(desimaali)
        document.querySelector('.output').textContent = "Converted value is "+outputstr;



    }

}