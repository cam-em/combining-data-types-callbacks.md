const f = l => {
    // Asign values to variables
    let es = 0, p = 0, c = 1, n = 0
    //While c is less than 55 run:
    while (c <= l) {
      // first run n = 1 + 0 = 1
      n = c + p;
      //[1, 0] = [1, 1] - fibbonacci sequence
      [c, p] = [n, c]
      console.log(c)
      //Sums ES with the last even number
      es += (c % 2 === 0) ? c : 0
    }
    //Returns the sum of even numbers in fib sequence
    return es
  }
  
  console.log(f(55))