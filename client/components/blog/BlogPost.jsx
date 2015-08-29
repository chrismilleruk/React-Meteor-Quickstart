
BlogPost = React.createClass({
    mixins:[],

    render() {

        let _data = this.props.postData
        console.log(_data)

        return(
            <div>
                <Panel title={_data.title} author={_data.author} content={_data.content} />
            </div>
        )
    }
})