import { createRouter } from "./router.js";
import { renderNav } from "./components/nav.js";
import { initTheme } from "./utils/theme.js";
import { homeView } from "./views/homeView.js";
import { systemView } from "./views/systemView.js";
import { searchView } from "./views/searchView.js";
import { quizView } from "./views/quizView.js";
import { aboutView } from "./views/aboutView.js";

initTheme();
renderNav(document.getElementById("nav-root"));

createRouter(
  {
    home: homeView,
    system: systemView,
    search: searchView,
    quiz: quizView,
    about: aboutView,
  },
  document.getElementById("app")
);