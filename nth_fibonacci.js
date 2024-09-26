function recurssiveFibonacci(n) {
    if(n<2){
        return n;
    }
    return recurssiveFibonacci(n-1) + recurssiveFibonacci (n - 2);
}

console.log(recurssiveFibonacci(5));
console.log(recurssiveFibonacci(4));
console.log(recurssiveFibonacci(1))
console.log(recurssiveFibonacci(2))
console.log(recurssiveFibonacci(0))