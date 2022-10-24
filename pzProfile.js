document.body.onload = createProfileElements;



function createProfileElements() {

    function divElementCreation(className, container, elementType = "div") {
        const element = document.createElement(elementType);
        element.classList.add(className);
        container.appendChild(element);
        return element
    }

    const profileContainer = divElementCreation("profile-container", document.body)
      
    const profileUpperBar = divElementCreation("upper-bar", profileContainer);

    const profileOptions = divElementCreation("profile-options", profileContainer);
    
    const charContainer = divElementCreation("char-container", profileContainer);

    const charInfoContainer = divElementCreation("char-info-container", profileContainer)

    const charBottomLeftInfoContainer = divElementCreation("bottom-left-info-container", profileContainer)
 
    const charBottomRightInfoContainer = divElementCreation("bottom-right-info-container", profileContainer)
}


// function createElements(constName) {
//     const constName = document.createElement("div");
// }

// createElements(element1)
// createElements(element2)

// Resultados deveriam ser:
// const element1 = document.createElement("div");
// const element2 = document.createElement("div");