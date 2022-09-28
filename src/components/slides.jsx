import React, { Component } from "react";
import SlideContent from "./slideContent";
class Slides extends Component {
  state = {
    // slides's state has slides(an array of object) and currentPage
    slides: [
      {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises.",
      },
      {
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush.",
      },
      {
        title: "Next, 20 squats",
        text: "Squats are important. Remember to keep your back straight.",
      },
      {
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion.",
      },
      {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!",
      },
    ],
    currentPage: 0,
  };
  render() {
    const { currentPage, slides } = this.state;
    return (
      <div className="slides-board w-50">
        {/* clearfix to clear after float button, make slide content start on new line */}
        <div className="clearfix">
          <button
            className="btn btn-success float-left mr-3"
            onClick={() => this.setState({ currentPage: 0 })}
            disabled={currentPage === 0}
          >
            Restart
          </button>
          <button
            className="btn btn-success float-left mr-3"
            onClick={() => this.setState({ currentPage: currentPage + 1 })}
            disabled={currentPage === slides.length - 1}
          >
            Next
          </button>
          <button
            className="btn btn-success float-left"
            onClick={() => this.setState({ currentPage: currentPage - 1 })}
            disabled={currentPage === 0}
          >
            Previous
          </button>
        </div>
        <SlideContent
          slides={this.state.slides}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Slides;
