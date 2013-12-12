// Put your custom code here

function test() {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}
	
	// onSuccess Geolocation
	function onSuccess(position) {
		$("#lat").val(position.coords.latitude)
		$("#long").val(position.coords.longitude)
	
	}
	
	function onError(error) {
			alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
		}




//var apipath='http://127.0.0.1:8000/em/default/';
//var base_url=location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/{{=request.application}}/";


$(function() {
$("#helperror").text('');

$("#submitdata").click(function(){
		var mobileNo=$("#mbNo").val();
		var pinNo=$("#pnNo").val();
		var emName=$("#emName").val();
		var address=$("#emAdd").val();
		var cnNo1=$("#cnNo1").val();
		var cnNo2=$("#cnNo2").val();
		var cnNo3=$("#cnNo3").val();
		var cnNo4=$("#cnNo4").val();
		var cnNo5=$("#cnNo5").val();
		var emnotes=$("#emNotes").val();
		
		
		//alert('http://127.0.0.1:8000/em/default/member?mNo='+mobileNo+'&pNo='+pinNo+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&notes='+encodeURI(emnotes)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3)+'&cNo4='+encodeURI(cnNo4)+'&cNo5='+encodeURI(cnNo5));
		
		$.ajax({
			   url:'http://e.businesssolutionapps.com/em/default/member?mNo='+mobileNo+'&pNo='+pinNo+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&notes='+encodeURI(emnotes)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3)+'&cNo4='+encodeURI(cnNo4)+'&cNo5='+encodeURI(cnNo5),
			   
			   success: function(result) {
				   
				   if (result!='failed'){
					   
					   	localStorage.mobileNo=mobileNo;
				   		localStorage.pinNo=pinNo;
					  
						$("#mbNo").val('');
						$("#pnNo").val('');
						$("#emName").val('');
						$("#emAdd").val('');
						$("#cnNo1").val('');
						$("#cnNo2").val('');
						$("#cnNo3").val('');
						$("#cnNo4").val('');
						$("#cnNo5").val('');
						$("#emNotes").val('');
						//alert (result)
						var url="#sucess";
						$(location).attr('href',url);
					  
					  
					  
				   }else{
					   alert("Invalid PIN");
					   }
				   
				  }
		});
		
		
	});


$('#btnHelp').click(function(){	
	test();
	
	var lat=$("#lat").val();
	var long=$("#long").val();
	
	if(localStorage.mobileNo=='' || localStorage.mobileNo==undefined || localStorage.pinNo=='' || localStorage.pinNo==undefined){
		$("#helperror").text('invalid pin No');
	}else{
		//alert('http://127.0.0.1:8000/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long);
		
		$.ajax({
		 // url:'http://127.0.0.1:8000/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long,
			    url:'http://e.businesssolutionapps.com/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long,
			   success: function(result) {
				   if (result=='Success'){
					   	$("#helperror").text('Emmergency Contacts are communicated. Use HELP button to report your location if you need to move. Take care. ');
					   }else{	
						   $("#helperror").text('Invalid Request. Invalid registration of profile data.');
						   
						   }
			   }//result
		   
		   });//ajax
	
		}//else
	
	
	});//click



});//default fun

