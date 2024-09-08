function calculate() {
    const output = document.forms.output.value;
    const result = eval(output);
    document.forms.output.value = result;
}

document.querySelector('.result').addEventListener('click', calculate);

// 반올림 함수
function roundNumber() {
    let output = parseFloat(document.forms.output.value);
    if (!isNaN(output)) {
        document.forms.output.value = Math.round(output);
    }
}

// 올림 함수
function ceilNumber() {
    let output = parseFloat(document.forms.output.value);
    if (!isNaN(output)) {
        document.forms.output.value = Math.ceil(output);
    }
}

// 버림 함수
function floorNumber() {
    let output = parseFloat(document.forms.output.value);
    if (!isNaN(output)) {
        document.forms.output.value = Math.floor(output);
    }
}
