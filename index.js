// my soul belongs to the devil
// but my heart is still free
// now that I've lived half my life
// will you put your trust in me


function produceDrivingRange(blockRange) {
    return function(startRange, endRange) {
        let range = (parseInt(endRange) - parseInt(startRange));
        let distanceRange = range - blockRange;
        if (range > blockRange) {
            return `${distanceRange} blocks out of range`;
        } else {
            return `within range by ${distanceRange * -1}`;
        }
    }
}

function produceTipCalculator(percentage) {
    return function(amount) {
        return amount * percentage;
    }
}

function createDriver() {

    let DriverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++ DriverId;
        }
    }
}