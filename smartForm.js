// Your jQuery goes here

var userData = {
	name:'',
	email:'',
	html:{likes:[],dislikes:[]},
	css:{likes:[],dislikes:[]},
	js:{likes:[],dislikes:[]},
	strength:{css:'',js:'',html:''},
	currntQuestion:'welcome'

};
$('#start').click(function(){
	console.log("start");
	$('#welcome').hide();
    $('#q1').show();
    $('#q2').show();

});

$('#name').change(function(event){
	console.log($('#name').val());
});

$('#q1next').click(function(){
	if($('#name').val() && $('#email').val()){
userData.name=$('#name').val();
userData.email=$('#email').val();
}else{
	alert('please enter name & email')
}
});