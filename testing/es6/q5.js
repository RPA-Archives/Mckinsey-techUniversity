function userDetail (details) {
  let usernameEmail = {};
  [, usernameEmail.username, usernameEmail.email] = details;
  console.log(usernameEmail);
  return usernameEmail;
}
userDetail(process.argv.slice(2));
module.exports = userDetail;
