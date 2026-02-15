document.addEventListener("contentLoaded", () => {
  const triggers = document.querySelectorAll(
    ".rs-profile-picture-images, .rs-suggst-profile-name-box, .rs-suggst-profile-atname-box"
  );

  let activeTooltip = null;
  let showTimeout, hideTimeout;
  let actionId = 0;

  function showTooltip(trigger, tooltipId, currentId) {
    if (currentId !== actionId) return;
    const tooltip = document.getElementById(tooltipId);
    if (!tooltip) return;

    if (activeTooltip && activeTooltip !== tooltip) {
      activeTooltip.classList.remove('show');
    }
    tooltip.classList.add("show");
    
    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = triggerRect.bottom + 8;
    let left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);

    if (top + tooltipRect.height > window.innerHeight) {
      top = triggerRect.top - tooltipRect.height - 8;          
    } 
    
    if (top < 0) { top = 8; }
    if (left < 0) {
      left = 8;
    } else if (left + tooltipRect.width > window.innerWidth) {
      left = window.innerWidth - tooltipRect.width - 8;
    }
    if (trigger.classList.contains("rs-suggst-profile-name-box") || trigger.classList.contains("rs-suggst-profile-atname-box")) {
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left + 10}px`;
    } else {
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    }

    activeTooltip = tooltip;
  }

  function hideTooltip(tooltip, currentId) {
    if (currentId !== actionId) return;
    if (tooltip) {
      tooltip.classList.remove("show");
      if (activeTooltip === tooltip) {
        activeTooltip = null;
      }
    }
  }

  triggers.forEach(trigger => {
    const tooltipId = trigger.dataset.tooltipId;
    const tooltip = document.getElementById(tooltipId);
    if (!tooltip) return;
    trigger.addEventListener("mouseenter", () => {
      actionId++;
      const currentId = actionId;
      clearTimeout(hideTimeout);
      clearTimeout(showTimeout);
      hideTimeout = setTimeout(() => hideTooltip(activeTooltip, currentId), 200);
      showTimeout = setTimeout(() => showTooltip(trigger, tooltipId, currentId), 700);
    });

    trigger.addEventListener("mouseleave", (e) => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      actionId++; 
      const currentId = actionId;
      const event = e.relatedTarget;
      if (!event) {
        hideTooltip(tooltip, currentId);
      }
      hideTimeout = setTimeout(() => {
        if (!tooltip.matches(":hover")) {
          hideTooltip(tooltip, currentId);
        }
      }, 200);
      
    });
    tooltip.addEventListener("mouseenter", () => {
      clearTimeout(showTimeout);
    });

    tooltip.addEventListener("mouseleave", (e) => {
      clearTimeout(hideTimeout);
      actionId++; 
      const currentId = actionId;
      const event = e.relatedTarget;
      if (!event) {
        hideTooltip(tooltip, currentId);
      }
      hideTimeout = setTimeout(() => {  
        hideTooltip(tooltip, currentId);
      });
    });
    
    
    window.addEventListener("scroll", () => {
        actionId++; 
        const currentId = actionId;
        hideTooltip(tooltip, currentId);
        scroll = true;
    });
  });


  // Follow button js


  const rs_buttons = document.querySelectorAll(".rs-suggst-follow-button");
  const rs_tt_buttons = document.querySelectorAll(".rs-tooltip .feed-tt-pp-follow-box .feed-tt-follow-button");


  rs_buttons.forEach(btn => {
    rs_tt_buttons.forEach(tt_btn => {

      const id = tt_btn.closest(".rs-tooltip").id;
      const relatedElement = document.querySelector(`.rs-suggst-profile[data-tooltip-id = "${id}"] > .rs-suggst-follow-button`);
      let isClick = false;

      tt_btn.addEventListener('mouseenter', () => {
        if(tt_btn.classList.contains("clicked") ) {
          if (!isClick) {
            tt_btn.textContent = "Unfollow";
            tt_btn.classList.add("unfollowhover");
            tt_btn.classList.remove("mouseout");
          }
        } else {
          tt_btn.classList.remove("unfollowhover");
          tt_btn.classList.remove("mouseout");
        }
      });
      
      tt_btn.addEventListener('mouseleave', () => {
        if (tt_btn.classList.contains("clicked")) {
          if(isClick) return;
          tt_btn.classList.remove("unfollowhover");
          tt_btn.classList.add("mouseout");
          tt_btn.textContent = "Following";
        } else {
          tt_btn.classList.remove("unfollowhover");
          tt_btn.classList.remove("mouseout");
        }
      });

      tt_btn.addEventListener('click', () => {
        if (tt_btn.classList.contains("clicked")) {
          tt_btn.textContent = "Follow";
          isClick = false;
          tt_btn.textContent = "Follow";
          tt_btn.classList.remove("clicked");
          tt_btn.classList.remove("mouseout");
          tt_btn.classList.remove("unfollowhover");

          relatedElement.textContent = "Follow";
          relatedElement.classList.remove("clicked");
          relatedElement.classList.remove("mouseout");
          relatedElement.classList.remove("unfollowhover");
        } else {
          tt_btn.textContent = "Following";
          tt_btn.classList.add("clicked");
          isClick = true;
          setTimeout(() => {
            isClick = false;
          }, 200);

          relatedElement.textContent = "Following";
          relatedElement.classList.add("clicked");
          relatedElement.classList.add("mouseout");
        }
      });


      let justClicked = false;
      const dataId = btn.parentElement.dataset.tooltipId;
      const relatedEl = document.getElementById(`${dataId}`).children[0].children[1];

      btn.addEventListener('mouseenter', () => {
        if(btn.classList.contains("clicked") ) {
          if (!justClicked) {
            btn.textContent = "Unfollow";
            btn.classList.add("unfollowhover");
            btn.classList.remove("mouseout");
          }
        } else {
          btn.classList.remove("unfollowhover");
          btn.classList.remove("mouseout");
        }
      });
      
      btn.addEventListener('mouseleave', () => {
        if(btn.classList.contains("clicked")){
          if(justClicked) return;
          btn.classList.remove("unfollowhover");
          btn.classList.add("mouseout");
          btn.textContent = "Following";
        } else {
          btn.classList.remove("mouseout");
          btn.classList.remove("unfollowhover");
        }
      });



      btn.addEventListener('click', () => {
        if (btn.classList.contains("clicked")) {
          btn.textContent = "Follow";
          btn.classList.remove("clicked");
          btn.classList.remove("mouseout");
          btn.classList.remove("unfollowhover");

          relatedEl.textContent = "Follow";
          relatedEl.classList.remove("clicked");
          relatedEl.classList.remove("mouseout");
          relatedEl.classList.remove("unfollowhover");
        } else {
          btn.textContent = "Following";
          btn.classList.add("clicked");
          justClicked = true;
          setTimeout(() => {
            justClicked = false;
          }, 200);

          relatedEl.textContent = "Following";
          relatedEl.classList.add("clicked");
          relatedEl.classList.add("mouseout");
        }
      });

    });
  });


});












