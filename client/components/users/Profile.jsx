Profile = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    onSubmitHandler(e) {
        e.preventDefault();
        let data = {
            'firstName': e.target.firstName.value,
            'lastName': e.target.lastName.value
        }


        //Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.name":"Carlos"}})

        Meteor.call("UpdateProfile", data, (err, res) => {
            if(err)
                console.log(err.reason)

            console.log("SUCCESS: ", res)
        })
    },
    render() {
        let { currentUser } = this.data

        let firstName = currentUser.profile.firstName
        let lastName = currentUser.profile.lastName

        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    FirstName: <input type="text" name="firstName" defaultValue={firstName}/><br/>
                    LastName: <input type="text" name="lastName" defaultValue={lastName}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

})