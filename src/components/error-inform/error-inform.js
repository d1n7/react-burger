import React from "react";


class ErrorInform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError", error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log("Возникла ошибка!", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (<div>
                <p className="text text_color_inactive text_type_main-medium">Произошла ошибка</p>
                <p>
                    {this.state.errDesc}
                </p></div>)
        }

        return (this.props.children)
    }

}

export default ErrorInform;