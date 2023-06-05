// Addition of mobile hamburger-menu with JS (1)
const menu_button = document.querySelector(".navbar_toggleBtn");
const menu_items = document.querySelector(".navbar_menu");

menu_button.addEventListener("click", () => {
  menu_button.classList.toggle("active");

  // No animation for most browsers :
  if (!document.startViewTransition) {
    menu_items.classList.toggle("active");
    return;
  }

  // Animation for future browsers :
  document.startViewTransition(() => menu_items.classList.toggle("active"));
});

// Plugin Use of vanilla-tilt JS (2)
if (document.body.classList.contains("landing-page")) {
  const normal_image = document.querySelector("welcome-image_front");
  const shifted_images = document.querySelectorAll("welcome-image_behind");

  VanillaTilt.init(document.querySelector(normal_image), {
    max: 25,
    speed: 400,
  });

  VanillaTilt.init(document.querySelector("welcome-image_behind"));
}



// Live clock functionality (3)

var live_time = document.getElementById("live-clock");

// Function that use built-in functions like getSeconds() to get current time
function time() {
  var date = new Date();
  var s = date.getSeconds();
  var m = date.getMinutes();
  var h = date.getHours();

  // alters the text content to display current time values
  live_time.textContent =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
}

setInterval(time, 1000);

// Pop-up OnClick functionality within image galleries with JS (4)
const gallery_state = document.querySelector(".gallery");

var images = document.querySelectorAll(".gallery img");

/* loop through all images */
for (var i = 0; i < images.length; i++) {
  var image = images[i];

  /* on-click, the images' src is used to create a pop-up element */
  image.addEventListener("click", function () {
    var src = this.src;

    var popup = document.querySelector(".popup");
    popup.innerHTML = "<img src='" + src + "' />";
    popup.style.display = "flex";
    gallery_state.classList.toggle("active");
  });
}
// Blurs background while image is in full-screen preview
if (document.body.classList.contains("journey-page")) {
  var popup = document.querySelector(".popup");

  ["click", "onkeydown"].forEach((evt) =>
    popup.addEventListener(
      evt,
      function () {
        this.style.display = "none";
        this.innerHTML = "";
        gallery_state.classList.toggle("active");
      },
      false
    )
  );
}

// FORM VALIDATION W/JS (5)
function form_validator() {
  var name_checker = document.forms["contact_form"]["name"].value;
  var last_name_checker = document.forms["contact_form"]["last_name"].value;
  var message_checker = document.forms["contact_form"]["message"].value;
  if (name_checker == "") {
    alert("Please enter your name in the 'First Name' field.");
    return false;
  }
  if (last_name_checker == "") {
    alert("Please enter your last name in the 'Last Name' field.");
    return false;
  }

  // Using CSS 'required' for email checking, as more robust
  if (message_checker == "") {
    alert(
      "Oops! You've forgotten to add a message! Please send one through in the 'Enter your message' field."
    );
    return false;
  }
}
