import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        backgroundColor: "#FAFAFA"
      },
      root: {
        padding: "18px 13px 0px 13px"
      },
      descBlock: {
        height: "100%"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#141414",
        marginBottom: 24
      },
      googlePlayAppStore: {
        width: 120,
        height: 40,
        "&:hover": {
          cursor: "pointer"
        }
      },
      img: {
        width: 165,
        height: 242,
        marginTop: 20
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        backgroundColor: "#FAFAFA"
      },
      root: {
        padding: "61px 52px 0px 52px",
        maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto"
      },
      descBlock: {
        height: "100%"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#141414",
        marginBottom: 48
      },
      googlePlayAppStore: {
        "&:hover": {
          cursor: "pointer"
        }
      },
      img: {
        width: 330,
        height: 484,
        marginRight: 50
      }
    }
  })
);

const MobileBanking = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard_AppStore_download",
      action: "AppStore_download"
    });

    window.open(
      "https://apps.apple.com/kz/app/starbanking/id743617904",
      "_blank"
    );
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard_GooglePlay_download",
      action: "GooglePlay_download"
    });

    window.open(
      "https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru",
      "_blank"
    );
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root}>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <Grid container alignItems="center" className={classes.descBlock}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.title}>
                {t('block_7.title_main')}
              </Typography>
              <Typography className={classes.description}>
                {t('block_7.subtitle_desc')}
                <br />
                {t('block_7.subtitle_desc_2')}
              </Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <img
                    onClick={() => onClickAppStore()}
                    className={classes.googlePlayAppStore}
                    src="app_store.svg"
                    alt="app_store"
                  />
                </Grid>
                <Grid item>
                  <img
                    onClick={() => onClickGooglePlay()}
                    className={classes.googlePlayAppStore}
                    src="google_play.svg"
                    alt="google_play"
                  />
                </Grid>
                <Grid item>
                  <img
                    onClick={() => onClickGooglePlay()}
                    className={classes.googlePlayAppStore}
                    src="qr-code.svg"
                    alt="qrcode"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Grid container justify="center">
            <img
              className={classes.img}
              src="stars_mobile_banking.svg"
              alt="star_mobile_banking"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileBanking;
