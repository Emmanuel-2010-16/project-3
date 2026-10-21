/* ============================================
   PORTFOLIO SCRIPT
   Write the code under each comment.
   ============================================ */


/* ---------- 1. THEME TOGGLE ----------
   - Select #themeToggle
   - On click, toggle the "dark-theme" class on document.body
   - Change the button icon (🌙 / ☀️) depending on the theme
   - BONUS: save the theme in localStorage and load it on page start
*/


/* ---------- 2. TABS ----------
   - Select all .tab-button and all .tab-content
   - Loop through the buttons and add a click listener to each
   - On click:
       a) remove "active" from all buttons
       b) remove "active" from all contents
       c) add "active" to the clicked button
       d) read the button's data-tab value
       e) add "active" to the content whose id matches
*/


/* ---------- 3. CONTACT FORM VALIDATION ----------
   - Select the form, the three inputs, and the three error spans
   - Select #successMessage
   - Listen for the form's "submit" event
   - Stop the page from reloading (preventDefault)
   - Clear all old error messages
   - Create a variable: valid = true
   - Check name: not empty (use trim)
   - Check email: matches a pattern (hint: use a regex and .test())
   - Check message: at least 10 characters
   - For each failed check: show an error and set valid = false
   - If valid: show success message, call showToast(), reset the form
*/


/* ---------- 4. TOAST ----------
   - Select #toast
   - Create a function showToast()
   - Inside it: add "show" class to the toast
   - Use setTimeout to remove "show" after 3 seconds
   - Prevent overlapping timers (hint: clearTimeout)
*/


/* ---------- 5. SCROLL-TO-TOP BUTTON ----------
   - Select #scrollTopButton
   - Listen for the window "scroll" event
   - If window.scrollY is more than 300, add "show"; otherwise remove it
   - On button click, scroll to the top smoothly
     (hint: window.scrollTo with behavior: "smooth")
*/
const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}
function updateThemeIcon() {
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}
updateThemeIcon();
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    updateThemeIcon();
});


const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    const content = document.getElementById(tabId);
    if (content) {
      content.classList.add("active");
    }
  });
});

const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector("#successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";
  let valid = true;
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    valid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (messageInput.value.trim().length < 10) {
    messageError.textContent =
      "Your message must be at least 10 characters long.";
    valid = false;
  }
  if (valid) {
    successMessage.textContent = "Your message was submitted successfully!";
    showToast("Message sent successfully!", "success");
    form.reset();
  }
});
const toast = document.querySelector("#toast");
let toastTimer;
function showToast() {
  clearTimeout(toastTimer);
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
const scrollTopButton = document.querySelector("#scrollTopButton");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});
scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
