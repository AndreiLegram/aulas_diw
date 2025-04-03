import React from 'react';
import './MealCard.css';

const MealCard = ({ meal }) => {
  return (
    <div className="meal-card">
      {meal ? (
        <>
          {meal.strMealThumb && (
            <div className="meal-image-container">
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal || 'Meal'} 
                className="meal-image"
              />
            </div>
          )}
          <div className="meal-body">
            {meal.strMeal && (
              <h3 className="meal-title">{meal.strMeal}</h3>
            )}
          </div>
        </>
      ) : (
        <div className="meal-not-found">Nenhuma refeição encontrada</div>
      )}
    </div>
  );
};

export default MealCard;