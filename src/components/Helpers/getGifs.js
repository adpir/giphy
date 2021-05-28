
export const getGifs = async (category) => {

    const apiKey = '0B8NGW8tHOa0hMTHk4pzP4PdSlTG40gS';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=${apiKey}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const giphy = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return giphy;

}

