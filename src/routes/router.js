import PAGES from "../models/pages.js";

/* Out pages */
const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTPAGELINK = document.getElementById(PAGES.ABOUT);
// const CONTACTUSPAGELINK = document.getElementById(PAGES.CONTACT);
const LOGINPAGELINK = document.getElementById(PAGES.LOGIN);
const REGISTERUSPAGELINK = document.getElementById(PAGES.REGISTER);
// const PROFILEPAGELINK = document.getElementById(PAGES.PROFILE);
const PAGE404PAGELINK = document.getElementById(PAGES.PAGE404);

function handlePageChange(pageToDisplay) {
  /* hide all pages */
  HOMEPAGELINK.classList.remove("active-page");
  ABOUTPAGELINK.classList.remove("active-page");
  // CONTACTUSPAGELINK.classList.remove("active-page");
  LOGINPAGELINK.classList.remove("active-page");
  REGISTERUSPAGELINK.classList.remove("active-page");
  // PROFILEPAGELINK.classList.remove("active-page");
  // PAGE404PAGELINK.classList.remove("active-page");
  HOMEPAGELINK.classList.add("inactive-page");
  ABOUTPAGELINK.classList.add("inactive-page");
  // CONTACTUSPAGELINK.classList.add("inactive-page");
  LOGINPAGELINK.classList.add("inactive-page");
  REGISTERUSPAGELINK.classList.add("inactive-page");
  // PROFILEPAGELINK.classList.add("inactive-page");
  PAGE404PAGELINK.classList.add("inactive-page");

  switch (pageToDisplay) {
    case PAGES.HOME:
      HOMEPAGELINK.classList.remove("inactive-page");
      HOMEPAGELINK.classList.add("active-page");
      console.log(HOMEPAGELINK.classList);
      break;
    case PAGES.ABOUT:
      ABOUTPAGELINK.classList.remove("inactive-page");
      ABOUTPAGELINK.classList.add("active-page");
      console.log(HOMEPAGELINK.classList);
      break;
    // case PAGES.CONTACT:
    //   CONTACTUSPAGELINK.classList.remove("active-page");
    //   CONTACTUSPAGELINK.classList.add("inactive-page");
    //   break;
    case PAGES.LOGIN:
      LOGINPAGELINK.classList.remove("inactive-page");
      LOGINPAGELINK.classList.add("active-page");
      break;
    case PAGES.REGISTER:
      REGISTERUSPAGELINK.classList.remove("inactive-page");
      REGISTERUSPAGELINK.classList.add("active-page");
      break;
    // case PAGES.PROFILE:
    //   PROFILEPAGELINK.classList.remove("active-page");
    //   PROFILEPAGELINK.classList.add("inactive-page");
    //   break;
    default:
      PAGE404PAGELINK.classList.remove("inactive-page");
      PAGE404PAGELINK.classList.add("active-page");
      break;
  }
}

export { handlePageChange };
