const url = './actors.json'
console.log(url);

// const options = {
//     headers: {
//         "x-apikey": "613731bc43cedb6d1f97edad",
//     },
// };

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        // we have the data
        getActor(data);
    })
    .catch((e) => {
        // Something went wrong
        console.error("An error occured:", e.message);
    });

//loop
function getActor(actor) {
    actor.forEach(showActor);
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
    console.log(actor.name);

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