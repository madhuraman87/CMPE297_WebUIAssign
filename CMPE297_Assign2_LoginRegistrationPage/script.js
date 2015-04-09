/**
 * Created by madhuajee on 9/22/14.
 */
function supports_local_storage() {
    if (Modernizr.localstorage) {
        alert("Modernizr check : window.localStorage is available!");
    } else {
        alert("no native support for local storage :(..try a fallback or another third-party solution");
    }
}

function store()
{
    var inputFirstName= document.getElementById("FirstName");
    localStorage.setItem("FirstName", inputFirstName.value);

    var inputLastName= document.getElementById("LastName");
    localStorage.setItem("LastName", inputLastName.value);

    var inputEMail= document.getElementById("EMail");
    localStorage.setItem("EMail", inputEMail.value);

    var inputpwd= document.getElementById("pwd");
    localStorage.setItem("pwd", inputpwd.value);

    var inputcpwd= document.getElementById("cpwd");
    localStorage.setItem("cpwd", inputcpwd.value);

    var inputdob= document.getElementById("dob");
    localStorage.setItem("dob", inputdob.value);

    var inputdobwt= document.getElementById("dobwt");
    localStorage.setItem("dobwt", inputdobwt.value);

    var inputdobwtl= document.getElementById("dobwtl");
    localStorage.setItem("dobwtl", inputdobwtl.value);

    var inputssn= document.getElementById("ssn");
    localStorage.setItem("ssn", inputssn.value);

    var inputphone= document.getElementById("phone");
    localStorage.setItem("phone", inputphone.value);

    var inputccn= document.getElementById("ccn");
    localStorage.setItem("ccn", inputccn.value);

    alert("Data stored in the local storage :)");
}

function validate()
{
    var x = navigator.onLine;
    if(!x)
    {
        alert("Internet connection lost!!The browser seems offline..Please wait or try reconnecting to the internet")
    }
    else {
        if (document.myForm.FirstName.value == "") {
            alert("Please provide your First Name!");
            document.myForm.FirstName.focus();
            return false;
        }
        if (document.myForm.LastName.value == "") {
            alert("Please provide your Last Name!");
            document.myForm.LastName.focus();
            return false;
        }
        if (document.myForm.EMail.value == "") {
            alert("Please provide your Email!");
            document.myForm.EMail.focus();
            return false;
        } else {
            var emailID = document.myForm.EMail.value;
            var atpos = emailID.indexOf("@");
            var dotpos = emailID.lastIndexOf(".");
            if (atpos < 1 || ( dotpos - atpos < 2 )) {
                alert("Please enter correct email ID")
                document.myForm.EMail.focus();
                return false;
            }
        }
        if (document.myForm.cpwd.value == "") {
            alert("Please confirm the password");
            document.myForm.cpwd.focus();
            return false;
        }
        else {
            var str = document.myForm.cpwd.value;
            var str_orig = document.myForm.pwd.value;
            if (!(str === str_orig)) {
                alert("Confirmed password doesn't match the password");
                return false;
            }
        }
    }
}

function array_len(variable)
{
    var len;
    if (variable == null)
        len = 0;
    else
        len = variable.length;
    return len;
}
function check(x)
{
    var level = 0;
    var lc_regex = /[a-z]/g;
    var uc_regex = /[A-Z]/g;
    var num_regex = /[0-9]/g;
    var sym_regex = /([\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\|\\\;\:\'\"\,\<\.\>\/\?\`\~])/g;

    var lcc = x.match(lc_regex);
    var lcc_len = array_len(lcc);

    var ucc = x.match(uc_regex);
    var ucc_len = array_len(ucc);

    var num = x.match(num_regex);
    var num_len = array_len(num);

    var expres = x.match(sym_regex);
    var expres_len = array_len(expres);

    var result;

    if(x.length>=8 || x.length<=24){
        level++;
    }

    if(lcc_len>=2 && ucc_len>=3 && num_len>=0 && expres_len>5)
    {
        level=level+5;
        document.getElementById("prog_bar").setAttribute("value",level.toString());
        var str1 = "Strong!!";
        result = str1.fontcolor("green");
        document.getElementById("pwdstr").innerHTML = result;
    }
    else if(lcc_len>=2 && ucc_len>=3 && num_len>=0 && (expres_len>=3 && expres_len<=5))
    {
        level=level+3;
        document.getElementById("prog_bar").setAttribute("value",level.toString());
        var str2 = "Medium!!";
        result = str2.fontcolor("orange");
        document.getElementById("pwdstr").innerHTML = result;
    }
    else if(lcc_len>=2 && ucc_len>=3 && num_len>=0 && expres_len<=2)
    {
        level=level+2;
        document.getElementById("prog_bar").setAttribute("value",level.toString());
        var str3 = "Normal!!";
        result = str3.fontcolor("yellow");
        document.getElementById("pwdstr").innerHTML = result;
    }
    else
    {
        document.getElementById('pwd').value='';
        alert("A Strong Password should contain minimum of 8 characters with 3 Uppercase letters, 2 Lowercase letters and greater than 5 special characters");
        //return false;
    }
}
























/*function chkPwdStrength(pwdtxt,strenghtMsg,errorMsg)
 {
 var desc = new Array();
 desc[0] = "Please enter password";
 desc[2] = "Normal";
 desc[3] = "Medium";
 desc[4] = "Strong";

 errorMsg.innerHTML = ''
 var score   = 0;

 //if pwdtxt bigger less than equal to 24 give 1 point
 if (pwdtxt.length <= 24) score++;

 if ( ( pwdtxt.match(/[a-z]{2}/)) && ( pwdtxt.match(/[A-Z]{3}/) ) && ( pwdtxt.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]{2}/) ))
 score=score+1;
 else if ( ( pwdtxt.match(/[a-z]{2}/)) && ( pwdtxt.match(/[A-Z]{3}/) ) && ( pwdtxt.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]{5}/) ))
 score=score+2;
 else ( ( pwdtxt.match(/[a-z]{2}/)) && ( pwdtxt.match(/[A-Z]{3}/) ) && ( pwdtxt.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]{6,}/) ))
 score=score+3;

 strenghtMsg.innerHTML = desc[score];
 strenghtMsg.className = "strength" + score;

 if (pwdtxt.length > 24)
 {
 errorMsg.innerHTML = "Password Should be Maximum 24 Characters"
 errorMsg.className = "errorclass"
 }

 }


var p1 = /[a-z]{2}/;
var p2 = /[A-Z]{3}/;
var p3 = /[0-9]?/;
var p4 = /([\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\|\\\;\:\'\"\,\<\.\>\/\?\`\~]){2}/;
var p5 = /([\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\|\\\;\:\'\"\,\<\.\>\/\?\`\~]){3,5}/;
var p6 = /([\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\|\\\;\:\'\"\,\<\.\>\/\?\`\~]){5,}/; */