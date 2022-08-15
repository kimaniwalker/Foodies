
export async function UseFetchRecipes({ query, dietary_needs, }: { query?: string, dietary_needs?: any }) {
    const RECIPE_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf&query=${query}&diet=${dietary_needs.diet}&intolerances=${dietary_needs.intolerances}&excludeIngredients=${dietary_needs.excludeIngredients}&number=10&sort=random`

    try {

        const res = await fetch(RECIPE_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        let session = await res.json()

        console.log(session)
        return session
    } catch (error) {
        console.log(error)
    }

}



export async function UseGetRecipeInfo({ id }: { id: number }) {
    const RECIPE_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session


}

export async function UseGetFavoritesInfo({ ids }: { ids: string }) {
    const RECIPE_URL = `https://api.spoonacular.com/recipes/informationBulk?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf&ids=${ids}`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session


}

type params = {
    query?: string,
    cuisine?: string,
    diet?: string,
    includeIngredients?: string,
    excludeIngredients?: string
    number?: number
}

export async function UseGetRecipeVideos(params: params) {

    const RECIPE_URL = `https://api.spoonacular.com/food/videos/search?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf&query=${params.query}&diet=${params.diet}&excludeIngredients=${params.excludeIngredients}&number=10`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session

}

export async function useGetRandomJoke() {
    const RECIPE_URL = `https://api.spoonacular.com/food/jokes/random?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session
}

export async function useGetRandomTrivia() {
    const RECIPE_URL = `https://api.spoonacular.com/food/trivia/random?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session
}
export async function useGetRandomRecipes(tags: string) {
    const RECIPE_URL = `https://api.spoonacular.com/recipes/random?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf&number=10&tags=${tags}`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session
}
type chatBotParams = {
    text: string,
    contextId: string
}
export async function useTalkToBot(params: chatBotParams) {
    const RECIPE_URL = `https://api.spoonacular.com/food/converse?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf&text=${params.text}&contextId=${params.contextId}`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session
}

type cardParams = {
    id: number,
    mask: string,
    backgroundImage: string,
    backgroundColor: string,
    fontColor: string,
}
export async function useGetRecipeCard(params: cardParams) {
    const RECIPE_URL = `https://api.spoonacular.com/recipes/${params.id}/card?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf&mask=${params.mask}&backgroundImage=${params.backgroundImage}&backgroundColor=${params.backgroundColor}&fontColor=${params.fontColor}`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session
}

export async function useGetSimilarRecipes(id: number) {
    const RECIPE_URL = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=c92e95d4b12a4e6d9cbecdfc523e66cf&number=5`

    const res = await fetch(RECIPE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })

    let session = await res.json()

    console.log(session)
    return session
}


