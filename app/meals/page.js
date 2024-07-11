import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/mealGrid.js";
import { getMeals } from "@/lib/meals.js"

export const metadata = {
  title: 'All meals',
  description: 'Browse the delicious meals shared by our vibrant community'
}
async function Meals() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />
}

export default async function Meal() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created {""}{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and
          delicious
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
