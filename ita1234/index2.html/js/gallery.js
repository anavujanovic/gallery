const galleryGrid=document.getElementById("gallery-grid")

const image4= document.createElement("img");
image4.src="../images/slikacetiri.jpg";
image4.className="image-4";

for(let i = 4; i <= 8; i++ ){
    const image = document.createElement("img");
    image.src = "../images/slikacetiri.jpg";
    image.className = "image-" + i;
    galleryGrid.append(image);
}


 const signUpOpenButton = document.getElementById("sign-up-open");
 const signUpContainer = document.getElementById("sign-up-container")
 const signUpOpenClose = document.getElementById("sign-up-close");

 signUpOpenButton.onclick = function ( ){
    signUpContainer.style.display = "flex";

 }

 signUpOpenClose.onclick = function ( ){
    signUpContainer.style.display = "none";

 }