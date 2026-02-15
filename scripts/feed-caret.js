document.addEventListener("contentLoaded", () => {
  const textDivs = document.querySelectorAll(".feed-condet-txtcontent-box");
  textDivs.forEach(textDiv => {
    const textContent = textDiv.textContent;
    if (textContent.length === 0) {
      textDiv.style.caretColor = "transparent";
    }
  });
});