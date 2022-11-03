'use strict';
(function () {
    let resultSet;
    let licenseinput;
    document.addEventListener('DOMContentLoaded', init);
    function init(){
        resultSet  = document.getElementById('resultset');
        licenseinput = document.getElementById('license');
        document.getElementById('send').addEventListener('click',send);
    }
     async function send() {
        
        try {
            const data = await fetch(`http://localhost:3001/search/bylicense?value=${licenseinput.value}`, { mode: 'cors' });
            const cars = await data.json();
            const resultset = document.getElementById('resultset');
            for (const car of cars) {
                const tr = document.createElement('tr');
                tr.appendChild(createCell(car.model));
                tr.appendChild(createCell(car.lincese));
                resultset.appendChild(tr);
            }

        }
        catch (err) {

        }
    }

    function createCell(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }
})();