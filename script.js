fetch("http://localhost:5000/api/projects")
.then(response => response.json())
.then(data => {

    let output = "";

    data.forEach(project => {

        output += `
        <div class="project-card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <p>
                <strong>Technologies:</strong>
                ${project.technologies}
            </p>

            <a href="${project.githubLink}" target="_blank">
                GitHub Repository
            </a>

        </div>

        <hr>
        `;
    });

    document.getElementById("projectList").innerHTML = output;
})
.catch(error => console.log(error));