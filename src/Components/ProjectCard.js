import React from "react";
function ProjectCard(props) {
  return (
      <div id="projectCard">

        <img class="card-img-top" src="{props.image}" alt="Card image cap"></img>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
        </div>


      </div>
  );
}

export default ProjectCard;