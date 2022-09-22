const request = document.querySelector(".request");
const jokes = new XMLHttpRequest();

jokes.open("GET","https://official-joke-api.appspot.com/random_joke");
jokes.send();

jokes.addEventListener("load",function(){
    const swag = JSON.parse(jokes.responseText);
    console.log(swag)

    let yeah = `<h1> Setup: ${swag.setup}</h1>
    <h2> Punchline: ${swag.punchline} </h2>`

    request.insertAdjacentHTML("beforeend",yeah);

})