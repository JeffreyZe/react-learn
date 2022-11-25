import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    constructor(props) {
            super(props);
    
            // this.state = {
            //     selectedDish: props.selectedDish
            // }
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null){
            const commentDivs = comments.map((comment) => {
                return (
                    <div>
                        <p> {comment.comment} </p>
                        <p> -- {comment.author}, {comment.date.substring(0,10)}  </p>
                    </div>
                );
            });

            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments</h4>
                    {commentDivs}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render() {
        let comments;
        if (this.props.selectedDish){
            comments = this.renderComments(this.props.selectedDish.comments);
        }
        else{
            comments = <div></div>
        }

        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {comments}
                </div>

            </div>
        );
    }
}

export default Dishdetail;