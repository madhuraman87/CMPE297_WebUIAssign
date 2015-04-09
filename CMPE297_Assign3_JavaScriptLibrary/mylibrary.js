/**
 * Created by madhuajee on 9/29/14.
 */
/***************JavaScript Object*******************/
var Person = {
    FirstName:"",
    LastName:"",
    Email:"",
    Password: "",
    CPassword: "",
    DOB: "",
    DOBWT: "",
    DOBWTL: "",
    SSN: "",
    Phone: "",
    CreditCardNumber: "",
/***************Object Methods*******************/
    toJSONStringg: function(){
    var input = document.getElementsByClassName('person');
        Person.FirstName = input[0].value;
        Person.LastName = input[1].value;
        Person.Email = input[2].value;
        Person.Password = input[3].value;
        Person.CPassword = input[4].value;
        Person.DOB = input[5].value;
        Person.DOBWT = input[6].value;
        Person.DOBWTL = input[7].value;
        Person.SSN = input[8].value;
        Person.Phone = input[9].value;
        Person.CreditCardNumber = input[10].value;
    return JSON.stringify(Person);
    },

    readFromJSONString: function(jsontxt){
    return JSON.parse(jsontxt);
    },

    isPhoneNumberFormatValid: function(ph_no){
        var phone_no_pattern = /[0-9]{10}/g;
        return phone_no_pattern.test(ph_no);
    },

    isSSNFormatValid: function(ssno){
        var ssn_no_pattern = /[0-9]{9}/g;
        return ssn_no_pattern.test(ssno);
    },

    isCCNFormatValid: function(ccno){
        var ccn_no_pattern = /[0-9]{12,16}/g;
        return ccn_no_pattern.test(ccno);
    },

    isValidEmail: function(emailid){
        var mail_id_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mail_id_pattern.test(emailid);
    },

    isValidCPwd: function(str){
        var str_orig = $('#pwd').val();
        return str_orig === str;
    },

    checkPwdLevel: function(pwd_val){
        var str = pwd_val;
        var level = 0;
        var lc_regex = /[a-z]/g;
        var uc_regex = /[A-Z]/g;
        var num_regex = /[^a-zA-Z0-9]/g;
        var sym_regex = /([\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\|\\\;\:\'\"\,\<\.\>\/\?\`\~])/g;

        var lcc = str.match(lc_regex);
        var lcc_len = array_len(lcc);

        var ucc = str.match(uc_regex);
        var ucc_len = array_len(ucc);

        var num = str.match(num_regex);
        var num_len = array_len(num);

        var express = str.match(sym_regex);
        var express_len = array_len(express);

        if(str.length>=8 || str.length<=24)
        {
            level++;
        }

        if(lcc_len>=2 && ucc_len>=3 && num_len>=0 && express_len>5)
        {
            level=level+5;
            return level;
        }
        else if(lcc_len>=2 && ucc_len>=3 && num_len>=0 && (express_len>=3 && express_len<=5))
        {
            level=level+3;
            return level;
        }
        else if(lcc_len>=2 && ucc_len>=3 && num_len>=0 && express_len<=2)
        {
            level=level+1;
            return level;
        }
        else return level;
    }
};

function array_len(variable)
{
    var len;
    if (variable == null)
        len = 0;
    else
        len = variable.length;
    return len;
}

function saveToLocalStorage()
{
    var lscount = localStorage.length;
    var RegUser_string = Person.toJSONStringg();
    localStorage.setItem("Person_" + lscount, RegUser_string);
    alert("Data stored in the local storage :)")
    //location.reload();
}

function saveToSessionStorage()
{
    var sscount = sessionStorage.length;
    var RegUser_string = Person.toJSONStringg();
    sessionStorage.setItem("Person_" + sscount, RegUser_string);
    alert("Data stored in the session storage :)")
    location.reload();
}

function readFromLocalStorage()
{
    var lscount = localStorage.length;
    if(lscount > 0) {
        for(var i=0;i<lscount;i++) {
            var lskey = localStorage.key(i);
            var lsdata = localStorage.getItem(lskey);
            var reg_user = Person.readFromJSONString(lsdata);
            $('#FirstName').val(reg_user.FirstName);
            $('#LastName').val(reg_user.LastName);
            $('#EMail').val(reg_user.Email);
            $('#dob').val(reg_user.DOB);
            $('#dobwt').val(reg_user.DOBWT);
            $('#dobwtl').val(reg_user.DOBWTL);
            $('#ssn').val(reg_user.SSN);
            $('#phone').val(reg_user.Phone);
            $('#ccn').val(reg_user.CreditCardNumber);
            alert("Data retrieved from the local storage :)");
        }
    }
}

function readFromSessionStorage()
{
    var sscount = sessionStorage.length;
    if(sscount > 0) {
        for(var j=0;j<sscount;j++) {
            var sskey = localStorage.key(j);
            var ssdata = localStorage.getItem(sskey);
            var reg_user = Person.readFromJSONString(ssdata);
            $('#FirstName').val(reg_user.FirstName);
            $('#LastName').val(reg_user.LastName);
            $('#EMail').val(reg_user.Email);
            $('#dob').val(reg_user.DOB);
            $('#dobwt').val(reg_user.DOBWT);
            $('#dobwtl').val(reg_user.DOBWTL);
            $('#ssn').val(reg_user.SSN);
            $('#phone').val(reg_user.Phone);
            $('#ccn').val(reg_user.CreditCardNumber);
            alert("Data retrieved from the session storage :)");
        }
    }
}

function checkpwd(pwd){
    var result;
    var pwd_level = Person.checkPwdLevel(pwd);
    switch(pwd_level) {
        case 6:
            $('#prog_bar').attr("value",pwd_level.toString());
            var str1 = "Strong!!";
            result = str1.fontcolor("green");
            $('#pwdstr').html(result);
            break;
        case 4:
            $('#prog_bar').attr("value",pwd_level.toString());
            var str2 = "Medium!!";
            result = str2.fontcolor("orange");
            $('#pwdstr').html(result);
            break;
        case 2:
            $('#prog_bar').attr("value",pwd_level.toString());
            var str3 = "Normal!!";
            result = str3.fontcolor("yellow");
            $('#pwdstr').html(result);
            break;
        case 0:
            alert("A Strong Password should contain minimum of 8 characters with 3 Uppercase letters, 2 Lowercase letters and greater than 5 special characters");
            break;
    }
}

function validate(){
    if ($('#FirstName').val() == '') {
        alert("Please provide your First Name!");
        $('#FirstName').focus();
        return false;
    }
    if ($('#LastName').val() == '') {
        alert("Please provide your Last Name!");
        $('#LastName').focus();
        return false;
    }
    if ($('#EMail').val() == '') {
        alert("Please provide your Email!");
        $('#EMail').focus();
        return false;
    }else {
        var mail_id = $('#EMail').val();
        if(!Person.isValidEmail(mail_id)) {
            alert("Please enter correct email ID");
            $('#EMail').focus();
            return false;
        }
    }
    if ($('#cpwd').val() == '') {
        alert("Please re-enter the password");
        $('#cpwd').focus();
        return false;
    }else {
        var str = $('#cpwd').val();
        if(!Person.isValidCPwd(str)){
            alert("Confirmed password doesn't match the password, please re-enter");
            $('#cpwd').focus();
            return false;
        }
    }
    if ($('#ssn').val() == '') {
        alert("Please provide your social security number");
        $('#ssn').focus();
        return false;
    }else {
        var ssno = $('#ssn').val();
        if(!Person.isSSNFormatValid(ssno)) {
            alert("Enter your 9 digit ssn here");
            $('#ssn').focus();
            return false;
        }
    }
    if ($('#phone').val() == '') {
        alert("Please provide your phone number");
        $('#phone').focus();
        return false;
    }else {
        var ph_no = $('#phone').val();
        if(!Person.isPhoneNumberFormatValid(ph_no)){
            alert("Enter your 10 digit phone number here");
            $('#phone').focus();
            return false;
        }
    }
    if ($('#ccn').val() == '') {
        alert("Please provide your credit card number");
        $('#ccn').focus();
        return false;
    }else {
        var ccno = $('#ccn').val();
        if(!Person.isCCNFormatValid(ccno)){
            alert("Enter your 12/16 digit credit card number here");
            $('#ccn').focus();
            return false;
        }
    }
    //location.reload();
}

function CheckOnlineStatus(msg) {
    var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
    alert("Network Connection is "+condition);
}
function Pageloaded() {
    CheckOnlineStatus("load");
    document.body.addEventListener("offline", function () { CheckOnlineStatus("offline")}, false);
    document.body.addEventListener("online", function () { CheckOnlineStatus("online")}, false);
}

