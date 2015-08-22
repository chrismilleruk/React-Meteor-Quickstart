Meteor.methods({
    "Register": (data) => {
        try {
            Accounts.createUser({
                email: data.email,
                password: data.password,
                username: data.username,
                profile: {

                }
            })
            console.log("USER REGISTERED ", data.username)
        } catch(e) {
            console.log("USER NOT REGISTERED, ERROR: ", e.reason)
        }

    }
})