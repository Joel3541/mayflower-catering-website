const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const backTop = document.getElementById("backTop");
const bookingForm = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  document.body.classList.toggle("menu-open", open);
});

navLinks.forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}));

const sections = document.querySelectorAll("main section[id]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        "active", link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => observer.observe(section));

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 600);
});
backTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();

bookingForm?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const message = [
    "Hello Mayflower Catering Services! I'd like to request a catering quote.",
    "",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Event: ${data.get("event")}`,
    `Date: ${data.get("date")}`,
    `Guests: ${data.get("guests")}`,
    `Location: ${data.get("location") || "Not specified"}`,
    `Requirements: ${data.get("message") || "None"}`
  ].join("\n");
  const url = `https://wa.me/233500194301?text=${encodeURIComponent(message)}`;
  formStatus.textContent = "Opening WhatsApp with your enquiry…";
  window.open(url, "_blank", "noopener");
});

document.getElementById("galleryBtn")?.addEventListener("click", () => {
  document.querySelector("#gallery").scrollIntoView({behavior:"smooth"});
  const status = document.createElement("div");
  status.textContent = "More gallery images can be added here when the real photos are available.";
  status.style.cssText = "text-align:center;color:#806024;font-size:11px;margin-top:14px";
  document.getElementById("gallery").appendChild(status);
  setTimeout(() => status.remove(), 3500);
});
