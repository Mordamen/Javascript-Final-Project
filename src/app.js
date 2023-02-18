import PAGES from "./models/pages.js";
import { handlePageChange } from "./routes/router.js";
// import "./initialData/initialData.js";
// import "./pages/RegisterPage.js";
// import "./pages/LoginPage.js";
// import "./pages/ProfilePage.js";
// import { showNewPopup } from "./pages/HomePage.js";
// import initializeNavbar from "./components/Navbar.js";
// import checkIfConnected from "./utils/checkIfConnected.js";

// window.addEventListener("load", () => {
//   initializeNavbar(showNewPopup);
//   if (checkIfConnected()) {
//     let user = localStorage.getItem("token");
//     user = JSON.parse(user);
//     navEditProfilePage.innerText = user.name;
//   }
// });

//--------------------------------------------------------------------------------------------//
// Setup Navbar links. This will allow us to control the navbar pages using these variables
const navHome = document.getElementById("nav-home");
const navAbout = document.getElementById("nav-about");
// const navContactusLink = document.getElementById("nav-contactus-link");
const navSignupPage = document.getElementById("nav-signup");
const navLoginPage = document.getElementById("nav-login");
// const navEditProfilePage = document.getElementById("nav-edit-profile-page");
// const navLogout = document.getElementById("nav-logout");

// Create event listeners to watch for the user clicking on the navbar links
navHome.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAbout.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});

navSignupPage.addEventListener("click", function () {
  handlePageChange(PAGES.REGISTER);
});
navLoginPage.addEventListener("click", function () {
  handlePageChange(PAGES.LOGIN);
});
// navEditProfilePage.addEventListener("click", () => {
//   handlePageChange(PAGES.PROFILE);
// });
// navLogout.addEventListener("click", () => {
//   localStorage.removeItem("token");
//   location.reload();
// });

// --------------------------------------------------------------------------------------------//
