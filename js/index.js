

function importAll() {
    // import needed modules

    const styles = ["css/style.css"];


    styles.forEach((styleHref, index) => {
        const link = document.createElement("link");
        link.addEventListener("load", () => {
            moduleLoaded(index);
        });
        link.setAttribute("href", styleHref);
        link.setAttribute("rel", "stylsheet/css");
        document.head.appendChild(link);
    });


}


const loadedModules = [];
function moduleLoaded(moduleNumber) {
    console.log("Module", moduleNumber, "has loaded");
    loadedModules.push(moduleNumber);

    // if all modules loaded, remove loading screen
}