// Switch Statement => efficient way of replacing many else if statements

// let day = 2;

// switch (day){
//     case 1:
//         console.log(`It is Monday.`)
//         break;
//     case 2:
//         console.log(`It is Tuesday.`)
//         break;         
//     case 3:
//         console.log(`It is Wednesday.`)
//         break;
//     case 4:
//         console.log(`It is Thursday.`)
//         break;
//     case 5:
//         console.log(`It is Friday.`)
//         break;
//     case 6:
//         console.log(`It is Saturday.`)
//         break;
//     case 7:
//         console.log(`It is Sunday.`)
//         break;
//     default:
//         console.log(`${day} is not a day.`)
// }

const scoreInput = document.getElementById("scoreInput");
const submitBtn = document.getElementById("submitInput");
const displayScore = document.getElementById("displayScore");

let testScore = 0;
let letterGrade;

    submitBtn.onclick = function(){
        testScore = Number(scoreInput.value);
        

        switch(true){
            case testScore > 100 || testScore < 0:
                letterGrade = `${testScore} is not a valid test score.`
                break;
            case testScore >= 90:
                letterGrade = "A";
                break;
            case testScore >= 80:
                letterGrade = "B";
                break;
            case testScore >= 70:
                letterGrade = "C";
                break;
            case testScore >= 60:
                letterGrade = "D";
                break;
            case testScore <= 60:
                letterGrade = "F";
                break;
            default:
                letterGrade = `${testScore} is not a valid test score.`
        }

        displayScore.textContent = letterGrade.length > 1  ? letterGrade : `You got ${letterGrade} Grade.`
    }