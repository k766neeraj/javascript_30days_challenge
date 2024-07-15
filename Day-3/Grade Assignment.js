// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
let marks = 55

switch (true) {
    case (marks>=90):
        console.log("Grade: A")
        break;
    case (marks>=80 && marks<90):
        console.log("Grade: B")
        break;
    case (marks>=70 && marks<80):
        console.log("Grade: C")
        break;
    case (marks>=60 && marks<70):
        console.log("Grade: D")
        break;
    case (marks>=50 && marks<60):
        console.log("Grade: E")
        break;

    default:
        console.log("Grade: F")
        break;
}
