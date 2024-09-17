import classes from "./mealsGrid.module.css";
import MealItem from "@/component/meals/mealsItem";

type Meal = {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
};

type MealsGridProps = {
  meals: Meal[];  // Define the structure of the props
};

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem
            title={meal.title}
            slug={meal.slug}
            image={meal.image}
            summary={meal.summary}
            creator={meal.creator}
          />
        </li>
      ))}
    </ul>
  );
}