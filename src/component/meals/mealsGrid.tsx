import classes from "./mealsGrid.module.css";
import MealItem from "@/component/meals/mealsItem";


export default function MealsGrid({ meals }: any) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: { id: null | undefined; }) => ((
        <li key={meal.id}>
          <MealItem
            title={""}
            slug={""}
            image={""}
            summary={""}
            creator={""}
            {...meals} />
        </li>)))}
    </ul>
  )

}