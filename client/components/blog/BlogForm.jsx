BlogForm = React.createClass({
    mixin: [],
    getMeteorData(){

    },
    submitHandler(e) {
        e.preventDefault()
        let data = {
            author: "Andreas Oxinos",
            title: e.target.title.value,
            createdAt: new Date(),
            content: e.target.content.value
        }
        console.log(data);
        Meteor.call("InsertPost", data, (err, res) => {
            if(err) {
                console.log(err.reason)
            }
        })
    },

    render() {
        return (
            <Container containerSize="6" offsetSize="3">
                <form onSubmit={this.submitHandler}>
                    <div className="inputs">
                        <InputField type="text" label="Title" name="title"/>
                        <InputField type="text" label="Content" name="content"/>
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </Container>
        )
    }
})