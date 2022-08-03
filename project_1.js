/*query for top right buttons*/
let parent = document.querySelector(".modal-parent");
    let button = document.querySelector(".button");
    let X  = document.querySelector(".cancel");

    button.addEventListener("click", appear);
    parent.addEventListener("click",appear);

function appear(){
        parent.style.display = ('block');
}
X.addEventListener("click", disappear);

function disappear(){
    parent.style.display = ("none");
}
/*query for log in and sign in buttons*/
 let login_button = document.getElementById("login");
 let signup_button = document.getElementById("signup");

 login_button.onclick = function (){
     open("log_in.html");
 }
 signup_button.onclick  = function (){
     open("sign_up.html");
 }

/*query for flex box buttons*/

 let farmer = document.getElementById("flex_1");
 farmer.onclick = function (){
    open("farmer.html");
 }


