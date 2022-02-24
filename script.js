

function submit(){
    const credit = $('#credit').val();
    const grade = $('#grade').val();

    const point = credit * grade;

    console.log(typeof point);

    $('#point').val(point);
    const cgpa = point / credit;
    
    $('#showResult').text(cgpa.toFixed(2));
    newReset();
}

// full reset, this is only for reset button

function reset(){

    $('#courseCode').val('')
    $('#credit').val('')
    $('#grade').val('')
    $('#point').val('')
    $('#showResult').text('')
    
    $('#creditTotal').val('')
    $('#gradeTotal').val('')
    $('#pointTotal').val('')

    $('.total').hide()

    console.clear()
  
}

//this is automatic reset for addmore button
function newReset(){
    const c = $('#courseCode').val('')
    const cr = $('#credit').val('')
    const g = $('#grade').val('')
    const p = $('#point').val('')

    return {c,cr,g,p};

}


$(document).ready(function() {
    
    $('#reset').click(reset);
    $('#submit').click(submit);

  });


var cm, gm, pm, cgpa, addcm, addgm, addpm;
var counter = 0;


$("#addMore").click(function() {
    $('.total').show()
    counter++;
    //console.log(counter)

    // here 'add' using to collect and send the value where counter === 1
    addcm = $('#credit').val()
    addgm = $('#grade').val()

    if (counter >= 1){


        //this 'if' will work when 'add more' button is pressed for first time, if pressed more 'else' will start
        if(counter ===1){
            //counter is 1 here
            console.log(`counter is one here ${counter}`)

            // sending value to total value box
            $('#creditTotal').val(addcm)

            $('#gradeTotal').val(addgm)

            let pt = addcm * addgm;
            $('#pointTotal').val(pt)
            $('#point').val(pt)
            
            //this is cgpa part for counter 1

            let cgpa = (pt / addcm).toFixed(2);

            $('#showResult').text(cgpa);

            newReset();
            
        }

        //this 'esle' start working if 'add more' button is pressed for 2 and more times
        else{       
            //counter is 2 and above here

            //this is credit part
            addcm = $('#credit').val()
            cm = $('#creditTotal').val();
            addcm = addcm*1;
            cm = cm *1;

            cm = cm + addcm;

            $('#creditTotal').val(cm);

    
            //this is grade part
            addgm = $('#grade').val()
            gm = $('#gradeTotal').val();
            addgm = addgm * 1;
            gm = gm * 1;

            gm = gm + addgm;

            $('#gradeTotal').val(gm);

            //this is point part
            let credit = $('#credit').val();
            let grade = $('#grade').val()
            credit = credit *1;
            grade = grade *1;

            let point = credit * grade;

            $('#point').val(point);


            let ptTotal = $('#pointTotal').val();
            ptTotal = ptTotal * 1;

            ptTotal = ptTotal + point;
            $('#pointTotal').val(ptTotal);

            //this is cgpa part

            let cgpa = (ptTotal / cm).toFixed(2);

            $('#showResult').text(cgpa);

            newReset();
        }
    }

});