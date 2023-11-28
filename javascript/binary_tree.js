class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [1, 4, 7]
function oneToSeven() {
  return new Node(4, 
    new Node(1), 
    new Node(7)
    )
  
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  return new Node(45, 
    new Node(40,
      new Node(10),
      null), 
    new Node(46, 
      null,
      new Node(50)
      )
    )
  
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  return new Node(0,
    new Node(-17,
      new Node(-19, 
        new Node(-20)),
      new Node(-15)
      ),
    new Node(2,
      new Node(1),
      new Node(10)
    )
  )
}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
