"use-strict";

let firstname = prompt("please insert your Firstname");
let lastname = prompt("please insert your Lastname");
let age = prompt("please insert your age");
const minage = 16
let Vorstellung = firstname + " " + lastname;



if (age>=minage){
    console.log("Welcome" + " " + Vorstellung + " "  + "you are old enough to see the content of this page");
    
    alert("Welcome" + " " + Vorstellung + ". "  + "you are old enough to view the content of this page."); 
      
}
else if (age<16){
    alert("Sorry" + " " + Vorstellung + " but you are to young to view the content of this page")
}

