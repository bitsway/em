// Put your custom code here
//var apipath='http://127.0.0.1:8000/em/default/';
var apipath='http://e.businesssolutionapps.com/em/default/';

function test() { //location
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


$(function() {
$("#helperror").text('');

$("#submitdata").click(function(){
		var mobileNo=$("#mbNo").val();
		var strM=mobileNo.toString().length;
		
		var pinNo=$("#pnNo").val();
		var emName=$("#emName").val();
		var address=$("#emAdd").val();
		var emnotes=$("#emNotes").val();
		
		var cnNo1=$("#cnNo1").val();
		var cM1=cnNo1.toString().length;
		
		var cnNo2=$("#cnNo2").val();
		var cM2=cnNo2.toString().length;
		
		var cnNo3=$("#cnNo3").val();
		var cM3=cnNo3.toString().length;
		
		var cnNo4=$("#cnNo4").val();
		var cM4=cnNo4.toString().length;
		
		var cnNo5=$("#cnNo5").val();
		var cM5=cnNo5.toString().length;
		
		var errorflag=0
		var errorStr=''
		
		//----------------------
		if(strM!=13){   //own number
			if(strM==11){
				mobileNo="88"+mobileNo;
			}
			else{
				errorflag=1
				errorStr=errorStr+' Invalid Mobile No';
			}				
		}
		//----------------------
		if(cM1!=13){
			if(cM1==11){
				cnNo1="88"+cnNo1;
			}
			else if(strM==0){
				//nothing 
			}
			else{
				cnNo1='';
//				errorflag=1;
				errorStr=errorStr+' Invalid Contact 1 Mobile';
			}				
		}
		//-----------
		if(cM2!=13){
			if(cM2==11){
				cnNo2="88"+cnNo2;
			}
			else if(strM==0){
				//nothing 
			}
			else{
				cnNo2='';
//				errorflag=1;
				errorStr=errorStr+' Invalid Contact 2 Mobile';
			}				
		}
		//-----------
		if(cM3!=13){
			if(cM3==11){
				cnNo3="88"+cnNo3;
			}
			else if(strM==0){
				//nothing 
			}
			else{
				cnNo3='';
//				errorflag=1;
				errorStr=errorStr+' Invalid Contact 3 Mobile';
			}				
		}
		//-----------
		if(cM4!=13){
			if(cM4==11){
				cnNo4="88"+cnNo4;
			}
			else if(strM==0){
				//nothing 
			}
			else{
				cnNo4='';
//				errorflag=1;
				errorStr=errorStr+' Invalid Contact 4 Mobile';
			}				
		}
		//-----------
		if(cM5!=13){
			if(cM5==11){
				cnNo5="88"+cnNo5;
			}
			else if(strM==0){
				//nothing 
			}
			else{
				cnNo5='';
//				errorflag=1;
				errorStr=errorStr+' Invalid Contact 5 Mobile';
			}				
		}
		
//		if(cnNo1=='' && cnNo2=='' && cnNo3=='' && cnNo4=='' && cnNo5==''){
//				errorflag=1
//				errorStr=' Invalid Contact Mobile No';
//			}
		
		if (errorflag==1){
				$("#dataerror").text(errorStr);			
		}else{
		
//					alert('http://127.0.0.1:8000/em/default/member?mNo='+mobileNo+'&pNo='+pinNo+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&notes='+encodeURI(emnotes)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3)+'&cNo4='+encodeURI(cnNo4)+'&cNo5='+encodeURI(cnNo5));
			
			//http://e.businesssolutionapps.com/em/default/member?mNo='+mobileNo+'&pNo='+pinNo+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&notes='+encodeURI(emnotes)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3)+'&cNo4='+encodeURI(cnNo4)+'&cNo5='+encodeURI(cnNo5)
			
			
				$.ajax({
						   url:apipath+'member?mNo='+mobileNo+'&pNo='+pinNo+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&notes='+encodeURI(emnotes)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3)+'&cNo4='+encodeURI(cnNo4)+'&cNo5='+encodeURI(cnNo5),
						   
						   success: function(result) {
				   
				   if (result!='failed'){
					   
					   	localStorage.mobileNo=mobileNo;
				   		localStorage.pinNo=pinNo;
						localStorage.emName=emName;
						localStorage.emAdd=emAdd;
						localStorage.cnNo1=cnNo1;
						localStorage.cnNo2=cnNo2;
						localStorage.cnNo3=cnNo3;
						localStorage.cnNo4=cnNo4;
						localStorage.cnNo5=cnNo5;
						localStorage.emNotes=emNotes;
						
					  
						/*$("#mbNo").val('');
						$("#pnNo").val('');
						$("#emName").val('');
						$("#emAdd").val('');
						$("#cnNo1").val('');
						$("#cnNo2").val('');
						$("#cnNo3").val('');
						$("#cnNo4").val('');
						$("#cnNo5").val('');
						$("#emNotes").val('');*/
						//alert (result)
						var url="#sucess";
						$(location).attr('href',url);
					  
				   }else{
					   $("#dataerror").text('Invalid data');
					   //alert("Invalid PIN");
					   }
				   
				  }
			});
		};
		
	});


$('.btnHelp').click(function(){	
	test();
	
	var lat=$("#lat").val();
	var long=$("#long").val();
	
	if(localStorage.mobileNo=='' || localStorage.mobileNo==undefined || localStorage.pinNo=='' || localStorage.pinNo==undefined){
		$("#helperror").text('invalid pin No');
	}else{
		//alert('http://127.0.0.1:8000/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long);
		
		$.ajax({
		 // url:'http://127.0.0.1:8000/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long,
		 //url:'http://e.businesssolutionapps.com/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long
			    url:apipath+'track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long,
			   success: function(result) {
				   if (result=='Success'){
					   	$("#helperror").text('Emmergency Contacts are communicated. Use the buttons above to report your location if you need to move. Take care. ');
					   }else{	
						   $("#helperror").text('Invalid Request. Invalid registration of profile data.');
						   
						   }
			   }//result
		   
		   });//ajax
	
		}//else
	
	
	});//click



});//default fun

function exit() {
navigator.app.exitApp();
}
