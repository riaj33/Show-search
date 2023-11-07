const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const btn = document.querySelector("#search-btn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = searchInput.value;
  const config = { params: { q: searchTerm, addBy: "riaj" } };

  try {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows`,
      config
    );
    displayImages(response.data);
    displayContent(response.data);

    searchInput.value = "";
  } catch (error) {
    const errmsg = document.createElement("P");
    errmsg.textContent = "Sorry!! Server is not responding";
    document.body.append(errmsg);
  }
});

const displayImages = (shows) => {
  const showcardContainer = document.querySelector(".sub-container");

  for (let result of shows) {
    if (result.show.image) {
      const showCard = document.createElement("div");
      showCard.className =
        " h-full w-72 md:w-80 mx-1 bg-white shadow-xl rounded-sm";

      // creating image box
      const imgBox = document.createElement("div");
      imgBox.className = "w-full h-full object-cover rounded-sm";
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      img.alt = result.show.name;
      imgBox.appendChild(img);

      // creting rating
      const rating = document.createElement("div");
      rating.className = "absolute bottom-1 text-white px-1 bg-slate-800";
      const span = document.createElement("span");
      span.className = "fa fa-star checked text-orange-400 text-sm";
      rating.appendChild(span);
      rating.textContent = result.show.rating.average;

      // creting  runtime
      const runtime = document.createElement("div");
      runtime.className =
        "absolute bottom-1 right-0 text-white px-1 bg-slate-800 ";
      const h2 = document.createElement("h2");
      h2.textContent = result.show.status;
      runtime.appendChild(h2);

      showCard.appendChild(imgBox, rating, runtime);
      showcardContainer.appendChild(showCard);
    }
  }
};

const displayContent = (shows) => {
  const title = document.querySelector("#title");
  const status = document.querySelector("#status");
  const genres = document.querySelector("#genres");
  const country = document.querySelector("#country");
  const releaseDate = document.querySelector("#release-date");
  const language = document.querySelector("#language");
  const ratings = document.querySelector("#ratings");
  const releaseYear = document.querySelector("#release-year");

  for (let result of shows) {
    title.textContent = result.show.name;
    status.textContent = result.show.status;
  }
};
