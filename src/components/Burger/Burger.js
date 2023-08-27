import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    // console.log(igKey, "igKey")
                    // console.log(i, "i")
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                })
        }).reduce((acc, el) => {
            return acc.concat(el)
        }, [])

    // const transformedIngredients = [];

    // for (const ingredientKey in props.ingredients) {
    //     if (props.ingredients.hasOwnProperty(ingredientKey)) {
    //         const ingredientCount = props.ingredients[ingredientKey];

    //         for (let i = 0; i < ingredientCount; i++) {
    //             console.log(ingredientKey, "ingredientKey");
    //             console.log(i, "i");
    //             transformedIngredients.push(
    //                 <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
    //             );
    //         }
    //     }
    // }


    // console.log("transformedIngredients", transformedIngredients)
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    )

}

export default burger;