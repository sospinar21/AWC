import { Config, CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails, CognitoIdentityCredentials } from 'amazon-cognito-identity-js';
import { Lambda } from 'aws-sdk';

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
      const error = document.querySelector('.error');
      error.innerText = 'invalid email or password: min 6 characters';
      return;
    }
    var cognitoUser = result.user;
    const created = document.querySelector('.created');
    created.innerText = 'Welcome! your new user name is ' + cognitoUser.getUsername();
  });
};

export const logIn = (user) => {
  var userData = {Username: user.email, Pool: userPool};
  var cognitoUser = new CognitoUser(userData);

  var authenticationData = {Username: user.email, Password: user.password};
  var authenticationDetails = new AuthenticationDetails(authenticationData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      const success = document.querySelector('.success');
      success.innerText = 'Welcome back!' + cognitoUser.getUsername();
      return result; 
      // LoggedIn(cognitoUser, result);
    },

    onFailure: function (err) {
      const incorrect = document.querySelector('.incorrect');
      incorrect.innerText = 'Check your Password or Email';
      return; 
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

