function isPrime(n)
{
    //return false for low-value non-primes.
    if (
        n === 1 ||
        n === 4 ||
        n === 6 ||
        n === 8
    )
    {
        return false;
    }

    //return true for low-value primes.
    if (
        n === 2 ||
        n === 3 ||
        n === 5 ||
        n === 7
    ){
        return true;
    }

    let isPrimeNumber = true;
    const testThreshold = Math.round(Math.sqrt(n));

    for (let i = 2; i <= testThreshold; i++)
    {
        if (n % i === 0)
        {
            isPrimeNumber = false;
            break;
        }
    }
    return isPrimeNumber;
}

module.exports = {
    isPrime,
};