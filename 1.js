//1
// for (let i=1;i<=100;i++)
//     console.log(i);

//2
// for (let i=10;i<=20;i++)
//      console.log(i);

//3
// for (let i=10;i<=20;i++)
//     if(i%3==0)
//      console.log(i);

//4
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for (let i=0;i<=arr.length-1;i++)
//         console.log(`Число ${arr[i]}`)

//5
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i=0;i<=arr.length-1;i++)
//     if(arr[i]%2==0)
//       console.log(arr[i]);

//6
// const arr = [1, 'hi', 2, 'hello', 3];
// for (let i=0;i<=arr.length-1;i++)
//     if(!isNaN(arr[i]))
//         console.log(`Число ${arr[i]}`)
//     else 
//         console.log(`Строка ${arr[i]}`)

//7
// const userInput = prompt('Введите строку');
// let sum = 0;

// for (let i = 0; i < userInput.length; i++) {
//     const digit = Number(userInput[i]);  
//     if (!isNaN(digit)) { 
//         sum += digit; 
//     }
// }

// console.log(sum);

//8
// const arr =  [1, 2, 3, 4, 5];
// let proiz = 1;
// for(let i=0; i<arr.length;i++)
//     proiz*=arr[i];
// console.log(proiz)

//9
// const userInput = prompt('Введите число');
// if(isNaN(userInput))
//     console.log('Вы ввели строку')
// else
// {
//     const a = Number(userInput);
//     for(let i = 1;i<=a;i++)
//         if(i%3==0)
//             console.log(i)
// }

//10
// const arr = [10, 20, 30, 40, 50];
// const userInput = prompt('Введите число');
// if(isNaN(userInput))
//     console.log('Вы ввели строку')
// else
// {
//     const a = Number(userInput);

//     for(let i = 1;i<=arr.length;i++)
//         if(arr[i]==a)
//             console.log('Число найдено')
    // if(arr.includes(a))
        // console.log('Число найдено')
// }
   
//11
// const arr =  [5, 12, 7, 9, 14];
// let max = arr[0];
// for(let i = 1;i<=arr.length;i++)
//          if(arr[i]>max)
//             max = arr[i]
// console.log(max)

//12
// const userInput = prompt('Введите число');
// if (isNaN(userInput) || userInput <= 0) {
//     console.log('Вы ввели строку или некорректное число');
// } else {
//     const randomNumbers = []; 
//     const a = Number(userInput);
//     for (let i = 0; i < a; i++) {
//         const randomNum = Math.floor(Math.random() * 100) + 1; 
//         randomNumbers.push(randomNum);
//     }
//     console.log('Случайные числа:', randomNumbers);
// }

//13
// const userInput = prompt('Введите строку');
// const n = parseInt(prompt('Введите число n'));
// if (!isNaN(n) && n > 0) {
//     let result = '';
//     for (let i = 0; i < n; i++) {
//         result += userInput;
//     }
//     console.log(result);
// } else {
//     console.log('Введите корректное число');
// }

//14
// const n = parseInt(prompt('Введите натуральное число n'));

// if (n > 0) {

//   for (let i = 0; i < n; i++) {
//     let stars = '';
//     for (let j = 0; j < 10; j++) {
//       stars += '*';
//     }
//     console.log(stars);
//   }

//     const stars = '*'.repeat(10);
//     for (let i = 0; i < n; i++) {
//         console.log(stars);
//     }

// } else {
//   console.log('Введите натуральное число');
// }

//15
const userInput = prompt('Введите строку');
let result = '';

for (let i = 0; i < userInput.length; i++) {
    if (i === 0 || userInput[i - 1] === ' ') {
        result += userInput[i].toUpperCase();
    } else {
        result += userInput[i];
    }
}

console.log(result);