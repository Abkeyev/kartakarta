import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import CloseIcon from "@material-ui/icons/Close";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm,
      },
      fixedRoot: {
        width: "100%",
        cursor: "pointer",
        marginBottom: 16,
        marginRight: 16,
        "& img": {
          width: "300px",
        },
      },
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "26px",
        color: "#141414",
        marginBottom: 24,
      },
      bannerMain: {
        flexWrap: "nowrap",
        overflowX: "auto",
        justifyContent: "flex-start",
        width: "100%",
      },
      modalClose: {
        position: "relative",
        width: "100%",
        zIndex: 1000,
      },
      modalMain: {
        zIndex: 1000,
        borderRadius: 8,
        background: "white",
        height: 400,
        position: "relative",
        overflowY: "auto",
        overflowX: "hidden",
      },
      notScroll: {
        overflowY: "hidden",
        overflowX: "hidden",
        height: "100%",
      },
      fixedBtn: {
        position: "absolute",
        margin: "auto",
        right: 30,
        height: 48,
        top: 0,
        width: 48,
        bottom: 0,
      },
      fixedBtnModal: {
        position: "absolute",
        margin: "auto",
        right: 0,
        color: "white",
        zIndex: 1001,
        top: -48,
      },
      fixedModal: {
        display: "none",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: ".3s",
        "& img": {
          zIndex: 102,
          width: "100%",
        },
      },
      fixedImgModal: {
        zIndex: 103,
        opacity: 1,
        "& img:first-child": {
          display: "none",
        },
      },

      imgPhoneBanner: {
        "& img": {
          width: "47%",
          marginRight: 10,
          borderRadius: 10,
        },
      },
      imgPhoneBanner2: {
        "& img": {
          width: "50%",
          borderRadius: 10,
        },
      },
      modalTables: {
        border: "1px solid #dee2e6",
        marginTop: 10,
        "& td": {
          padding: "16px",
        },
        "& tr:last-child": {
          borderBottom: "0px solid #dee2e6",
        },
        "& tr": {
          borderBottom: "1px solid #dee2e6",
          display: "flex",
          "& td:nth-child(1)": {
            width: "70%",
          },
          "& td:nth-child(2)": {
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid #dee2e6",
          },
        },
      },
      modalTitle: {
        padding: "20px 16px",
        "& h3": {
          marginTop: 0,
          fontSize: 20,
          color: "#141414",
        },
        "& p": {
          fontSize: 14,
          margin: "8px 0 16px 0",
        },
        "& h4": {
          fontSize: 12,
          margin: "0",
        },
      },
      chooseTitle: {
        marginTop: 24,
        "& span": {
          display: "block",
          fontWeight: "normal",
          fontSize: "14px",
          color: "#141414",
          paddingLeft: 26,
          lineHeight: "24px",
          position: "relative",
          marginBottom: 4,
          "&:before": {
            content: "' '",
            position: "absolute",
            margin: "auto",
            top: 10,
            left: 8,
            width: 4,
            background: "#FF6056",
            height: 4,
            borderRadius: "50%",
          },
        },
      },
      open: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        transition: ".3s",
        padding: "0 10px",
      },
      drpBack: {
        width: "100%",
        height: "100%",
        background: "#00000099",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        cursor: "pointer",
      },
      closed: {
        display: "none",
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      fixedRoot: {
        width: "32%",
        cursor: "pointer",
        marginRight: 16,
        "& img": {
          width: "340px",
        },
      },
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        color: "#141414",
        marginBottom: 24,
      },
      bannerMain: {
        overflowX: "auto",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
      },
      modalClose: {
        position: "relative",
        width: "55%",
        padding: "48px 0px",
        background: "white",
        zIndex: 1000,
        borderRadius: 8,
      },
      modalMain: {
        zIndex: 1000,
        background: "white",
        height: 450,
        position: "relative",
        padding: "20px 40px",
        overflowY: "auto",
        overflowX: "hidden",
      },
      notScroll: {
        overflowY: "hidden",
        overflowX: "hidden",
        height: "100%",
      },
      fixedBtn: {
        position: "absolute",
        margin: "auto",
        right: 30,
        height: 48,
        top: 0,
        width: 48,
        bottom: 0,
      },
      fixedBtnModal: {
        position: "absolute",
        margin: "auto",
        right: 0,
        zIndex: 1001,
        top: 0,
      },
      fixedModal: {
        display: "none",
        position: "fixed",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: ".3s",
        "& img": {
          zIndex: 102,
          width: "100%",
        },
      },
      fixedImgModal: {
        zIndex: 103,
        opacity: 1,
        "& img:last-child": {
          display: "none",
        },
      },
      modalTitle: {
        "& h3": {
          marginTop: 0,
          fontSize: 24,
          color: "#141414",
        },
        "& p": {
          margin: "8px 0 16px 0",
        },
        "& h4": {
          fontSize: 14,
          margin: "0",
        },
      },
      imgPhoneBanner: {
        "& img": {
          width: "23%",
          marginRight: 10,
          borderRadius: 10,
        },
      },
      imgPhoneBanner2: {
        "& img": {
          width: "30%",
          borderRadius: 10,
        },
      },
      modalTables: {
        border: "1px solid #dee2e6",
        marginTop: 10,
        "& td": {
          padding: ".75rem",
        },
        "& tr:last-child": {
          borderBottom: "0px solid #dee2e6",
        },
        "& tr": {
          borderBottom: "1px solid #dee2e6",
          display: "flex",
          "& td:nth-child(1)": {
            width: "70%",
          },
          "& td:nth-child(2)": {
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid #dee2e6",
          },
        },
      },
      chooseTitle: {
        marginTop: 24,
        "& span": {
          display: "block",
          fontWeight: "normal",
          fontSize: "14px",
          color: "#141414",
          paddingLeft: 26,
          lineHeight: "24px",
          position: "relative",
          marginBottom: 4,
          "&:before": {
            content: "' '",
            position: "absolute",
            margin: "auto",
            top: 0,
            bottom: 0,
            left: 8,
            width: 4,
            background: "#FF6056",
            height: 4,
            borderRadius: "50%",
          },
        },
      },
      open: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        transition: ".3s",
      },
      drpBack: {
        width: "100%",
        height: "100%",
        background: "#00000099",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        cursor: "pointer",
      },
      closed: {
        display: "none",
      },
    },
  })
);

const Banner = () => {
  const classes = useStyles({});
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [closed, setClosed] = React.useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.mainTitle}>
          {t("banners.mainTitle")}
        </Typography>
      </Grid>
      <Grid container className={classes.bannerMain}>
        <Grid className={classes.fixedRoot}>
          <img
            src={t("banners_5.img")}
            onClick={() => {
              setOpen5(true);
            }}
          />
        </Grid>
        {/* <Grid className={classes.fixedRoot}>
          <img
            src={t("banners_4.img")}
            onClick={() => {
              setOpen7(true);
            }}
          />
        </Grid> */}
        <Grid className={classes.fixedRoot}>
          <img
            src={t("banners.banner-1")}
            onClick={() => {
              setOpen3(true);
            }}
          />
        </Grid>

        {/*<Grid className={classes.fixedRoot}>
          <img
            src={t("banners_3.img")}
            onClick={() => {
              setOpen6(true);
            }}
          />
        </Grid> 

        <Grid className={classes.fixedRoot}>
          <img
            src="bannerMain-25.svg"
            onClick={() => {
              setOpen5(true);
            }}
          />
        </Grid>*/}

        <Grid className={classes.fixedRoot}>
          <img
            src="bannerMain-24.svg"
            onClick={() => {
              setOpen4(true);
            }}
          />
        </Grid>

        <Grid className={classes.fixedRoot}>
          <img
            src="bannerMain-23.svg"
            onClick={() => {
              setOpen2(true);
            }}
          />
        </Grid>

        {/* <Grid className={classes.fixedRoot}>
          <img
            src="bannerMain-22.svg"
            onClick={() => {
              setOpen(true);
            }}
          />
        </Grid> */}



        <Grid className={`${classes.fixedModal} ${open ? classes.open : ""}`}>
          <Grid className={classes.modalClose}>
            <IconButton
              className={classes.fixedBtnModal}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Grid className={`${classes.modalMain} ${classes.notScroll}`}>
              <Grid className={classes.modalTitle}>
                <h3 style={{ marginBottom: 10 }}>
                  {t("bannersSecond.text_0")}
                </h3>
                <p style={{ textDecoration: "underline" }}>
                  {t("bannersSecond.text_01")}
                </p>
                <p>{t("bannersSecond.text_02")}</p>
                <p>{t("bannersSecond.text_03")}</p>
                <p>{t("bannersSecond.text_04")}</p>
                <p>{t("bannersSecond.text_05")}</p>
                <p>{t("bannersSecond.text_06")}</p>
                <p style={{ textDecoration: "underline" }}>
                  {t("bannersSecond.text_07")}
                </p>
                <p>{t("bannersSecond.text_08")}</p>
                <p>{t("bannersSecond.text_09")}</p>
                <p>{t("bannersSecond.text_10")}</p>
                <p>{t("bannersSecond.text_11")}</p>
                <p>{t("bannersSecond.text_12")}</p>
                <p>{t("bannersSecond.text_13")}</p>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.drpBack} onClick={() => setOpen(false)}></div>
        </Grid>

        <Grid className={`${classes.fixedModal} ${open2 ? classes.open : ""}`}>
          <Grid className={classes.modalClose}>
            <IconButton
              className={classes.fixedBtnModal}
              onClick={() => setOpen2(false)}
            >
              <CloseIcon />
            </IconButton>
            <Grid className={classes.modalMain}>
              <Grid className={classes.modalTitle}>
                <h3>{t("bannersFirst.mainTitle")}</h3>
                <h4>{t("bannersFirst.text-main_1")}</h4>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_2")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_3")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_4")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_5")}
                </p>

                <p
                  style={{ textDecoration: "underline", margin: "20px 0 0 0" }}
                >
                  {t("bannersFirst.text-main_6")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_7")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_8")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_9")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_10")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_11")}
                </p>

                <p style={{ textDecoration: "underline", marginTop: "20px" }}>
                  {t("bannersFirst.text-main_12")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_13")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_14")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_15")}
                </p>

                <p>{t("bannersFirst.text-main_16")}</p>

                <h4>{t("bannersFirst.text-main_17")}</h4>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_18")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_19")}
                </p>
                <p style={{ marginBottom: "5px" }}>
                  {t("bannersFirst.text-main_20")}
                </p>

                <p style={{ marginTop: "20px" }}>
                  {t("bannersFirst.text-main_21")}
                </p>

                <h4>{t("bannersFirst.text-main_22")}</h4>

                <p>{t("bannersFirst.text-main_23")}</p>
                <p>{t("bannersFirst.text-main_24")}</p>

                <p>{t("bannersFirst.text-main_25")}</p>
                <p>
                  {t("bannersFirst.text-main_26")}{" "}
                  <a
                    href="https://www.samsung.com/kz_ru/apps/mobile/samsungpay/"
                    target="_blank"
                  >
                    https://www.samsung.com/kz_ru/apps/mobile/samsungpay/
                  </a>{" "}
                  {t("bannersFirst.text-main_26_1")}
                </p>

                <p>
                  <b>{t("bannersFirst.text-main_27")}</b>{" "}
                  {t("bannersFirst.text-main_28")}
                </p>

                <p>{t("bannersFirst.text-main_29")}</p>
                <p>{t("bannersFirst.text-main_30")}</p>
                <p>{t("bannersFirst.text-main_31")}</p>
              </Grid>
            </Grid>
          </Grid>

          <div
            className={classes.drpBack}
            onClick={() => setOpen2(false)}
          ></div>
        </Grid>

        <Grid className={`${classes.fixedModal} ${open3 ? classes.open : ""}`}>
          <Grid className={classes.modalClose}>
            <IconButton
              className={classes.fixedBtnModal}
              onClick={() => setOpen3(false)}
            >
              <CloseIcon />
            </IconButton>
            <Grid className={classes.modalMain}>
              <Grid className={classes.modalTitle}>
                <h3 style={{ marginBottom: 10 }}>{t("banners.text_0")}</h3>
                <p>{t("banners.text_01")}</p>
                <p>{t("banners.text_1")}</p>
                <p>
                  {t("banners.text_2")}
                </p>
                <p>
                  {t("banners.text_3")}
                </p>
                <p>{t("banners.text_4")}</p>
              </Grid>
            </Grid>
          </Grid>

          <div
            className={classes.drpBack}
            onClick={() => setOpen3(false)}
          ></div>
        </Grid>

        <Grid className={`${classes.fixedModal} ${open4 ? classes.open : ""}`}>
          <Grid className={classes.modalClose}>
            <IconButton
              className={classes.fixedBtnModal}
              onClick={() => setOpen4(false)}
            >
              <CloseIcon />
            </IconButton>
            <Grid className={classes.modalMain}>
              <Grid className={classes.modalTitle}>
                <h3 style={{ marginBottom: 10 }}>{t("banners_1.text_1")}</h3>
                <h4>{t("banners_1.text_2")}</h4>
                <p>{t("banners_1.text_3")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_4")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_5")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_6")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_7")}</p>

                <h3>{t("banners_1.text_8")}</h3>

                <h4>{t("banners_1.text_9")}</h4>
                <p style={{ marginBottom: "5px" }}>
                  {t("banners_1.text_10")}{" "}
                  <a href="https://mssg.me/concierge__service" target="_blank">
                    https://mssg.me/concierge__service
                  </a>{" "}
                  {t("banners_1.text_11")}
                </p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_12")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_13")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_14")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_15")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_1.text_16")}</p>
                <Grid className={classes.imgPhoneBanner}>
                  <img src="imgPhone-21.svg" />
                  <img src="imgPhone-22.svg" />
                  <img src="imgPhone-23.svg" />
                  <img src="imgPhone-23.svg" />
                </Grid>
                <p>{t("banners_1.text_17")}</p>
                <p>{t("banners_1.text_18")}</p>
                <Grid
                  className={classes.imgPhoneBanner2}
                  style={{ marginBottom: "10px" }}
                >
                  <img src="imgPhone-15.png" />
                </Grid>
                <h4>{t("banners_1.text_19")}</h4>
                <table className={classes.modalTables}>
                  <tr>
                    <td>
                      <b>{t("banners_1.text_20")}</b> {t("banners_1.text_21")}
                    </td>
                    <td>{t("banners_1.text_22")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("banners_1.text_23")}</b> {t("banners_1.text_24")}
                    </td>
                    <td>{t("banners_1.text_25")}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{t("banners_1.text_26")}</b> {t("banners_1.text_27")}
                    </td>
                    <td>{t("banners_1.text_28")}</td>
                  </tr>
                </table>
                <p>{t("banners_1.text_29")}</p>
                <p>
                  <b>
                    <a href="tel:505">505</a> {t("banners_1.text_30")}{" "}
                    <a href="tel:87272443030">8 (727) 244 30 30</a>
                  </b>
                </p>
              </Grid>
            </Grid>
          </Grid>

          <div
            className={classes.drpBack}
            onClick={() => setOpen4(false)}
          ></div>
        </Grid>




        {/* <Grid className={`${classes.fixedModal} ${open7 ? classes.open : ""}`}>
          <Grid className={classes.modalClose}>
            <IconButton
              className={classes.fixedBtnModal}
              onClick={() => setOpen7(false)}
            >
              <CloseIcon />
            </IconButton>
            <Grid className={classes.modalMain}>
              <Grid className={classes.modalTitle}>
                <h3 style={{ marginBottom: 10 }}>{t("banners_4.text_100")}</h3>
                <p> {t("banners_4.text_0")} </p>
                <p> {t("banners_4.text_1")} </p>
                <p> {t("banners_4.text_2")} <a href="https://www.bcc.kz/blackfriday/">{t("banners_4.text_3")} </a></p>
              </Grid>
            </Grid>
          </Grid>

          <div
            className={classes.drpBack}
            onClick={() => setOpen7(false)}
          ></div>
        </Grid> */}

        <Grid className={`${classes.fixedModal} ${open5 ? classes.open : ""}`}>
          <Grid className={classes.modalClose}>
            <IconButton
              className={classes.fixedBtnModal}
              onClick={() => setOpen5(false)}
            >
              <CloseIcon />
            </IconButton>
            <Grid className={classes.modalMain}>
              <Grid className={classes.modalTitle}>
                <h3 style={{ marginBottom: 10 }}>{t("banners_5.text_100")}</h3>
                <p style={{ marginBottom: 10 }}>{t("banners_5.text_101")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_5.text_0")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_5.text_1")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_5.text_2")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_5.text_3")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_5.text_4")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_5.text_5")}</p>
                <p style={{ marginBottom: "5px" }}>{t("banners_5.text_6")}</p>
                <p> {t("banners_5.text_7")} </p>
                <p> {t("banners_5.text_8")} </p>
              </Grid>
            </Grid>
          </Grid>

          <div
            className={classes.drpBack}
            onClick={() => setOpen5(false)}
          ></div>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Banner;
