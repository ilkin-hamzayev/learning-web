document.addEventListener("contentLoaded", () => {
    const triggerConfigs = [
      { trigger: ".feed-tweet-pp-image", tooltip: ".feed-profile-tooltip" },
      { trigger: ".feed-condet-channel-name", tooltip: ".channel-name-tooltip" },
      { trigger: ".feed-condet-channel-atname", tooltip: ".channel-atname-tooltip" },
      { trigger: ".feed-condet-channel-atname-time-box", tooltip: ".feed-atname-time-tooltip" }
    ];

    let tooltipTimeoutFeed;
    let currentTooltip = null;
    let currentTrigger = null;

    triggerConfigs.forEach(cfg => {
      const triggers = document.querySelectorAll(cfg.trigger);

      triggers.forEach(trigger => {
        let tooltip = trigger.closest("article, .feed-profile-picture-box")?.querySelector(cfg.tooltip);
        if (!tooltip) return;

        trigger.addEventListener("mouseenter", () => {
          if (currentTooltip) hideTooltip(currentTooltip);
          currentTooltip = tooltip;
          currentTrigger = trigger;
          clearTimeout(tooltipTimeoutFeed);
          tooltipTimeoutFeed = setTimeout(() => {
            showTooltip(currentTooltip, currentTrigger);
          }, 700);
        });

        trigger.addEventListener("mouseleave", () => {
          clearTimeout(tooltipTimeoutFeed);
          if (trigger.classList.contains("feed-condet-channel-atname-time-box")) {
            tooltipTimeoutFeed = setTimeout(() =>  hideTooltip(currentTooltip), 90);
            return;
          }
          tooltipTimeoutFeed = setTimeout(() => {
            if (!tooltip.matches(":hover") && !trigger.matches(":hover")) {
              if (currentTooltip) {
                hideTooltip(currentTooltip);
                currentTooltip = null;
                currentTrigger = null;
              } 
            }
          }, 300);
        });
        tooltip.addEventListener("mouseenter", () => {
          clearTimeout(tooltipTimeoutFeed);
        });
        tooltip.addEventListener("mouseleave", () => {
          clearTimeout(tooltipTimeoutFeed);
          tooltipTimeoutFeed = setTimeout(() => {
            if (currentTooltip) {
                hideTooltip(currentTooltip);
                currentTooltip = null;
                currentTrigger = null;
              }
          }, 300);
        });

        window.addEventListener("scroll", () => {
          clearTimeout(tooltipTimeoutFeed);
          tooltipTimeoutFeed = setTimeout(() => {
            if(currentTooltip) {
              hideTooltip(currentTooltip);
              currentTooltip = null;
              currentTrigger = null;
            }
          }, 300);
        });
      });
    });

    function showTooltip(tooltip, trigger) {
      if (!tooltip || !trigger) return;

      tooltip.classList.add("show");

      const parent = tooltip.offsetParent;
      const parentRect = parent.getBoundingClientRect();
      const tr = trigger.getBoundingClientRect();
      const tip = tooltip.getBoundingClientRect();
      const scrollLeft = parent.scrollLeft
      const scrollTop  = parent.scrollTop;
      const left = tr.left - parentRect.left + tr.width/2 - tip.width/2;
      const spaceBelow = window.innerHeight - tr.bottom;
      const spaceAbove = tr.top;


      let top;
      
      if (trigger.classList.contains("feed-tweet-pp-image")) {
        top  = tr.top - parentRect.top + tr.height + 10;
        if (spaceBelow < tip.height + 10) {
          top = parentRect.top - tr.top - tip.height + 20;
        }
      } else if (trigger.classList.contains("feed-condet-channel-name") || trigger.classList.contains("feed-condet-channel-atname")) {
        top  = tr.bottom - parentRect.top + 8;
        if (spaceBelow < tip.height + 10) {
          top = parentRect.top - tr.top - tip.height - 8;
        }
      } else {
        top  = tr.bottom - parentRect.top + 2;
        if (spaceBelow < tip.height + 10) {
          top = parentRect.top - tr.top - tip.height - 2;
        }
      }
      

      tooltip.style.left = Math.round(left) + "px";
      tooltip.style.top  = Math.round(top) + "px";
    }

    function hideTooltip(tooltip) {
      if (tooltip) tooltip.classList.remove("show");
    }

    let scrollTimeoutFeed;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeoutFeed);

      scrollTimeoutFeed = setTimeout(() => {
        if (currentTooltip) {
          hideTooltip(currentTooltip);
          currentTooltip = null;
          currentTrigger = null;
        }
      }, 50);
    });
  

  // Feed and Rs tooltip follow button js

  const fd_buttons = document.querySelectorAll(".feed-profile-tooltip .feed-tt-pp-follow-box .feed-tt-follow-button");
  fd_buttons.forEach(btn => {
    let isClick = false;
    btn.addEventListener('mouseover', () => {
      if(isClick) {
        btn.textContent = "Unfollow";
        btn.style.color = "rgb(234, 33, 46)";
        btn.style.borderColor = "rgb(234, 33, 46)";
        btn.style.backgroundColor = "rgba(234, 33, 46, 0.12)";
        btn.style.padding = "8px 19px";
      }
    });
    
    btn.addEventListener('mouseout', () => {
      if(isClick){
        btn.style.backgroundColor = "transparent";
        btn.textContent = "Following";
        btn.style.color = "rgb(231, 233, 234)";
        btn.style.border = "0.5px rgba(255, 255, 255, 0.3) solid";
        btn.style.padding = "8px 17px";
      }
    });



    btn.addEventListener('click', () => {
      btn.classList.toggle("clicked");
      if (btn.classList.contains("clicked")) {
        btn.textContent = "Following";
        isClick = true;
        btn.style.padding = "8px 19px";
      } else {
        btn.textContent = "Follow";
        isClick = false;
        btn.style.backgroundColor = "rgb(231, 233, 234)";
        btn.style.removeProperty("border");
        btn.style.color = "black";
        btn.style.removeProperty("width");
      }
    });

  });







});