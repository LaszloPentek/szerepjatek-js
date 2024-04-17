const newCharacterCreator = document.querySelector(".creator");
const characterSheet = document.querySelector(".characterSheet");


const rangeXpInput = document.querySelector(".xp-range-js");
const rangeHealthInput = document.querySelector(".health-range-js");
const rangeManaInput = document.querySelector(".mana-range-js");
const rangeStaminaInput = document.querySelector(".stamina-range-js");

// A range értékek beállítása
rangeXpInput.value = 2;
rangeHealthInput.value = 100;
rangeManaInput.value = 100;
rangeStaminaInput.value = 100; 

function assignAttributes(){
    const strength = parseInt(document.getElementById("strengthInput").value);
    const dexterity = parseInt(document.getElementById("dexterityInput").value);
    const intelligence = parseInt(document.getElementById("intelligenceInput").value);

    const totalPoints = strength + dexterity + intelligence;

    if (totalPoints !== 35){
        alert("Az attribútumok összege pontosan 35 pontnak kell lennie!");
        return;
    }

    const selectedClass = document.getElementById("characterClass").value;
    const characterName = document.getElementById("characterName").value;


    //Frissítjük a karakterlapt az új értékel
    if (characterSheet){
        characterSheet.innerHTML = `
            <h1>${characterName}</h1>
            <h2>${selectedClass}</h2>
            <p>Erő: ${strength}</p>
            <p>Ügyeség: ${dexterity}</p>
            <p>Inteligencia: ${intelligence}</p>
        `;
    }else{
        console.error("Nem található karakterlap elem a dokumentumban.")
    }

}



newCharacterCreator.innerHTML = `
<div id="characterGenerator";">
<label for="characterName">Karakter neve: </label>
<input type="text" id="characterName">

<p>Válassz kasztot:</p>
<select id="characterClass">
    <option value="harcos">Harcos</option>
    <option value="varázsló">Varázsló</option>
    <option value="íjász">Íjász</option>
</select>

<p>Attribútumok elosztása:</p>
<form id="attributeForm">
    <label for="strengthInput">Erő: </label>
    <input type="number" id="strengthInput" name="strength" min="0" max="15" required>

    <label for="dexterityInput">Ügyesség: </label>
    <input type="number" id="dexterityInput" name="dexterity" min="0" max="15" required>

    <label for="intelligenceInput">Intelligencia: </label>
    <input type="number" id="intelligenceInput" name="intelligence" min="0" max="15" required>

    <button type="button" onclick="assignAttributes()" class="btn btn-success">Attribútumok elosztása</button>
</form>
`


