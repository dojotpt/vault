const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//define class
class Field {
    constructor(field = [[]]) {
        this.field = field;
        this.locationX = 0;
        this.locationY = 0;
        // Set Home position before game begins
        this.field[0][0] = pathCharacter;
    }


runGame() {
    let playing = true;
   // Method to test for W or L
    while (playing) {
        this.print();
        this.askQuestion();
        if (!this.isInBounds()) {
            console.log('Out of Bounds');
            playing = false;
            break;
        } else if (this.isHole()) {
            console.log('Sorry, you fell down a hole');
            playing = false;
            break;
        } else if (this.isHat()) {
            console.log('Congrats! You win!')
            playing = false;
            break;
        }
 // Update Location
this.field[this.locationY][this.locationX] = pathCharacter;   
}
}

askQuestion() {
    const answer = prompt('Which way ').toUpperCase();
    switch (answer) {
        case 'U':
            this.locationY -= 1;
            break;
            case 'D':
                this.locationY +=1;
                break;
                case 'R':
                    this.locationX +=1;
                    break;
                    default:
                        console.log('Enter U, D, L, or R.');
                        this.askQuestion();
                        break;
    }
}

isInBounds() {
    return (
        this.locationY >= 0 &&
        this.locationX >= 0 &&
        this.locationY < this.field.length &&
        this.locationX < this.field[0].length
    );
}

isHat() {
    return this.field[this.locationY][this.locationX] === hat;
}

isHole() {
    return this.field[this.locationY][this.locationX] === hole;
}

// set print method for field class
print() {
    const displayPrintMap = this.field.map(row => {
        return row.join('');
    }).join('\n');
    console.log(displayPrintMap);
}

    static generateField(height, width, percentage = 0.1) {
        const field = new Array(height).fill(0).map(el => new Array(width));
        for (let y=0; y < height; y++) {
            for (let x=0; x < width; x++) {
                const prob = Math.random();
                field[y][x] = prob > percentage ? fieldCharacter : hole;
            }
        }
        // set the hat location
        const hatLocation = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
        };
        // No Hat at Starting Point
       while (hatLocation.x === 0 && hatLocation.y === 0) {
            hatLocation.x = Math.floor(Math.random() * width);
            hatLocation.y = Math.floor(Math.random() *height);
        }
        field[hatLocation.y][hatLocation.x] = hat;
        return field;
    }
}

const myfield = new Field(Field.generateField(10, 10, 0.2));
myfield.runGame();