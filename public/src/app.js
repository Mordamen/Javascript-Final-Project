import PAGES from "./models/pages.js";
import { handlePageChange } from "./routes/router.js";
import "./initialData/initialData.js";
import "./pages/RegisterPage.js";
import "./pages/LoginPage.js";
import "./pages/ProfilePage.js";
import { showNewPopup } from "./pages/HomePage.js";
import initializeNavbar from "./components/Navbar.js";
import checkIfConnected from "./utilities/checkIfConnected.js";

const navHomeLink = document.getElementById("nav-home");
const navAboutusLink = document.getElementById("nav-about");
const navRegisterPageLink = document.getElementById("nav-signup");
const navRegisterPage2Link = document.getElementById("nav-signup_2");
const navLoginPageLink = document.getElementById("nav-login");
const navEditProfilePage = document.getElementById("nav-edit-profile-page");
const navLogout = document.getElementById("nav-logout");

window.addEventListener("load", () => {
  initializeNavbar(showNewPopup);
  if (checkIfConnected()) {
    let user = localStorage.getItem("token");
    user = JSON.parse(user);
    navEditProfilePage.innerText = user.name;
  }
});

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAboutusLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});
navRegisterPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.REGISTER);
});
navRegisterPage2Link.addEventListener("click", function () {
  handlePageChange(PAGES.REGISTER);
});
navLoginPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.LOGIN);
});
navEditProfilePage.addEventListener("click", () => {
  handlePageChange(PAGES.PROFILE);
});
navLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  location.reload();
});
