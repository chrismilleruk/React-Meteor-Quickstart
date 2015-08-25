Container = React.createClass({
    mixins:[],
    propTypes: {
        containerSize: React.PropTypes.string,
        offsetSize: React.PropTypes.string,
        fluid: React.PropTypes.string
    },
    render() {
        let {containerSize, offsetSize, fluid} = this.props
        let classNames = "col-sm-" + containerSize.toString()
        classNames += " col-sm-offset-" + offsetSize.toString()

        let containerType = fluid === "True" ? "container-fluid well page" : "container well page"
        return(
            <div className={containerType}>
                <div className="row">
                    <div className={classNames}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
})
