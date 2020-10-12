class Square {
    constructor(height, width) {
      this.height = height;
      this.width = width;


    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    } 
    isSquare() {
        if (this.height == this.width) {
                return true 
            } else {
                return false 
            }
        }
    }
  
  const mysquare = new Square(10, 10);
  
  console.log(mysquare.isSquare()); // 100
