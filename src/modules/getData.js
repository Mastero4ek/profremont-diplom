export async function getData(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return await response.json()
    } catch (err) {
        console.log(err)
    }
}