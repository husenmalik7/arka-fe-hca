const lengthRegex = (string) => {
  let pattern = /^.{3,100}$/;

  return pattern.test(string);
};

const emailRegex = (string) => {
  // eslint-disable-next-line
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //https://www.w3resource.com/javascript/form/email-validation.php

  return pattern.test(string);
};

const alertEmail = "please enter valid email";

const passwordRegex = (string) => {
  // eslint-disable-next-line
  let pattern = /^[A-Za-z0-9]\w{7,14}$/; // https://www.w3resource.com/javascript/form/password-validation.php

  return pattern.test(string);
};

const alertPassword =
  "password must be between 8-15 characters, any word characters";

export { lengthRegex, emailRegex, alertEmail, passwordRegex, alertPassword };
