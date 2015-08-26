Posts = new Mongo.Collection("posts")

BlogPost = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData() {
        return {
            postsList: "Hello"
        }
    },
    render() {

        if(! this.data.postsList) {
            return(<h1>Loading</h1>)
        }

        return(
            <div>
                <h1>Hello {this.data.postsList}</h1>
            </div>
        )
    }
})