baguetteBox.run('.gallery');









// Content filtering

document.getElementById("search").addEventListener("keyup", searchWord );
function searchWord() {
    let word = document.getElementById("search");
    word.value = word.value.toLowerCase();
    console.log(word.value)
    
    let list = document.querySelectorAll('.gallery a');
    for (let i = 0; i < list.length; i++) {
        let alt = list[i].getAttribute('data-caption');

        if (alt.toLowerCase().match(word.value)) {
            console.log(list[i].getAttribute("alt"));
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";

        }

    }
} 




