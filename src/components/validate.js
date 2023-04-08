export const validate = (data) => {

  const errors = {};

  if (!data.name.trim()) {
    errors.name = " please define user name"
  } else {
    delete errors.name;
  }

  if (!data.email.trim()) {
    errors.email = "please enter email"
  } else {
    delete errors.email;
  };

  if(!data.password) {
    errors.password = "enter password"
  } else if ( data.password.length < 6 ) {
    errors.password = "please pass more 6 "
  } else {
    delete errors.password;
  };

  if (!data.confirmPass) {
    errors.confirmPass = "please write password"
  } else if (data.password !== data.confirmPass ) {
    errors.confirmPass = "Your Pass is not correct"
  } else {
    delete errors.confirmPass;
  };

  if(data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = " Please accept "
  };

  return errors;
}