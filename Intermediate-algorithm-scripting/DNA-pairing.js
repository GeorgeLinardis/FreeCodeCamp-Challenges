/**
 * FreeCodeCamp Challenge
 * -------------------------
 * WSum all the prime numbers up to and including the provided number.
 *
 * A prime number is defined as a number greater than one and having
 * only two divisors, one and itself. For example, 2 is a prime number
 * because it's only divisible by one and two.
 *
 * The provided number may not be a prime.
 *
 * -------------------------
 * @param {number} num
 * @return {number}
 *
 */


function sumPrimes(num) {

        function prime(num){
            for (i = 2; i <= num; i++){
                return (num % i === 0 && num!== i)?false:true
            }
        }

        if (num === 1){
            return 0;
        }

        if(prime(num) === false){return sumPrimes(num - 1);}
        if(prime(num) === true){return num + sumPrimes(num - 1);}
    }

sumPrimes(10);