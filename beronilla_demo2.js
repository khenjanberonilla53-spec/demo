let studentName = "Khenjan J.Beronilla";
let age = 21;
let course = "BSIT";
let yearLevel = 3;
let section = "3C";
let Uts = 95;
let InvironmentalScience = 90;
let IntroToComputing = 89;
let city = "Calbayog City";
let school = "Northwest Samar State University";

const passing = 75;
const studentID = "2024-830-1";
const teacher = "Sir. Gregor Diongon";
const subject1 = "Understanding The Self";
const subject2 = "Invironmental Science";
const subject3 = "Introduction To Computing";
const semester = "1st Semester";
const room = "Laboratory";
const department = "CCIS";
const schoolYear = "2026-2027";

console.log(`Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Year: ${yearLevel}`);
console.log(`Section: ${section}`);
console.log(`Understanding The Self: ${Uts}`);
console.log(`Invironmental Science: ${InvironmentalScience}`);
console.log(`Introduction To Computing: ${IntroToComputing}`);
console.log(`City: ${city}`);
console.log(`School: ${school}`);

const greet = () => `Hello, ${studentName}!`;

const average = () =>
    (Uts + InvironmentalScience + IntroToComputing) / 3;

const checkGrade = grade => grade >= passing;

const add = (a, b) => a + b;

const courseName = () => `${course} Student`;

let [sub1, sub2] = ["Uts", "Invironmental Science"];

let [grade1, grade2] = [Uts, InvironmentalScience];

let [hobby1, hobby2] = ["Chess", "Badminton"];

let { name, studentAge } = {
    name: "Khenjan",
    studentAge: 21
};

let { teacherName, teacherSubject } = {
    teacherName: "Sir. Gregor Diongon",
    teacherSubject: "Introduction To Computing"
};

let { schoolName, schoolCity } = {
    schoolName: "NORTHWEST SAMAR STATE UNIVERSITY",
    schoolCity: "Calbayog City"
};

let subjects = [sub1, sub2, ...["Introduction To Computing"]];

let grades = [grade1, grade2, ...[IntroToComputing]];

let student = {
    ...{ name: "Khenjan", age: 21 },
    course: "BSIT"
};

let schoolInfo = {
    ...{ name: "NORTHWEST SAMAR STATE UNIVERSITY" },
    city: "Calbayog City"
};

let increasedGrades =
    [Uts, InvironmentalScience, IntroToComputing].map(x => x + 5);

let updatedGrades =
    [80, 85, 90].map(x => x + 5);

let passingGrades =
    [60, 75, 80, 90].filter(x => x >= passing);

let highGrades =
    [80, 85, 90, 95].filter(x => x >= 90);

let email = {
    contact: {
        email: "khenjanberonilla53@gmail.com"
    }
}?.contact?.email;

let phone = {
    contact: {
        phone: "09656702187"
    }
}?.contact?.phone;

console.log(`Hello: ${greet()}`);
console.log(`Average: ${average()}`);
console.log(`Passed: ${checkGrade(Uts)}`);
console.log(`Addition: ${add(10, 5)}`);
console.log(`Course: ${courseName()}`);
console.log(`Subjects: ${subjects}`);
console.log(`Grades: ${grades}`);
console.log(`Increased Grades: ${increasedGrades}`);
console.log(`Updated Grades: ${updatedGrades}`);
console.log(`Passing: ${passingGrades}`);
console.log(`High Grades: ${highGrades}`);
console.log(`Email: ${email}`);
console.log(`Phone: ${phone}`);