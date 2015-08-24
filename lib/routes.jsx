exposed = FlowRouter.group({})

exposed.route("/", {
    name: "Home",
    action(params) {
        //ReactLayout.render(Home);
        renderMainLayout(<Home />)
    }
});

exposed.route("/Login", {
    name: "Login",
    action(params) {
        renderMainLayout(<UserLogin />)
    }
});

exposed.route("/Register", {
    name:"Register",
    action(params) {
        renderMainLayout(<UserRegister />)
    }
})


loggedIn = FlowRouter.group({
    triggersEnter: [function(context, redirect) {
        if(!Meteor.userId()) {
            FlowRouter.go("Login")
        }
    }]
})

loggedIn.route("/Profile", {
    name: "Profile",
    action(params) {
        console.log("ENTERED ROUTE: /Profile")
        const cu = Meteor.user()
        console.log("USER: ", cu)
        renderMainLayout(<Profile current_user={cu}/>)
    }
})


renderMainLayout = (component) => {
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    })
}
