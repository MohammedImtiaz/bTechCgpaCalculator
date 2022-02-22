
$('#submit').click(
function c() {
    const credit = $('#credit').val();
    const grade = $('#grade').val();

    const point = credit * grade;

    $('#point').val(point);
    const cgpa = point / credit;
   
    return $('#showResult').text(cgpa.toFixed(2));
}
)
function reset(){
    const credit = $('#credit').val("")
    const grade = $('#grade').val("")
    const point = $('#point').val("")
    return {credit, grade, point};
}

