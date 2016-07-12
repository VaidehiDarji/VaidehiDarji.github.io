function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
      var arr= [];
      var count=0;
      FB.api('/me?fields=birthday', function(response1) {
   	console.log(response1.birthday);
    var b=new Date(response1.birthday);
	   	var b1=new Date(response1.birthday);
	   	//var e=new Date();
	   	 var c=b1.getDate();
	     b1.setDate(c + 2);
//var y1=2015;
//var m1=11;
//var d1=08;
//var m2=11;
//var d2=10;
var e = new Date();
    var p = e.getFullYear();
    var y1=p;
    console.log(y1);
var y2=2015;
//var y1=e.getFullYear();
	var m1=b.getMonth();
	var d1=b.getDate();
	var m2=b1.getMonth();
	var d2=b1.getDate();
	//var y2=e.getFullYear();
     	
//var url='/me?fields=feed.since(1449532800).until(1449705600)';
     	for(i=0; i<4 ; i++){
     		console.log(i);
   var date = new Date(Date.UTC(y1, m1, d1));
date=date.toLocaleDateString();
var date1 = new Date(Date.UTC(y1, m2, d2));
date1=date1.toLocaleDateString();
     //console.log(date);
     //console.log(date1);
     var ur='/me?fields=feed.since( '+ date + ').until(' + date1 + ')';
         FB.api(ur,function(response2){
         	//console.log(response2.feed.data[2]);
        	for(j=0 ; j<response2.feed.data.length ; j++){
        	//	console.log(response2.feed.data.length);
          	//	console.log(response2.feed.data[j]);
          		//console.log(response2.feed.data[j].story);
          		if(response2.feed.data[j].story){
          		var str = response2.feed.data[j].story;
    			var res = str.split(" ");
    			var v=res.length;
			for(i=0;i<v;i++)
			{
				if(isNaN(res[i])==false)
				{
					var x=parseInt(res[i]);
					x=x+1;
					arr[count]=x;
					count=count+1;
				    //document.getElementById("demo").innerHTML = x;
					console.log("yes "+x);
				}
			
                	}
          		}
          	/*	else{
          			x++;
          			arr[count]=x;
					count=count+1;
          			console.log(x);
          		}*/
        	}
        	console.log(arr);
        	some(arr);
         });
	y1=y1-1;
     	}
         
     });
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      //document.getElementById('status').innerHTML = 'Please log into this app.';
      console.log("Please log into this app.");
        
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      //document.getElementById('status').innerHTML = 'Please log into Facebook.';
      console.log("Please log into Facebook.");
        
    }
  }
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '974830909219954',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  };
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(JSON.stringify(response));
      //document.getElementById('status').innerHTML =  'Thanks for logging in, ' + response.name + '!';
      console.log('Thanks for logging in, ' + response.name + '!');
       
    });
  }
