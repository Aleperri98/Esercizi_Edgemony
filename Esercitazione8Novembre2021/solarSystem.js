const solarSystem = [
    {name: 'Sun', radius: 696340, surface:  'star'},
    {name: 'Mercury', radius: 2440, surface: 'terrestrial'},
    {name: 'Venus', radius: 6052, surface: 'terrestrial'},
    {name: 'Earth', radius: 6371, surface: 'terrestrial'},
    {name: 'Mars', radius: 3389, surface: 'terrestrial'},
    {name: 'Jupiter', radius: 69911, surface: 'gas giant'},
    {name: 'Saturn', radius: 58232, surface: 'gas giant'},
    {name: 'Uranus', radius: 25362, surface: 'ice giant'},
    {name: 'Neptune', radius: 24622, surface: 'ice giant'},
    ];

// FUNZIONE planetDiameter CHE RITORNA IL DIAMETRO, ARROW FUNCTION.
const planetDiameter = solarSystem.map((planets) => planets.radius*2);
console.log(planetDiameter);

//CONVERSIONE DEL VALORE DELLA CHIAVE NAME IN ITALIANO


const nameIt = (planet) => { 
switch (planet.name) {
    case "Sun":
        planet.name = "Sole";
    break;

    case "Mercury":
        planet.name = "Mercurio";
    break;

    case "Venus":
        planet.name = "Venere";
    break;

    case "Earth":
        planet.name = "Terra";
    break;

    case "Mars":
        planet.name = "Marte";
    break;

    case "Jupiter":
        planet.name = "Giove";
    break;

    case "Saturn":
        planet.name = "Saturno";
    break;

    case "Uranus":
        planet.name = "Uranio";
    break;

    case "Neptune":
        planet.name = "Nettuno";
    break;
}
return planet
};

const planetIt = solarSystem.map(nameIt);
console.log(planetIt);

//prove
// `(planets) => planets.name[0] + "Sole"
// (planets) => planets.name[1] + "Mercurio"
// (planets) => planets.name[2] + "Venere"
// (planets) => planets.name[3] + "Terra"
// (planets) => planets.name[4] + "Marte"
// (planets) => planets.name[5] + "Giove"
// (planets) => planets.name[6] + "Saturno"
// (planets) => planets.name[7] + "Uranio"
// (planets) => planets.name[8] + "Nettuno"`});

