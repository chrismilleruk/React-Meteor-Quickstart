Panel = React.createClass({
    propTypes: {
        author: React.PropTypes.string,
        title: React.PropTypes.string
    },
    render() {

        const { author, title } = this.props

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">{title}</h3>
                </div>
                <div className="panel-body">
                    Author: {author}
                </div>
            </div>
        )
    }
})