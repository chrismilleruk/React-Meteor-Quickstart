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

        Meteor.loginWithPassword(email, password, function(err){
           if(err) {
               console.log(err.reason)
           } else {
               FlowRouter.go("Home");
           }
        });
    },
    render(){
        let { currentUser } = this.data;

        let userLogin;
            if(currentUser){
                userLogin = <h5>Man, you are logged in!</h5>
            }else {
                userLogin = <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <h1>Login</h1>

                            <form onSubmit={this.onSubmitHandler}>
                                <input type="text" placeholder="Email.." className="form-control" name="email"/>
                                <input type="text" placeholder="Password.." className="form-control" name="password"/>
                                <input type="submit" value="Login" className="btn btn-primary"/>
                            </form>

                        </div>
                    </div>
                </div>
            }


        return(
            <div>
                { userLogin }
            </div>
        )
    }
})