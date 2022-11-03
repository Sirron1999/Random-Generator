const skins = [
'USP-S |Printstream', 'AWP | Chromatic Aberration',
'AK-47 | Ice Coaled','P250 | Visions', 'Sawed-Off | Kiss♥Love',
'Dual Berettas | Flora Carnivora', 'R8 Revolver | Crazy 8','SG 553 | Dragon Tech','M249 | Downtown','P90 | Vent Rush',
'Glock-18 | Winterized','M4A4 | Poly Mag','FAMAS | Meow 36','Galil AR | Destroyer','MAC-10 | Monkeyflage','Negev | Drop Me','UMP-45 | Roadblock'
];


const getRandomSkin = arr => {

    const randomIndex = Math.floor(Math.random() * skins.length);

    const item = skins[randomIndex]; 

    return item
}

const skin = getRandomSkin(skins);
console.log(skin);