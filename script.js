let bold = document.getElementsByTagName("strong");
console.log(bold);

function highlight() {
    //Write your code here
    for (let i = 0; i < bold.length; i++) {
        bold[i].style.color="green";
    }
}



function return_normal() {
    //Write your code here
	    for (let i = 0; i < bold.length; i++) {
        bold[i].style.color="black";
    }
    
}
