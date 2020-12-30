import React from "react";
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 72,
      width: "100vw",
      background: "#FFCF87",
      paddingLeft: 50,
      paddingRight: 50
    },
    message: {
      fontSize: 16,
      color: "#141414"
    }
  })
);

const styles = {
  root: {
    width: "100vw"
  },
  anchorOriginBottomCenter: {
    bottom: 0
  }
};

const SnackbarWrap = withStyles(styles)(Snackbar);

const SnackBarBottom = (props: any) => {
  const classes = useStyles({});

  return (
    <SnackbarWrap
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      open={props.open || false}
      onClose={() => props.close()}
    >
      <SnackbarContent
        className={classes.root}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            {props.message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={() => props.close()}
          >
            <CloseIcon className={classes.message} />
          </IconButton>
        ]}
      />
    </SnackbarWrap>
  );
};

export default SnackBarBottom;
