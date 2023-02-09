const widgets = {
  appToolbar: document.getElementById("appToolBar"),
  appContent: document.getElementById("AppContent"),
  titleText: document.getElementById("titleText"),
  spinBox1: document.getElementById("RSet"),
  spinBox2: document.getElementById("GSet"),
  spinBox3: document.getElementById("BSet"),
  userInput: document.getElementById("colorInput"),
  inventory: document.getElementById("saved-colors"),
  inventoryMessage: document.getElementById("empty-message"),
  applyButton: document.getElementById("applyColor"),
  moreInfoButton: document.getElementById("moreInfo"),
  footerMessage: document.getElementById("pycol"),
  accessTools: document.getElementById("hotAccess"),
  tools: document.getElementsByClassName("tool"),
};

const darkTheme = {
  bgColor: "#1B2430",
  toolBar: {
    bgColor: "#222831",
  },
  textColor: "#bbbbff",
  appLayout: {
    bgColor: "#404258",
  },
  spinBoxbg: {
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
    color: "#bbbbff",
  },
  accessTools: {
    bgColor: "#404258",
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
  spinBoxbg: {
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
    color: "#bbbbff",
  },
  accessTools: {
    bgColor: "#fff",
    color: "#a5bbd2",
  },
};

export { widgets, lightTheme, darkTheme };
