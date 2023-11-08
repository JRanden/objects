var myFirm = {
    name: 'RandenCars',
    employies: 25,
    carList: ["Toyota M4","BWM Nightrider", "Mini Cooper"],
    Tax: 200000,
    Website: "www.randencars.com",
function () {
    console.log(hei)
}
}
console.log(myFirm)

myFirm['name'] = "Randen Super Cars"

console.log(myFirm)

myFirm.carList.push("Toyota Supra", "Lamborghini Ursus", "Porsche 911")
console.log(myFirm)

myFirm.carList.shift()

console.log(myFirm);

delete myFirm.Website

console.log(myFirm)

myFirm["Status"] = true;

console.log(myFirm)

for (var i = 0; i < myFirm.carList.length; i++) {
    console.log(myFirm.carList[i]);
}

for (const key in myFirm) {

    console.log(`${key}:`);
}

for (const key in myFirm) {

    console.log(`${myFirm[key]}`);
}

function array() {
    console.log(myFirm.carList.at(0))
}
array()

function lastArray(){
    console.log(myFirm.carList[myFirm.carList.length-1]);
}
lastArray()

var library = [

    {
    
    author: 'Bill Gates',
    
    title: 'The Road Ahead',
    
    readingStatus: true
    
    },
    
    {
    
    author: 'Steve Jobs',
    
    title: 'Walter Isaacson',
    
    readingStatus: false
    
    },
    
    {
    
    author: 'Suzanne Collins',
    
    title: 'Mockingjay: The Final Book of The Hunger Games',
    
    readingStatus: false
    
    }];

  
   function readChecker() {
    for (const i of library) {
        if (i.readingStatus ==false) {
            console.log(`U have not read ${i.title} by ${i.author}`)
        }
        
    }
   }
   readChecker()