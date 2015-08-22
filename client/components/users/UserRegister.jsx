UserRegister = React.createClass({
    onSubmitHandler(e) {
        e.preventDefault()

        let data = {
            "username": e.target.username.value,
            "password": e.target.password.value,
            "email": e.target.email.value
        }

        Meteor.call("Register", data, (err, res) => {
            if(err) {
                console.log(err)
            } else {
                console.log("User registered! ", res)
                Meteor.loginWithPassword(data.email, data.password, (err, res)=>{
                    console.log("User logged in! ", data.username)
                    FlowRouter.go("Home")
                })
            }



        });
    },
    render() {
        return (
            <div className="container well page">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Register</h1>
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="inputs">
                                <div className="form-control-wrapper">
                                    <input type="text" className="form-control empty" name="username"/>

                                    <div className="floating-label">
                                        Username
                                    </div>
                                    <span className="material-input"></span>
                                </div>
                                <div className="form-control-wrapper">
                                    <input type="text" className="form-control empty" name="email"/>

                                    <div className="floating-label">
                                        Email
                                    </div>
                                    <span className="material-input"></span>
                                </div>
                                <div className="form-control-wrapper">
                                    <input type="text" className="form-control empty" name="password"/>

                                    <div className="floating-label">
                                        Password
                                    </div>
                                    <span className="material-input"></span>
                                </div>
                                <input type="submit" value="Login" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

})