/**
 * 
 * The split() method is used to split a String object into an array of strings by separating the string into
 * substrings.
 * Code : console.log('Developer'.split(''));
 * Output : ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
 * 
 * The sort() method is used to sort the elements of an array in place and returns the array.
 * Code : console.log(['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'].sort());
 * Output : ['D', 'e', 'e', 'e', 'l', 'o', 'p', 'r', 'v']
 * 
 * The join() method is used to join all elements of an array into a string.
 * Code : console.log(['D', 'e', 'e', 'e', 'l', 'o', 'p', 'r', 'v'].join(''));
 * Output : 'Deeeloprv'
 */

function sort(str) {
    return str.split('').sort().join('');
}
console.log(sort('Developer'));