window.onload = function () {

    document.getElementById('btn_muunna').addEventListener("click", btn_muunna);


};
function btn_muunna() {
    const nimi = document.getElementById('input_lampotila');
    const radiobox = document.getElementById('radiobox');
    const desimaali = document.querySelector('input[name="desimaali"]:checked').value
    console.log(desimaali);
    
    selectElement =
    document.querySelector('#menu');
output =
    selectElement.options
    [selectElement.selectedIndex].value;
document.querySelector('.output').textContent = output;

    
}