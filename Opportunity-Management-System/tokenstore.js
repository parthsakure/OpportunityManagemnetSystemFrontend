// Get the URL fragment (everything after the # symbol)
var fragment = window.location.hash.substring(1);

// Split the fragment into key-value pairs
var params = fragment.split('&');

// Initialize an object to store the parameters
var accessTokenObj = {};

// Loop through the key-value pairs and store them in the object
for (var i = 0; i < params.length; i++) {
  var keyValue = params[i].split('=');
  var key = keyValue[0];
  var value = keyValue[1];
  accessTokenObj[key] = value;
}

// Access the access token using the "access_token" key
var accessToken = accessTokenObj.access_token;

// Now you have the access token, and you can use it as needed
console.log("Access Token:", accessToken);


