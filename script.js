function calculateGradeNeeded() {
    var hwGrades = document.getElementById("hwScores").value;
    var hwArray = convertToNumber(hwGrades);
    var hwAvg = averageArray(hwArray);
    rowColor(1, hwAvg);

    var hwWeight = document.getElementById("hwWeight").value;
    var cHomeWorkWeight = getWeight(hwWeight);

    var qGrades = document.getElementById("qScores").value;
    var qArray = convertToNumber(qGrades);
    var qAvg = averageArray(qArray);
    rowColor(2, qAvg);

    var qWeight = document.getElementById("qWeight").value;
    var cQuizWeight = getWeight(qWeight);

    var testsGrades = document.getElementById("tScores").value;
    var testsArray = convertToNumber(testsGrades);
    var testsAvg = averageArray(testsArray);
    rowColor(3, testsAvg);

    var testsWeight = document.getElementById("tWeight").value;
    var cTestWeight = getWeight(testsWeight);

    var ParticipationGrades = document.getElementById("paScores").value;
    var ParticipationArray = convertToNumber(ParticipationGrades);
    var ParticipationAvg = averageArray(ParticipationArray);
    rowColor(4, ParticipationAvg);

    var paWeight = document.getElementById("paWeight").value;
    var cParticipationWeight = getWeight(paWeight);

    var ProjectsGrades = document.getElementById("prScores").value;
    var ProjectsArray = convertToNumber(ProjectsGrades);
    var ProjectsAvg = averageArray(ProjectsArray);
    rowColor(5, ProjectsAvg);

    var prWeight = document.getElementById("prWeight").value;
    var cProjectsWeight = getWeight(prWeight);

    var finalWeight = document.getElementById("weightOfFinal").value;
    var cFinalWeight = getWeight(finalWeight);

    var cAWeight = Math.floor(cHomeWorkWeight + cQuizWeight + cTestWeight + cParticipationWeight + cProjectsWeight + cFinalWeight);
    if ( (cAWeight != 1) || (isNaN(cAWeight)) ) {
        document.getElementById('calculatedAnswer').innerHTML = "Thats not a valid weight!";

    }else {
        var homeW = hwAvg * cHomeWorkWeight;
        var quiZ = qAvg * cQuizWeight;
        var testS = testsAvg * cTestWeight;
        var participatioN = ParticipationAvg * cParticipationWeight;
        var projectS = ProjectsAvg * cProjectsWeight;

        var currentGrade = ( (homeW + quiZ + testS + participatioN + projectS)/ (100 - ( 100 * cFinalWeight))) * 100;
        currentGrade = Math.floor(currentGrade);
        document.getElementById("calculatedAnswer").innerHTML = ("your current grade right now is a " + currentGrade);
    }
    return(currentGrade);
}

function convertToNumber(string) {
    var array =string.split(",");
    for (var i = 0; i < array.length ; i++) {
        array[i] = parseInt(array[i]);
    }
    return array;
}
function averageArray(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return (sum / (array.length));
}

function getWeight(weight) {
    return ((parseInt(weight))/100) ;
}

function finalExamGrade() {
    var ccurrentGrade = calculateGradeNeeded();
    var finalWeight = parseInt(document.getElementById("weightOfFinal").value);
    var wantedGrade = document.getElementById("gradeWanted").value;
    if ((isNaN(wantedGrade)) || (isNaN(finalWeight)) || (wantedGrade == "")) {
        document.getElementById("finalGradeNeeded").innerHTML = "HEY! give a valid weight and wanted grade! (no % symbol)"
    } else {

        var un = ccurrentGrade / 100;
        var dos = un * (100 - finalWeight);
        var tres = wantedGrade - dos;
        var cuatro = tres / finalWeight;
        var cinco = cuatro * 100;
        var seis = Math.floor(cinco);
        document.getElementById("finalExamGradee").innerHTML = ("and you need at least a " + seis + " on the final to get a " + wantedGrade + " in class");
    }
}
function rowColor(row, grade) {
    if (grade >= 60) {
        document.getElementById(row).style.backgroundColor = "red";
    }
    if (grade >= 70) {
        document.getElementById(row).style.backgroundColor = "orange";
    }
    if (grade >= 80) {
        document.getElementById(row).style.backgroundColor = "yellow";
    }
    if (grade >= 90) {
        document.getElementById(row).style.backgroundColor = "green";
    }
}
function reset() {
    document.getElementById(1).style.backgroundColor = "lightgrey";
    document.getElementById(2).style.backgroundColor = "lightgrey";
    document.getElementById(3).style.backgroundColor = "lightgrey";
    document.getElementById(4).style.backgroundColor = "lightgrey";
    document.getElementById(5).style.backgroundColor = "lightgrey";
    document.getElementById("finalExamGradee").innerHTML = "";
    document.getElementById("calculatedAnswer").innerHTML = "";
    document.getElementById("gradeWanted").value = "";
    document.getElementById("weightOfFinal").value = "";
}
