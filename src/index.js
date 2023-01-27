module.exports = function reverse (n) {

    let minus = '-';
    let zero = '0';

    function reverse(i) {
        return i.toString().split('').reverse().join('');
    } 

    let reversed = reverse(n);
    
    function toPositive(i) {
        if (i.includes(minus)) {
            return i.slice(0, -1);
        } else {
            return i;
        }
    }

    let reversedPositive = toPositive(reversed);
    
    function removeZeroFirst(i) {
        if (i.slice(0, 1).includes(zero)) {
            return i.substring(1);  
        } else {
            return i;
        }
    }

    let result = parseInt(removeZeroFirst(reversedPositive));
    
    return result;
}
