const footer = document.getElementsByTagName("footer")

function footerBleu() {

    for (let i = 0; i < footer.length; i++) {
        if(footer[i].style.backgroundColor = "c6c6c6") {
            footer[i].style.backgroundColor = "blue";
        console.log("bleu");
        } else {
            footer[i].style.backgroundColor = "c6c6c6";
            console.log("gris");
        }
    }
}


let btnArticle = document.getElementsByClassName("btn-article");
let paragrapheArticle = document.getElementsByClassName("paragraphe-article");
let paragrapheArticle2 = document.getElementsByClassName("paragraphe-article2");
let paragrapheArticle3 = document.getElementsByClassName("paragraphe-article3");


function texteDisparition() {
    for (let i = 0; i < paragrapheArticle.length; i++) {
        if (paragrapheArticle[i].style.display === "none") {
            paragrapheArticle[i].style.display = "block";
            console.log("réapparition");
        } else {
            paragrapheArticle[i].style.display = "none";
            console.log("disparition");
        }
    }
}

function texteDisparition2() {
    for (let i = 0; i < paragrapheArticle.length; i++) {
        if (paragrapheArticle2[i].style.display === "none") {
            paragrapheArticle2[i].style.display = "block";
            console.log("réapparition");
        } else {
            paragrapheArticle2[i].style.display = "none";
            console.log("disparition");
        }
    }
}

function texteDisparition3() {
    for (let i = 0; i < paragrapheArticle.length; i++) {
        if (paragrapheArticle3[i].style.display === "none") {
            paragrapheArticle3[i].style.display = "block";
            console.log("réapparition");
        } else {
            paragrapheArticle3[i].style.display = "none";
            console.log("disparition");
        }
    }
}

// Oui je n'applique pas le DRY désolé Nico :(