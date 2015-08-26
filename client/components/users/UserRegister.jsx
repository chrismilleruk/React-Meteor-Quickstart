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
            <Container containerSize="6" offsetSize="3">
                <h1>Register</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="inputs">
                        <InputField label="Username" type="text" name="username" />
                        <InputField label="Email" type="text" name="email" />
                        <InputField label="Password" type="password" name="password" />
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </Container>

        )
    }

})