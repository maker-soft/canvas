
const items=[{"slug": "levitation", "name": "Левитация", "desc": "Графичный четырёхцветный фон"}, {"slug": "autumn", "name": "Осенний холст", "desc": "Тёплые сложные оттенки"}, {"slug": "blue_mist", "name": "Синий туман", "desc": "Холодная живописная фактура"}, {"slug": "stone", "name": "Серый камень", "desc": "Нейтральный фон для портрета"}, {"slug": "olive", "name": "Оливковый", "desc": "Природная сдержанная палитра"}, {"slug": "graphite", "name": "Графит", "desc": "Глубокий фон для студии"}, {"slug": "clay", "name": "Глина", "desc": "Тёплая художественная поверхность"}, {"slug": "cloud", "name": "Облако", "desc": "Светлый холст для чистого кадра"}];
const vk="https://vk.com/canvas_city_nsk";
document.querySelector("#galleryGrid").innerHTML=items.map((p,i)=>`
<a class="gallery-card" href="${vk}" target="_blank" rel="noopener">
  <img loading="lazy" src="assets/images/${p.slug}.webp" alt="${p.name}">
  <div class="card-copy"><small>Фон на холсте · ручная работа</small><h3>${p.name}</h3><p>${p.desc}</p></div>
</a>`).join("");
