InputField = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        value: React.PropTypes.string
    },
    shouldComponentUpdate() {
        return true;
    },
    render() {

        const { label, type, name, value } = this.props

        let classNames = "form-control"
        if(!value)
            classNames += " empty"

        return(
                <div className="form-control-wrapper">
                    <input type={type} className={classNames} name={name} defaultValue={value}/>

                    <div className="floating-label">
                        {label}
                    </div>
                    <span className="material-input"></span>
                </div>

        )
    }
})