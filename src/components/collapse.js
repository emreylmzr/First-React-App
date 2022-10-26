import React from "react";


class Collapse extends React.Component {

    state = {

        showContent: false
    }

    // constructor() {
    //     super();

    //     this.state = {

    //         showContent: false
    //     }

    //     // this.showMore = this.showMore.bind(this);
    // }

    // showMore() {
    //     this.setState({ showContent: true })
    // }

    showMore = () => {
        this.setState({ showContent: !this.state.showContent })

    }

    render() {

        return (

            <div>
                <button class="btn btn-primary w-100" onClick={this.showMore}>


                    {React.Children.map(this.props.children, children => children.props.cardTitle)}

                </button>

                {
                    this.state.showContent ? (
                        <div class="collapse show">



                            {React.Children.map(this.props.children, children => children)}
                        </div>

                    ) : null

                }


            </div>

        );
    }
}

export default Collapse;