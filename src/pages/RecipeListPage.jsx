import { Text, Input, Center, Image, Heading, Button as CButton, SimpleGrid } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"

import { useState } from "react"

export const RecipeListPage = ({ data, clickFn }) => {
  const [recipes, setRecipes] = useState(data.hits)

  const onClickFn = recipe => {
    clickFn(recipe)
  }

  const onChangeFilter = event => {
    const filteredData = data.hits.filter(obj => obj.recipe.label.toLowerCase().includes(event.target.value.toLowerCase()))
    setRecipes(filteredData)
  }

  const recipeListItems = recipes.map(obj => (
    <Card key={obj.recipe.label}>
      <CardHeader height={150}>
        <Text>{obj.recipe.mealType}</Text>
        <Heading size="lg">{obj.recipe.label}</Heading>
      </CardHeader>
      <CardBody>
        <Image style={{ display: "inline-block", borderRadius: "50%" }} objectFit={"cover"} h={200} w={200} src={obj.recipe.image} alt={obj.recipe.label} />

        <Text>
          {obj.recipe.healthLabels.some(label => label.toLowerCase() === "vegan") || obj.recipe.healthLabels.some(label => label.toLowerCase() === "vegan") ? (
            <p>
              <strong>Vegan/Vegetarian</strong>
            </p>
          ) : (
            ""
          )}
        </Text>
        <Text>{obj.recipe.dietLabels}</Text>
        <Text>
          Dish: <strong>{obj.recipe.dishType}</strong>
        </Text>
        <Text>
          Cautions: <strong>{obj.recipe.cautions.join(" || ")}</strong>
        </Text>
      </CardBody>
      <CardFooter>
        <CButton type="button" onClick={() => onClickFn(obj.recipe)}>
          Details voor details
        </CButton>
      </CardFooter>
    </Card>
  ))

  return (
    <div>
      <Center>
        <Heading pt={10} size={"2xl"}>
          Easy Recipe Searches
        </Heading>
      </Center>
      <Center>
        <Input type="text" onChange={onChangeFilter} mb={25} mt={"80px"} pl={{ lg: "15px" }} width={{ md: "700px" }} variant={"filled"} placeholder="search recipe..." />
      </Center>
      <Center>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} ml={2} mr={2}>
          {recipeListItems}
        </SimpleGrid>
      </Center>
    </div>
  )
}
