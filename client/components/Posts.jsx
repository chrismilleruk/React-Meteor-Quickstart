Posts = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            currentUser: Meteor.user()
        }
    },
    render() {
        let { currentUser } = this.data
        if (currentUser == undefined) {
            return (
                <div>
                    <Container containerSize="6" offsetSize="3">
                        <h1>Loading..</h1>
                    </Container>
                </div>
            )
        }

        return (
            <div>
                <BlogPost>
                </BlogPost>

            </div>

        )
    }
})