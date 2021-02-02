// let i=-5;
// while (i<5) {
//     console.log("The number is " +i);
    
//     i++;
    
// }

// do {
//     console.log('The number is ' + i);
//     i++;
    
// } while (i<100);

// for(i=0;i<5;i++){
//     console.log("The number is " + i);
    
// }

let array = [1,2,3,4,5,6,7];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

let  age = 'football';

switch (age) {
    case 12:
        console.log('Hello 12');
        
        
        break;
    case 13:
        console.log('Hello 13');
        
        break;
    case 14:
        console.log('Hello 14');
        
        break;
    case "football":
        console.log('football');
        
        break;

    default:
        console.log('No age');

        break;
}