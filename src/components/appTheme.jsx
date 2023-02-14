let appToolbar = document.getElementById("appToolBar");
let appContent = document.getElementById("AppContent");
let titleText = document.getElementById("titleText");
let spinBox1 = document.getElementById("RSet");
let spinBox2 = document.getElementById("GSet");
let spinBox3 = document.getElementById("BSet");
let userInput = document.getElementById("colorInput");
let inventory = document.getElementById("saved-colors");
let inventoryMessage = document.getElementById("empty-message");
let applyButton = document.getElementById("applyColor");
let moreInfoButton = document.getElementById("moreInfo");
let footerMessage = document.getElementById("pycol");
let appStatus = document.getElementById("appStatus");
let accessTools = document.getElementById("hotAccess");
let app = document.getElementById("app-theme");

const darkTheme = {
  bgColor: "#404258",
  toolBar: {
    bgColor: "#222831",
  },
  textColor: "#bbbbff",
  appLayout: {
    bgColor: "#222831",
  },
  spinBox: {
    bgColor: "#404258",
    color: "#bbbfff",
  },
  userInput: {
    bgColor: "#404258",
    color: "#bbbbff",
  },
  inventory: {
    bgColor: "#404258",
    color: "#bbbbff",
  },
  applyButton: {
    bgColor: "#404258",
    color: "#0080ff",
  },
  footer: {
    statusColor: '#00ff50',
    color: "#bbbbff",
  },
  accessTools: {
    bgColor: "#222831",
    color: "#aacccc",
  },
};

const lightTheme = {
  bgColor: "#fff",
  toolBar: {
    bgColor: "#00000022",
  },
  textColor: "#000",
  appLayout: {
    bgColor: "#fff",
  },
  spinBox: {
    bgColor: "#fff",
    color: "#000",
  },
  userInput: {
    bgColor: "#fff",
    color: "#000",
  },
  inventory: {
    bgColor: "#fff",
    color: "#000",
  },
  applyButton: {
    bgColor: "#fff",
    color: "#0080ff",
  },
  footer: {
    statusColor: '#007700',
    color: "#000",
  },
  accessTools: {
    bgColor: "#fff",
    color: "#a5bbd2",
  },
};

export const updateToolBar = (bgColor) => appToolbar.style.backgroundColor = bgColor;
export const updateAppTitle = (color) => titleText.style.color = color;
export const updateAppContent = (props) => {
  appContent.style.backgroundColor = props.bgColor;
  appContent.style.borderColor = props.borderColor;
}

export const updateSpinBox = (props) => {
  spinBox1.style.backgroundColor = props.bgColor;
  spinBox1.style.color = props.color;
  spinBox1.style.borderColor = props.borderColor;

  spinBox2.style.backgroundColor = props.bgColor;
  spinBox2.style.color = props.color;
  spinBox2.style.borderColor = props.borderColor;

  spinBox3.style.backgroundColor = props.bgColor;
  spinBox3.style.color = props.color;
  spinBox3.style.borderColor = props.borderColor;
}

export const updateUserInput = (props) => {
  userInput.style.backgroundColor = props.bgColor;
  userInput.style.color = props.color;
}

export { lightTheme, darkTheme };
