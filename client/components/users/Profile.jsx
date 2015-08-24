Profile = React.createClass({
    mixins: [ReactMeteorData],
    propTypes: {
        current_user: React.PropTypes.object

    },
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
        })
    },
    render() {

        let { currentUser } = this.data

        //let currentUser = this.props.current_user

        if(currentUser == undefined) {
            return (
                <div>
                    <h1>Loading..</h1>
                </div>
            )
        }

        let firstName = currentUser.profile.firstName
        let lastName = currentUser.profile.lastName

        return (
            <div>
                <Container>

                            <h1>Profile</h1>
                            <form onSubmit={this.onSubmitHandler}>

                                <div className="inputs">

                                    <InputField name="firstName" value={firstName} type="text" label="First Name" />
                                    <InputField name="lastName" value={lastName} type="text" label="Last Name" />

                                    <input type="submit" value="Save" className="btn btn-primary"/>

                                </div>



                            </form>
                    </Container>
            </div>
        )
    }

})