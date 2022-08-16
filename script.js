window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            let container = document.getElementById("container");
            json.sort((a, b) => b.hoursInSpace - a.hoursInSpace)
            for (astronaut of json) {
                container.innerHTML +=
                    `<div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li id= "${astronaut.id}">Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${astronaut.picture}>
            </div>`
                if (astronaut.active === true) {
                    document.getElementById(astronaut.id).style.color = "green"
                    document.getElementById(astronaut.id).style.fontWeight = "bold"

                }
            }
            document.getElementById("count").innerHTML += `Total number of astronauts: ${Object.keys(json).length}`
        })
    })
})