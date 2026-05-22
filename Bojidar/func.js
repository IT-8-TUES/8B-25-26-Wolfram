const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const successMessage = document.getElementById('contact-success');
  successMessage.classList.add('show');
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 3000);
  contactForm.reset();
});

const mushrooms = [ 
  { id: 1, name: "Chanterelle", price: 28, rarity: "Common", locations: "Europe, North America — deciduous forests", poisonous: false, edible: true, description: "Golden, funnel-shaped mushroom with a fruity aroma. Prized in French cuisine. Found near oak and birch trees from June to November.", taste: "Peppery, slightly fruity with apricot notes" }, 
  { id: 2, name: "Fly Agaric", price: null, rarity: "Common", locations: "Northern Hemisphere — birch and pine forests", poisonous: true, edible: false, description: "Iconic red cap with white spots. Highly toxic and psychoactive. Historically used in shamanic rituals across Siberia.", taste: "N/A — Do not consume" },
  { id: 3, name: "Porcini", price: 45, rarity: "Moderate", locations: "Europe, Asia, North America — coniferous and deciduous forests", poisonous: false, edible: true, description: "Large, meaty mushroom with a brown cap and thick white stem. One of the most commercially valuable wild mushrooms.", taste: "Nutty, earthy, deeply savory" },
  { id: 4, name: "Death Cap", price: null, rarity: "Moderate", locations: "Europe, introduced to North America and Australia", poisonous: true, edible: false, description: "Responsible for most fatal mushroom poisonings worldwide. Resembles edible species. Symptoms appear 6-12 hours after ingestion.", taste: "N/A — Lethal" },
  { id: 5, name: "Morel", price: 65, rarity: "Rare", locations: "North America, Europe — disturbed soils, burn sites, orchards", poisonous: false, edible: true, description: "Honeycomb-textured cap highly sought by chefs. Appears briefly in spring. Must be cooked before eating.", taste: "Earthy, nutty, smoky" }, 
  { id: 6, name: "Shiitake",  price: 12, rarity: "Common (cultivated)", locations: "East Asia — cultivated on hardwood logs", poisonous: false, edible: true, description: "One of the most widely cultivated mushrooms. Rich in umami. Used in Asian cuisine for centuries. Also studied for medicinal properties.", taste: "Rich umami, slightly woodsy" }, 
  { id: 7, name: "Lion's Mane", price: 22, rarity: "Moderate", locations: "North America, Europe, Asia — hardwood trees", poisonous: false, edible: true, description: "White, shaggy appearance resembling a lion's mane. Studied for potential cognitive benefits. Texture resembles seafood when cooked.", taste: "Mild, lobster-like, slightly sweet" }, 
  { id: 8, name: "Destroying Angel", price: null, rarity: "Moderate", locations: "Europe, North America — mixed woodlands", poisonous: true, edible: false, description: "Pure white and deadly. Contains amatoxins that destroy liver cells. Often confused with edible white mushrooms by beginners.", taste: "N/A — Lethal" }, 
  { id: 9, name: "Truffle (Black)", price: 950, rarity: "Very Rare", locations: "Southern France, Spain, Italy — oak tree roots", poisonous: false, edible: true, description: "Underground fruiting body found using trained dogs. Among the most expensive foods in the world. Flavor diminishes quickly after harvest.", taste: "Intensely aromatic, earthy, garlicky" }, 
  { id: 10, name: "Oyster Mushroom", price: 8, rarity: "Very Common", locations: "Worldwide — dead or dying hardwood trees", poisonous: false, edible: true, description: "Fan-shaped, easy to identify and cultivate. Excellent for beginners. Grows in shelf-like clusters on wood.", taste: "Mild, slightly anise, velvety texture" }, 
  { id: 11, name: "Matsutake", price: 200, rarity: "Rare", locations: "Japan, Korea, Pacific Northwest — pine forests", poisonous: false, edible: true, description: "Highly prized in Japanese cuisine. Distinctive spicy-aromatic scent. Increasingly rare due to pine forest decline.", taste: "Spicy, cinnamon-like, intensely aromatic" }, 
  { id: 12, name: "Reishi", price: 18, rarity: "Moderate", locations: "Asia, North America — hardwood stumps", poisonous: false, edible: true, description: "Woody, shelf-like mushroom used in traditional medicine for over 2000 years. Too tough to eat directly — typically prepared as tea or extract.", taste: "Bitter, woody (consumed as tea/extract)" } 
];

function Catalog() {
  const list = document.getElementById("catalog-list");
  const detail = document.getElementById("catalog-detail");
  detail.classList.add("hidden");
  list.innerHTML = "";
  mushrooms.forEach(m => {
    list.innerHTML += `
      <div class="mushroom-card" onclick="showMushroom(${m.id})">
        <h3 class="mushroom-title">${m.name}</h3>
        <span class="badge
          ${m.poisonous
            ? "badge-toxic"
            : "badge-edible"}
        ">
          ${m.poisonous
            ? "Toxic"
            : "Edible"}
        </span>
      </div>
    `;
  });
}
  function showMushroom(id) {
  const mushroom = mushrooms.find(m => m.id === id);
  const detail = document.getElementById("catalog-detail");
  detail.classList.remove("hidden");
  detail.innerHTML = `
      <button class="back-button" onclick="Catalog()"> Back </button>
    <div class="detail-container">
  <h2 class="detail-title">${mushroom.name}</h2>
    <p class="mushroom-latin">${mushroom.latin}</p>
      <p>${mushroom.description}</p>
         <br>
      <p> <strong>Taste:</strong> ${mushroom.taste}</p>
    <p> <strong>Locations:</strong> ${mushroom.locations}</p>
      <p> <strong>Rarity:</strong> ${mushroom.rarity}</p>
  <p><strong>Price:</strong>
${
mushroom.price
? "$" + mushroom.price + "/kg"
: "Not sold"
}
    </p>
   </div>
  `;
}
Catalog();

/*Sthqh da napravq i pop up za vseki item, no...
Kakto e velikiq slogan:
"Imashe ideq, nqmashe izpalnenie"
*/
