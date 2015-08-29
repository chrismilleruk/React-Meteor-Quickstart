MainMenuLogged = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user(),
            brand: "React with Meteor, so nice!"
        }
    },
    handleLogout(){
        Meteor.logout();
        FlowRouter.go("Home")
    },
    render() {
        let loginButton;
        let { currentUser, brand } = this.data;

        if (currentUser) {

            loginButton = <a href="#" onClick={this.handleLogout}>Logout {currentUser.username} </a>
        } else {
            loginButton = <a href="/login">Login</a>
        }

        return(

            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                { brand }
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a href="/Posts">Posts</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    {currentUser.username}
                                    <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="/NewPost">Add Post</a></li>
                                    <li><a href="/Profile">Profile</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li>{loginButton}</li>

                                </ul>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
})