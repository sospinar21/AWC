import { Config, CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoIdentityCredentials } from 'amazon-cognito-identity-js';
import { Lambda } from 'aws-sdk';

// var myCredentials = new CognitoIdentityCredentials({IdentityPoolId:'IDENTITY_POOL_ID'});
// var myConfig = new Config({
//   credentials: myCredentials, region: 'us-west-2'
// });

var poolData = { UserPoolId : 'us-west-2_t4LvOKjcE',
  ClientId: '47bsfajnf2rmvpt02q8qjvm29u'
};
var userPool = new CognitoUserPool(poolData);

export const signUp = (user) => {
  var attributeList = [];

  var dataEmail = {
    Name : 'email',
    Value : user.email
  };
  var city = {
    Name : 'custom:city',
    Value : user.city
  };
  var attributeEmail = new CognitoUserAttribute(dataEmail);
  var attributeCity = new CognitoUserAttribute(city);

  attributeList.push(attributeEmail);
  attributeList.push(attributeCity);

  userPool.signUp(user.email, user.password, attributeList, null, function(err, result) {
    if (err) {
      alert('this is it' + JSON.stringify(err));
      return;
    }
    var cognitoUser = result.user;
    console.log(JSON.stringify(result));
    console.log('user name is ' + cognitoUser.getUsername());
  });
};

export const cogToken = () =>{
  console.log('here');
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
    cognitoUser.getSession(function(err, session) {
      if (err) {
        alert(err);
        return;
      }
      console.log('session validity: ' + session.isValid());
      console.log(session.getIdToken().getJwtToken());

    });
  }
};

export const logIn = (user) => {
  var userData = {Username: user.email, Pool: userPool};
  var cognitoUser = new CognitoUser(userData);

  var authenticationData = {Username: user.email, Password: user.password};
  var authenticationDetails = new AuthenticationDetails(authenticationData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log('cool');
      // LoggedIn(cognitoUser, result);
    },

    onFailure: function(err) {
      alert(JSON.stringify(err));
    }

  });
};


export const updateUserInfo = () => {
  var attributeList = [];
  var attribute = {
    Name : 'nickname',
    Value : 'joe'
  };
  var attribute = new CognitoUserAttribute(attribute);
  attributeList.push(attribute);

  CognitoUser.updateAttributes(attributeList, function(err, result) {
    if (err) {
      alert(err);
      return;
    }
    console.log('call result: ' + result);
  });
};

export const confirmRegistration = () => {
  CognitoUser.confirmRegistration('123456', true, function(err, result) {
    if (err) {
      alert(err);
      return;
    }
    alert(result);
  });
};

export const changePassword = () => {
  CognitoUser.changePassword('oldPassword', 'newPassword', function(err, result) {
    if (err) {
      alert(err);
      return;
    }
    console.log('call result: ' + result);
  });
};

export const forgotPassword = () => {
  CognitoUser.forgotPassword({
    onSuccess: function (result) {
      console.log('call result: ' + result);
    },
    onFailure: function(err) {
      alert(err);
    },
    inputVerificationCode() {
      var verificationCode = prompt('Please input verification code ', '');
      var newPassword = prompt('Enter new password ', '');
      CognitoUser.confirmPassword(verificationCode, newPassword, this);
    }
  });
};

export const userSignout = () => {
  if (CognitoUser != null) {
    CognitoUser.signOut();
  }
};

export const rememberDevice = () => {
  CognitoUser.setDeviceStatusRemembered({
    onSuccess: function (result) {
      console.log('call result: ' + result);
    },
    onFailure: function(err) {
      alert(err);
    }
  });
};

