// Put your custom code here
//var apipath='http://127.0.0.1:8000/em/default/';
//var apipath='http://e.businesssolutionapps.com/em/default/';
//var apipath='http://127.0.0.1:8000/em/default/';
//var apipath='http://e.businesssolutionapps.com/panicbutton/default_with_sync_code/';
//var apipath='http://127.0.0.1:8000/panicbutton/default_with_sync_code/';
var apipath='http://e.businesssolutionapps.com/panicbutton/default_with_sync_code/';



var helpCount = 0;
var slideFlag=0;


//-------GET GEO LOCATION----------------------------
function getlocationand_askhelp() { //location
//	$("#helperror").text('inside ask help');
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
}
	
// onSuccess Geolocation
function onSuccess(position) {
		
	$("#lat").val(position.coords.latitude);
	$("#long").val(position.coords.longitude);
//	$("#helperror").text('success');
	helpCount = helpCount+1;
	if (helpCount<=2){
		get_help();
		$("#info").text(helpCount);
	}else{
		$("#info").text("more than twice");
	}
	
}
	
function onError(error) {
	$("#lat").val(0);
	$("#long").val(0);
	//$("#helperror").text('location not found');
	
	helpCount = helpCount+1;
	if (helpCount<=2){
		get_help();
		$("#info").text(helpCount);
	}else{
		$("#info").text("more than twice");
	}
	//get_help();
	//alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
	}
//-------GET GEO LOCATION----------------------------



$(function() {
$("#helperror").text('');

$("#submitdata").click(function(){	
		var mobileNo=$("#mbNo").val();
		var strM=mobileNo.toString().length;
		
		var pinNo=$("#pnNo").val();
		var emName=$("#emName").val();
		var address=$("#emAdd").val();
		//var emnotes=$("#emNotes").val();
		
		var cnNo1=$("#cnNo1").val();
		var cM1=cnNo1.toString().length;
		
		var cnNo2=$("#cnNo2").val();
		var cM2=cnNo2.toString().length;
		
		var cnNo3=$("#cnNo3").val();
		var cM3=cnNo3.toString().length;
		
		/*var cnNo4=$("#cnNo4").val();
		var cM4=cnNo4.toString().length;
		
		var cnNo5=$("#cnNo5").val();
		var cM5=cnNo5.toString().length;*/
		
		var errorflag=0;
		var errorStr='';
		
		//----------------------
		 
		if(strM!=13){   //own number
			if(strM==11){
				mobileNo="88"+mobileNo;
			}
			else{
				errorflag=1
				errorStr=errorStr+' Mobile .';
			}				
		}
		
		//----------------------
		//if(cM1!=0){
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
					//errorStr=errorStr+' Contact 1 .';
				}				
			}
		//}
		//-----------
		//if(cM2!=0){
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
					//errorStr=errorStr+' Contact 2 .';
				}				
			}
		//}
			
		//-----------
		//if(cM3!=0){
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
					errorStr=errorStr+' Contact 3 .';
				}				
			}
	//	}
		
		if(localStorage.syncCode!=undefined){
			syncCode=localStorage.syncCode
		}else{
				syncCode='';
		}
		
		//-----------
		/*if(cM4!=13){
			if(cM4==11){
				cnNo4="88"+cnNo4;
			}
			else if(strM==0){
				//nothing 
			}
			else{
				cnNo4='';
//				errorflag=1;
				errorStr=errorStr+' Contact 4 .';
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
				errorStr=errorStr+' Contact 5 .';
			}				
		}*/
		
//		if(cnNo1=='' && cnNo2=='' && cnNo3=='' && cnNo4=='' && cnNo5==''){
//				errorflag=1
//				errorStr=' Invalid Contact Mobile No';
//			}
		//$("#dataerror").text(apipath+'member?mNo='+mobileNo+'&pNo='+pinNo+'&syncCode='+localStorage.syncCode+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3))
		if (errorflag==1){
			errorStr = 'Invalid : '+errorStr;
			$("#dataerror").text(errorStr);			
		}else{
			//alert(apipath+'member?mNo='+mobileNo+'&pNo='+pinNo+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3));
			
			
			//http://e.businesssolutionapps.com/em/default/member?mNo='+mobileNo+'&pNo='+pinNo+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&notes='+encodeURI(emnotes)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3)+'&cNo4='+encodeURI(cnNo4)+'&cNo5='+encodeURI(cnNo5)
			
			
				$.ajax({
						   url:apipath+'member?mNo='+mobileNo+'&pNo='+pinNo+'&syncCode='+syncCode+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3),
						   
						   success: function(result) {
				   
				   if (result!='failed'){
					   
					   	localStorage.mobileNo=mobileNo;
				   		localStorage.pinNo=pinNo;
						localStorage.emName=emName;
						localStorage.address=address;
						localStorage.cnNo1=cnNo1;
						localStorage.cnNo2=cnNo2;
						localStorage.cnNo3=cnNo3;
						localStorage.syncCode=result;
						$("#pnNo").val(localStorage.pinNo)
						/*localStorage.cnNo4=cnNo4;
						localStorage.cnNo5=cnNo5;
						localStorage.emnotes=emnotes;*/
						
					  
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
						//var url="#sucess";
						var url="#homePage";
						$(location).attr('href',url);
					  
				   }else{
					   $("#dataerror").text('Invalid Mobile or PIN, to register or to get new pin, sms PANIC START to 2764');
					   //$("#dataerror").text(apipath+'member?mNo='+mobileNo+'&pNo='+pinNo+'&syncCode='+localStorage.syncCode+'&name='+encodeURI(emName)+'&address='+encodeURI(address)+'&cNo1='+encodeURI(cnNo1)+'&cNo2='+encodeURI(cnNo2)+'&cNo3='+encodeURI(cnNo3))
					   //alert("Invalid PIN");
					   }
				   
				  }
			});
		};
		
	});




$('#indanger').click(function(){
	//$("#helperror").show();
	$("#helperror").text('Getting Location .... ');
	getlocationand_askhelp();	
	
	resetSlider();
	var url="#inPage";
	$(location).attr('href',url);
	
//	setInterval("getlocationand_askhelp()",10000);
//	getlocationand_askhelp();
//	$("#helperror").hide();
//	navigator.app.exitApp();
	});//click

$('#injurred').click(function(){
	//$("#helperror").show();
//	$("#helperror").text('Getting Location .... ');
//	setInterval("getlocationand_askhelp()",5000);
//	getlocationand_askhelp()
//	$("#helperror").hide();
//	navigator.app.exitApp();
	
	});//click



});//default fun


//--------------------------------------------- Get Help

function get_help() { 
	
	var lat=$("#lat").val();
	var long=$("#long").val();
	$("#helperror").hide();
//	$("#helperror").text('inside get help');
	if(localStorage.mobileNo=='' || localStorage.mobileNo==undefined || localStorage.pinNo=='' || localStorage.pinNo==undefined){
		$("#helperror").text('Invalid authorization, to register or to get new pin, sms PANIC START to 2764 and update your profile');
	}else{
		//alert(apipath+'track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long);
		//$("#helperror").text('http://127.0.0.1:8000/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long);
		
		$.ajax({
		 // url:'http://127.0.0.1:8000/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long,
		 //url:'http://e.businesssolutionapps.com/em/default/track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long
			    url:apipath+'track?mNo='+localStorage.mobileNo+'&pNo='+localStorage.pinNo+'&lat='+lat+'&lon='+long,
			   success: function(result) {
				   if (result=='Success'){
					   if (lat=='0') {
						   $("#helperror").text('Emergency Contacts are communicated. Please keep the GPS on to provide better location to your contacts. Use the buttons to report your location if you need to move. Take care. '); 
							   
					   }else{
						   $("#helperror").text('Emergency Contacts are communicated. Use the buttons to report your location if you need to move. Take care. ');
						 
					   }
					   exit();
					   	
				   }else{	
					   $("#helperror").show();
					   $("#helperror").text('Invalid authorization, to register or to get new pin, sms PANIC START to 2764');
					   var url="#homePage";
					   $(location).attr('href',url);
					   }
//				setTimeout(
//					   function (){
//						   $("#helperror").hide();
//						   }
//					   ,5000);
				   
			   }//result
		   
		   });//ajax
	
		}//else
	
//	helpCount = helpCount+1;
//	$("#helperror").text(helpCount);
//	$("#helperror").text('');
//	exit();
	//if (helpCount>2){
////		$("#helperror").text('inside count');
//		exit();
//	}
}

//------------------------check lock Unlock

function checkLockUnlock(){
	var sliderValue=$("#checkSlider").val();
     if (sliderValue>70 && slideFlag==0){
		if(localStorage.mobileNo=='' || localStorage.mobileNo==undefined || localStorage.pinNo=='' || localStorage.pinNo==undefined){
			var url="#infoPage";
		}else{
			var url="#homePage";
		}
		$(location).attr('href',url);
		
	}
	
}

function resetSlider(){
	$("#checkSlider").val(10);
	slideFlag==0;
	
	}

	
//-----------------------------check new

function checkNew(){
	
	if(localStorage.mobileNo=='' || localStorage.mobileNo==undefined || localStorage.pinNo=='' || localStorage.pinNo==undefined){
		
			var url="#terms";
		}else{
			var url="#inPage";	
			}
	
		$(location).attr('href',url);
	}
//------------------------check Profile not use
function checkProfile(){
	
	if(localStorage.mobileNo=='' || localStorage.mobileNo==undefined || localStorage.pinNo=='' || localStorage.pinNo==undefined){ 
		
		var url="#infoPage";
		
	}else{
		var url="#homePage";
	}
	$(location).attr('href',url);
}
//--------------------------------------------- Exit Application
function exit() {
navigator.app.exitApp();

}


//=========================SAFETY=====================
function safety() { 
	//alert ('nadira');
	
	/*$.ajax({
		   url:apipath+'safety?cid=EM',
		   success: function(result) {
			   $("#safety_tips").text(result);
			   //alert (result);
		   }//result
	   
	   });//ajax*/
	   var url="#safty";	
	   $(location).attr('href',url);
	}//function

function feedback(){
		var f_app_use=$("input[name='find_app_use']:checked").val();		
		var txt_fdback=$("#txt_fdback").val();
		var mobile_no=localStorage.mobileNo;
		
		$.ajax({
			   type: 'POST',
			   url:apipath+'feedback?mobile_no='+localStorage.mobileNo+'&txt_fdback='+txt_fdback+'&f_app_use='+f_app_use,
			   success: function(result) {
				   var f_result=result;				   
				   if (f_result=='success'){
					   var url="#inPage";	
	   					$(location).attr('href',url);
					   }
				   
				   }
			   
			   })
		
		}


