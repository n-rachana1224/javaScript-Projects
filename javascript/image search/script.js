const accesskey = "hYQNr5-SffPB0naZ8pyLh2Y0RHel-qNeLQBs55RWbeU";
const form = document.getElementById("form");
const text = document.getElementById("text");
const load = document.getElementById("load");
const result = document.getElementById("result");

let keyword = "";
let page = 1;

async function images() {
  keyword = text.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  // clear old results on new search
  if (page === 1) {
    result.innerHTML = "";
  }

  results.forEach((item) => {
    const image = document.createElement("img");
    image.src = item.urls.small;

    const imagelink = document.createElement("a");
    imagelink.href = item.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);

    result.appendChild(imagelink);
  });
  load.style.display="block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  images();
});
load.addEventListener("click",()=>{
    page++;
    images();
})
const button=document.getElementsByTagName("button");
button("click",images());