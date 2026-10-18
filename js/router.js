export function createRouter(routes, outlet) {
  function resolve() {
    const hash = location.hash.slice(1) || "/";
    const [, seg, param] = hash.split("/");
    const key = routes[seg] ? seg : "home";
    outlet.replaceChildren(routes[key](param ? decodeURIComponent(param) : ""));
    window.scrollTo(0, 0);
    document.dispatchEvent(new CustomEvent("route", { detail: key }));
  }
  window.addEventListener("hashchange", resolve);
  resolve();
}