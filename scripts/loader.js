async function loadHTML(file, elementClass) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`${file} not found`);
        const content = await response.text();
        document.querySelector(`${elementClass}`).innerHTML = content;
    } catch (err) {
        console.error(err);
    }
}

async function init() {
    await loadHTML("partials/main.fragment", ".feed");
    await loadHTML("partials/rs.fragment", ".right-sidebar");
    await loadHTML("partials/nav.fragment", ".navigation-bar");
    await loadHTML("partials/rs-tooltip.fragment", ".rs-tooltip-container");
    await loadHTML("partials/header.fragment", ".header");
    await loadHTML("partials/grok.fragment", ".grok");
    await loadHTML("partials/search-box.fragment", ".search-box-container");

    document.dispatchEvent(new CustomEvent("contentLoaded"));
}

init();


