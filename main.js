//1
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

let concatArrs = [...clients1,...clients2];
let res = [...new Set(concatArrs)]
//я не понимаю где здесь можно вставить диструктуризацию


console.log("1 задание");
for(let item of res){
  console.log(item);
}

//2
const characters = [
    {
      name: "Елена",
      lastName: "Гилберт",
      age: 17, 
      gender: "woman",
      status: "human"
    },
    {
      name: "Кэролайн",
      lastName: "Форбс",
      age: 17,
      gender: "woman",
      status: "human"
    },
    {
      name: "Аларик",
      lastName: "Зальцман",
      age: 31,
      gender: "man",
      status: "human"
    },
    {
      name: "Дэймон",
      lastName: "Сальваторе",
      age: 156,
      gender: "man",
      status: "vampire"
    },
    {
      name: "Ребекка",
      lastName: "Майклсон",
      age: 1089,
      gender: "woman",
      status: "vempire"
    },
    {
      name: "Клаус",
      lastName: "Майклсон",
      age: 1093,
      gender: "man",
      status: "vampire"
    }
  ];
  
  let arr = [];
  console.log("2 задание");
  
  for(let item of characters)
  {
    let {name,lastName,age}=item;
    arr.push({name,lastName,age});
  
  }
  for(let i = 0; i<=arr.length; i++)
  {
    console.log(arr[i]);
  }

//3
const user1 = {
    name: "John",
    years: 30
  };
  
  console.log("3 задание");
  let {name, years, isAdmin=false} 
  = user1;
  
  console.log(name,years,isAdmin);


//4
const satoshi2020 = {
  name: 'Nick',
  surname: 'Sabo',
  age: 51,
  country: 'Japan',
  birth: '1979-08-21',
  location: {
    lat: 38.869422, 
    lng: 139.876632
  }
}

const satoshi2019 = {
  name: 'Dorian',
  surname: 'Nakamoto',
  age: 44,
  hidden: true,
  country: 'USA',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Chrome'
}

const satoshi2018 = {
  name: 'Satoshi',
  surname: 'Nakamoto', 
  technology: 'Bitcoin',
  country: 'Japan',
  browser: 'Tor',
  birth: '1975-04-05'
}
console.log("4 задание");
var fullProfile = Object.assign(satoshi2018, satoshi2019, satoshi2020);
console.log(fullProfile);

//5
const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
  }, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
  }, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
  }];
  
  const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R.'
  }
  let newArr =[]
  
  console.log("5 задание");
  newArr.push(bookToAdd)
  let tempArray = [...books, ...newArr]
  
  console.log(tempArray)

  //6
  const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
  }

  console.log("6 задание");
  let {name : n, surname} = employee;
  let newEmployee = {n,surname,age:20,salary:20};
  console.log(newEmployee)

  //7
  const array = ['value', () => 'showValue'];

  console.log("7 задание");
  // Допишіть код тут
  let [value,showValue] = array;

  console.log(value); // має бути виведено 'value'
  console.log(showValue());  // має бути виведено 'showValue'