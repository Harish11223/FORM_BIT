firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("Login.html")
    }
})

