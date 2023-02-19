import React from "react";
import { Button, Center, Wrap, WrapItem } from "@chakra-ui/react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "./Buttons.css";
import { applyColor, moreInfo } from "./utils";

const Buttons = () => {
  return (
    <Center>
      <Wrap className="btn-container">
        <WrapItem>
          <Button
            className="applyButton"
            onClick={() => applyColor()}
            onMouseOver={() =>
              tippy(".applyButton", {
                content: "Apply <kbd>Ctrl+P</kdb>",
                placement: "bottom",
                animation: "scale",
                arrow: false,
                allowHTML: true,
              })
            }
          >
            Apply Color
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            className="moreInfoButton"
            onClick={() => moreInfo()}
            onMouseOver={() =>
              tippy(".moreInfoButton", {
                content: "Learn more <kbd>Ctrl+I</kdb>",
                placement: "bottom",
                animation: "scale",
                arrow: false,
                allowHTML: true,
              })
            }
          >
            More Info
          </Button>
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default Buttons;
