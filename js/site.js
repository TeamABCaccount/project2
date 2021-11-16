document.getElementById("tandc").disabled = true;
document.getElementById("subbutton").addEventListener("click", function(submitted) {
    submitted.preventDefault();

    if(inputs()&&checks()){
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
document.getElementById("terms").addEventListener("click", function(didread) {
    document.getElementById("tandc").disabled = false;
});
    function inputs(){
        fname=document.getElementById("fname").value;
        lname=document.getElementById("lname").value;
        email=document.getElementById("email").value;
        dob=document.getElementById("phone").value;


        if(!fname||!lname||!email||!phone){
            alert("Please fill in all the fields.");
            return false
        }
        return true
    }

    function checks(){
        if(!document.getElementById("tandc").checked){
            alert("Please read the terms and conditions");
            return false;
        }
          else{
            return true;
          }

    }
  /* slideshow js, advancing to next picuture, non-automatic advancement */
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
