//
import classes from "./mealGrid.module.css";
import MealItem from "./mealItem.js";

export default function MealGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
