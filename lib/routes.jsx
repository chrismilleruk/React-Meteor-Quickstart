FlowRouter.route("/", {
    name: "Home",
    action(params) {
        //ReactLayout.render(Home);
        renderMainLayout(<Home />)
    }
});

FlowRouter.route("/Login", {
    name: "Login",
    action(params) {
        renderMainLayout(<UserLogin />)
    }
});

renderMainLayout = (component) => {
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    })
}
