
function submit(){
    const credit = $('#credit').val();
    const grade = $('#grade').val();

    const point = credit * grade;

    $('#point').val(point);
    const cgpa = point / credit;
    
    return $('#showResult').text(cgpa.toFixed(2));
}

function reset(){
    const credit = $('#credit').val("")
    const grade = $('#grade').val("")
    const point = $('#point').val("")
    const showResult = $('#showResult').text('')
    return {credit, grade, point, showResult};
}

$(document).ready(function() {
    
    $('#reset').click(reset);
    $('#submit').click(submit);
  });