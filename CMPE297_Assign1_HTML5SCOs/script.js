function increment(variable)
{
    var scount = localStorage.getItem(variable);
    if (scount == null)
    {
        count = 0;
    } 
    else
    {
        count = parseInt(scount);
    }
    count++;
    localStorage.setItem(variable, count);
}

function submit(ques_no, ques_type)
{
    if(ques_no > 1 && ques_no < 6)
    {
        var id = $('input[name="ques"]:checked').attr('id');
        var correct_ans = $("#" +id).attr('data-correct')

        if(ques_type == "comprehensive")
        {
            var id = $('input[name="ques3a"]:checked').attr('id');
            var correct_ans1 = $("#" +id).attr('data-correct');
            if (correct_ans1 != "true")
            {
                correct_ans = false;
            }
        }
        if(correct_ans == 'true')
        {
            increment(ques_type);
        }
    }
    window.location.href = "ques" + ques_no + ".html"  
}

function score()
{
    var num_ques_q = 2;
    var num_ques_r = 1;
    var num_ques_av = 1;

    var quants = localStorage.getItem("quants");
    var read = localStorage.getItem("comprehensive");
    var visual = localStorage.getItem("audio-video");

    var score1 = calc_score(quants, num_ques_q);
    var score2 = calc_score(comprehensive, num_ques_r);
    var score3 = calc_score(audio-video, num_ques_av);

    $('#QS1').html(num_ques_q);
    $('#RS1').html(num_ques_r);
    $('#AVS1').html(num_ques_av);

    $('#QS2').html(quants);
    $('#RS2').html(read);
    $('#AVS2').html(visual);

    $('#QS3').html(score1);
    $('#RS3').html(score2);
    $('#AVS3').html(score3);

    deleteVariables();
}

function calc_score(variable,number)
{
    if(variable == null)
    {
        score = 0;
    } else
    {
        str_score = (variable/number)*50;
        score = parseInt(str_score);
    }
    return score;
}

function deleteVariables() {
    localStorage.removeItem("quants");
    localStorage.removeItem("comprehensive");
    localStorage.removeItem("audio-video");
}