import React, { useState } from "react";
import { clearColorList, generateRandomColors, saveColor, swithTheme } from "./utils";
import tippy from "tippy.js";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import "./AccessTools.css";

const AccessTools = () => {
  let [theme, setTheme, getPresentTheme] = useState(true);

  setTheme = () => {
    theme = !theme;
    return theme ? 'light' : 'dark';
  }

  getPresentTheme = () => {
    return theme ? 'light': 'dark';
  }

  return (
    <div className="hotAccess" id="hotAccess">
      <ul className="tools" id="tools">
        <li
          className="randomColor"
          id="tool"
          onClick={() => generateRandomColors()}
          onMouseOver={() =>
            tippy(".randomColor", {
              content: "Random Color <kbd>Ctrl+R<kbd>",
              animation: "scale",
              arrow: false,
              allowHTML: true
            })
          }
        >
          <i className="fa-solid fa-dice-five"></i>
        </li>
        <li
          className="saveColor"
          id="tool"
          onClick={() => saveColor()}
          onMouseOver={() =>
            tippy(".saveColor", {
              content: "Save Color <kbd>Ctrl+S<kbd>",
              placement: "right",
              animation: "scale",
              arrow: false,
              allowHTML: true
            })
          }
        >
          <i className="fa-solid fa-bookmark"></i>
        </li>
        <li
          className="clearList"
          id="tool"
          onClick={() => clearColorList()}
          onMouseOver={() =>
            tippy(".clearList", {
              content: "Delete <kbd>Ctrl+D<kbd>",
              animation: "scale",
              placement: "right",
              arrow: false,
              allowHTML: true
            })
          }
        >
          <i className="fa fa-trash"></i>
        </li>
        <li
          className="app-theme"
          id="app-theme"
          onMouseOver={() => tippy('.app-theme', {
            content: 'Theme <kbd>Shift+T<kbd>',
            animation: 'scale',
            arrow: false,
            placement: 'right',
            allowHTML: true
          })}
          onClick={() => {
            swithTheme(setTheme());
          }}
        >
          <i className="fa fa-moon"></i>
        </li>
        <hr />
        <li
          className="repo"
          id="tool"
          onClick={() => {
            openRepo();
          }}
          onMouseOver={() =>
            tippy(".repo", {
              content: "Source Code",
              animation: "scale",
              placement: "right-end",
              arrow: false,
            })
          }
        >
          <i className="fa-brands fa-bitbucket"></i>
        </li>
        <li
          className="instagram"
          onMouseOver={() =>
            tippy(".instagram", {
              content: "Follow on Insta",
              placement: "bottom",
              animation: "scale",
              arrow: false,
            })
          }
          onClick={() => openInsta()}
        >
          <i className="fa-brands fa-instagram"></i>
        </li>
      </ul>
    </div>
  );
}


const openInsta = () => {
  window.open("https://www.instagram.com/dhanushh48/");
};

const openRepo = () => {
  window.open("https://www.bitbucket.org/dhanushhv/pycol-web-app/");
};

export default AccessTools;
