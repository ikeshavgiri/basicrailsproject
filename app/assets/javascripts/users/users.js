var a = []
var CREDENTIALS = {
  appId: 75507,
  authKey: 'gjHtjWcMezq7Wkt',
  authSecret: 'C9xRd7Qd2drp7CU'
};

var CONFIG = {
    chatProtocol: {
        active: 2
    },
    streamManagement: {
        enable: true
    },
    debug: {
        mode: 1,
        file: null
    },
    webrtc: {
        answerTimeInterval: 30,
        dialingTimeInterval: 5,
        disconnectTimeInterval: 35,
        statsReportTimeInterval: 5
    }
};
var session;
	var extension = {};


QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret, CONFIG);

function signup(email,password,full_name){

QB.createSession(function(err, result) {
    if (err) 
    {
        console.log("Error creating users ->" + JSON.stringify(err))
    } 
    else 
    {
    	QB.users.create({'email': email,'password' : password,'full_name' : full_name}, function(err, user) {
    		if(err) {
		
    			console.log('Error creating session ->'+ err)

    		} else {

    			console.log('User is ->' + JSON.stringify(user))
    			a.push(JSON.stringify(user));
    		
    		}
    	});
    }
});
}


function login(email,password){
QB.createSession(function(err, result) {
    if (err) 
    {
        console.log("Error creating users ->" + JSON.stringify(err))
    } 
    else 
    {
    	
QB.login({'email': email,'password' : password}, function(err, user){
  if (user) {
    console.log("success");
    QB.webrtc.onCallListener = function(session, extension) {
 
};
  } else  {
    console.log("error");
    
  }
});
    }
});
}

function session_create(calleesIds,callerID){
	var sessionType = QB.webrtc.CallType.VIDEO;
	var additionalOptions = {"bandwith": 512};
	 session = QB.webrtc.createNewSession(calleesIds, sessionType, callerID, additionalOptions);
	 var mediaParams = {
  audio: true,
  video: true,
  options: {
    muted: true,
    mirror: true
  },
  elemId: 'localVideo'
};
 
session.getUserMedia(mediaParams, function(err, stream) {
  if (err){
 	console.log("user media error"+err);
  }else{
 	console.log("user media success");
 
	
 	
  }
});
}

// function get_call(){
// 	var options = {
//   muted: true,
//   mirror: true
// };
// session.getUserMedia({audio: true, video: true, elemId: 'localVideo', options: options}, function(err, stream) {
//    if (err){
//  	console.log("user media2 error"+err);
//   }else{
//  	console.log("user media2 success");
 	
//   }
// });
// }


// var CREDENTIALS = {
//   appId: 72527,
//   authKey: 'ThDw39R7UAxUZSO',
//   authSecret: 'm2H4T-Bg76Jcd8s'
// };

// var params = { 'login': "keshav giri", 'email': "aaaa@aaa.com", 'password': "keshav giri", 'full_name': "man"};
//  var CONFIG = {
// 		        chatProtocol: {
// 		            active: 2
// 		        },
// 		        streamManagement: {
// 		            enable: true
// 		        },
// 		        debug: {
// 		            mode: 1,
// 		            file: null
// 		        },
// 		        webrtc: {
// 		            answerTimeInterval: 30,
// 		            dialingTimeInterval: 5,
// 		            disconnectTimeInterval: 35,
// 		            statsReportTimeInterval: 5
// 		        }
// 		    };

// QB.createSession(function(err, result) {
// QB.users.create(params, function(err, user){
//   // console.log(user);
//   // console.log(err);
//   if (user) {
//     console.log("Users created" + JSON.stringify(user));
//   } else  {
//     console.log("Users creation failed");
//   }
// });
// });
//alert(JSON.stringify(CREDENTIALS));


 


// var params = {login: 'keshav giri', password: 'keshav giri'};

// QB.login(params, function(err, result) {
//   // callback function
// });


// var params1 = {login: 'garry', password: 'garry5santos'};

// QB.createSession(params1, function(err, result) {
//   // callback function
// });

// var params = { 'login': "emporio", 'password': "somepass", 'tag': "man"};


// QB.users.create(params, function(err, user){
//   if (user) {
//     alert("Users created" + JSON.stringify(user));
//   } else  {
//     alert("Users creation failed");
//   }
// });

// QB.createSession(function(err, result) {
//   if (err) {
//   alert("Error creating Session");
//   }
//   else {
//     alert("Session created created")
//   }

// });

// var login_params = { 'login': "emporia", 'password': "somepass"};
 
// QB.login(login_params, function(err, user){
//   if (user) {
//     alert("Login Successfully" + JSON.stringify(user));
//   } else  {
//     alert("Login Unsuccessful")
//   }
// });


// var CONFIG = {
//   endpoints: {
//     api: "apicustomdomain.quickblox.com", // set custom API endpoint
//     chat: "chatcustomdomain.quickblox.com" // set custom Chat endpoint
//   },
//   chatProtocol: {
//     active: 2 // set 1 to use BOSH, set 2 to use WebSockets (default)
//   },
//   debug: {mode: 1} // set DEBUG mode
// };
// QB.init(3477, 'ChRnwEJ3WzxH9O4', 'AS546kpUQ2tfbvv', CONFIG);