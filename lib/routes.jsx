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
        renderMainLayout(<Profile />)
    }
})

loggedIn.route("/Posts", {
    name: "Posts",
    action(params) {
        renderMainLayout(<Posts />)
    }
})

loggedIn.route("/NewPost", {
    name: "NewPost",
    action(params) {
        renderMainLayout(<BlogForm />)
    }
})

loggedIn.route("/MyPosts", {
    name: "MyPosts",
    action(params) {
        renderMainLayout(<MyPosts />)
    }
})


renderMainLayout = (component) => {
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    })
}
