//Posting Show results Content to page
function iterateResults(results) {
  for(let result of results){  
    console.log(result.show.name);
    const newLI = document.createElement('li');
    let showName = result.show.name;
    newLI.append(showName);
    const contentUl = document.getElementById('content');
    contentUl.append(newLI);
    // append IMGs to image-div:
    if(result.show.image) {
    const newIMG = document.createElement('img');
    console.log(result.show.image.medium);
    const imgDiv = document.querySelector('.image-div');
    let imgName = result.show.image.medium;
    newIMG.src = imgName;
    // testing only:
    const newDiv = document.createElement('div');
    newDiv.setAttribute ('class', 'myClass');
    newDiv.innerHTML = `<p>${showName}</p>`;
    newDiv.append(newIMG);
    imgDiv.append(newDiv);
    }
  }
}

// Async API for TV Show
const tvShowReq = async (fieldValue) => {
  try {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${fieldValue}`);
  //console.log(res.data);
  iterateResults(res.data);
  } catch (e) {
    console.log("Error!", e);
  }
}; 

// Submit Button Functions
const submission = document.querySelector('#searchForm');
submission.addEventListener('submit', function(e) {
  const imgDiv = document.querySelector('.image-div');
  imgDiv.innerHTML = '';
  const contentUl = document.getElementById('content');
  contentUl.innerHTML = '';
  e.preventDefault();
  console.log("Submitted!")
  const input = submission.elements.query.value;
  tvShowReq(input);
  var para = document.querySelector("h2");
  para.classList.toggle('visibility');
  })




/* First Attempt: 5-15-22 ---------------------------------------------
  try {
    //const input = document.getElementById("search-bar").value;
    //Code above works, but not necessary when using the submission code
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${fieldValue}`);
  console.log(res.data);
  iterateResults(res.data);
  } catch (e) {
    console.log("Error!", e);
  }
}; 

 const contentUl = document.getElementById('content');
 const newLI = document.createElement('li');
 
  function iterateResults(results) {
   for(i = 0; i < results.length; i++) {
     newLI[i].append(results[i].name);
     contentUl.append("<li> " + `${results[i].name}` + "<br></li>");
     contentUl.append(newLI[i]);
   }
  } 
  
  2nd Attempt: -----------------------------------------------------

   function iterateResults(results) {
  for(let i = 0; i < results.length; i++){  // let show of shows Q
    console.log(results[i].show.name);
    let showName = results[i].show.name;
    const newLI = document.createElement('li');
    const contentUl = document.getElementById('content');
    let loopLI = newLI.append(` <li> ${showName}</li><br> `);
    contentUl.append(loopLI);
    }
} 


//why Elements? Name vs. id? Why not directly id?++ Object?

*/
  
  



  