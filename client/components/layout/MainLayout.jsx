MainLayout = React.createClass({
    render() {

        $.material.init();

        return (
            <div>
                {this.props.header}
                {this.props.content}
                {this.props.footer}
            </div>
        );
    }
});