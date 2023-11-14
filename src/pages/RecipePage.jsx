import { Divider, Text, Box, Button as CButton, Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  const onClickFn = niks => {
    clickFn(niks);
  };

  return (
    <>
      <Image color={"red.100"} border={"1px"} borderRadius={{ base: "50%" }} mt={{ md: 4 }} ml={{ md: 4 }} h={{ md: "500px" }} w={{ md: "500px" }} src={recipe.image} />
      <Box mr={3} mt={8} ml={4}>
        <Text as="i" fontSize={"sm"}>
          {recipe.mealType}
        </Text>
        <Text fontSize={"xl"}>
          <strong>{recipe.label}</strong>
        </Text>
        <Text fontSize={"sm"}>Total cooking time: {recipe.totalTime} minutes</Text>
        <Text fontSize={"sm"}>Servings: {recipe.yield}</Text>
        <Text fontSize={"sm"} mt={"2"} mb={"2"}>
          <strong>Ingredients:</strong>
        </Text>
        <Text style={{ width: "45ch" }} mt={2} fontSize={"sm"}>
          {recipe.ingredientLines.join("  ||  ")}
        </Text>
      </Box>
      <Divider mt={4} />
      <Box fontSize={"sm"} ml={4} mt={5}>
        <Text>Health labels:</Text>
        <Text maxWidth={"45ch"} fontSize={"xs"} style={{ textTransform: "uppercase" }}>
          <strong> {recipe.healthLabels.join(", ")}</strong>
        </Text>
        <Text mt={4}>Dish type: {recipe.dishType}</Text>
        <Text mt={1}>Diet label: {recipe.dietLabels.join(", ")}</Text>
        <Text mt={1}>Cautions: {recipe.cautions.join(" || ")}</Text>
        <Text fontSize={"sm"} mt={4}>
          <strong>Total nutrients:</strong>
        </Text>
        <Flex mt={2} style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          <div style={{ marginRight: "20px" }}>
            <Text>
              <strong>calories:</strong>
            </Text>
            <Text>
              {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} {recipe.totalNutrients.ENERC_KCAL.unit}
            </Text>
          </div>
          <div style={{ marginRight: "20px" }}>
            <Text>
              <strong>fat:</strong>
            </Text>
            <Text>
              {recipe.totalNutrients.FAT.quantity.toFixed(0)} {recipe.totalNutrients.FAT.unit}
            </Text>
          </div>
          <div style={{ marginRight: "20px" }}>
            <Text>
              <strong>carbs:</strong>
            </Text>
            <Text>
              {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} {recipe.totalNutrients.CHOCDF.unit}
            </Text>
          </div>
          <div style={{ marginRight: "20px" }}>
            <Text>
              <strong>protein:</strong>
            </Text>
            <Text>
              {recipe.totalNutrients.PROCNT.quantity.toFixed(0)} {recipe.totalNutrients.PROCNT.unit}
            </Text>
          </div>
          <div style={{ marginRight: "20px" }}>
            <Text>
              <strong>cholesterol:</strong>
            </Text>
            <Text>
              {recipe.totalNutrients.CHOLE.quantity.toFixed(0)} {recipe.totalNutrients.CHOLE.unit}
            </Text>
          </div>
          <div style={{ marginRight: "20px" }}>
            <Text>
              <strong>sodium:</strong>
            </Text>
            <Text>
              {recipe.totalNutrients.NA.quantity.toFixed(0)} {recipe.totalNutrients.NA.unit}
            </Text>
          </div>
        </Flex>
        <CButton mt={8} mb={5} type="button" onClick={() => onClickFn(null)}>
          Back
        </CButton>
      </Box>
    </>
  );
};
