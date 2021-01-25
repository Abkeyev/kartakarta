import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, paddingSmXl, rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";
import "../App.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        background: "url(kartakarta-mob.png) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top right!important",
        padding: paddingDownSm,
        height: "460px",
        paddingBottom: 0,
        paddingLeft: "18px",
        paddingRight: "18px",
      },
      root: {
        height: "400px",
        alignContent: "space-between",
      },
      logo_img: {
        width: "126px",
        height: "30px",
      },
      cardDescriptionBlock: {
        marginTop: "5px",
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "32px",
        color: "white",
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        color: "white",
        opacity: 0.87,
        marginBottom: 10,
      },
      featureTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        color: "white",
        marginTop: "3px!important",
      },
      featureDesc: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "12px",
        color: "white",
        opacity: 0.54,
      },
      buttonOrderCard: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "13px",
        height: "46px",
        width: "50%",
        textTransform: "none",
        marginTop: "10px",
        backgroundColor: "white",
        borderRadius: "2px",
        color: "#141414",
        marginBottom: "20px",
      },
      grid_header: {
        margin: 0,
        display: "grid",
        "& > div": {
          padding: "5px 0!important",
        },
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        background: "url(header-main2.svg) no-repeat center center fixed",
        backgroundSize: "cover",
        height: 580,
      },
      ...rootSmXl,
      root: {
        background: "unset",
        backgroundSize: "cover",
        backgroundPosition: "top !important",
        padding: paddingSmXl,
        paddingBottom: 0,
      },
      logo_img: {
        width: "168px",
        height: "40px",
      },
      cardDescriptionBlock: {
        marginTop: "80px",
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "48px",
        color: "white",
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color: "white",
        opacity: 0.87,
      },
      featureTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        color: "white",
        marginTop: "42px",
      },
      featureDesc: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "white",
        opacity: 0.54,
      },
      buttonOrderCard: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        height: "64px",
        width: "232px",
        textTransform: "none",
        marginTop: "65px",
        backgroundColor: "white",
        borderRadius: "4px",
        color: "#141414",
        marginBottom: "150px",
      },
    },
    [theme.breakpoints.between("sm", "md")]: {
      mainRoot: {
        height: 620,
      },
    },
    [theme.breakpoints.between("lg", "xl")]: {
      mainRoot: {
        height: 680,
      },
    },
    select: {
      color: "white",
      "&:before": {
        borderColor: "white",
      },
      "&:after": {
        borderColor: "white",
      },
    },
    icon: {
      fill: "white",
    },
  })
);

const Header = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();
  const eventGAOrderCard = () => {
    ReactGA.event({
      category: "BccCard_1button_to_order_card",
      action: "1button_to_order_card",
    });
    props.scrollToOrder(true);
  };

  const handleLangChange = (lang: any) => {
    props.changeLang(lang);
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <div className={classes.logo_div}>
                <img
                  className={classes.logo_img}
                  src="white-new-logo.svg"
                  alt="logo-bcc"
                />
              </div>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              style={{ textAlign: "right" }}
            >
              <Select
                className={classes.select}
                value={props.lang}
                onChange={(e: any) => handleLangChange(e.target.value)}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
              >
                <MenuItem value="ru">Рус</MenuItem>
                <MenuItem value="kz">Каз</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container className={classes.cardDescriptionBlock}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.cardTitle}>
                {t("header.title")}
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.cardWhatYourWant}>
                {t("header.subtitle_desc")}
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={6} className={classes.grid_header}>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    {t("header.title_2_desc")}
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    {t("header.subtitle_2_desc")}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    {t("header.title_3_desc")}
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    {t("header.subtitle_3_desc")}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    {t("header.title_4_desc")}
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    {t("header.subtitle_4_desc")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Button
                onClick={() => eventGAOrderCard()}
                variant="contained"
                className={classes.buttonOrderCard}
              >
                {t("header.button_main")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
