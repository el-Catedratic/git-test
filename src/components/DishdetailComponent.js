import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    /*constructor(props){
        super(props);
        this.state={
            comments:this.props.dish.comments
        };
    }*/
    renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    renderComment(comments){
        var com = comments.map(comment => {
            return (
                
                    <li key={comment.id} >
                        {comment.comment}
                        <br /><br />
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        <br /><br />
                    </li>
                
            );
        });
    
        return (
            
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        
                        {com}
                        
                    </ul>
                    
                </div>
        );
        
    }
    render(){
        
        return(
            <div className='container'>
                {this.renderDish(this.props.dish)}
                {this.renderComment(this.props.dish.comments)}
            </div>
        )
    }
}
export default Dishdetail; 