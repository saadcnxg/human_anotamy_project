import { el } from "../utils/dom.js";
import { toggleTheme } from "../utils/theme.js";

const links = [
  ["#/", "Home", "home"],
  ["#/quiz", "Quiz", "quiz"],
  ["#/about", "About", "about"],
];

export function renderNav(root) {
  const linkEls = links.map(([href, label, key]) =>
    el("a", { href, class: "nav-link", "data-key": key }, label)
  );

  const search = el("input", {
    class: "search",
    type: "search",
    placeholder: "Search organs...",
    "aria-label": "Search anatomy",
    oninput: (e) => {
      const value = e.target.value.trim();
      location.hash = value ? "#/search/" + encodeURIComponent(value) : "#/";
    },
  });

  const themeBtn = el(
    "button",
    {
      class: "icon-btn",
      "aria-label": "Toggle theme",
      onclick: () => {
        toggleTheme();
      },
    },
    "🌓"
  );

  root.append(
    el(
      "nav",
      { class: "nav" },
      el(
        "div",
        { class: "nav-inner" },
        el("a", { href: "#/", class: "brand" }, "🫀 AnatomyHub"),
        el("div", { class: "nav-links" }, linkEls),
        search,
        themeBtn
      )
    )
  );

  document.addEventListener("route", (e) => {
    linkEls.forEach((a) => a.classList.toggle("active", a.dataset.key === e.detail));
    if (e.detail !== "search") search.value = search.value && location.hash.startsWith("#/search") ? search.value : "";
  });
}