import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "../helper/DefaultStyle";
import Installment from "./Installment";
import CreditCard from "./CreditCard";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        background: "#FAFAFA",
      },
      root: {
        padding: paddingDownSm,
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 26,
        color: "#141414",
      },
      tabButtonsBlock: {
        marginTop: 10,
      },
      tabButtonActive: {
        paddingLeft: 14,
        paddingRight: 14,
        height: 38,
        backgroundColor: "#FFCF87",
        borderRadius: 4,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        width: "100%",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8,
        },
      },
      tabButton: {
        paddingLeft: 14,
        paddingRight: 14,
        height: 38,
        backgroundColor: "#E8E8E8",
        borderRadius: 4,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        width: "100%",
        textTransform: "none",
      },
      btn_p: {
        "& > div": {
          padding: "2px!important",
          width: "50%",
        },
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        background: "#FAFAFA",
      },
      ...rootSmXl,
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414",
      },
      tabButtonsBlock: {
        marginTop: 10,
      },
      tabButtonActive: {
        paddingLeft: 24,
        paddingRight: 24,
        height: "36px",
        backgroundColor: "#FFCF87",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8,
        },
      },
      tabButton: {
        paddingLeft: 24,
        paddingRight: 24,
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
      },
    },
  })
);

enum CardType {
  Installment,
  CreditCard,
}

const GoodAnyTimeWhere = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const [cardType, setCardType] = React.useState<CardType>(
    CardType.Installment
  );

  return (
    <Grid className={classes.mainRoot}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.title}>
            {t("block_3.title_main")}
          </Typography>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.tabButtonsBlock}
        >
          <Grid container spacing={2} className={classes.btn_p}>
            <Grid item>
              <Button
                onClick={() => {
                  setCardType(CardType.Installment);
                  ReactGA.event({
                    category: "",
                    action: "button_smart_installments",
                  });
                }}
                className={
                  cardType === CardType.Installment
                    ? classes.tabButtonActive
                    : classes.tabButton
                }
              >
                {t("block_3.button_1_tab_1")}
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  setCardType(CardType.CreditCard);
                  ReactGA.event({
                    category: "",
                    action: "button_smart_installments",
                  });
                }}
                className={
                  cardType === CardType.CreditCard
                    ? classes.tabButtonActive
                    : classes.tabButton
                }
              >
                {t("block_3.button_2_tab_2")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {cardType === CardType.Installment ? (
            <Installment {...props} />
          ) : (
            <CreditCard />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GoodAnyTimeWhere;
