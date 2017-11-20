$(document).ready(function(){
outMas();
	$('button').on('click',outArr);





});

function outMas(){
	var out="";
	var out1='';
	var out2='';
	var out3='';
	var out4='';

	for(var i=4;i<=400;i++){
		out+=i+' ';
		if(i%10==0)
			out+="<br>";
		
	}
	for(var i=4;i<=13;i=i+3){
		out1+=i+"<br>";
	}

	for(var i=654;i>=0;i--){
		out2+=i+' ';
		if(i%10==0)
			out2+="<br>";
	}
	for(var i=1983;i<=2017;i++){
		out3+=i+' ';
		if(i%10==0)
			out3+="<br>";
	}
	for(var i=-4;i<=100;i=i+2){
		out4+=i+' ';
		if(i%10==0)
			out4+="<br>";
	}

	$('#out').html(out);
	$('#out1').html(out1);
	$('#out2').html(out2);
	$('#out3').html(out3);
	$('#out4').html(out4);

}
function outArr(){
	var arr1 = [3, 6, 1, 13, 88, 43];
	console.log(arr1[0]);
	console.log(arr1[2]);
	var	arr2 = ['Hi', "hello", 34, "prima"];
	console.log(arr2[0]);
	console.log(arr2[arr2.length-1]);
	var arr3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	console.log(arr3.length);
	console.log(arr3.length);
	arr3[2]='new element';
	for (var key in arr3){
		console.log(arr3[key]);
	}
	var arr4 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	arr4[1]=22;
	arr4[3]=44;
	for (var key in arr4){
		console.log(arr4[key]);
	}
	var arr5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	arr5.push(100);
	for (var key in arr5){
		console.log(arr5[key]);
	}
	var arr6 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	arr6[11]=200;
	for (var key in arr6){
		console.log(arr6[key]);	
	}
	console.log(arr6[10]);
	var arr7 = [31, 24, 35, 47, 12];
	console.log(arr7[3]);
	console.log(arr7[60]);
	for (var f=1;f<=7;f=f+2){
		console.log(arr7[f]);
	}
	var arr8 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
	var userIn = $("#in").val();
	console.log(arr8[userIn]);
	var out5="";
	for (var key in arr8){
		out5+=arr8[key]+' ';
	}
	var out6= "";
	for (var i=arr8.length-1;i>=0;i--){
		out6+=arr8[i]+' ';
	}
	$('#out5').html(out5);
	$('#out6').html(out6);
	var arr9 = [2, 3, [4,5]];
	for (var key in arr9){
		console.log(arr9[key]);	
	}
	console.log(arr9[0]);
	console.log(arr9[1]);
	console.log(arr9[2]);
	console.log(arr9[2][0]);
	console.log(arr9[2][1]);
	console.log(arr9[2].length);
	var arr10 =  [ 2, [3,4,5], [6,7,8]  ];
	console.log(arr10[1][1]);
	console.log(arr10[2][2]);
	console.log(arr10[2]);
	console.log(arr10[2][0]);
	var arr11 = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];
	for (var i=0;i<=arr11[2].length-1;i++){
	console.log(arr11[2][i]);
	}
	var arr12 = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];
	console.log(arr12[0][2]);
	console.log(arr12[1][0]);



}
