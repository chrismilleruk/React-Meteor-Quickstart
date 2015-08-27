
BlogPost = React.createClass({
    mixins:[],

    render() {

        let _data = this.props.postData
        console.log(_data)

        return(
            <div>
                <Panel>
                    {_data.title}
                </Panel>

            </div>
        )
    }
})