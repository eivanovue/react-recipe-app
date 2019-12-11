import React from "react";
import style from "./recipe.module.css";
import content from "./content.module.css";
// import cardanimation from "./cardanimation.js";


    const script = document.createElement("script");

    script.src = "./cardanimation.js";
    script.async = true;

    document.body.appendChild(script);


const Recipe = ({title, calories, image, ingredients, healthLabels}) => {
    return (
        // <div className={style.recipe}>
        //     <img className={style.image} src={image} alt=""/>
        //     <h1 className={style.title}>{title}</h1>
        //     <ol className={style.ingredients}>
        //         {ingredients.map(ingredient => (
        //             <li>{ingredient.text}</li>
        //         ))}
        //     </ol>
            
        //         {healthLabels.map(healthLabel => (
        //             <li className={style.healthLabels}>{healthLabel}</li>
        //         ))}
            
        //     <p>{calories}</p>


        // </div>

        
        
          <div className={content.cards_item}>
            <div className={content.card}>
              <div className={content.card_image}>
                <img src={image}/>
                <div className={content.overlay_cal}><h2 className={content.cal}>{Math.trunc(calories)} kcal</h2></div>
                <div className={content.overlay_title}> <p><h2 className={content.card_title}>{title}</h2></p> </div>
              </div>            
              <div className={content.card_content}>
               
                <p className={content.card_text}>
                  
                  <ol className={style.ingredients}>
                    {ingredients.map(ingredient => (
                     <li>{ingredient.text}</li>
                 ))} 
                 </ol>
                </p>
                <button className={content.btn}>Read More</button>
              </div>
          </div>
        </div>
    );
}

export default Recipe;