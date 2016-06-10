function selectEducationalLevel() {
	
    var e = document.getElementById("academic_degree_select");
    var text = e.options[e.selectedIndex].text ;
    if (e.options[e.selectedIndex].value == '0') {
       $("#mag").hide();
       $("#spec").hide();
       $("#bach").show();
        var firstYear =  parseInt(document.getElementById('year_input').value);
        var nextYear = parseInt(firstYear) + 1;
        document.getElementById('bach_course1').innerHTML =  "I курс" + "<br>" + firstYear + " - " + nextYear + "н.р."; 
        
        firstYear = nextYear;
        nextYear = nextYear + 1;
        document.getElementById('bach_course2').innerHTML =  "II курс " + "<br>" + firstYear + " - " + nextYear + "н.р."; 
        firstYear = nextYear;
        nextYear = nextYear + 1;
        document.getElementById('bach_course3').innerHTML =  "III курс " + "<br>" + firstYear + " - " + nextYear + "н.р."; 
        firstYear = nextYear;
        nextYear = nextYear + 1;
        document.getElementById('bach_course4').innerHTML =  "IV курс " + "<br>" + firstYear + " - " + nextYear + "н.р."; 
    }
    if (e.options[e.selectedIndex].value == '1') {
       $("#bach").hide();
       $("#mag").hide();
       $("#spec").show();
        firstYear =  parseInt(document.getElementById('year_input').value);
        nextYear = parseInt(firstYear) + 1;
        document.getElementById('spec_course1').innerHTML =  "V курс " + "<br>" + firstYear + " - " + nextYear + "н.р."; 
        firstYear = nextYear;
        nextYear = nextYear + 1;
        document.getElementById('spec_course2').innerHTML =  "VI курс " + "<br>" + firstYear + " - " + nextYear + "н.р."; 
    }
    if (e.options[e.selectedIndex].value == '2') {
       $("#spec").hide();
       $("#bach").hide();
       $("#mag").show();
        firstYear =  parseInt(document.getElementById('year_input').value);
        nextYear = parseInt(firstYear) + 1;
        document.getElementById('mag_course1').innerHTML =  "V курс " + "<br>" + firstYear + " - " + nextYear + "н.р."; 
        firstYear = nextYear;
        nextYear = nextYear + 1;
        document.getElementById('mag_course2').innerHTML =  "VI курс " + "<br>" + firstYear + " - " + nextYear + "н.р."; 
    }
	$("#out").html("");
}

$( document ).ready(function() {
    $("#mag").hide();
    $("#spec").hide();
    $("#bach").hide();
});

var lastClickedCourse;
var lastClickedSemester;

function borderSemester() {
    if(lastClickedCourse) {
            $(lastClickedSemester).css({
            'border-bottom': 'none'
        });
            $(lastClickedCourse).css({
            'border-bottom': 'none'
        });
    }
    lastClickedSemester = this;
    lastClickedCourse = $(this).parent().parent().find(".navi_course_button");
    $(this).css({
        'border-bottom': 'solid medium #abb3c0'
    });
    $(lastClickedCourse).css({
        'border-bottom': 'solid medium #abb3c0'
    });
	$("#out").html($(this).html());
}

function borderCours() {
    if(lastClickedCourse) {
            $(lastClickedSemester).css({
            'border-bottom': 'none'
        });
            $(lastClickedCourse).css({
            'border-bottom': 'none'
        });
    }
    lastClickedCourse = this;
    $(this).css({
        'border-bottom': 'solid medium #abb3c0'
    });
	$("#out").html("");
}

$('.navi_semester_button').click(borderSemester);

$('.navi_course_button').click(borderCours);

