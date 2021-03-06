import React from "react";

import { Tooltip } from "react-tippy";

import "react-tippy/dist/tippy.css";

const TooltipWrapper = ({ children, ...props }) => (
  <Tooltip
    delay={[1000, 100]}
    size="small"
    touchHold={true}
    style={{ display: "inline-block", maxWidth: "100%" }}
    {...props}
  >
    {children}
  </Tooltip>
);

export { TooltipWrapper };
