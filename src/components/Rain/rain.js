document.addEventListener("DOMContentLoaded", function () {
    const rainContainer = document.querySelector(".rain");
  
    if (!rainContainer) {
      console.error("Rain container not found");
      return;
    }
  
    for (let i = 0; i < 25; i++) {
      let r = Math.round(16 + 64 * Math.random());
      let x = Math.round(100 * Math.random());
      let t = +(2 + 6 * Math.random()).toFixed(2);
      let dt = +(Math.random() * t).toFixed(2);
  
      const drop = document.createElement("div");
      drop.classList.add("drop");
      drop.style.setProperty('--r', `${r}px`);
      drop.style.setProperty('--x', `${x}%`);
      drop.style.setProperty('--t', `${t}s`);
      drop.style.setProperty('--dt', `-${dt}s`);
      
      rainContainer.appendChild(drop);
    }
  });