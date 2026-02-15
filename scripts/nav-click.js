document.addEventListener("contentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-2l-icontext-box");
  const defaultD = new Map();
  let grokDefaultVB;
  buttons.forEach((button, i) => {
    const pathDefault = button.querySelector(".nav-2l-svg g path");
    const grokSvg = button.querySelector(".nav-2l-svg");
    defaultD.set(i, pathDefault.getAttribute('d'));
    const txtCheck = button.querySelector(".nav-2l-text-box");
    if (txtCheck.textContent.includes("Grok")) {
      grokDefaultVB = grokSvg.getAttribute('viewBox');
    }
  })
  buttons.forEach(button => {
    const text = button.querySelector(".nav-2l-text-box");
    const grandchild = button.querySelector(".nav-2l-svg g path");
    button.addEventListener("click", (e) => {
      e.preventDefault();
      buttons.forEach((btn, i) => {
        const path = btn.querySelector(".nav-2l-svg g path");
        const textDefault = btn.querySelector(".nav-2l-text-box");
        path.setAttribute('d', defaultD.get(i));
        textDefault.style.fontWeight = "normal";
        if (textDefault.textContent.includes("Grok")) {
          const svgDefault = btn.querySelector(".nav-2l-svg");
          svgDefault.setAttribute('viewBox', grokDefaultVB);
        }
      });
      if (text.textContent.trim().includes("Home")) {
        grandchild.setAttribute('d', 'M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z');
        text.style.fontWeight = "bold";
      } else if (text.textContent.includes("Explore")){
        grandchild.setAttribute('d', 'M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z');
        text.style.fontWeight = "bold";
      } else if (text.textContent.includes("Notifications")) {
        grandchild.setAttribute('d', 'M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z');
        text.style.fontWeight = "bold";
      } else if (text.textContent.includes("Messages")) {
        grandchild.setAttribute('d', 'M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z');
        text.style.fontWeight = "bold";
      } else if (text.textContent.includes("Grok")) {
        grandchild.setAttribute('d', 'M8 0C3.582 0 0 3.582 0 8v26c0 4.418 3.582 8 8 8h26c4.418 0 8-3.582 8-8V8c0-4.418-3.582-8-8-8H8zm19.997 17.35l-11.1 8.19 15.9-15.963v.015L37.391 5c-.082.117-.165.23-.248.345-3.49 4.804-5.194 7.153-3.826 13.03l-.009-.008c.943 4.001-.065 8.438-3.322 11.693-4.106 4.107-10.677 5.02-16.087 1.324l3.772-1.745c3.454 1.355 7.232.76 9.947-1.954 2.716-2.714 3.325-6.666 1.96-9.956-.259-.623-1.037-.78-1.58-.378zm-13.292-2.574c-3.314 3.31-3.983 9.047-.1 12.755l-.003.003L4 37c.663-.913 1.485-1.776 2.306-2.639l.04-.042c2.346-2.464 4.67-4.906 3.25-8.357-1.903-4.622-.795-10.038 2.73-13.56 3.664-3.66 9.06-4.583 13.568-2.729.998.37 1.867.897 2.545 1.387l-3.764 1.737c-3.505-1.47-7.52-.47-9.97 1.98z');
        text.style.fontWeight = "bold";
        const svg = button.querySelector(".nav-2l-svg");
        svg.setAttribute('viewBox', '0 0 42 42');
      } else if (text.textContent.includes("Profile")) {
        grandchild.setAttribute('d', 'M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z');
        text.style.fontWeight = "bold";
      } else if (text.textContent.includes("Communities")) {
        grandchild.setAttribute('d', 'M7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-1.608 1.732-2.762 4.389-2.869 8.248l-.03 1.083zM9.616 9.27C10.452 8.63 11 7.632 11 6.5 11 4.57 9.433 3 7.5 3S4 4.57 4 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zm6.884 1.726c-3.264 0-6.816 2.358-7 8.977L9.471 21h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977zm2.116-1.726C19.452 8.63 20 7.632 20 6.5 20 4.57 18.433 3 16.5 3S13 4.57 13 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73z');
        text.style.fontWeight = "bold";
      }
    });
  });
});