Header = React.createClass({
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
            loginButton = <a href="#" onClick={this.handleLogout}>Logout</a>
        } else {
            loginButton = <a href="/login">Login</a>
        }

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                {brand}
                            </a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>{loginButton}</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
})