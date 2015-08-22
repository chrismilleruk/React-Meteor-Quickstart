MainMenu = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user(),
            brand: "React with Meteor, so nice!"
        }
    },
    handleLogout(){
        Meteor.logout();
    },
    handleTest() {

    },
    render() {

        let loginButton;
        let { currentUser, brand } = this.data;

        if (currentUser) {

            loginButton = <a href="#" onClick={this.handleLogout}>Logout {currentUser.username} </a>
        } else {
            loginButton = <a href="/login">Login</a>
        }

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                {brand}
                            </a>
                        </div>
                        <ul className="nav navbar-nav">



                        </ul>
                        <ul className="nav navbar-nav navbar-right">

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li>{loginButton}</li>
                                    <li><a href="/Register">Register</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
});