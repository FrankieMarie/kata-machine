export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;

    while (lo <= hi) {
        const mid = Math.floor((hi + lo) / 2);
        const value = haystack[mid];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            hi = mid - 1;
        } else {
            // needle is greater than value
            lo = mid + 1;
        }
    };

    return false;
}

// when vlaue is equal to the needle
// when value is greater than needle
// when value is less than needle

function binary(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[mid];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return false;
}