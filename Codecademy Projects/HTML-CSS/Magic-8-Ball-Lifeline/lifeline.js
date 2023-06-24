function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
};

const quoteColor = {
    quotePackage: ['be the change you want to see in the world', "A penny made is a penny earned", "if a frog had wings..."]
    favColorPackage: ["blue", "red", "green", "purple", "silver", "white"]
}

let carePackage = []

for (let prop in quoteColor){
let messageSlip = generateRandomNumber(quoteColor[prop].length)
}

switch(prop){
    case: 'quote'
    carePackage.push `Reflect on ${quote}`
    case: 'favColor'
    carePackage.push `Surround yourself with ${favColor}`
}

function lifeLine(_Package){
const formatted = carePackage.join('\n')
console.log(formatted)
}

lifeLine(_Package);