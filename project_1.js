let parent = document.querySelector(".modal-parent");
    let button = document.querySelector("#btn");
    let X  = document.querySelector(".cancel");

    button.addEventListener("click", appear)

function appear(){
        parent.style.display = "block";
}
X.addEventListener("click", disappear)

function disappear(){
    parent.style.display = "none";
}

