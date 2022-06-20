// Your code here
class Polygon{
    constructor(sidesArray){
        this.sides = sidesArray;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((sum, current) => sum + current, 0);
    }
}

class Triangle extends Polygon{

    get isValid(){
        if(this.countSides !== 3) return false;
        const [side1, side2, side3] = this.sides;
        if(side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1)
           return false;
    return true;
    }
}

class Square extends Polygon{

    get isValid(){
        if(this.countSides !== 4){
         return false;
        }
        const [side1, side2, side3, side4] = this.sides;
        if(side1 === side2 && side1 === side3 && side1 === side4){
        return true;
        }
         return false;
    }

    get area() {
        if (!Array.isArray(this.sides) || this.countSides !== 4) return false;
        return this.sides[0] * this.sides[0];
    }

}