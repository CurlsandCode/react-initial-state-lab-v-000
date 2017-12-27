// ImageSlider Component Code Goes Here
import React from 'react';

class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
    currentSlideIndex : 0
    }
  }

  render() {
    return (

       <div>
<<<<<<< HEAD
       <h1>I am on slide {this.props.currentSlideIndex}</h1>
=======
       <h1>I am on slide ${this.props.currentSlideIndex}</h1>
>>>>>>> ce6fae0656f0feec2557b3bf2a1ad87066141e97
       </div>

    )
  }
}

export default ImageSlider;
