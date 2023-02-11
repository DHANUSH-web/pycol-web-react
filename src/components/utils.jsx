import toast from "react-hot-toast";
import tippy from "tippy.js";
import "tippy.js/animations/scale.css";

export const getSliderValues = () => {
  let r = parseInt(document.getElementById("RSlide").value);
  let g = parseInt(document.getElementById("GSlide").value);
  let b = parseInt(document.getElementById("BSlide").value);

  return [r, g, b];
};

export const getSpinBoxValues = () => {
  let r = parseInt(document.getElementById("RSet").value);
  let g = parseInt(document.getElementById("GSet").value);
  let b = parseInt(document.getElementById("BSet").value);

  return [r, g, b];
};

export const setSliderValues = (color) => {
  document.getElementById("RSlide").value = color[0];
  document.getElementById("GSlide").value = color[1];
  document.getElementById("BSlide").value = color[2];
  let hex = getHexCode(color);
  document.getElementById("preview").style.backgroundColor = hex;
  document.getElementById("hexColor").innerHTML = hex;
};

export const setSpinBoxValues = (color) => {
  document.getElementById("RSet").value = color[0];
  document.getElementById("GSet").value = color[1];
  document.getElementById("BSet").value = color[2];
  let hex = getHexCode(color);
  document.getElementById("preview").style.backgroundColor = hex;
  document.getElementById("hexColor").innerHTML = hex;
};

const updateWidgets = (color) => {
  try {
    for (let i = 0; i < 3; i++) color[i] = parseInt(color[i]);

    setSliderValues(color);
    setSpinBoxValues(color);
    let hex = getHexCode(color);
    document.getElementById("preview").style.backgroundColor = hex;
    document.getElementById("hexColor").innerHTML = hex;
  } catch (e) {
    toast.error("Something went wrong");
  }
};

export const triggerSliders = (spinId, sliderId) => {
  let spinBox = document.getElementById(spinId);
  let spinBoxValue = parseInt(spinBox.value);

  if (spinBoxValue < 0 || spinBoxValue > 255)
    toast.error("Values must only be 0 to 255");
  else if (spinBox.value.length === 0) toast.error("Input cannot be empty");
  else {
    document.getElementById(sliderId).value = spinBoxValue;
    let hex = getHexCode(getSliderValues());
    document.getElementById("preview").style.backgroundColor = hex;
    document.getElementById("hexColor").innerHTML = hex;
  }
};

export const toHex = (color) => {
  let hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const getHexCode = (color) => {
  return (
    "#" +
    toHex(color[0]) +
    toHex(color[1]) +
    toHex(color[2])
  ).toUpperCase();
};

export const copyHexCode = () => {
  try {
    let hex = getHexCode(getSliderValues());
    navigator.clipboard.writeText(hex);
    toast.success("Copied to clipboard");
  } catch (e) {
    toast.error("Something went wrong");
  }
};

export const getRGB = (hex) => {
  if (hex.length === 6) {
    let r, g, b;

    r = hex.substring(0, 2);
    g = hex.substring(2, 4);
    b = hex.substring(4, 6);

    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    return [r, g, b];
  } else
    toast("Please enter a valid hex color code", {
      position: "top-center",
    });
};

export const generateRandomColors = () => {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  setSliderValues([r, g, b]);
  setSpinBoxValues([r, g, b]);
};

const validateColor = (color) => {
  color = parseInt(color);
  return color >= 0 && color <= 255;
};

export const applyColor = () => {
  const stdColors = {
    white: [255, 255, 255],
    black: [0, 0, 0],
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
    teal: [0, 128, 128],
    pink: [255, 0, 255],
    yellow: [255, 255, 0],
    aqua: [0, 255, 255],
    orange: [255, 135, 0],
  };

  let widget = document.getElementById("colorInput");
  let color = widget.value;

  if (color[0] === "#") {
    if (color.length !== 7)
      toast.error("Hex code is invalid", {
        style: {
          fontFamily: "pycol",
          fontWeight: "bolder",
        },
      });
    else updateWidgets(getRGB(color.substring(1)));
  } else if (color.length === 0)
    toast.error("Field is empty", {
      style: {
        fontFamily: "pycol",
        fontWeight: "bolder",
      },
    });
  else if (color.toLowerCase() in stdColors) {
    updateWidgets(stdColors[color.toLowerCase()]);
  } else {
    color = color.split(" ");
    if (color.length !== 3)
      toast.error("Invalid color", {
        style: {
          fontFamily: "pycol",
          fontWeight: "bolder",
        },
      });
    else if (
      validateColor(color[0]) &&
      validateColor(color[1]) &&
      validateColor(color[2])
    )
      updateWidgets(color);
    else
      toast.error("Values must be in 0 to 255 range", {
        style: {
          fontFamily: "pycol",
          fontWeight: "bolder",
          fontSize: 13,
        },
      });
  }
};

export const moreInfo = () => {
  toast.success("PyCOL is developed by Dhanush H V", {
    style: {
      fontFamily: "pycol",
      fontWeight: "bolder",
      fontSize: "13px",
      backgroundColor: "#333",
      color: "#fff",
    },
  });
};

export const saveColor = () => {
  let color = getSliderValues();
  let stack = document.getElementById("saved-colors");
  let initialChild = document.getElementById("empty-message");

  if (stack.childElementCount === 7) toast.error("No space, clear the list");
  else {
    if (stack.contains(initialChild)) stack.removeChild(initialChild);

    let block = document.createElement("div");
    let hexCode = getHexCode(color);
    block.id = "savedColor";
    block.draggable = true;
    block.onclick = () => updateWidgets(color);
    block.onmouseover = () => {
      tippy("#savedColor", {
        content: hexCode,
        animation: "scale",
        placement: "bottom",
        arrow: false,
      });
    };
    block.ondragend = () => {
      block.remove();
      if (stack.childElementCount === 0) {
        let span = document.createElement("span");
        span.id = "empty-message";
        span.innerHTML = "Inventory is empty";
        stack.appendChild(span);
      }
    };

    block.style.backgroundColor = hexCode;
    stack.appendChild(block);
  }
};

// var isDark = false;

// export const switchTheme = () => {

//   if (isDark === false) {
//     isDark = true;
//     widgets.appToolbar.style.backgroundColor = lightTheme.toolBar.bgColor;
//     widgets.appContent.style.backgroundColor = lightTheme.appLayout.bgColor;
//     document.body.style.backgroundColor = lightTheme.bgColor;
//   }

//   else {
//     isDark = false;
//     widgets.appToolbar.style.backgroundColor = darkTheme.toolBar.bgColor;
//     widgets.appContent.style.backgroundColor = darkTheme.appLayout.bgColor;
//     document.body.style.backgroundColor = darkTheme.bgColor;
//   }
// }

export const clearColorList = () => {
  let stack = document.getElementById("saved-colors");
  let initialChild = document.getElementById("empty-message");

  if (stack.childElementCount === 1 && stack.contains(initialChild))
    toast.error("Color list is empty");
  else {
    document.getElementById("savedColor").remove();
    if (stack.childElementCount === 0) {
      let span = document.createElement("span");
      span.id = "empty-message";
      span.innerHTML = "No saved colors";
      stack.appendChild(span);
    }
  }
};

document.addEventListener(
  "keydown",
  (e) => {
    if (e.ctrlKey && String.fromCharCode(e.keyCode) === "P") {
      e.preventDefault();
      applyColor();
    } else if (e.ctrlKey && String.fromCharCode(e.keyCode) === "R") {
      e.preventDefault();
      generateRandomColors();
    } else if (e.ctrlKey && String.fromCharCode(e.keyCode) === "I") {
      e.preventDefault();
      moreInfo();
    } else if (e.ctrlKey && String.fromCharCode(e.keyCode) === "S") {
      e.preventDefault();
      saveColor();
    } else if (e.ctrlKey && String.fromCharCode(e.keyCode) === "D") {
      e.preventDefault();
      clearColorList();
    } else if (e.ctrlKey && String.fromCharCode(e.keyCode) === "C") {
      e.preventDefault();
      copyHexCode();
    } else if (
      e.shiftKey &&
      String.fromCharCode(e.keyCode) === "C"
    ) {
      e.preventDefault();
      let rgb = getSliderValues();
      navigator.clipboard.writeText(`${rgb[0]}, ${rgb[1]}, ${rgb[2]}`);
      toast.success("You got the RGB :)", {
        style: {
          fontFamily: "pycol",
          fontWeight: "bolder",
          fontSize: 14,
          position: "top-center",
        },
      });
    }
  },
  false
);

export default updateWidgets;
