import { Fragment } from 'react';

import AvailableMeal from './AvailableMeals';
import MealsSummary from './MealsSummary';

export default function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeal />
    </>
  );
}
