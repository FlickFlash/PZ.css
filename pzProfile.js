document.body.onload = createProfileElements;



function createProfileElements() {

    function divElementCreation(className, container, textInside = "", elementType = "div") {
        const element = document.createElement(elementType);
        element.classList.add(className);
        container.appendChild(element);
        element.innerText = textInside
        return element
    }

    const profileContainer = divElementCreation("profile-container", document.body)
      
    const profileUpperBar = divElementCreation("upper-bar", profileContainer);
    const closeUpperBar = divElementCreation("close-upper-bar", profileUpperBar,"x");

    const upperBarArrow = divElementCreation("upper-bar-arrow", profileUpperBar);

    const profileOptions = divElementCreation("profile-options", profileContainer);
    const infoOptions = divElementCreation("char-line-options", profileOptions, "Info");
    const skillsOptions = divElementCreation("char-line-options", profileOptions, "Habilidades");
    const healthOptions = divElementCreation("char-line-options", profileOptions, "Saúde");
    const protOptions = divElementCreation("char-line-options", profileOptions, "Proteção");
    const tempOptions = divElementCreation("char-line-options", profileOptions, "Temperatura");


    const charContainer = divElementCreation("char-container", profileContainer);

    const charInfoContainer = divElementCreation("char-info-container", profileContainer)
    const charName = divElementCreation("char-name", charInfoContainer, "Flickowski McDantas", "div")
    const professionImg = divElementCreation("profession-img", charInfoContainer)

    const weightField = divElementCreation("weight-field", charInfoContainer)
    const weightKey = divElementCreation("profile-key-field", weightField, "Peso")
    weightKey.classList.add("weight-key")
    const weightValue = divElementCreation("weight-value", weightField, 83)
    weightValue

    const traitField = divElementCreation("trait-field", charInfoContainer)
    const traitKey = divElementCreation("profile-key-field", traitField, "Traços")
    traitKey.classList.add("trait-key")
    const traitValue = divElementCreation("trait-value", traitField)

    const hairField = divElementCreation("hair-field", charInfoContainer)
    const hairKey = divElementCreation("profile-key-field", hairField, "Cabelo")
    hairKey.classList.add("hair-key")
    const hairValue = divElementCreation("hair-value", hairField, "Repartido (Esquerda)")
    const hairFixButton = divElementCreation("hair-button", hairField, "Alterar")

    const beardField = divElementCreation("beard-field", charInfoContainer)
    const beardKey = divElementCreation("profile-key-field", beardField, "Barba")
    beardKey.classList.add("beard-key")
    const beardValue = divElementCreation("beard-value", beardField, "Barba Cheia")
    const beardFixButton = divElementCreation("beard-button", beardField, "Alterar")


    const knowledgeMaterials = divElementCreation("know-materials", charInfoContainer, "Materiais de Aprendizado")



    // const charNameLine = divElementCreation("charw-name-line", charInfoContainer,"__________________" ,"div")
    // const charNameLine2 = divElementCreation("char-name-line", charInfoContainer,"__________________" ,"div")

    
    const charBottomInfoContainer = divElementCreation("bottom-info-container", profileContainer)
    const weaponField = divElementCreation("weapon-field", charBottomInfoContainer)
    const weaponKey = divElementCreation("weapon-key", weaponField, "Arma Favorita")
    const weaponValue = divElementCreation("weapon-value", weaponField, "Combate Corpo a Corpo")

    const zombieKillsField = divElementCreation("zombie-kills-field", charBottomInfoContainer)
    const zombieKillsKey = divElementCreation("zombie-kills-key", zombieKillsField, "Zumbis Mortos")
    const zombieKillsValue = divElementCreation("zombie-kills-value", zombieKillsField, 457)

    const survivalTimeField = divElementCreation("survival-time-field", charBottomInfoContainer)
    const survivalTimeKey = divElementCreation("survival-time-key", survivalTimeField, "Tempo de Sobrevivência")
    const survivalTimeValue = divElementCreation("survival-time-value", survivalTimeField, "1 mês, 26 dias , 22 horas")

    // const charBottomLeftInfoContainer = divElementCreation("bottom-left-info-container", profileContainer)
    // const charBottomRightInfoContainer = divElementCreation("bottom-right-info-container", profileContainer)
}


// function createElements(constName) {
//     const constName = document.createElement("div");
// }

// createElements(element1)
// createElements(element2)

// Resultados deveriam ser:
// const element1 = document.createElement("div");
// const element2 = document.createElement("div");