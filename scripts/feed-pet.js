document.addEventListener("contentLoaded", () => {
  const textAreaBox = document.querySelector(".feed-textarea-box");
  const feedPet = document.querySelector(".feed-pet");
  const textArea = textAreaBox.querySelector(".feed-textarea");
  const feedpetIconsBox = document.querySelector(".feed-pet-icons-box");
  const feedPostButton = document.querySelector(".feed-post-button");
  const feedpetControl = document.querySelector(".feed-pet-control");
  const feed = document.querySelector(".feed");
  
  let firstContainer;
  let innerContainer;
  let text;
  let svgDiv;
  let svg;
  let g;
  let path;


  textAreaBox.addEventListener("click", () => {
    firstContainer = document.createElement("div");
    firstContainer.style.flexDirection = "row";
    firstContainer.style.marginBottom = "10px";
    firstContainer.style.padding = "0 0 15px 6px";
    firstContainer.style.width = "94%";
    firstContainer.style.borderBottom = "1px rgba(197, 197, 197, 0.3) solid";
    
    feedpetIconsBox.style.marginTop = "0";

    innerContainer = document.createElement("div");
    innerContainer.style.display = "flex";
    innerContainer.style.alignItems = "center";
    innerContainer.style.columnGap = "3px";
    innerContainer.style.borderRadius = "15px";
    innerContainer.style.width = "fit-content";
    innerContainer.style.padding = "4px 8px";
    innerContainer.classList.add("inner-container");

    svgDiv = document.createElement("div");
    svgDiv.style.display = "flex";
    svgDiv.style.width = "16px";
    svgDiv.style.height = "16px";
    svgDiv.style.marginTop = "2px";

    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z");
    path.style.fill = "rgb(29, 155, 240)";

    g.appendChild(path);
    svg.appendChild(g);
    svgDiv.appendChild(svg);

    text = document.createElement("div");
    text.textContent = "Everyone can reply";
    text.style.color = "rgb(29, 155, 240)";
    text.style.fontSize = "14px";
    text.style.textWrap = "nowrap";
    text.style.fontWeight = "bold";

    innerContainer.appendChild(svgDiv);
    innerContainer.appendChild(text);
    firstContainer.appendChild(innerContainer)
    feedpetControl.insertBefore(firstContainer, feedpetIconsBox);
  }, { once: true });

  textArea.style.height = "25px";
  let outerContainer = null;
  let outerContainerPB = null;
  let circleBg = null;
  let circleProgress = null;
  let characterCountDiv = null; 
  let progressBar, progressBarDiv;
  const limit = 280;
  const baseOffset = 2;
  const maxHeight = 744;
  textArea.classList.add("isEmpty");

  let premiumBox = null;
  let validText;
  let excessText;

  
  


  const scrollPosition = window.scrollY;
  textArea.addEventListener("input", () => {
    requestAnimationFrame(() => {
      textArea.style.height = 'auto';
      const currentScrollHeight = textArea.scrollHeight;
      if (currentScrollHeight > maxHeight) {
        textArea.style.height = `${maxHeight}px`;
        textArea.style.overflowY = "scroll";
      } else {
        textArea.style.height = `${currentScrollHeight}px`;
        textArea.style.overflowY = "hidden";
      }

      const fpcRect = feedpetControl.getBoundingClientRect();
      if (fpcRect.bottom + 4.5 >= window.innerHeight) {
        feedpetControl.classList.add("bottom");
      } else {
        feedpetControl.classList.remove("bottom");
      }
    });
    
    
    const length = textArea.textContent.length;
    const text = textArea.textContent;


    function setCursorToEnd(element) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(element);
      range.collapse(false); 
      selection.removeAllRanges();
      selection.addRange(range);
      element.focus();
    }

    

    if (length > 0) {
      feedPostButton.style.opacity = "1";
      feedPostButton.style.cursor = "pointer";
      textArea.classList.remove("isEmpty");
      if (!outerContainer) {
        outerContainer = document.createElement("div");
        outerContainer.style.display = "flex";
        outerContainer.style.justifyContent = "center";
        outerContainer.style.alignItems = "center";
        outerContainer.style.width = "40px";
        outerContainer.style.height = "33px";
        outerContainer.style.paddingLeft = "0px";
        outerContainer.style.marginLeft = "0px";
        outerContainer.style.borderLeft = "2px solid rgba(197, 197, 197, 0.3)";
        feedPostButton.style.marginLeft = "2px";
        
        const outerPlus = document.createElement("div");
        outerPlus.classList.add("outer-plus");

        const ttPlus = document.createElement("div");

        outerPlus.appendChild(ttPlus);

        ttPlus.textContent = "Add";
        ttPlus.classList.add("tooltip-plus-sign");

        const plusSignDiv = document.createElement("div");
        plusSignDiv.style.display = "flex";
        plusSignDiv.style.justifyContent = "center";
        plusSignDiv.style.alignItems = "center";
        plusSignDiv.style.width = "23px";
        plusSignDiv.style.height = "23px";
        plusSignDiv.style.borderRadius = "12.5px";
        plusSignDiv.classList.add("plus-sign-div");

        const plusSignSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        plusSignSvg.setAttribute("viewBox", "0 0 24 24");
        plusSignSvg.style.height = "16px";
        plusSignSvg.style.width = "16px";

        const plusSignGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const plusSignPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        plusSignPath.setAttribute("d", "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z");
        plusSignPath.style.fill = "rgb(29, 155, 240)";
    
        plusSignGroup.appendChild(plusSignPath);
        plusSignSvg.appendChild(plusSignGroup);
        plusSignDiv.appendChild(plusSignSvg);
        outerPlus.appendChild(plusSignDiv);
        outerContainer.appendChild(outerPlus);
        feedpetIconsBox.insertBefore(outerContainer, feedPostButton);

        outerContainerPB = document.createElement("div");
        outerContainerPB.style.display = "flex";
        outerContainerPB.style.justifyContent = "center";
        outerContainerPB.style.alignItems = "center";
        outerContainerPB.style.width = "40px";
        outerContainerPB.style.height = "33px";
        outerContainerPB.style.marginLeft = "110px";

        progressBarDiv = document.createElement("div");
        progressBarDiv.style.position = "relative";
        progressBarDiv.style.display = "flex";
        progressBarDiv.style.justifyContent = "center";
        progressBarDiv.style.alignItems = "center";
        progressBarDiv.style.width = "22px";
        progressBarDiv.style.height = "22px";

        progressBar = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        progressBar.setAttribute("viewBox", "0 0 24 24");
        progressBar.style.overflow = "visible";

        circleBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circleBg.setAttribute("stroke-width", "2px");
        circleBg.setAttribute("fill", "none");
        circleBg.style.transform = "rotate(-90deg)";
        circleBg.style.transformOrigin = "50% 50%";

        circleProgress = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circleProgress.setAttribute("stroke-width", "2px");
        circleProgress.setAttribute("fill", "none");
        circleProgress.style.transform = "rotate(-90deg)";
        circleProgress.style.transformOrigin = "50% 50%";

        characterCountDiv = document.createElement("div");
        characterCountDiv.style.position = "absolute";
        characterCountDiv.style.fontSize = "12px";
        characterCountDiv.style.color = "#71767b";
        characterCountDiv.style.display = "none"; 
        characterCountDiv.style.cursor = "text";

        progressBar.appendChild(circleBg);
        progressBar.appendChild(circleProgress);
        progressBarDiv.appendChild(progressBar);
        progressBarDiv.appendChild(characterCountDiv);
        outerContainerPB.appendChild(progressBarDiv);
        feedpetIconsBox.insertBefore(outerContainerPB, outerContainer);
      }
      
      
      let radius, cf, strokeColor;
      const progressValue = Math.min(length, limit);
      let selection = window.getSelection();
      if (length < 260) {
        feedPostButton.style.opacity = "1";
        radius = 11;
        strokeColor = "rgb(29, 155, 240)";
        progressBarDiv.style.width = "22px";
        progressBarDiv.style.height = "22px";
        characterCountDiv.style.display = "none";
        if (premiumBox) {
          textAreaBox.removeChild(premiumBox);
          premiumBox = null;
        }
      } else if (length < 280) {
        radius = 13;
        strokeColor = "rgb(255, 212, 0)";
        progressBarDiv.style.width = "26px";
        progressBarDiv.style.height = "26px";
        characterCountDiv.style.display = "block";
        characterCountDiv.style.color = "#71767b";
        characterCountDiv.textContent = limit - length;
        if (premiumBox) {
          textAreaBox.removeChild(premiumBox);
          premiumBox = null;
        }
      } else if (length < 290){
        radius = 13;
        strokeColor = "rgb(244, 33, 46)"; 
        progressBarDiv.style.width = "26px";
        progressBarDiv.style.height = "26px";
        characterCountDiv.style.display = "block";
        characterCountDiv.style.color = "rgb(244, 33, 46)";
        characterCountDiv.textContent = limit - length;
        if(length > 279) {
          validText = text.substring(0, 280);
          excessText = text.substring(280);
          const spanValid = document.createElement("span");
          const spanExcess = document.createElement("span");
          if (length > 280) {
            feedPostButton.style.opacity = "0.5";
            if (!premiumBox) {
              premiumBox = document.createElement("div");
              premiumBox.style.display = "flex";
              premiumBox.style.flexDirection = "column";
              premiumBox.style.marginLeft = "10px";
              premiumBox.style.backgroundColor = "rgba(2, 17, 61)";
              premiumBox.style.width = "91%";
              premiumBox.style.padding = "10px 0px 10px 15px";
              premiumBox.style.borderRadius = "7px";

              const premiumTitleBox = document.createElement("div");
              const premiumLinkBox = document.createElement("div");
              premiumTitleBox.textContent = "Upgrade to Premium+ to write longer posts and Articles.";
              premiumTitleBox.style.fontSize = "14px";
              premiumTitleBox.style.marginBottom = "7px";

              const premiumLink = document.createElement("a");
              premiumLink.textContent = "Upgrade to Premium+";
              premiumLink.href = "https://x.com/i/premium_sign_up?referring_page=post-composer";
              premiumLink.style.textDecoration = "underline";
              premiumLink.style.color = "inherit";
              premiumLink.style.fontSize = "14px";
              premiumLink.style.fontWeight = "bold";
              
              premiumLink.addEventListener("mousedown", () => {
                link.style.color = "inherit";
              });
              premiumLink.addEventListener("mouseup", () => {
                link.style.color = "inherit";
              });
              premiumLink.setAttribute("target", "_blank");
              premiumLinkBox.appendChild(premiumLink);

              premiumBox.appendChild(premiumTitleBox);
              premiumBox.appendChild(premiumLinkBox);
              textAreaBox.appendChild(premiumBox);
            }
      
          } else {
            feedPostButton.style.opacity = "1";
            if(premiumBox) {
              textAreaBox.removeChild(premiumBox);
              premiumBox = null;
            }  
          }

          spanValid.textContent = validText;
          spanExcess.textContent = excessText;
          textArea.innerHTML = "";
          textArea.appendChild(spanValid);
          textArea.appendChild(spanExcess);
          spanExcess.style.backgroundColor = "rgb(138, 13, 32)";
          spanExcess.style.color = "rgb(231, 233, 234)";
          setCursorToEnd(textArea);
        } else {
          const currentText = textArea.textContent;
          textArea.innerHTML = "";
          textArea.textContent = currentText;
          if (premiumBox) {
            textAreaBox.removeChild(premiumBox);
            premiumBox = null;
          }
        }
      } else {
        feedPostButton.style.opacity = "0.5";
        if (!premiumBox) {
          premiumBox = document.createElement("div");
          premiumBox.style.display = "flex";
          premiumBox.style.marginLeft = "10px";
          premiumBox.style.flexDirection = "column";
          premiumBox.style.marginLeft = "10px";
          premiumBox.style.backgroundColor = "rgba(2, 17, 61)";
          premiumBox.style.width = "91%";
          premiumBox.style.padding = "10px 0px 10px 15px";
          premiumBox.style.borderRadius = "7px";

          const premiumTitleBox = document.createElement("div");
          const premiumLinkBox = document.createElement("div");
          premiumTitleBox.textContent = "Upgrade to Premium+ to write longer posts and Articles.";
          premiumTitleBox.style.fontSize = "14px";
          premiumTitleBox.style.marginBottom = "7px";

          const premiumLink = document.createElement("a");
          premiumLink.textContent = "Upgrade to Premium+";
          premiumLink.href = "https://x.com/i/premium_sign_up?referring_page=post-composer";
          premiumLink.style.textDecoration = "underline";
          premiumLink.style.color = "inherit";
          premiumLink.style.fontSize = "14px";
          premiumLink.style.fontWeight = "bold";
          
          premiumLink.addEventListener("mousedown", () => {
            link.style.color = "inherit";
          });
          premiumLink.addEventListener("mouseup", () => {
            link.style.color = "inherit";
          });
          premiumLink.setAttribute("target", "_blank");
          premiumLinkBox.appendChild(premiumLink);

          premiumBox.appendChild(premiumTitleBox);
          premiumBox.appendChild(premiumLinkBox);
          textAreaBox.appendChild(premiumBox);
        }


        validText = text.substring(0, 280);
        excessText = text.substring(280);
        const spanValid = document.createElement("span");
        const spanExcess = document.createElement("span");
        spanValid.textContent = validText;
        spanExcess.textContent = excessText;
        textArea.innerHTML = "";
        textArea.appendChild(spanValid);
        textArea.appendChild(spanExcess);
        spanExcess.style.backgroundColor = "rgb(138, 13, 32)";
        spanExcess.style.color = "rgb(231, 233, 234)";
        setCursorToEnd(textArea);
        progressBarDiv.style.width = "26px";
        progressBarDiv.style.height = "26px";
        characterCountDiv.style.display = "block";
        characterCountDiv.style.color = "rgb(244, 33, 46)";
        radius = 13;
        strokeColor = "black";
        characterCountDiv.textContent = limit - length;
      }
      cf = 2 * Math.PI * radius;
      const offset = baseOffset + (cf - baseOffset)* (progressValue / limit);
      const leftSpace = cf - offset;

      circleBg.setAttribute("cx", "12");
      circleBg.setAttribute("cy", "12");
      circleBg.setAttribute("r", radius);
      circleBg.setAttribute("stroke", length >= 280 ? "rgba(244, 33, 46, 0.3)" : "rgba(197, 197, 197, 0.3)");

      circleProgress.setAttribute("cx", "12");
      circleProgress.setAttribute("cy", "12");
      circleProgress.setAttribute("r", radius);
      circleProgress.setAttribute("stroke", strokeColor);
      circleProgress.setAttribute("stroke-dasharray", `${offset} ${leftSpace}`);
      
    } else {
      textArea.innerHTML = "";
      feedPostButton.style.opacity = "0.5";
      feedPostButton.style.cursor = "default";
      feedPostButton.style.marginLeft = "200px";
      textArea.classList.add("isEmpty");
      textArea.style.overflowY = "hidden";
      if (outerContainer && outerContainerPB) {
        feedpetIconsBox.removeChild(outerContainer);
        feedpetIconsBox.removeChild(outerContainerPB);
        outerContainer = null;
        outerContainerPB = null;
      }
      if (premiumBox) {
        textAreaBox.removeChild(premiumBox);
        premiumBox = null;
      }
    }
  });

});