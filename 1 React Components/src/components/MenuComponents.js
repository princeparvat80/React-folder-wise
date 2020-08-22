import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(updated_dish){
        this.setState({selectedDish:updated_dish});
    }

    renderDish(render_dish){
        if(render_dish!=null)
            return(
                <Card>
                    <CardImg top src={render_dish.image} alt={render_dish.name} />
                    <CardBody>
                        <CardTitle>{render_dish.name}</CardTitle>
                        <CardText>{render_dish.description}</CardText>
                    </CardBody>
                </Card>
            );
    
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments!=null)
            return(
                <Card>
                    <CardBody>
                        <CardTitle>{comments.name}</CardTitle>
                        <CardText>{comments.comment}</CardText>
                    </CardBody>
                </Card>
            );
    
        else{
            return(
                <div></div>
            );
        }

    }

    render(){
        const menu = this.props.dishes.map((map_argument_dish) => {
            return (
                <div key={map_argument_dish.id} className="col-12 col-md-5 m-1">
                    <Card key={map_argument_dish.id} onClick={()=>this.onDishSelect(map_argument_dish)}>
                        <CardImg width="auto" src={map_argument_dish.image} alt={map_argument_dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{map_argument_dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return(
            <div className='container'>
                <div className='row'>
                        {menu}    
                </div>

                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>

            </div>
        );
    }
}

export default Menu;