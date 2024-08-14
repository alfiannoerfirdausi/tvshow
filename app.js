const form = document.querySelector("#search-form");
const platform = document.querySelector("#movie");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getMovies();
  showMovies();
  clear();
});

const getMovies = async () => {
  const val = form.elements.keyword.value;
  try {
    const res = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "6315652b",
        s: val,
      },
    });
    return res.data.Search;
  } catch (error) {}
  console.error("Movies not found", error);
};

const showMovies = async () => {
  const data = await getMovies();
  for (let i = 0; i < data.length; i++) {
    let oz = document.createElement("div");
    oz.classList.add("card");
    oz.style.width = "16rem";
    oz.innerHTML = `
    <img src="${data[i].Poster}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${data[i].Title}</h5>
    <p class="card-text">${data[i].Year}</p>
    <a href="#">See Detail</a>
    </div>;`;
    platform.appendChild(oz);
  }
};

const clear = () => {
  form.elements.keyword.value = "";
  platform.innerHTML = "";
};
