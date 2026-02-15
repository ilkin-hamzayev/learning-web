/* --- NEW loader.js --- */
async function loadHTML(file, elementClass) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`${file} not found`);
        const content = await response.text();
        document.querySelector(`.${elementClass}`).innerHTML = content;
    } catch (err) {
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // 1. Load all HTML components concurrently
    await Promise.all([
        loadHTML("main.html", "feed"),
        loadHTML("rs.html", "right-sidebar"),
        loadHTML("nav.html", "navigation-bar")
    ]);

    // 2. Dispatch a custom event telling other scripts "HTML is ready!"
    const event = new Event("componentsLoaded");
    document.dispatchEvent(event);
    
    // 3. (Optional) Initialize specific logic if not using event listeners in other files
    // initHeaderMenu(); // Only call this if you actually define it in header.js
});