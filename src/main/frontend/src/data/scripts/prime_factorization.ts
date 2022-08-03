export const prime_factorization = (n: number) => {
  if (!isInteger(n) || n <= 0) throw TypeError("n must be a natural number");

  const primeFactors: number[] = [];
  let k = n;

  primes(1, n).forEach((p) => {
    while (divides(p, k)) {
      primeFactors.push(p);
      k = k / p;
    }
  });

  return primeFactors;
};

export const primes = (lower: number = 1, upper: number) => {
  let primes: number[] = [];

  naturals(lower, upper).forEach((n) => {
    if (isPrime(n)) primes.push(n);
  });

  return primes;
};

const isPrime = (n: number) => {
  if (!isNatural) throw TypeError("Expected n to be a natural number");

  naturals(2, n).forEach((k) => {
    if (divides(k, n)) {
      return false;
    }
  });

  return true;
};

export const isNatural = (n: number) => isInteger(n) && n > 0;

export const divides = (n: number, r: number) => {
  return isInteger(n / r);
};

export const isInteger = (n: number) => n % 1 === 0;

export const naturals = (lower: number = 1, upper: number) => {
  let naturals = [];

  for (let i = lower; i < upper; i++) {
    naturals.push(i);
  }

  return naturals;
};
