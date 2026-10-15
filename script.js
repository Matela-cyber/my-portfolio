document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const copyEmailButton = document.querySelector(".copy-email");
const copyEmailStatus = document.querySelector(".copy-email-status");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navLinks.classList.toggle("is-open", !isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  });
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.dataset.theme === "dark";
  document.body.dataset.theme = isDark ? "light" : "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to dark theme" : "Switch to light theme");
});

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return copyTextWithSelection(text);
    }
  }

  return copyTextWithSelection(text);
}

function copyTextWithSelection(text) {
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();

  try {
    return document.execCommand("copy");
  } finally {
    input.remove();
  }
}

copyEmailButton.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.copyEmail;

  if (await copyTextToClipboard(email)) {
    copyEmailStatus.textContent = "Email copied to clipboard.";
  } else {
    copyEmailStatus.textContent = `Copy failed. You can copy the address here: ${email}`;
  }
});

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
