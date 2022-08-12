window.addEventListener("load", function(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
   .then((response) => response.json()) 
    .then((jsonData) => {
        const divContainer = document.getElementById("container")
        let astronauts = "";
        for (astronaut of jsonData) {
            astronauts += `
            <div class="astronaut">
       <div class="bio">
          <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
          <ul>
             <li>Hours in space: ${astronaut.hoursInSpace}</li>
             <li>Active: ${astronaut.active}</li>
             <li>Skills: ${astronaut.skills.toString()}</li>
          </ul>
       </div>
       <img class="avatar" src="${astronaut.picture}">
    </div> `

        }
    divContainer.innerHTML = astronauts;
    })
});