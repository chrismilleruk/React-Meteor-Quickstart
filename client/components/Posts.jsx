Posts = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {

        var handle = Meteor.subscribe("allposts");

        return {
            postsLoading: ! handle.ready(),
            currentUser: Meteor.user(),
            postsLists: PostsLists.find().fetch()
        }
    },
    addPostHandler() {
        Meteor.call("InsertPost", (err, res) => {
            if(err) {
                console.log(err.reason)
            }
        })
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

        if (this.data.postsLoading) {
            return (<h2>Posts Loading</h2>);
        }


        let blogposts = this.data.postsLists.map((e)=>{
            console.log(e);
            return (<BlogPost postData={e} key={e._id} />)
        })

        return (
            <div>
                <Container containerSize="10" offsetSize="1">
                    <button onClick={this.addPostHandler}>Add Post</button>
                    {blogposts}
                </Container>
            </div>

        )
    }
})