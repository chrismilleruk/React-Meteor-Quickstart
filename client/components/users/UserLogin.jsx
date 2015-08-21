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
            userLogin = <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Login</h1>


                        <form onSubmit={this.onSubmitHandler}>
                            <div className="inputs">
                                <div className="form-control-wrapper">
                                    <input type="text" className="form-control empty" name="email"/>

                                    <div className="floating-label">
                                        Email
                                    </div>
                                    <span className="material-input"></span>
                                </div>

                                <div className="form-control-wrapper">
                                    <input type="password" className="form-control empty" name="password"/>

                                    <div className="floating-label">
                                        Password
                                    </div>
                                    <span className="material-input"></span>
                                </div>

                            </div>


                            <input type="submit" value="Login" className="btn btn-primary"/>
                        </form>



                    </div>
                </div>
            </div>
        }


        return (
            <div className="well page">

                { userLogin }
            </div>
        )
    }
})