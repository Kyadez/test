/* =====================================================
   Gastropod Data Center (front-end sketch)

   Placeholder entries only: the names are the impact levels,
   and every reason is WIP. Replace SPECIES with the group's
   real gastropods and connect interpret() to the AI later
   (e.g. fetch("/api/interpret") on the Python backend).
===================================================== */

document.documentElement.classList.add("js");

const LEVELS = {
    high: "High impact",
    medium: "Medium impact",
    low: "Low impact"
};

const SPECIES = [
    { name: "High", level: "high" },
    { name: "Medium", level: "medium" },
    { name: "Low", level: "low" }
];

// AI interpreter hook (WIP)
async function interpret(sp) {
    return "WIP";
}

/* ---------- helpers ---------- */

function el(tag, attrs, ...kids) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => node.setAttribute(k, v));
    kids.forEach(k => node.append(k));
    return node;
}

function findSpecies(query) {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return SPECIES.find(s => s.name.toLowerCase() === q) ||
        SPECIES.find(s => s.name.toLowerCase().includes(q)) || null;
}

/* ---------- render ---------- */

const resultBox = document.getElementById("result");

function showMessage(text) {
    resultBox.replaceChildren(el("p", { class: "result-empty" }, text));
}

async function showSpecies(sp) {
    const reason = await interpret(sp);

    const head = el("div", { class: "result-head" },
        el("h3", {}, sp.name),
        el("span", { class: "badge badge-" + sp.level }, LEVELS[sp.level]));

    const order = ["low", "medium", "high"];
    const step = order.indexOf(sp.level) + 1;
    const gauge = el("div", { class: "gauge-wrap" },
        el("div", { class: "gauge", "data-level": sp.level, role: "img", "aria-label": "Impact level: " + LEVELS[sp.level] + " (" + step + " of 3)" },
            ...order.map((o, i) => el("span", { class: "seg" + (i < step ? " on" : "") }))),
        el("div", { class: "gauge-labels", "aria-hidden": "true" },
            ...order.map(o => el("span", { class: o === sp.level ? "current" : "" }, o[0].toUpperCase() + o.slice(1)))));

    const note = el("div", { class: "interpretation" },
        el("h4", {}, "In plain words"),
        el("p", {}, reason));

    const details = el("details", {},
        el("summary", {}, "Show the formula and numbers"),
        el("p", {}, "WIP"));

    resultBox.replaceChildren(el("article", { class: "panel" }, head, gauge, note, details));
}

function runSearch(query) {
    const sp = findSpecies(query);
    if (sp) {
        showSpecies(sp);
    } else {
        showMessage(query.trim()
            ? "No gastropod found for \u201C" + query.trim() + "\u201D. Check the spelling or pick a name from the list."
            : "Type a name to search.");
    }
}

/* ---------- wire up ---------- */

const input = document.getElementById("species-search");
const list = document.getElementById("species-list");

SPECIES.forEach(s => list.append(el("option", { value: s.name })));

document.getElementById("search-form").addEventListener("submit", e => {
    e.preventDefault();
    runSearch(input.value);
});

// Picking a name from the suggestion list searches right away
input.addEventListener("change", () => {
    if (SPECIES.some(s => s.name.toLowerCase() === input.value.trim().toLowerCase())) {
        runSearch(input.value);
    }
});

// Quick-search chips
document.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
        input.value = btn.dataset.query;
        runSearch(btn.dataset.query);
    });
});

// Scroll-in effect (skipped when the visitor prefers reduced motion)
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
    }, { threshold: 0.15 });
    revealEls.forEach(r => io.observe(r));
} else {
    revealEls.forEach(r => r.classList.add("in"));
}
