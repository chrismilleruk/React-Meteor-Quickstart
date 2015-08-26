Meteor.methods({
    "Register": (data) => {
        try {
            Accounts.createUser({
                email: data.email,
                password: data.password,
                username: data.username,
                profile: {}
            })
            console.log("USER REGISTERED ", data.username)
            return true
        } catch (e) {
            console.log("USER NOT REGISTERED, ERROR: ", e.reason)
            return false
        }

    },
    "UpdateProfile": (data) => {
        try {

            Meteor.users.update({
                _id: Meteor.user()._id
            }, {
                $set: {
                    "profile.firstName": data.firstName,
                    "profile.lastName": data.lastName
                }
            })
            console.log("Updated")
        } catch (e) {
            console.log(e.reason)
        }
    }
})
