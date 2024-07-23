// Thanks to https://github.com/Rawrington/SkillDisplay/blob/master/src/Action.js
const gcdOverrides = [
    // This list is for Abilities that ARE GCD

    // NIN
    2259, //ten
    2261, //chi
    2263, //jin
    2265, //fuma shurikan
    2266, //katon
    2267, //raiton
    2269, //huton
    2270, //doton
    2271, //suiton
    2272, //rabbit medium
    16491, //goka meykakku
    16492, //hyosho ranryu

    // SAM
    7487, //midare
    7488, //tenka goken
    7489, //higanbana
    16483, //tsubame
    16485, //kaeshi goken
    16486, //kaeshi setsugekka
    36965, //tendo goken
    36966, //tendo midare
    36968, //tendo kaeshi

    // MNK
    25768, //rising phoenix
    25769, //phantom rush
    36948, //elixir burst

    // RPR
    24388, //harvest moon
    36970, //executioner's gibbet
    36971, //executioner's gallows
    36973, //perfectio
];
// Thanks to https://github.com/Rawrington/SkillDisplay/blob/master/src/Action.js
const ogcdOverrides = [
    // RPR
    24390, //unveiled gibbet
    24391, //unveiled gallows
    36969, //sacrificium
];

const globalSkillsList = [
    {
        ID: 0,
        Icon: "./resources/Pull1.png",
        Name: "Pull Placeholder",
        Description: "This is a placeholder for the Pull/Engage",
    },
    {
        ID: 1,
        Icon: "./resources/BlankGCD.png",
        Name: "GCD Blank Placeholder",
        Description: "This is a placeholder for a GCD",
    },
    {
        ID: 2,
        Icon: "./resources/BlankOGCD.png",
        Name: "OGCD Blank Placeholder",
        Description: "This is a placeholder for a OGCD",
    },
    {
        ID: 3,
        Icon: "/i/000000/000104.png",
        Name: "Sprint",
        Description: "Sprint.<br>Makes you run fast.<br>WHAT ELSE DO YOU WANT?",
        Recast100ms: 600,
    },
    {
        ID: 7,
        Icon: "/i/000000/000101.png",
        Name: "Auto-Attack",
        Description: "This is an Auto-Attack.<br>Really, that's all.",
    },
    {
        ID: 209,
        Icon: "/i/000000/000103.png",
        Name: "Limit Break",
        Description: "Limit Break.<br>Not sure why you are using that in an opener.",
    },
    //Tinctures go there, to change if needed
    {
        ID: 27786,
        Icon: "/i/020000/020710.png",
        Name: "Tincture of Strength",
        Description: "This diluted brew temporarily increases strength for twice the duration of similar potions.\n\n\n\n<span style=\"color:#00cc22;\">Duration:</span> 30s",
    },
    {
        ID: 27787,
        Icon: "/i/020000/020709.png",
        Name: "Tincture of Dexterity",
        Description: "This diluted brew temporarily increases dexterity for twice the duration of similar potions.\n\n\n\n<span style=\"color:#00cc22;\">Duration:</span> 30s",
    },
    {
        ID: 27788,
        Icon: "/i/020000/020707.png",
        Name: "Tincture of Vitality",
        Description: "This diluted brew temporarily increases vitality for twice the duration of similar potions.\n\n\n\n<span style=\"color:#00cc22;\">Duration:</span> 30s",
    },
    {
        ID: 27789,
        Icon: "/i/020000/020706.png",
        Name: "Tincture of Inteligence",
        Description: "This diluted brew temporarily increases inteligence for twice the duration of similar potions.\n\n\n\n<span style=\"color:#00cc22;\">Duration:</span> 30s",
    },
    {
        ID: 27790,
        Icon: "/i/020000/020708.png",
        Name: "Tincture of Mind",
        Description: "This diluted brew temporarily increases mind for twice the duration of similar potions.\n\n\n\n<span style=\"color:#00cc22;\">Duration:</span> 30s",
    },
];
