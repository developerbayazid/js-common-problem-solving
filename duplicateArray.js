//remove duplicate value
const studentsId = [12, 34, 23, 12, 7, 7, 7, 5, 6, 5];
const uniqueStudentsId = [];

for (let i = 0; i < studentsId.length; i++) {
    let element = studentsId[i];
    let index = uniqueStudentsId.indexOf(element);
    if (index == -1) {
        uniqueStudentsId.push(element);
    }
}

console.log(uniqueStudentsId);
