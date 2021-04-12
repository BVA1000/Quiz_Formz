document.getElementById('formButton').onclick = function () {
    q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
    q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
    q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
    q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
    q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
    q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
    q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
    q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);
    q9 = parseInt(document.querySelector('input[name = "q9"]:checked').value);

    result = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;
    let result2;

    document.getElementById('grade1').innerHTML = "<h1>How smart are you Assesment?</h1><p>Thanks for taking the Assessment!<br><i>If you enetered the email address in the beginning, you will receive the results in your email</i><br>Here are the results.</p><h3>Your Total Score is:" + result + "</h3><p> Read below the analysis of your score level to discover how far you got in the journey. <br>Remember you can always grow in your skills by working and studying hard and getting in practice of what you have learned!</p>"

    if (result <= 9) {
        result2 = "<b>Your score of " + result + " may indicate that you are a beginner programmer!</b>"
    };

    if (result > 9 && result < 19) {
        result2 = "<b>Your score of " + result + " may indicate that you are a amateur programmer!</b>"
    };

    if (result > 18 && result < 27) {
        result2 = "<b>Your score of " + result + " may indicate that you are a average programmer!</b>"
    };

    if (result > 26 && result < 37) {
        result2 = "<b>Your score of " + result + " indicates that you are a professional programmer!</b>"
    };
    document.getElementById('grade2').innerHTML = result2;

    //HTML RESULTS
    htmlResults = q1 + q2 + q3;
    let htmlResults2;

    document.getElementById('htmlGrade').innerHTML = "Your score for the HTML category is: " + htmlResults + " out of 12 "
    if (htmlResults >= 0) {
        htmlResults2 = "<b><i>Overview</i></b> <br><br> The points obtained here will show the level you have to invest in studying HTML. If under 4, you better start reviewing and working harded, but take one day at a time."
    };
    document.getElementById('htmlGrade2').innerHTML = htmlResults2;

    //CSS RESULTS
    cssResults = q4 + q5 + q6;
    let cssResults2;

    document.getElementById('cssGrade').innerHTML = "Your score for the CSS category is: " + cssResults + " out of 12 "
    if (cssResults >= 0) {
        cssResults2 = "<b><i>Overview</i></b> <br><br> The points obtained here will show the level you have to invest in studying CSS. If under 4, you better start reviewing and working harded, but take one day at a time."
    };
    document.getElementById('cssGrade2').innerHTML = cssResults2;

    //JS RESULTS
    jsResults = q7 + q8 + q9;
    let jsResults2;

    document.getElementById('jsGrade').innerHTML = "Your score for the JavaScript category is: " + jsResults + " out of 12 "
    if (jsResults >= 0) {
        jsResults2 = "<b><i>Overview</i></b> <br><br> The points obtained here will show the level you have to invest in studying JavaScript. If under 4, you better start reviewing and working harded, but take one day at a time."
    };
    document.getElementById('jsGrade2').innerHTML = jsResults2;

}
