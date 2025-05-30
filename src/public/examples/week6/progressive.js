// progressive.js
document.getElementById("contact-form").addEventListener("submit", (event) =>{
    const myname = this.name.value;
    const myemail = this.email.value;
    // this is the form since it's already tied to it in this event listener

    let errorMessage = "";

    if (!myname) {
        errorMessage += "<p>The name is empty!</p>"
    }

    if (!myemail) {
        errorMessage += "<p>The email is empty!</p>"
    }

    else if (myemail.indexOf(".") == -1 || myemail.indexOf("@") == -1) {
        errorMessage += "<p>The email is not formatted correctly!<p/>"
    }

    if (errorMessage) {
        event.preventDefault();
        const formError = document.getElementById("form-error");
        formError.innerHTML = errorMessage;
    }
    
})