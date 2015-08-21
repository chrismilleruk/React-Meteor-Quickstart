Meteor.startup(()=>{
    if(Meteor.users.find().count() === 0) {
         Accounts.createUser({
             email: "oxinosa@gmail.com",
             password: "1234",
             username: "krabos",
             profile: {
                 testfield1: "Come on lad"
             }
         })
    }
})
