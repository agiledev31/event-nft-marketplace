import React, { useState } from "react";
import { Button, Fade, Paper, Popper, Typography } from "@material-ui/core";
import { RedButton } from "./Buttons";
import { withStyles } from "@material-ui/styles";

const RenderButton = withStyles({
  root: {
    color: "#fff",
    fontSize: "12px",
    padding: "0",
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

export default function DeletePopper(props) {
  const { onClickDelete, setDeletePopupStatus } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setDeletePopupStatus(true);
    setAnchorEl(anchorEl ? null : event.target);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  return (
    <div
      onMouseLeave={() => {
        setDeletePopupStatus(false);
        setAnchorEl(null);
      }}
    >
      <RenderButton
        aria-describedby={id}
        className="card__delete_btn"
        onClick={handleClick}
        large={false}
        small={true}
      >
        Delete
      </RenderButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="top-end"
        transition
        disablePortal={false}
        style={{
          zIndex: 1000,
        }}
        modifiers={{
          flip: {
            enabled: true,
          },
          preventOverflow: {
            enabled: false,
            boundariesElement: "scrollParent",
          },
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              style={{
                padding: 12,
                width: 250,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography style={{ fontSize: 14, marginBottom: 12 }}>
                Do you really want to delete?
              </Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  onClick={() => {
                    setDeletePopupStatus(false);
                    setAnchorEl(null);
                  }}
                >
                  Cancel
                </Button>
                <RedButton small={true} large={false} onClick={onClickDelete}>
                  Delete
                </RedButton>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
