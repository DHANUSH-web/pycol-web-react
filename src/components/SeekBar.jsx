import React, { Component } from "react";
import { setSpinBoxValues, getSliderValues, triggerSliders } from "./utils";
import "tippy.js/dist/tippy.css";
import "./SeekBar.css";

class SeekBar extends Component {
  render() {
    return (
      <div className="progress_container">
        <div className="RSlider">
          <input type="range" defaultValue={ 255 } max={255} className="RSlide" id="RSlide" onChange={ () => setSpinBoxValues(getSliderValues()) }/>
          <input
            type="number"
            defaultValue={255}
            placeholder="Red"
            className="RSet"
            id="RSet"
            onChange={() => triggerSliders("RSet", "RSlide")}
          />
        </div>
        <div className="GSlider">
          <input
            type="range"
            defaultValue={255}
            max={255}
            className="GSlide"
            id="GSlide"
            onChange={() => setSpinBoxValues(getSliderValues())}
          />
          <input
            type="number"
            defaultValue={255}
            placeholder="Green"
            className="GSet"
            id="GSet"
            onInput={() => triggerSliders("GSet", "GSlide")}
          />
        </div>
        <div className="BSlider">
          <input
            type="range"
            defaultValue={255}
            max={255}
            className="BSlide"
            id="BSlide"
            onChange={() => setSpinBoxValues(getSliderValues())}
          />
          <input
            type="number"
            defaultValue={255}
            placeholder="Blue"
            className="BSet"
            id="BSet"
            onChange={() => triggerSliders("BSet", "BSlide")}
          />
        </div>
      </div>
    );
  }
}

export default SeekBar;
