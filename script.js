let button = document.getElementsByTagName("button")[0];
let form = document.getElementsByTagName("form")[0];
button.addEventListener("click", function(e){
 e.preventDefault();
let url = "https://pokeapi.co/api/v2/pokemon/"+form.elements.search.value;
fetch(url)
.then(data=>data.json())
.then(data=> {
    console.log(data);
    darwCard(data);

})
form.reset();
});
function darwCard(data) {
    let element = document.getElementById("element");
let types = "";
for( let index = 0; index < data.types.length; index++) {
    types += `<li>${data.types[index].name}<li>`

}
    let items ="";
    for (let index = 0; index < data.held_items.length; index++){
        let item = data.held_items[index].item;
        items += `<li id="${item.name}">
        <p><b> ${item.name}</b></p>
       
        </li> `
        fetch(item.url)
        .then(data=>data.json())
        .then(function(data){
            let li = document.getElementById(item.name);
            li.innerHTML += `<img src="${data.sprites.default}" alt="${data.name}">`
        })
    
    }


    element.innerHTML = ` <div class="container">
      
    <p>${data.id}</p>
    <hr>
    <hr2>${data.name}</hr2>
    <img src="${data.sprites.front_default}" alt="${data.name}"">

    <ul>
    ${types}
    </ul>
    
    <ul>
    ${items}
    </ul>

</div>`;
}