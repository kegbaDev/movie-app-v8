const API_KEY = process.env.API_KEY;


export default{
    fetch
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`

}