const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");

    menuToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

const kitchens = [
    {
        number: "ПРОЕКТ №01",
        title: "Кухня в современном стиле",
        description: "Эта кухня выполнена в современном стиле с акцентом на светлые оттенки, простоту и функциональность. Сочетание натуральных древесных текстур и лаконичных фасадов создаёт уютную атмосферу. Продуманная планировка позволяет удобно разместить рабочую поверхность, места для хранения и бытовую технику. Такой дизайн отлично подходит для современных квартир и домов, где важны эстетика и практичность.",
        image: "1.jpeg",
        features: [
            "Светлые современные фасады",
            "Натуральные древесные текстуры",
            "Функциональная система хранения"
        ]
    },

    {
        number: "ПРОЕКТ №02",
        title: "Кухня в тёмных тонах",
        description: "Эффектная кухня в тёмной цветовой гамме, созданная для тех, кто ценит выразительный и современный интерьер. Глубокие оттенки фасадов гармонично сочетаются с текстурой дерева и минималистичными деталями. Лаконичный внешний вид подчёркивает геометрию мебели, а продуманное расположение шкафов помогает рационально использовать пространство. Встроенная техника и подсветка дополняют интерьер и делают его более функциональным.",
        image: "2.jpeg",
        features: [
            "Глубокие тёмные оттенки",
            "Стильные деревянные элементы",
            "Современная встроенная техника"
        ]
    },

    {
        number: "ПРОЕКТ №03",
        title: "Кухня в стиле минимализм",
        description: "Минималистичная кухня, в которой каждая деталь имеет своё назначение. Чистые линии, спокойная цветовая палитра и отсутствие лишнего декора создают ощущение порядка и простора. Фасады формируют единый визуальный образ, а удобное расположение рабочих зон делает повседневное использование комфортным. Проект подойдёт тем, кто предпочитает сдержанный дизайн, практичность и современную эстетику.",
        image: "3.jpeg",
        features: [
            "Минимум лишних деталей",
            "Ровные лаконичные фасады",
            "Рациональное использование пространства"
        ]
    }
];

function showKitchen(index) {

    const kitchen = kitchens[index];

    if (!kitchen) return;

    document.getElementById("detailNumber").textContent = kitchen.number;

    document.getElementById("detailTitle").textContent = kitchen.title;

    document.getElementById("detailDescription").textContent = kitchen.description;

    const detailImage = document.getElementById("detailImage");

    detailImage.src = kitchen.image;
    detailImage.alt = kitchen.title;

    document.getElementById("feature1").textContent = kitchen.features[0];

    document.getElementById("feature2").textContent = kitchen.features[1];

    document.getElementById("feature3").textContent = kitchen.features[2];

    document.getElementById("details").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});