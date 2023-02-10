import { React, Component } from "react";
import {
  getHexCode,
  copyHexCode,
  applyColor,
  moreInfo,
} from "./components/utils";
import { toast, Toaster } from "react-hot-toast";
import MacAppToolBar from "./components/AppToolBar";
import AccessTools from "./components/AccessTools";
import SeekBar from "./components/SeekBar";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "./App.css";

const developerProfile = "https://www.bitbucket.org/dhanushhv/";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="layout">
            <MacAppToolBar />
            <div id="AppContent" className="appContent">
              <div className="color_choose">
                <p className="app-title">
                  <i className="fa-solid fa-fill-drip" id="fontawesome"></i>
                  <span
                    className="title-text"
                    id="titleText"
                    onClick={() => window.open(developerProfile)}
                  >
                    Color Picker
                  </span>
                </p>
              </div>
              <SeekBar />
              <div className="controls">
                <p className="color_peview">
                  <i className="fa-sharp fa-solid fa-eye" id="fontawesome"></i>
                  <span className="title-text">Color Preview</span>
                </p>
                <div className="preview" id="preview">
                  <div
                    className="copyIcon"
                    onClick={() => copyHexCode()}
                    onMouseOver={() =>
                      tippy(".copyIcon", {
                        content: "Copy Color Code",
                        animation: "scale",
                        placement: "top",
                        arrow: false,
                      })
                    }
                  >
                    <span id="hexColor">{getHexCode([255, 255, 255])}</span> |{" "}
                    <span id="copyIcon">
                      <i className="fa-solid fa-copy"></i>
                    </span>
                  </div>
                </div>
                <input
                  type="text"
                  className="colorInput"
                  id="colorInput"
                  placeholder="Enter your color..."
                />
                <div
                  className="saved-colors"
                  id="saved-colors"
                  onMouseOver={() => {
                    document.getElementById("empty-message").innerHTML =
                      'Click<i class="fa fa-bookmark" id="tipIcon"></i>to save colors';
                    tippy(".saved-colors", {
                      content: "Color List",
                      placement: "top",
                      animation: "scale",
                      arrow: false,
                    });
                  }}
                  onMouseOut={() => {
                    document.getElementById("empty-message").innerHTML =
                      "Inventory is empty";
                  }}
                >
                  <span id="empty-message">Inventory is empty</span>
                </div>
                <div id="control-buttons">
                  <button
                    id="applyColor"
                    onClick={() => applyColor()}
                    onMouseOver={() =>
                      tippy("#applyColor", {
                        content: "Click to apply custom color",
                        placement: "bottom",
                        animation: "scale",
                        arrow: false,
                      })
                    }
                  >
                    <i className="fa-solid fa-circle-check" id="applyIcon"></i>
                    Apply
                  </button>
                  <button
                    id="moreInfo"
                    onClick={() => moreInfo()}
                    onMouseOver={() =>
                      tippy("#moreInfo", {
                        content: "Learn more",
                        placement: "bottom",
                        animation: "scale",
                        arrow: false,
                      })
                    }
                  >
                    <i
                      className="fa-solid fa-circle-info"
                      id="moreInfoIcon"
                    ></i>
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
          <AccessTools />
        </div>
        <br />
        <br />
        <p className="developer">
          <i className="fa fa-swatchbook" id="logoIcon"></i>
          <span id="pycol">
            <b>
              PyCOL<sup id="appStatus">BETA</sup>
            </b>{" "}
            is developed by
          </span>
          <span
            className="devName"
            onClick={() => {
              window.open(developerProfile);
            }}
          >
            <b>Dhanush H V</b>
          </span>
        </p>
        <Toaster />
      </>
    );
  }
}

export default App;
