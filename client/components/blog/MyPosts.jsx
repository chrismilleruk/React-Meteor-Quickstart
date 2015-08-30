MyPosts = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        console.log("UserId:", this.props.userId)
        var handle = Meteor.subscribe("myposts", this.props.userId);

        return {
            postsLoading: !handle.ready(),
            currentUser: Meteor.user(),
            postsLists: PostsLists.find().fetch()
        }
    },
    render(){

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

        if (this.data.postsLoading) {
            return (<h2>Posts Loading</h2>);
        }

        let blogposts = this.data.postsLists.map((e)=> {
            return (
                <div className="well well-sm" key={e._id}>
                    {e.title}
                    <button className="btn btn-primary btn-flat mrg0 pad10">
                        <i className="mdi-editor-border-color"></i>
                    </button>
                </div>
            )
        })

        return (
            <div>
                <Container containerSize="12" offsetSize="0">
                    {blogposts}
                </Container>
            </div>
        )
    }
})