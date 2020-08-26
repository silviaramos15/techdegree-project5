baguetteBox.run('.gallery');









// Content filtering

document.getElementById("search").addEventListener("keyup", searchWord );
function searchWord() {
    let word = document.getElementById("search");
    word.value = word.value.toLowerCase();
    console.log(word.value)
    
    let list = document.getElementsByTagName('img');
    for (let i = 0; i < list.length; i++) {

        if (list[i].getAttribute("alt").toLowerCase().match(word.value)) {
            console.log(list[i].getAttribute("alt"));
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";

        }

    }
} 




