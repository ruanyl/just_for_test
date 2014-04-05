function validPhoneNumber(phoneNumber){
  var regexp = /\(\d{3}\)\S\d{3}-\d{4}/;
  return regexp.test(phoneNumber);
  //TODO: Return whether phoneNumber is in the proper form
}
console.log(validPhoneNumber("(123) 456-7890"));
