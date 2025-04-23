const sendBtn = document.getElementById('send-btn');
const verifyBtn = document.getElementById('verify-btn');
const phoneField = document.getElementById('phone-field');
const otpField = document.getElementById('otp-field');

sendBtn.addEventListener('click', function (ev) {
  // sendBtn.setAttribute('disabled', true);
  const phone = phoneField.value;
  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier).then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    // ...
    console.log('sent');
  }).catch((error) => {
    // Error: SMS not sent
    console.log(error);
    // grecaptcha.reset(window.recaptchaWidgetId);
    window.recaptchaVerifier.render().then(function(widgetId) {
      grecaptcha.reset(widgetId);
    });
  });
});

verifyBtn.addEventListener('click', function (ev) {
  // verifyBtn.setAttribute('disabled', true);
  const code = otpField.value;
  // const credential = PhoneAuthProvider.credential(window.confirmationResult.verificationId, code);
  window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    // ...
    console.log(error);
  });
});