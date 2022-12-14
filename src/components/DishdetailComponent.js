import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

// Functional Component implementation

function RenderDish({dish}) {
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

function RenderComments({comments}) {
    if (comments != null){
        const commentDivs = comments.map((comment) => {
            return (
                <div>
                    <p> {comment.comment} </p>
                    <p> -- {comment.author}, {new Intl.DateTimeFormat('en-SG', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
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

const Dishdetail = (props) => {
    if (props.dish){
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
            </div>
            </div>
        );
    }
    else{
        return (
            <div></div>
        );
    }
}


export default Dishdetail;

// // React class Component implementation
// class Dishdetail extends Component {

//     constructor(props) {
//         super(props);
//     }

//     renderDish(dish) {
//         if (dish != null){
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <Card>
//                         <CardImg top src={dish.image} alt={dish.name} />
//                         <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             );
//         }
//         else{
//             return(
//                 <div></div>
//             );
//         }
//     }

//     renderComments(comments) {
//         if (comments != null){
//             const commentDivs = comments.map((comment) => {
//                 return (
//                     <div>
//                         <p> {comment.comment} </p>
//                         {/* <p> -- {comment.author}, {comment.date.substring(0,10)}  </p> */}
//                         <p> -- {comment.author}, {new Intl.DateTimeFormat('en-SG', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
//                         {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */}
//                     </div>
//                 );
//             });

//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <h4> Comments</h4>
//                     {commentDivs}
//                 </div>
//             );
//         }
//         else{
//             return(
//                 <div></div>
//             );
//         }
//     }

//     render() {
//         let comments;
//         if (this.props.selectedDish){
//             comments = this.renderComments(this.props.selectedDish.comments);
//         }
//         else{
//             comments = <div></div>
//         }

//         return (
//             <div className="container">
//                 <div className="row">
//                     {this.renderDish(this.props.selectedDish)}
//                     {comments}
//                 </div>

//             </div>
//         );
//     }
// }
