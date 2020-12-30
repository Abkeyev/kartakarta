import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        backgroundColor: "white",
      },
      root: {
        padding: paddingDownSm,
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "26px",
        marginBottom: 20,
      },
      subtitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#5B5B5B",
        marginBottom: 10,
      },
      subtitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        color: "#5B5B5B",
        marginBottom: 10,
      },
      buttonPartner: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B",
        marginTop: 10,
      },
      noteButtonPartner: {
        textTransform: "none",
        color: "#3F0259",
        fontSize: 14,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: "#3F0259",
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        padding: "20px 0",
      },
      ...rootSmXl,
      mainBg: {
        backgroundImage: "url(partners_bg2.svg)",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      },
      myFont: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 32,
        textAlign: "center",
        color: "white",
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        marginBottom: 20,
      },
      subtitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#5B5B5B",
        marginBottom: 10,
      },
      subtitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        color: "#5B5B5B",
        marginBottom: 10,
      },
      buttonPartner: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B",
        marginTop: 10,
      },
      noteButtonPartner: {
        textTransform: "none",
        color: "#3F0259",
        fontSize: 16,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: "#3F0259",
      },
    },
  })
);

const Partners = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);

  const classes = useStyles({});
  const { t } = useTranslation();
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const isValid = () =>
    fio.length > 1 && phoneNumber.replace("_", "").length === 16 && agree;

  return (
    <Grid container className={classes.mainRoot}>
      <Grid
        container
        className={`${classes.root} ${classes.mainBg}`}
        spacing={4}
      >
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Typography className={classes.title}>
            {t("partner.text_1")}
          </Typography>
          <Typography className={classes.subtitle}>
            {t("partner.text_2")}
          </Typography>
          <Typography className={classes.subtitleDesc}>
            {t("partner.text_3")}
          </Typography>
          <Typography className={classes.subtitleDesc}>
            {t("partner.text_4")}
          </Typography>

          <Typography className={classes.buttonPartner}>
            <Button
              href="https://www.bcc.kz/partners/?utm_source=kartakarta_partners&utm_medium=button_click&utm_campaign=kartakarta"
              target="_blank"
              variant="outlined"
              className={classes.noteButtonPartner}
            >
              {t("partner.button_main")}
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Partners;
