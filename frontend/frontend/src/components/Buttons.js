import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";

const BlueButton = ({ large, small, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: "#ffffff",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 600,
      padding: large
        ? "11px 35px 10px 36px"
        : small
        ? "0 30px"
        : "7px 35px 6px 36px",
      backgroundColor: "#4588ff",
      borderRadius: "6px",
      textTransform: "inherit",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "#437ee8",
      },
      "&:focus": {
        outline: "none",
      },
      "&.Mui-disabled": {
        color: "#f0f0f0",
        backgroundColor: "#437ee8",
        opacity: 0.6,
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const DarkGreenButton = ({ large, small, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: "#ffffff",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 600,
      padding: large
        ? "11px 35px 10px 36px"
        : small
        ? "0 30px"
        : "7px 35px 6px 36px",
      backgroundColor: "#207868",
      borderRadius: "6px",
      textTransform: "inherit",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "#368576",
      },
      "&:focus": {
        outline: "none",
      },
      "&.Mui-disabled": {
        color: "#f0f0f0",
        backgroundColor: "#368576",
        opacity: 0.6,
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const GrayButton = ({ large, small, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: "#2e2e2e",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 600,
      padding: large
        ? "11px 35px 10px 36px"
        : small
        ? "0 30px"
        : "7px 35px 6px 36px",
      backgroundColor: "#eaebec",
      borderRadius: "6px",
      textTransform: "inherit",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "#d7d7d7",
      },
      "&:focus": {
        outline: "none",
      },
      "&.Mui-disabled": {
        backgroundColor: "#d7d7d7",
        opacity: 0.6,
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const RedButton = ({ large, small, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: "#ffffff",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 600,
      padding: large
        ? "11px 35px 10px 36px"
        : small
        ? "0 30px"
        : "7px 35px 6px 36px",
      backgroundColor: "#ec2425",
      borderRadius: "6px",
      textTransform: "inherit",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "#d92424",
      },
      "&:focus": {
        outline: "none",
      },
      "&.Mui-disabled": {
        color: "#f0f0f0",
        backgroundColor: "#d92424",
        opacity: 0.6,
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const BlueOutlineButton = ({ large, small, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: "#4588ff",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 500,
      padding: large ? "10px 35px 9px 36px" : small ? "0" : "6px 35px 5px 36px",
      backgroundColor: "rgba(69, 136, 255, 0.1)",
      borderRadius: "6px",
      border: "solid 2px #4588ff",
      textTransform: "inherit",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "#eaebec",
      },
      "&:focus": {
        outline: "none",
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const GrayOutlineButton = ({ large, small, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: "#2e2e2e",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 500,
      padding: large ? "10px 35px 9px 36px" : small ? "0" : "6px 35px 5px 36px",
      backgroundColor: "#ffffff",
      borderRadius: "6px",
      border: "solid 2px #f0f0f0",
      textTransform: "inherit",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "#eaebec",
      },
      "&:focus": {
        outline: "none",
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const PurpleButton = ({ large, small, children, ...other }) => {
  const RenderButton = withStyles({
    root: {
      color: "#fff",
      fontSize: "12px",
      padding: large ? "10px 35px 9px 36px" : small ? "0" : "6px 35px 5px 36px",
      backgroundColor: "#702FA0",
      borderRadius: "5px",
      border: "solid 1px #f0f0f0",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      "&:hover": {
        backgroundColor: "#702FA0",
      },
      "&:focus": {
        outline: "none",
      },
    },
  })(Button);

  return <RenderButton {...other}>{children}</RenderButton>;
};

const ActionButton = withStyles({
  root: {
    "&:focus": {
      outline: "none",
    },
  },
})(IconButton);

export {
  BlueButton,
  DarkGreenButton,
  GrayButton,
  RedButton,
  BlueOutlineButton,
  GrayOutlineButton,
  PurpleButton,
  ActionButton,
};
