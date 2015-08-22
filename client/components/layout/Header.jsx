Header = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    render() {

        let {currentUser} = this.data

        let menu;
        if(currentUser) {
            menu = <MainMenuLogged />
        } else {
            menu = <MainMenu />
        }



        return(
            <div>
                <div className="page-header">
                    <h1>Example page header <small>Subtext for header</small></h1>
                </div>

                {menu}
            </div>


        )

    }
})