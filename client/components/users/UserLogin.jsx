UserLogin = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    onSubmitHandler(e) {
        e.preventDefault();
        var self = this;

        var email = e.target.email.value;
        var password = e.target.password.value;

        Meteor.loginWithPassword(email, password, function (err) {
            if (err) {
                console.log(err.reason)
            } else {
                FlowRouter.go("Home");
            }
        });
    },
    render(){
        let { currentUser } = this.data;

        let userLogin;
        if (currentUser) {
            userLogin = <h5>Man, you are logged in!</h5>
        } else {
            userLogin =
                <Container containerSize="6" offsetSize="3">
                        <h1>Login</h1>
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="inputs">
                                <InputField name="email" type="text" label="Email" />
                                <InputField name="password" type="password" label="Password" />
                            </div>

                            <input type="submit" value="Login" className="btn btn-primary"/>
                        </form>
                </Container>
        }


        return (
            <div className="">

                { userLogin }
            </div>
        )
    }
})