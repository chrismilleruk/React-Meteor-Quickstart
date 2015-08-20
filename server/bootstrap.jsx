Meteor.startup(()=>{
    if(Meteor.users.find().count() === 0) {
         Accounts.createUser({
             email: "oxinosa@gmail.com",
             password: "1234"
         })
    }
})
