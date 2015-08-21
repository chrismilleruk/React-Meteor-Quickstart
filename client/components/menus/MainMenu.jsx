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
    render() {

        let loginButton;
        let { currentUser, brand } = this.data;

        if (currentUser) {
            console.log(currentUser)
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

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>

                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>{loginButton}</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
});