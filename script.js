
function c() {
    const credit = document.getElementById('credit').value;
    const grade = document.getElementById('grade').value;

    const point = credit * grade;

    document.getElementById('point').value = point;
    const cgpa = point / credit;
   
    return document.getElementById('showResult').innerHTML = cgpa.toFixed(2);
}

function reset(){
    const credit = document.getElementById('credit').value = ""
    const grade = document.getElementById('grade').value = ""
    const point = document.getElementById('point').value = ""
    return {credit, grade, point};
}

c();
reset();
