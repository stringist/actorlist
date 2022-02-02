const urlParams = new URLSearchParams(window.location.search);
const actor = urlParams.get("fullname");

const url = ('./actors.json')
    // console.log(url);

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
function handleData(actorList) {
    actor.forEach(showInfo);
    console.log(actor);
}

function showInfo(info) {
    console.log(info);

    // create templates
    const template = document.querySelector("#actor_name").content;

    // clone the template
    const copy = template.cloneNode(true);

    // make the product page match the item we are gonna click
    copy
        .querySelector("#name")
        // .setAttribute("href", "product_view.html?id=" + item._id);
    console.log(actor.fullname);

    // change dynamic data
    document.querySelector("#name").textContent = fullname;
    copy.querySelector("h3").textContent = item.Title;
    copy.querySelector("img").setAttribute("src", item.Image);
    copy.querySelector("img").setAttribute("alt", item.Title + "picture");
    copy.querySelector("p").textContent = "DKK " + item.Price;
    copy.querySelector("h2").textContent = item.Brand;

    // append it to main
    const elemParent = document.querySelector("ul");
    elemParent.appendChild(copy);
}
const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

// const button =
//     button.onclick = () => {
//         window.open('https://javascript.info', 'Actor Info', params);
//     };