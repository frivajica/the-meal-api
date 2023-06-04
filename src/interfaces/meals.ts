export interface Meal extends FetchedMeal {
  price: string;
}

export interface FetchedMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
