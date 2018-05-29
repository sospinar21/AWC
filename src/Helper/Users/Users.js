import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';



  console.log(userPool)

  var attributeList = [];

  var dataEmail = {
    Name : 'email',
    Value : 'email@mydomain.com'
  };
  var city = {
    Name : 'custom:city',
    Value : 'BTA'
  };
  var attributeEmail = new CognitoUserAttribute(dataEmail);
  var attributeCity = new CognitoUserAttribute(city);

  attributeList.push(attributeEmail);
  attributeList.push(attributeCity);

  userPool.signUp('Steph', 'holaWaaa10!', attributeList, null, function(err, result) {
    if (err) {
      alert('this is it' + JSON.stringify(err));
      return;
    }
    var cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });

};


cognitoUser.deleteUser(function (err, result) {
  if (err) {
    alert(err);
    return;
  }
  console.log('call result: ' + result);
});

 
// var data = { UserPoolId: 'us-east-1_Iqc12345',
//   ClientId : '12345du353sm7khjj1q'
// };
// var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
// var cognitoUser = userPool.getCurrentUser();

// if (cognitoUser != null) {
//   cognitoUser.getSession(function(err, session) {
//     if (err) {
//       alert(err);
//       return;
//     }
//     console.log('session validity: ' + session.isValid());
//   });
// }


// SIGN UP

// var attribute = {
//   Name : 'email',
//   Value : 'email@mydomain.com'
// };

// var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(attribute);
// var attributeList = [];

// attributeList.push(attributeEmail);
// var cognitoUser;

// userPool.signUp('username', 'password', attributeList, null, function(err, result) {
//   if (err) {
//       alert(err);
//       return;
//   }
//   cognitoUser = result.user;
// });