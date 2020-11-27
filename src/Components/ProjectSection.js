import React from "react";
import ProjectCard from "./ProjectCard";
function ProjectSection() {
  return (
      <div id="projectSection">
          <h1>PROJECTS</h1>

          <div className="container">
            <div class="card-deck">
              <div className="card">
              <ProjectCard title="Project 1" image="..\images\p2.jpg" description="Test Description" />
              </div>
               {/* <div class="card">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">fdsafdsa</h5>
                  <p class="card-text">fsdafdsa</p>
                </div>
              </div>
            </div> */}
            </div>
          </div>

      </div>
  );
}

export default ProjectSection;