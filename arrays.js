class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    get(index){
        return this.data[index];
    }

    pop(){
        delete this.data[this.length - 1];
        this.length--;
    }

    shift(){
        for(let i=0; i < this.length ; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    deleteByIndex(index){
        const item = this.data[index];
        
        for(i=index; i < this.length - 1 ; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;

    }

}

const myNewArray = new MyArray();
myNewArray.push("Apple");
myNewArray.push("Mango");
myNewArray.push("Orange");
myNewArray.push("Banana");
myNewArray.push("Berry");

myNewArray.shift();
//console.log(myNewArray); 

const studentsDatabase = ["Me", "Sandeep", "Kishore", "Arun", "Moorthy", "Venu", "Mohan"];

const findStudent = (allStudents, studentName) => {
    allStudents.forEach(element => {
        if (element === studentName)
        {
            console.log(`Found ${studentName}`);
        }
    });
}

//findStudent(studentsDatabase, "Me");


//revese string
let str = "hello";
//console.log(str.toString().split("").reverse().join(""));

//reverse number
const n = -123;
//console.log(parseInt(n.toString().split("").reverse().join(""))*Math.sign(n));

//palindrome check
str = "hello";
const reverseStr = str.toString().split("").reverse().join("");
//console.log(str === reverseStr? "It is a palindrome" : "It is not a palindrome");

//capitalize 1st letter
str = "hello WorLd";
const capStr = str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
//console.log(capStr);

//FizzBuzz
const FizzBuzz = n => {
    for(let i=1; i<= n; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i)
        }

    }
}
//FizzBuzz(16);

//Max Profit
const MaxProfit =  prices => {

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i=1; i<prices.length ; i++){
        
        const currentPrice = prices[i];
        minPrice = Math.min(currentPrice, minPrice);

        const PotentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(PotentialProfit, maxProfit);

    }

    console.log(maxProfit);
}
//MaxProfit([7, 1, 2, 3, 5, 6, 8]);

//Chunk Array
const Chunk = (arr, size) => {

    let chunked = [];
    let index = 0;

    while (index < arr.length) {
       const chunk = arr.slice(index, index + size);
       chunked.push(chunk);
       index +=size;

    }
    console.log(chunked);
}
//Chunk([1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11], 3)

//Two SUM equals Target number
const TwoSum = (list, target) => {
    
    let twoSumIndexes = [];
    for(let i = 0; i < list.length ; i++)
    {
        for(let j=i + 1; j < list.length ; j++) {
            
            if(list[i] + list[j] === target){

                    const indexes = [];
                    indexes.push(i, j);
                    twoSumIndexes.push(indexes); 
                }
        }

    }
    console.log(twoSumIndexes);
}
//TwoSum([2, 7, 1, 8, 3, 6, 4, 5], 9);

