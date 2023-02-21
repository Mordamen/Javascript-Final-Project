import PAGES from "../models/pages.js";

/* Out pages */
const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTUSPAGELINK = document.getElementById(PAGES.ABOUT);
const LOGINTUSPAGELINK = document.getElementById(PAGES.LOGIN);
const REGISTERUSPAGELINK = document.getElementById(PAGES.REGISTER);
const PROFILEPAGELINK = document.getElementById(PAGES.PROFILE);
const PAGE404PAGELINK = document.getElementById(PAGES.PAGE404);

function handlePageChange(pageToDisplay) {
  /* hide all pages */
  HOMEPAGELINK.classList.remove("active-page");
  ABOUTUSPAGELINK.classList.remove("active-page");
  LOGINTUSPAGELINK.classList.remove("active-page");
  REGISTERUSPAGELINK.classList.remove("active-page");
  PROFILEPAGELINK.classList.remove("active-page");
  PAGE404PAGELINK.classList.remove("active-page");
  HOMEPAGELINK.classList.add("inactive-page");
  ABOUTUSPAGELINK.classList.add("inactive-page");
  LOGINTUSPAGELINK.classList.add("inactive-page");
  REGISTERUSPAGELINK.classList.add("inactive-page");
  PROFILEPAGELINK.classList.add("inactive-page");
  PAGE404PAGELINK.classList.add("inactive-page");

  switch (pageToDisplay) {
    case PAGES.HOME:
      HOMEPAGELINK.classList.remove("inactive-page");
      HOMEPAGELINK.classList.add("active-page");
      break;
    case PAGES.ABOUT:
      ABOUTUSPAGELINK.classList.remove("inactive-page");
      ABOUTUSPAGELINK.classList.add("active-page");
      break;
    case PAGES.LOGIN:
      LOGINTUSPAGELINK.classList.remove("inactive-page");
      LOGINTUSPAGELINK.classList.add("active-page");
      break;
    case PAGES.REGISTER:
      REGISTERUSPAGELINK.classList.remove("inactive-page");
      REGISTERUSPAGELINK.classList.add("active-page");
      break;
    case PAGES.PROFILE:
      PROFILEPAGELINK.classList.remove("inactive-page");
      PROFILEPAGELINK.classList.add("active-page");
      break;
    default:
      PAGE404PAGELINK.classList.remove("inactive-page");
      PAGE404PAGELINK.classList.add("active-page");
      break;
  }
}

export { handlePageChange };
