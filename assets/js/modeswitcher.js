---
---

/*
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = localStorage.getItem('theme');

const iconSun = "{{ site.baseurl }}/assets/img/sun.svg";
const iconMoon = "{{ site.baseurl }}/assets/img/moon.svg";

function changeIconImgSrc(src) {
  document.getElementById("theme-toggle-img").src = src;
  document.getElementById("theme-toggle-img--mobile").src = src;
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    changeIconImgSrc(iconMoon);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    changeIconImgSrc(iconSun);
  }
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
  let theme = localStorage.getItem('theme');
  if (theme === "dark") {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  } else {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (!theme) {
    localStorage.setItem('theme', 'dark');
  }
  let theme = localStorage.getItem('theme');
  if (theme) {
    applyTheme(theme);
  } else if (systemInitiatedDark.matches) {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  }
});
