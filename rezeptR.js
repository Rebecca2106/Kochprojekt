let amount = ['12', '3', '4', '2']
let amountcalc = ['12', '3', '4', '2', " ", " "]
let ingredients = ['große Kartoffeln', 'Zwiebeln', 'EL Semmelbrösel', 'Ei(er)', 'Salz und etwas Pfeffer', 'etwas Öl zum Braten']
let background = ['bg1', 'bg0', 'bg1', 'bg0', 'bg1', 'bg0', 'bg1', 'bg0', 'bg1', 'bg0', 'bg1', 'bg0']





function render() {
    document.getElementById('info').innerHTML = '';
    document.getElementById('info').innerHTML += `<h1>Großmutter's Reibekuchen</h1>`;
    document.getElementById('info').innerHTML += `<div class="overview"><div class=rezeptbild></div>
    <div class="icons"><div class="icon"><img src="img/icons/clock-regular.svg"> 25 Minuten</div>
    <div class="icon"><img src="img/icons/brain-solid.svg"> einfach</div>
    <div class="icon"><img src="img/icons/calendar-alt-regular.svg"> 23.02.2022</div></div>
    </div></div>
    `
    document.getElementById('recipe').innerHTML = ``;
    document.getElementById('recipe').innerHTML += `<br><span>Zutaten für:&nbsp; &nbsp;<span>
    <input class="input" placeholder="1" type="number" id="calculate" min="1"><button id="amount" class="button" onclick="calcamount()">Portionen</button><br></br>`

    document.getElementById('recipe').innerHTML += '';
    for (i = 0; i < amountcalc.length; i++) {
        document.getElementById('recipe').innerHTML += `
            <div class="${background[i]}">${amountcalc[i]} ${ingredients[i]}</div>`
    }

    document.getElementById('calculate').innerHTML = ``;

}


function calcamount() {
    let person = document.getElementById('calculate').value;
    if (person < 1) {
        alert("bitte mindestens 1 Portion auswählen");
    } else {
        document.getElementById('recipe').innerHTML += '';
        for (i = 0; i < amount.length; i++) {
            amountcalc[i] = amount[i] * person;
        }
        render();
    }
}




