 // Variable to keep track of the currently selected image
 var selectedImage = null;

 // JavaScript function to toggle the border color
 function toggleBorderColor(image) {
   // Reset the border color for the previously selected image
   if (selectedImage) {
     selectedImage.style.border = '3px solid white';
   }

   // Change the border color to green for the clicked image
   image.style.border = '3px solid green';

   // Update the selectedImage variable to the currently clicked image
   selectedImage = image;
 }

 document.getElementById('loginForm').addEventListener('submit', login);

 firebase.auth().onAuthStateChanged((user)=>{
   if(user){
     location.replace("Info.html")
   }
 });


