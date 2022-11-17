'use strict';

(function(){

    let iceCreamList;
    let resultarea;
    let test;

    document.addEventListener('DOMContentLoaded',init);

    async function init () {
        iceCreamList = document.getElementById('icescreamlist');
        resultarea = document.getElementById('resultarea');
        test = document.getElementById('test');
        console.log('js coming in');
        test.addEventListener('click',() => alert('clicked me hahaha'));
        try {
            const data = await('/all');
            const flavors = await data.json();
            console.log(data,flavors);
            populateIceCreamList(flavors);
        } catch (error) {
            showErrorMessage(error.message)
        }
    }

    const populateIceCreamList = (flavors) => {
        for (const flavor of flavors){
            const option = document.createElement('option');
            option.value = flavor;
            option.textContent=flavor;
            iceCreamList.appendChild(option);
        }
        iceCreamList.addEventListener('change',choose);
        iceCreamList.value='';

    }

    async function choose() {
        const iceCreamflavor = iceCreamList.value;
        if(iceCreamflavor.length>0){

            try {
                const data = await fetch(`/icescreams/${iceCreamflavor}`);
                const result = await data.json();
                updateResult(result);
            } catch (error) {
                showErrorMessage(error.message)
            }
        }
        else{

        }
    }


    function updateResult(result){
            if (!result){
                showErrorMessage('programming error !! Sorry')
            }
            else if(result.message){
showErrorMessage(data.message);
            }
            else if(data.name && data.name.length ===0){

            }
            else{
                let htmlString =`
                <div>
                <p id="name">${data.name}</p>
                <p id="price">${data.price}</p>
                </div>`;
                if(data.image && data.image.length > 0){
                    htmlString +=`<img src="/images/${data.image}"/>`;
                }
                resultarea.innerHTML=htmlString;
            }
    }

    function clearResultArea() {
        resultarea.innerHTML ='';
    }

    function showErrorMessage (){
        resultarea.innerHTML =`<div class='error'>
        <h2>Error</h2>
        <p>${message}</p
        </div>`;
    }
})