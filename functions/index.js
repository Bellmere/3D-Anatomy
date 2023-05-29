const { onRequest } = require('firebase-functions/v2/https');
const request = require('request-promise');
const utf8 = require('utf8');
// Firestore under the path /messages
exports.getmodels = onRequest(async (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');

  let auth_str = 'ade1c97a330684304f79430b5049f4bb0a0da7c4:2e48cbad663179f94f80245cf290a6ca034084f3';
  auth_str = utf8.encode(auth_str);
  const buffer = new Buffer(auth_str);
  auth_str = buffer.toString('base64');

  const post_data_string = JSON.stringify({
    'grant_type': 'client_credentials',
    'scope': 'contentapi',
  });

// Construct the Authorization Header
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json',
    'Authorization': 'Basic ' + auth_str,
  };

  const url = 'https://apis.biodigital.com/oauth2/v2/token';
  const options = {
    url: url,
    method: 'POST',
    headers: headers,
    form: post_data_string,
  };

  request(options, function(error, response, body) {
    const response_obj = JSON.parse(body);


    request({
      url: 'https://apis.biodigital.com/services/v2/content/collections/myhuman',
      headers: {
        Authorization: "Bearer "+response_obj.access_token

      },
    }, (error, response, body) => {
      res.json(JSON.parse(body).myhuman);
    });
  });
});

