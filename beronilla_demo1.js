let studentIgn = "Kenn Faiyazzz";
let studentAddress = "Awang";
let studentAge = 21;

var mainheroes = ["FANNY", "LING","LANCELOT"];
var role = ["JUNGLE", "GOLDLANER", "EXPLANER"];
var achievements = ["GLOBAL NO.1 FANNY" , "SLAYER 8", "MYTHICAL IMMORTAL 1000STARS"];

console.log("STUDENT IGN:", studentIgn);
console.log ("ADDRESS:", studentAddress);
console.log("AGE:", studentAge);

console.log("\nMAINHEROES:");
for (var j = 0; j < mainheroes.length; j++){
console.log((j+1)+ "."+ mainheroes[j]);
}
console.log("\nROLE:");
for (var i = 0; i < role.length; i++){
    console.log((i+1)+"."+ role[i]);
}
console.log("\nACHIEVEMENTS:");
for( var k = 0; k < achievements.length; k++){
    console.log((k+1)+"."+ achievements[k]);
}

if (studentAge < 18 ){
    console.log("\nStatus: Minor");
} else if ( studentAge >= 18 && studentAge < 60){
    console.log("\nStatus: Adult");
} else {
    console.log("\nStatus:Senior");
}

if(mainheroes.length >= 3){
    console.log("Note: MASTER ALL ASSASIN");
} else{
    console.log("Note: MASTER ALL UTILITY");
}

if (achievements.length >= 0){
    console.log("Note: SOLO PLAYER");
} else {
    console.log("Note: SQUAD");
}