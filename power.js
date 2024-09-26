function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base , exp -1);
}

console.log(power(2,3));
console.log(power(3,3));
console.log(power(5,5));