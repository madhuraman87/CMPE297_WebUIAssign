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
    return true;
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

function register(){
	if(validate()){
		registerfunc();
	}
}

function registerfunc() {
	
	jQuery.ajax({
	    type: "POST",
	    url: "http://localhost:8080/CMPE297_Assign4AJAX/html/users/register",
	    data: formToJSON(),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function (data, status, jqXHR) {
	    	alert("user created successfully");
	    	location.reload();
	    },

	    error: function (jqXHR, status) {            
	    	alert(jqXHR+" "+status);
	    }

	});
}

function formToJSON() {
    return JSON.stringify({
    "firstName": $('#FirstName').val(),
    "lastName": $('#LastName').val(),
    "mailId": $('#EMail').val(),
    "passwd": $('#pwd').val(),
    "dob": $('#dob').val(),
    "ssn": $('#ssn').val(),
    "phone": $('#phone').val(),
    "ccn": $('#ccn').val(),
    });
}

//Drag and Drop Functions

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("content", ev.target.id);
}

function drop(ev){
    ev.preventDefault();
    var image = ev.dataTransfer.getData("content");
    ev.target.appendChild(document.getElementById(image));

    if($('#target1').find('#answer1').length == 1)
    {
        alert("CORRECT!");
        jQuery.fn.extend({
            disable: function(state) {
                return this.each(function() {
                    this.disabled = state;
                });
            }
        });
        $('input[type="button"]').disable(false);
    } else {
        alert("WRONG!");
        //location.reload();
    }
}

function drop1(ev){
    ev.preventDefault();
    var image = ev.dataTransfer.getData("content");
    ev.target.appendChild(document.getElementById(image));
}

	
	





















