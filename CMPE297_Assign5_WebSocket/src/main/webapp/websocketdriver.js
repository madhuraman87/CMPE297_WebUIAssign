var ws = new WebSocket("ws://127.0.0.1:8080/");

ws.onopen = function() {
    alert("Web Socket Opened");
};
 
ws.onmessage = function (evt) { 
	$("#grade").html(evt.data);
};
 
ws.onclose = function() {
    alert("Web Socket Closed");
};
 
ws.onerror = function(err) {
    alert("Error: " + err);
};

function gradeMe(){
	var data1 = parseInt($("#quiz1").val());
	var data2 = parseInt($("#quiz2").val());
	var data3 = parseInt($("#midterm").val());	
	var sum = (data1 + data2 + data3)/3;
	ws.send(sum);
}

function showValue(newValue, ques_type){
if(ques_type == "quiz1")
{
	document.getElementById("range1").innerHTML=newValue;
}else if(ques_type == "quiz2")
{
	document.getElementById("range2").innerHTML=newValue;
}else
{
	document.getElementById("range3").innerHTML=newValue;
}
}

