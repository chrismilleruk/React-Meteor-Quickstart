Panel = React.createClass({
    propTypes: {
        author: React.PropTypes.string,
        title: React.PropTypes.string,
        content: React.PropTypes.string
    },
    render() {

        const { author, title, content } = this.props

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">{title} <span className="pull-right">{author}</span> </h3>
                </div>
                <div className="panel-body">
                    {content}
                </div>
            </div>
        )
    }
})