// إظهار الأقسام تدريجيًا عند النزول في الصفحة
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// زر العودة إلى أعلى الصفحة
const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// الوضع الليلي والنهاري
const themeButton = document.createElement("button");

themeButton.textContent = "🌙";
themeButton.className = "theme-button";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});