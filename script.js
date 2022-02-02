let input = document.getElementById('input'),
    output = document.getElementById('output');
window.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        if (output.innerHTML == '') {
            output.style.opacity = '0';
        }
        output.style.opacity = '1';
        output.innerHTML += input.value + "<br>";
        input.value = "";
    } else if (e.key == "Backspace") {
        output.style.opacity = '0';
        output.innerHTML = '';
    }
})

// 3 задание

function abc(a,z) {
    let arr = [];
    for (let i = a; i < z; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}
output.innerHTML = "Вывод английского алфавита: <br>" + abc(97,123);