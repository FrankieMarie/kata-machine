export default function linear_search(haystack: number[], needle: number): boolean {
    // iterate the list
    // return boolean if number is found

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }

    return false;
}