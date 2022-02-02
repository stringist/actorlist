const urlParams = new URLSearchParams(window.location.search);
const fullname = urlParams.get("fullname");

const endpoint = ('./actors.json') + [fullname];
const url = ('./actors.json');
console.log(url);

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        // we have the data
        console.log(data);
        handleData(data);
    })
    .catch((e) => {
        // Something went wrong
        console.error("An error occured:", e.message);
    });

//loop
function handleData(actor) {
    actor.forEach(showInfo);
    console.log(actor);
}

function showInfo(actor) {
    console.log(actor);

    // const template = document.querySelector("#actor_name").content;
    // const copy = template.cloneNode(true);

    // copy.querySelector("#name").textContent = actor.fullname;
    // const elemParent = document.querySelector("ul");
    // elemParent.appendChild(copy);

}