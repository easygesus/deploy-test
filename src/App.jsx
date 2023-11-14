import { RecipeListPage } from "./pages/RecipeListPage";
import { data } from "./utils/data";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return <Box>{userRecipe ? <RecipePage recipe={userRecipe} clickFn={setUserRecipe} /> : <RecipeListPage data={data} clickFn={setUserRecipe} />}</Box>;
};
