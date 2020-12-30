import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm,
      },
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 26,
        color: "#141414",
      },
      mainDescription: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#8B98A7",
        marginBottom: 10,
      },
      paper: {
        padding: "12px 8px 12px 8px",
        background: "#FAFAFA",
        border: "1px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "2px",
        height: "100%",
      },
      icon: {
        width: "40px",
        height: "40px",
        marginRight: "16px",
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#141414",
        lineHeight: 1,
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        color: "#5B5B5B",
        marginTop: 5,
        lineHeight: 1.2,
      },
      ul: {
        padding: 0,
        paddingLeft: 15,
        margin: 0,
        marginTop: 10,
      },
      li: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        color: "#5B5B5B",
        "& > a": {
          color: "#3F0259",
        },
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        color: "#141414",
      },
      mainDescription: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#8B98A7",
        marginBottom: "16px",
      },
      paper: {
        padding: "27px 32px 27px 32px",
        background: "#FAFAFA",
        border: "1px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "8px",
        height: "100%",
      },
      icon: {
        width: "80px",
        height: "80px",
        marginRight: "32px",
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#141414",
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#5B5B5B",
        marginTop: 16,
      },
      ul: {
        padding: 0,
        paddingLeft: 15,
        margin: 0,
        marginTop: 16,
      },
      li: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#5B5B5B",
        "& > a": {
          color: "#3F0259",
        },
      },
    },
  })
);

const BestCard = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  return (
    <Grid container className={classes.root} id="secondHeader">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.mainTitle}>
          {t("block_2.title_main")}
        </Typography>
        <Typography className={classes.mainDescription}>
          {t("block_2.subtitle_desc")}
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img
                  src="about_installment_credit.svg"
                  className={classes.icon}
                  alt="installment"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  {t("block_2.title_2_desc")}
                </Typography>
                <Typography className={classes.description}>
                  {t("block_2.subtitle_2_desc")}
                  <br />
                  {t("block_2.subtitle_2_1_desc")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img
                  src="about_cashback.svg"
                  className={classes.icon}
                  alt="cashback"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  {t("block_2.title_3_desc")}
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>{t("block_2.subtitle_3_desc")}</li>
                  <li className={classes.li}>
                    {t("block_2.subtitle_3_1_desc")}
                  </li>
                  <li className={classes.li}>
                    {t("block_2.subtitle_3_2_desc")}
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img
                  src="about_fast_decision.svg"
                  className={classes.icon}
                  alt="decision"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  {t("block_2.title_4_desc")}
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>{t("block_2.subtitle_4_desc")}</li>
                  <li className={classes.li}>
                    {t("block_2.subtitle_4_1_desc")}
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img src="about_free.svg" className={classes.icon} alt="free" />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  {t("block_2.title_5_desc")}
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>{t("block_2.subtitle_5_desc")}</li>
                  <li className={classes.li}>
                    {t("block_2.subtitle_5_1_desc")}
                  </li>
                  <li className={classes.li}>
                    {t("block_2.subtitle_5_1_desc_1")}
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BestCard;
