Container = React.createClass({
    render() {
        return(
            <div className="container well page">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
})