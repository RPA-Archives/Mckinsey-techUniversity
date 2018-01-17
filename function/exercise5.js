function checkUsersValid(goodUsers) {
 return function allUsersValid(submittedUsers) {

   return submittedUsers.every(function (submittedUser){
     return goodUsers.some(function (validUser){
       return validUser.id===submittedUser.id;
     });
   });

console.log('should pass the basic test case: ', checkUsersValid(users))
module.exports = checkUsersValid
