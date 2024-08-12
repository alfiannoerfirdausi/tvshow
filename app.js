const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const key = form.elements.keyword.value;
  const config = {
    params: {
      q: key,
    },
  };
  const res = await axios.get("http://api.tvmaze.com/search/shows", config);
  console.log(res.data);
});
