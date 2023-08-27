import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
    //this could be functional component doesn't have to be class. 
    //Removing componentDidUpdate, added only for debugging
    componentDidUpdate() {
        console.log("[OrderSummary] componentDidUpdate");
    }
 
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return <li key={key}>
                <span
                    style={{ textTransform: 'capitalize' }}>{key}</span>: {this.props.ingredients[key]}
            </li>
        })

        return (
            <Aux>
                <h2>Your Order</h2>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button 
                    btnType="Danger"
                    clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button 
                    btnType="Success"
                    clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        )
    }

}

export default OrderSummary;