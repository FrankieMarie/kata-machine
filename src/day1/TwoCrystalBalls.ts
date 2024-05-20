// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way

// get square root of n
// loop in jump by sqrt of n, round down
// when you hit true or go over array, go back sqrt amount of positions
// walk forward until you get to true
// the most you will walk is sqrt of n
// return position of breakage

export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length))

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // go back 
    i -= jmpAmount;

    // linearly walk forward (at most sqrt of n) till you break
    for (let j = 0; j <= jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}