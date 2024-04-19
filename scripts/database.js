const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Megamind",
            power: "Large Brain"
        },
        {
            id: 2,
            name: "Captian Insano",
            power: "Shows no mercy"
        },
        {
            id: 3,
            name: "Dr. Ryan Saxe",
            power: "Spending"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}