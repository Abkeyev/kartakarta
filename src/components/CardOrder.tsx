import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from "react-ga";
import api from "../api/Api";
import InputMask from "react-input-mask";
import ym from "react-yandex-metrika";
import { useTranslation } from "react-i18next";
import BlockUi from "react-block-ui";
import { Snackbar, MenuItem } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import "react-block-ui/style.css";
import moment from "moment";
import * as Scroll from "react-scroll";

const webConfigEnv = (window as any).env;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("md")]: {
      root: {
        padding: "36px 20px 36px 20px",
        alignItems: "center",
        margin: "auto",
        width: "80%",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      paper: {
        padding: "22px 16px 22px 16px",
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        boxSizing: "border-box",
        borderRadius: 8,
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "20px",
      },
      formControlCheckBox: {
        marginTop: "20px",
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "black",
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
      },
      submit: {
        background: "#3F0259",
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 500,
        fontStyle: "normal",
        boxShadow: "none",
        textTransform: "none",
        height: 40,
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF",
        },
        "&:disabled": {
          backgroundColor: "#3F0259",
          opacity: 0.4,
          boxShadow: "none",
          color: "#FFFFFF",
        },
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        padding: "36px 20px 36px 20px",
        maxWidth: 1280,
        width: "50%",
        margin: "auto",
      },
      paper: {
        padding: "45px 72px 45px 72px",
        background: "#FFFFFF",
        border: "2px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "8px",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "40px",
        marginBottom: "27px",
      },
      formControlCheckBox: {
        marginTop: "25px",
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
      },
      submit: {
        background: "#3F0259",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        boxShadow: "none",
        height: "62px",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF",
        },
        "&:disabled": {
          backgroundColor: "#3F0259",
          opacity: 0.6,
          boxShadow: "none",
          color: "#FFFFFF",
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      root: { width: "90%" },
    },
    timer: {
      fontSize: 16,
      color: "#4D565F",
    },
    linkReSendSms: {
      color: "#3F0259",
      fontSize: 16,
      cursor: "pointer",
      "&:hover, &:active": {
        textDecoration: "underline",
        opacity: 0.8,
      },
    },
    code: {
      margin: 0,
      "& input": {
        height: 62,
        boxSizing: "border-box",
      },
    },
    successForm: {
      padding: "30px",
      marginTop: 64,
      borderRadius: 8,
      backgroundColor: "rgba(125, 206, 160, 0.2)",
      textAlign: "center",
      "& > img": {
        display: "block",
        margin: "0 auto",
        marginBottom: 23,
      },
      "& > div": {
        display: "block",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#1F7042",
      },
      "& > span": {
        display: "block",
        fontSize: 16,
        color: "#1F7042",
        marginBottom: 60,
      },
    },
    warningForm: {
      backgroundColor: "rgba(200, 79, 79, 0.05)",
      "& > div": {
        color: "#000D1A",
        fontSize: 16,
        fontWeight: "normal",
        marginBottom: 60,
      },
    },
    starbankingForm: {
      backgroundColor: "#FAFAFA",
      padding: "56px 30px 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      "& > div": {
        marginBottom: 0,
      },
    },
    linkBlock: {
      width: "70%",
      alignSelf: "center",
      textAlign: "left",
    },
    starText: {
      fontSize: 12,
      color: "#000D1A",
      padding: "0 10px 0 0",
    },
    starQr: {
      height: "48px!important",
      marginBottom: 12,
    },
    starImages: {
      marginTop: 24,
      "& > img": {
        height: 32,
        verticalAlign: "middle",
        marginRight: 16,
        marginBottom: 12,
        cursor: "pointer",
      },
    },
    imgBlock: {
      width: "30%",
      "& > img": {
        width: "100%",
      },
    },
    hintText: {
      fontSize: 14,
      textAlign: "center",
      color: "#141414",
      opacity: 0.7,
    },
  })
);

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(999) 999 99 99"
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const CardOrder = (props: any) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [iin, setIin] = React.useState("");
  const [code, setCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState(0);
  const [resStatus, setResStatus] = React.useState<number | null>(null);
  const [isLoading, setLoading] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const classes = useStyles({});
  const { t } = useTranslation();
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  const [city, setCity] = React.useState("");
  const cities = [
    "Актау",
    "Жанаозен",
    "Актобе",
    "Алматы",
    "Атырау",
    "Кульсары",
    "Жезказган",
    "Сатпаев",
    "Караганда",
    "Темиртау",
    "Балхаш",
    "Кокшетау",
    "Степногорск",
    "Костанай",
    "Рудный",
    "Затобольск",
    "Кызылорда",
    "Шиели",
    "Нур-Султан",
    "Павлодар",
    "Экибастуз",
    "Петропавловск",
    "Семей",
    "Шемонаиха",
    "Аягоз",
    "Талдыкорган",
    "Отеген батыр",
    "Капшагай",
    "Талгар",
    "Каскелен",
    "Жаркент",
    "Тараз",
    "Шу",
    "Уральск",
    "Аксай",
    "Усть-Каменогорск",
    "Зайсан",
    "Алтай",
    "Риддер",
    "Шымкент",
    "Сарыагаш",
    "Аксу",
  ];

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const isValid = () => {
    if (step === 0) {
      return (
        firstName.length > 1 &&
        lastName.length > 1 &&
        iin.length === 12 &&
        city.length > 1 &&
        phoneNumber.replace("_", "").length === 17 &&
        agree
      );
    } else if (step === 1) {
      return code.length === 6;
    } else {
      return true;
    }
  };

  function uuid() {
    return "xxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString();
    });
  }

  function getUrlParameter(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const startProcess = () => {
    const formData = new FormData();

    formData.append("TELEPHONE", phoneNumber);
    formData.append("NAME", `${firstName} ${lastName}`);
    formData.append("BRANCH", city);
    formData.append("IIN", iin);
    formData.append("SYSTEM_TITLE", "#kartakarta");
    formData.append("SYSTEM_POST_EVENT", "NEW_USER");
    formData.append("SYSTEM_LINK", "https://www.bcc.kz/kartakarta");
    formData.append("SYSTEM_IBLOCK_ID", "172");
    formData.append("SYSTEM_NAME_ELEMENT", "NAME");
    formData.append("SYSTEM_STATUS", "2877182");
    formData.append("SYSTEM_LID", "S1");
    formData.append("BCC_KEY", "1v5df35v");
    formData.append("utm_source", getUrlParameter("utm_source"));
    formData.append("utm_medium", getUrlParameter("utm_medium"));
    formData.append("utm_campaign", getUrlParameter("utm_campaign"));
    formData.append("utm_term", getUrlParameter("utm_term"));
    formData.append("utm_content", getUrlParameter("utm_content"));

    const response = fetch(
      `https://www.bcc.kz/local/tmpl/ajax/iblock_save.php`,
      {
        method: "POST",
        body: formData,
      }
    );

    api.camunda
      .start({
        env: {
          production: webConfigEnv.PRODUCTION === "1",
        },
        client: {
          iin: iin,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          msisdn: formatPhoneNumber(),
          city: city,
          productCode: "0.300.017.1",
          date: moment().format("DD-MM-YYYY"),
          requestID: uuid(),
          utm_source: getUrlParameter("utm_source"),
          utm_medium: getUrlParameter("utm_medium"),
          utm_campaign: getUrlParameter("utm_campaign"),
          utm_term: getUrlParameter("utm_term"),
          utm_content: getUrlParameter("utm_content"),
        },
      })
      .then((res: any) => {
        props.scrollToOrder(false);
        if (res && res.variables) {
          setResStatus(res.variables.status);
        }
        setStep(2);
        ym("reachGoal", "send_mess");
        setLoading(false);
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const formatPhoneNumber = () => {
    let res = phoneNumber;
    if (phoneNumber.slice(0, 1) === "8") res = "7" + phoneNumber.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const getOtp = () => {
    if (phoneNumber.substr(2, 1) !== "7") {
      setPhoneError(true);
      return;
    } else setPhoneError(false);
    setLoading(true);
    setTimer(90);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        props.scrollToOrder(false);
        localStorage.removeItem("userContext");
        setStep(1);
        setLoading(false);
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onReSend = () => {
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        props.scrollToOrder(false);
        setTimer(90);
        setCode("");
        setLoading(false);
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);
    ReactGA.event({
      category: "Kartakarta_final_virtcard_OTP",
      action: "Success_final_virtcard_OTP",
    });
    api.authOtp
      .confirmOtp({
        iin: iin,
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        props.scrollToOrder(false);
        localStorage.setItem("userContext", JSON.stringify(userContext));
        startProcess();
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard_AppStore_download",
      action: "AppStore_download",
    });

    window.open(
      "https://apps.apple.com/kz/app/starbanking/id743617904",
      "_blank"
    );
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard_GooglePlay_download",
      action: "GooglePlay_download",
    });

    window.open(
      "https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru",
      "_blank"
    );
  };

  const handleClose = () => {
    setOpenError(false);
  };

  return (
    <Grid
      ref={props.refProp}
      id="order"
      container
      className={classes.root}
      spacing={4}
      direction="column"
      justify="center"
    >
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.box}>
          {t("block_6.title_main")} <br />
          {t("block_6.title_main_12")}
        </Typography>
        <Typography className={classes.hintText}>
          {step === 0
            ? t("block_6.hint_text1")
            : step === 1
              ? t("block_6.hint_text2")
              : ""}
        </Typography>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            {t("block_6.res_error")}
          </Alert>
        </Snackbar>
        <div className={classes.form}>
          <BlockUi tag="div" blocking={isLoading}>
            {step === 0 ? (
              <>
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="lastName"
                  label={t("block_6.lastName_main")}
                  name="lastName"
                  value={lastName}
                  onChange={(e: any) =>
                    setLastName(
                      e.target.value
                        .replace(/[^a-zA-ZА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]/gi, "")
                        .replace(/\s+/gi, ", ")
                    )
                  }
                />
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="firstName"
                  label={t("block_6.firstName_main")}
                  name="firstName"
                  value={firstName}
                  onChange={(e: any) => {
                    setFirstName(
                      e.target.value
                        .replace(/[^a-zA-ZА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]/gi, "")
                        .replace(/\s+/gi, ", ")
                    );
                  }}
                />
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="middleName"
                  label={t("block_6.middleName_main")}
                  name="middleName"
                  value={middleName}
                  onChange={(e: any) =>
                    setMiddleName(
                      e.target.value
                        .replace(/[^a-zA-ZА-Яа-яЁёӘәІіҢңҒғҮүҰұҚқӨөҺһ]/gi, "")
                        .replace(/\s+/gi, ", ")
                    )
                  }
                />
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="iinVirtual"
                  label={t("block_6.iin_main")}
                  name="iin"
                  value={iin}
                  onChange={(e: any) =>
                    setIin(e.target.value.replace(/\D/g, "").substr(0, 12))
                  }
                />
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="phoneVirtual"
                  name="phone"
                  helperText={phoneError ? t("block_6.phone_error") : ""}
                  error={phoneError ? true : false}
                  value={phoneNumber}
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                  label={t("block_6.phone_main")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    inputComponent: BccMaskedInput as any,
                  }}
                />
                <TextField
                  fullWidth={true}
                  label={t("block_6.city") + "*"}
                  id="cityVirtual"
                  name="city"
                  value={city}
                  onChange={(e: any) => setCity(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  select
                >
                  {cities.map((c: string) => {
                    return (
                      c !== null && (
                        <MenuItem
                          className={classes.cityTitle}
                          key={c}
                          value={c}
                        >
                          {c}
                        </MenuItem>
                      )
                    );
                  })}
                </TextField>
                <FormControlLabel
                  className={classes.formControlCheckBox}
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      checked={agree}
                      onChange={() => setAgree(!agree)}
                    />
                  }
                  label={
                    <Typography className={classes.checkBoxLabel}>
                      {t("block_6.checkbox_desc")}
                    </Typography>
                  }
                />
                <Grid container style={{ marginTop: "15px" }} spacing={4}>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xl={false}
                        lg={false}
                        md={false}
                        sm={false}
                        xs={false}
                      >
                        <img
                          src="card_order_security.svg"
                          className={classes.icon}
                          alt="order_security"
                        />
                      </Grid>
                      <Grid
                        item
                        xl={true}
                        lg={true}
                        md={true}
                        sm={true}
                        xs={true}
                      >
                        <Typography className={classes.garant}>
                          {t("block_6.subtitle_desc")}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Button
                      onClick={() => getOtp()}
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      disabled={!isValid()}
                    >
                      {t("block_6.next_main")}
                    </Button>
                  </Grid>
                </Grid>
              </>
            ) : step === 1 ? (
              <>
                <Grid
                  container
                  style={{ marginTop: "15px", alignItems: "center" }}
                  spacing={4}
                >
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <TextField
                      size={isXS ? "small" : "medium"}
                      variant="outlined"
                      className={classes.code}
                      margin="normal"
                      fullWidth
                      id="code"
                      name="code"
                      value={code}
                      onChange={(e: any) =>
                        setCode(e.target.value.replace(/\D/g, "").substr(0, 6))
                      }
                      label={t("block_6.code_main")}
                    />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Button
                      onClick={() => onSubmitOtp()}
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      disabled={!isValid()}
                    >
                      {t("block_6.confirm_main")}
                    </Button>
                  </Grid>
                  {timer !== 0 ? (
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography className={classes.timer}>
                        {t("block_6.resend_sms_timer")} ({timer})
                      </Typography>
                    </Grid>
                  ) : (
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                          className={classes.linkReSendSms}
                          onClick={() => onReSend()}
                        >
                          {t("block_6.resend_sms")}
                        </Typography>
                      </Grid>
                    )}
                </Grid>
              </>
            ) : resStatus === 0 ? (
              <div className={classes.successForm}>
                <img src="success.svg" alt="" />
                <div>{t("block_6.success_main")}</div>
                <span>{t("block_6.success_sms_main")}</span>
              </div>
            ) : resStatus === 1 ? (
              <div className={`${classes.successForm} ${classes.warningForm}`}>
                <img src="warning.svg" alt="" />
                <div>{t("block_6.warning_main")}</div>
              </div>
            ) : resStatus === 2 ? (
              <div
                className={`${classes.successForm} ${classes.starbankingForm}`}
              >
                <div className={classes.linkBlock}>
                  <div className={classes.starText}>
                    {t("block_6.start_main")}
                    <div className={classes.starImages}>
                      <img className={classes.starQr} src="qr.svg" alt="qr" />
                      <img
                        onClick={() => onClickAppStore()}
                        src="app_store.svg"
                        alt="app_store"
                      />
                      <img
                        onClick={() => onClickGooglePlay()}
                        src="google_play.svg"
                        alt="google_play"
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.imgBlock}>
                  <img
                    className={classes.img}
                    src="stars_mobile_banking.png"
                    alt="star_mobile_banking"
                  />
                </div>
              </div>
            ) : resStatus === 3 ? (
              <div className={`${classes.successForm} ${classes.warningForm}`}>
                <img src="warning.svg" alt="" />
                <div>
                  {t("block_6.has_main")}
                  <br />
                  <br />
                  {t("block_6.has_main2")}
                </div>
              </div>
            ) : (
                          ""
                        )}
          </BlockUi>
        </div>
      </Paper>
    </Grid>
  );
};

export default CardOrder;
