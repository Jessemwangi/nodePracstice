'use strict';

(
    function () {
        let resultset;
        let resultsetsection;
        let messagearea;
        let keyInput;
        let searchValueInput;

        document.addEventListener('DOMContentLoaded', init);
        function init() {
            resultset = document.getElementById('resultset');
            resultsetsection = document.getElementById('resultsetsection');
            messagearea = document.getElementById('messagearea');
            keyInput = document.getElementById('key');
            searchValueInput = document.getElementById('searchvalue');


            document.getElementById('submit').addEventListener('click', submit);

        }

        async function submit() {
            const key = keyInput.value;
            const searchValue = searchValueInput.value;

            try {
                const uri = key?`/persons/${key}?value=${searchValue}`:'/persons';
                console.log(uri);
                const result = await fetch(uri);
                const personData = await result.json();
                console.log(personData);
                updataPage(personData);
            } catch (error) {
                showError(error.message);
            }
        }

        function showError(message) {
            messagearea.innerHTML = `<p>${message}</p>`
            resultset.classList.add("hidden");
            messagearea.classList.remove("hidden");
                }

        function updataPage(searchresult){
            if(searchresult.message){
                showError(searchresult.message);

            }
            else if (searchresult.length ===0){
                showError('No Person Found');
                

            }
            else{
                let htmlString ='';
                for (const person of searchresult){
                    htmlString +=`<tr>
                    <td>${person.firstname}</td>
                    <td>${person.lastname}</td>
                    <td>${person.age}</td>
                    </tr>\n`;
                    resultset.classList.remove("hidden");
                    messagearea.classList.add("hidden");

                }
                resultset.innerHTML=htmlString;

            }
        }
    }
)()
