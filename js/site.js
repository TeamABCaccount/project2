document.getElementById("tandc").disabled = true;
document.getElementById("subbutton").addEventListener("click", function (submitted) {
    submitted.preventDefault();

    if (inputs() && checks()) {
        section = document.getElementById("wrapper");
        section.innerHTML = "";
        thanks = document.createElement("h2");
        thanks.innerHTML = "Thank you for signing up for our newsletter!";
        confirms = document.createElement("h2");
        confirms.innerHTML = "We will see you soon!"
        section.appendChild(thanks);
        section.appendChild(confirms);
    }
});
document.getElementById("terms").addEventListener("click", function (didread) {
    document.getElementById("tandc").disabled = false;
});

function inputs() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    dob = document.getElementById("phone").value;


    if (!fname || !lname || !email || !phone) {
        alert("Please fill in all the fields.");
        return false
    }
    return true
}

function checks() {
    if (!document.getElementById("tandc").checked) {
        alert("Please read the terms and conditions");
        return false;
    } else {
        return true;
    }

}

