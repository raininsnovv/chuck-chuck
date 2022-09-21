const btn = document.querySelector(".btn");
const div = document.querySelector(".joke");

const getJoke = async () => {
  const img = document.createElement("img");
  const responsive = await (
    await fetch("https://api.chucknorris.io/jokes/random")
  ).json();
  img.src = responsive.icon_url;
  div.append(responsive.value, img);
};

btn.addEventListener("click", () => {
  getJoke();
  div.innerHTML = "";
});
