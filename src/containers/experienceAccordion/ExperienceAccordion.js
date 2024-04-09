import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          const experiencesLength = section["experiences"].length;
          return (
            <div key={section["title"]} className="accord-panel">
              <h2
                style={{
                  backgroundColor: theme.body,
                  borderRadius: `5px`,
                  color: theme.text,
                  marginBottom: `3px`,
                  fontFamily: "Google Sans Regular",
                }}
              >
                {section["title"]}
              </h2>

              <div style={{ backgroundColor: theme.body }}>
                {section["experiences"].map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    index={index}
                    totalCards={experiencesLength}
                    distanceToNextCard={
                      index !== experiencesLength - 1
                        ? section["experiences"][index + 1].position -
                          experience.position
                        : null
                    }
                    experience={experience}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
