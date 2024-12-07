function  isPalindrome(s) {
    const s1 = s.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    const s2 = s1.split('').reverse().join('');
    return s1 === s2;
}
console.log(isPalindrome("Was it a car or a cat I saw?")) //Output: true
console.log(isPalindrome("tab a cat")) //Output: false