
const PlottorifficGenerator = require('plottoriffic');
const seedrandom = require('seedrandom');

class Plottoriffic {

    constructor() {
        this.maleNames = require('plottoriffic/data/names_male.json').join('\r\n');
        this.femaleNames = require('plottoriffic/data/names_female.json').join('\r\n');
        this.rng = seedrandom();
        
    }

    generate() {
        
        this._tmpMaleNames = this.maleNames.split(/\r\n|\r|\n/);
        this._tmpFemaleNames = this.femaleNames.split(/\r\n|\r|\n/);
        
        return new PlottorifficGenerator({ 
            namer: (a,b,c) => this.randomNamer(a,b,c)
        }).generate();
    }

    randomNamer(characterSymbol, symbolDescription, gender) {
        
        let arr;
        if(gender == 'male') {
            arr = this._tmpMaleNames;
        } else if(gender == 'female') {
            arr = this._tmpFemaleNames;
        } else if(gender == 'any') {
            
            if(this.rng() < 0.5) {
                arr = this._tmpMaleNames;
            } else {
                arr = this._tmpFemaleNames;
            }
            
        } else {
            return characterSymbol;
        }
        
        let min = 0;
        let max = arr.length;
        let i =Math.floor(this.rng() * (max - min)) + min;
        let ret = arr[i];
        
        arr.splice(i,1);
        
        return ret || characterSymbol;
    }
}

module.exports = new Plottoriffic();