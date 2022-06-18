
const styles = ["css/style.css"];
const scripts = [];

function importAll() {
    // import needed modules
    styles.forEach((styleHref, index) => {
        const link = document.createElement("link");
        link.addEventListener("load", () => {
            moduleLoaded(index+1);
        });
        link.setAttribute("href", styleHref);
        link.setAttribute("rel", "stylesheet");
        document.head.appendChild(link);
    });


}


const loadedModules = [];
let allModulesLoaded = false;

// Work out the expected sumation of the number of modules
const expectedSumation = (scripts.length + styles.length + 1) / 2 * (scripts.length + styles.length);
function moduleLoaded(moduleNumber) {
    console.log("Module", moduleNumber, "has loaded");
    loadedModules.push(moduleNumber);

    // if all modules loaded, remove loading screen
    const modSumation = loadedModules.reduce(
        (prev, cur) => {
            return prev + cur;
        },
        0
    );
    if(expectedSumation === modSumation) {
        // All required modules have loaded
        const allModulesLoaded = true;
        loadInContent();
    }
}


function iconPress(iconName) {
    history.pushState(undefined, iconName, iconName);
}

function loadInContent() {
    document.getElementById("content").style.opacity = 1;
}




importAll();





document.getElementById("logo").addEventListener("click", () => {
    document.documentElement.style.setProperty("--clr-accent", "rgb(134, 182, 255)");
});