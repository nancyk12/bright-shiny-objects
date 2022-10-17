// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//createUser 
function createUser(fName, lName){
    let student = {
    firstName: fName,
    lastName: lName
}
return student;
}
console.log(createUser("Nancy", "Kolde"));

//2. set age
/* Accepts two parameters, a user object and an age
Adds a new age field to the user
Returns the user object
*/

//set age, adds the field "age" to the user object,
//and return the updated user object
function setAge(user, age){
    user.age = age;
    return user;
}
//we create an object called user

let user = {'firstName': "Tim", "lastName": "Horton"};
//we call setAge on the use, and pass in 50

console.log(setAge(user, 50));

/* 3. incrementAge
Accepts a user object
Increments the age field by one
Returns the user object
Example:

const user = { 
    firstName: 'Angela',
    lastName: 'Merkel',
    age: 66
};

incrementAge(user) =>
{ 
    firstName: 'Angela',
    lastName: 'Merkel',
    age: 67
}
*/

function incrementAge(user1){
    user1.age += 1;
    return user1
}
let user1 = {'firstName': "Angela", "lastName": "Merkel", "age": 66};
console.log(incrementAge(user1));

/* 4. Accepts a car object
Sets the needsMaintenance field to false
Returns the car object
Example

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: true
};

fixCar(car) =>
{
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: false
}
*/
function fixCar(car){
    car.needsMaintenance = false;
    return car;
}
let car = {"make": "Ford", "model": 'Mustang', "year": 1969, "needsMaintenance": true};
console.log(fixCar(car));

/* 5. addGrades
Accepts two parameters, a student object and an array of grades
Adds each new grade to the student's grades array
Returns the student object
Example

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

addGrades(student, newGrades) =>
{
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95, 88, 70, 90]
}
*/
function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
    return student;
}
let newGrades = [88, 79, 90];
let student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
}
console.log(addGrades(student, newGrades));

/* 6. getDataType
Accepts two parameters, an object and a key in that object
Returns the data type of the value at that key in the object
Examples

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: false
};

getDataType(car, 'make') => 'string'
getDataType(car, 'model') => 'string'
getDataType(car, 'year') => 'number'
getDataType(car, 'needsMaitenance') => 'boolean'
*/

function getDataType(object, key){
    return typeof object[key];
}
let car1 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaitenance: false
};
console.log(getDataType(car1, 'make'));
console.log(getDataType(car1, 'model'));
console.log(getDataType(car1, 'year'));
console.log(getDataType(car1, 'needsMaitenance'));

/* 7. addTodo
Accepts two parameters, an array of to-do items and a new to-do item
Adds the new-todo item to the array
Returns the array of to-do items
Example

const todos = [
    { 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
];

const newTodo = {
    title: 'Call mom', 
    isComplete: false
};

addTodo(todos, newTodo) =>
[
    { 
        title: 'Get gas', 
        isComplete: false 
    },
    { 
        title: 'Buy bread', 
        isComplete: true  
    },
    {
        title: 'Call mom', 
        isComplete: false
    }
];
*/

function addToDo(todos, newTodo){
    todos.push(newTodo);
    return todos;
}
let todos = [
    { 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
];

let newTodo = {
    title: 'Call mom', 
    isComplete: false
};
console.log(addToDo(todos, newTodo));

/* 8. addSong
Accepts two parameters, a playlist object and a song object
Updates the duration of the playlist
Adds the song to the playlist's songs
Returns the playlist object
Example

const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

addSong(playlist, song) =>
{
    title: 'My jams',
    duration: 10,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        },
        {
            title: 'Old Friends',
            artist: 'Pinegrove',
            duration: 3
        }
    ]
}

*/

function addSong(playlist, newSong){
    playlist.songs.push(newSong);
    playlist['duration'] = (playlist['duration'] += newSong['duration']);
    return playlist;
}
let playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

let newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

console.log(addSong(playlist, newSong));


/* 9. updateReportCard
Accepts two parameters, a report card and a new grade (a number between 0 and 100)
Updates the report card's lowest grade, highest grade, and average grade
Adds the new grade to the report card's grades
Examples


const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};

updateReportCard(reportCard, 62) =>
{
    lowestGrade: 62,
    highestGrade: 96,
    averageGrade: 77,
    grades: [70, 96, 80, 62]
}

updateReportCard(reportCard, 100) =>
{
    lowestGrade: 70,
    highestGrade: 100,
    averageGrade: 86.5,
    grades: [70, 96, 80, 100]
}
*/
function updateReportCard(reportCard, grade){
    // add new grades to the report card
    reportCard.grades.push(grade);
    
    //update lowestGrade (...): unpack array
    reportCard.lowestGrade = Math.min(...reportCard.grades);
    //update highestGrade
    reportCard.highestGrade = Math.max(...reportCard.grades);
    //update average
    let avg = 0;
    //calculate average 
    for (let i = 0; i < reportCard.grades.length; i++){
        //add each grade to the average
        avg += reportCard.grades[i];
    }
    //divide by the length of the grades and save to reportCard object
    reportCard.averageGrade = avg / reportCard.grades.length;

    //return modified report card object
    return reportCard;
}


const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};

console.log(updateReportCard(reportCard, 62));
console.log(updateReportCard(reportCard, 100));




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
