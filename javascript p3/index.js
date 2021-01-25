console.log("This is my index js file");
// 42a2bc7045d44064a71c42293eada6ef
// Initialize the news api parameters
let source = "bbc-news";
let apiKey = "42a2bc7045d44064a71c42293eada6ef";

//Grab the news container
let newsAccordian = document.getElementById("newsAccordian");
//Creatre an ajax get request
const xhr = new XMLHttpRequest();

xhr.open(
  'GET',
  `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
  } else {
    console.log("Some error occured");
  }
}
xhr.send();

let news = `<div class="card">
<div class="card-header" id="headingOne">
  <h2 class="mb-0">
    <button
      class="btn btn-link btn-block text-left"
      type="button"
      data-toggle="collapse"
      data-target="#collapseOne"
      aria-expanded="true"
      aria-controls="collapseOne"
    >
      Collapsible Group Item #1
    </button>
  </h2>
</div>

<div
  id="collapseOne"
  class="collapse show"
  aria-labelledby="headingOne"
  data-parent="#accordionExample"
>
  <div class="card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
    moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
    wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
    butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
    aesthetic synth nesciunt you probably haven't heard of them accusamus
    labore sustainable VHS.
  </div>
</div>
</div>`;
