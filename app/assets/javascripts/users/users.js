alert("");

var CREDENTIALS = {
  appId: 75507,
  authKey: 'gjHtjWcMezq7Wkt',
  authSecret: 'C9xRd7Qd2drp7CU'
};

QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);


var params = { 'login': "emporio", 'password': "somepass", 'tag': "man"};


QB.users.create(params, function(err, user){
  if (user) {
    alert("Users created" + JSON.stringify(user));
  } else  {
    alert("Users creation failed");
  }
});

QB.createSession(function(err, result) {
  alert("Session created created");

});

var login_params = { 'login': "emporia", 'password': "somepass"};
 
QB.login(login_params, function(err, user){
  if (user) {
    alert("Login Successfully" + JSON.stringify(user));
  } else  {
    alert("Login Unsuccessful")
  }
});


var CONFIG = {
  endpoints: {
    api: "apicustomdomain.quickblox.com", // set custom API endpoint
    chat: "chatcustomdomain.quickblox.com" // set custom Chat endpoint
  },
  chatProtocol: {
    active: 2 // set 1 to use BOSH, set 2 to use WebSockets (default)
  },
  debug: {mode: 1} // set DEBUG mode
};
QB.init(3477, 'ChRnwEJ3WzxH9O4', 'AS546kpUQ2tfbvv', CONFIG);