const input = document.querySelector('input')
const btn = document.querySelector('button')
const name = document.querySelector('.name')
const borders = document.querySelector('.borders')
const nameURL = 'https://restcountries.com/v3.1/name/'
const codeURL = 'https://restcountries.com/v3.1/alpha/'
btn.onclick = function () {
    borders.innerHTML = '';
    fetch(nameURL + input.value)
        .then((res) => res.json())
        .then((data) => {
            renderData(data)
        })

    function renderData(data) {
        const [country] = data
        name.innerText = country.name.common;
        const li = document.createElement('li')
        li.innerText = data[0].borders;
        borders.append(li);
        // borders.style.listStyle = ''
        borders.style.marginBottom = '10px'
    }
}