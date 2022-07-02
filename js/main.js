const renderCard = (results) => {
  results.forEach(
    ({
      backdrop_path: urlImage,
      name,
      title,
      overview,
      vote_average: rate,
      first_air_date: dateShow,
      release_date: dateShow2,
    }) => {
      const html = `
        <div class="col-md-6 col-lg-4 my-3 shadow">
                    <div class="movie shadow rounded position-relative overflow-hidden">        
                        <div class="img-movie">
                            <img class="img-fluid rounded h-100" src="https://image.tmdb.org/t/p/w500${urlImage}" alt="">
                        </div>
                        <div class="layer d-flex align-items-center">
                            <div class="decs-movie">
                                <h2>${name || title}</h2>
                                <p>${overview}</p>
                                <p>rate: ${
                                  +rate.toFixed(1).split(".")[1]
                                    ? rate.toFixed(1)
                                    : rate
                                }</p>
                                <p>${
                                  dateShow || dateShow2
                                }</p>                                
                            </div>
                        </div>
                    </div>
                </div>
                `;

      $("#rowData").append(html);
    }
  );
};

$(function () {
  const getData = fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=27da192c9246a1d53e6994e72edf64d1",
    { method: "get" }
  )
    .then((res) => res.json())
    .then((res) => {
      const { results } = res;

      renderCard(results);
      return results;
    });
  // .then((results) => {
  //

  //   inputSearch.keyup(function (e) {
  //     const targetValue = e.target.value;
  //     let list = ``;
  //     let count = 0;
  //     results.forEach(
  //       ({
  //         backdrop_path: urlImage,
  //         name,
  //         title,
  //         overview,
  //         vote_average: rate,
  //         first_air_date: dateShow,
  //         release_date: dateShow2,
  //       }) => {
  //         if (
  //           name?.indexOf(targetValue) != -1 ||
  //           title?.indexOf(targetValue) != -1
  //         ) {
  //           count++;
  //           console.log(name || title, count);
  //           list += `
  //     <div class="col-md-6 col-lg-4 my-3 shadow">
  //                 <div class="movie shadow rounded position-relative overflow-hidden">
  //                     <div class="img-movie">
  //                         <img class="img-fluid rounded h-100" src="https://image.tmdb.org/t/p/w500${urlImage}" alt="">
  //                     </div>
  //                     <div class="layer d-flex align-items-center">
  //                         <div class="decs-movie">
  //                             <h2>${name || title}</h2>
  //                             <p>${overview}</p>
  //                             <p>rate: ${
  //                               +rate.toFixed(1).split(".")[1]
  //                                 ? rate.toFixed(1)
  //                                 : rate
  //                             }</p>
  //                             <p>${
  //                               dateShow || dateShow2
  //                             }</p>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //             `;
  //         }
  //       }
  //     );
  //     // console.log(list);
  //     $("#rowData").html(list);
  //   });
  //   console.log(results);
  // });
});

const inputSearch = $("#allMovies");
const inputWords = $("#word");
inputSearch.keyup(function (e) {
  const targetValue = e.target.value;
  let list = ``;

  const getMovie = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=27da192c9246a1d53e6994e72edf64d1&query=${targetValue}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  //   results.forEach(
  //     ({
  //       backdrop_path: urlImage,
  //       name,
  //       title,
  //       overview,
  //       vote_average: rate,
  //       first_air_date: dateShow,
  //       release_date: dateShow2,
  //     }) => {
  //       if (
  //         name?.indexOf(targetValue) != -1 ||
  //         title?.indexOf(targetValue) != -1
  //       ) {
  //         count++;
  //         console.log(name || title, count);
  //         list += `
  //         <div class="col-md-6 col-lg-4 my-3 shadow">
  //                     <div class="movie shadow rounded position-relative overflow-hidden">
  //                         <div class="img-movie">
  //                             <img class="img-fluid rounded h-100" src="https://image.tmdb.org/t/p/w500${urlImage}" alt="">
  //                         </div>
  //                         <div class="layer d-flex align-items-center">
  //                             <div class="decs-movie">
  //                                 <h2>${name || title}</h2>
  //                                 <p>${overview}</p>
  //                                 <p>rate: ${
  //                                   +rate.toFixed(1).split(".")[1]
  //                                     ? rate.toFixed(1)
  //                                     : rate
  //                                 }</p>
  //                                 <p>${
  //                                   dateShow || dateShow2
  //                                 }</p>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //                 `;
  //       }
  //     }
  //   );
  // console.log(list);
  //   $("#rowData").html(list);
});

$(".toggle").click(function () {
  $(".navbar").toggleClass("hide-nav");
  $(this).children().toggleClass("fa-bars");
  $(this).children().toggleClass("fa-x ");
});

$("#contact .form-control").focus(function () {
  //   console.log($(this));
  $(this).siblings().removeClass("d-none");
});

$("#contact .form-control").keyup(function () {
  console.log($(this).text());
  if (!$(this).text()) $(this).siblings().addClass("d-none");
  else $(this).siblings().removeClass("d-none");
});
