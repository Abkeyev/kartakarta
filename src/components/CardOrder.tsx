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
import { Snackbar, MenuItem, InputAdornment } from "@material-ui/core";
import { Alert as MuiAlert } from "@material-ui/lab";
import "react-block-ui/style.css";
import moment from "moment";
import { BccTypography } from "./";

const webConfigEnv = (window as any).env;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      root: {
        padding: "36px 20px 36px 20px",
        maxWidth: 1280,
        width: 750,
        margin: "auto",
      },
      paper: {
        padding: "72px 36px",
        background: "#FFFFFF",
        border: "2px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "8px",
        position: "relative",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      box: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: "56px",
        lineHeight: "64px",
        marginBottom: "24px",
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
      root: {
        padding: "36px",
        alignItems: "center",
        margin: "auto",
        width: "100%",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      paper: {
        padding: "48px 24px 24px",
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        boxSizing: "border-box",
        borderRadius: 8,
        position: "relative",
        width: "100%",
      },
      box: {
        textAlign: "center",
        fontSize: "28px",
        fontWeight: "bold",
        lineHeight: "28px",
        marginBottom: "24px",
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
    [theme.breakpoints.down("xs")]: {
      root: {
        padding: "20px",
      },
    },
    eraser: {
      width: 25,
      height: 25,
      opacity: 0.8,
      cursor: "pointer",
      "&:hover": {
        opacity: 1,
      },
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
    stepperForm: {
      borderRadius: 8,
      minHeight: 450,
    },
    successForm: {
      padding: "30px",
      marginTop: 32,
      borderRadius: 8,
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
      marginTop: 32,
      borderRadius: 8,
      "& > div": {
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
          alignItems: "center",
        },
        "& > div:first-child": {
          paddingRight: 32,
          [theme.breakpoints.down("xs")]: {
            paddingRight: 0,
            paddingBottom: 12,
          },
        },
        "& > div > div": {
          border: "1px solid #F3F3F3",
          padding: "12px 24px",
          borderRadius: 8,
          maxWidth: "max-content",
          [theme.breakpoints.down("xs")]: {
            maxWidth: "none",
            justifyContent: "center",
          },
          "& > div:first-child": {
            paddingRight: 12,
          },
        },
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
      fontSize: 28,
      lineHeight: "34px",
      textAlign: "center",
      fontWeight: 600,
      marginBottom: 12,
    },
    hintText2: {
      fontSize: 16,
      lineHeight: "20px",
      textAlign: "center",
      color: "#4D565F",
      marginBottom: 24,
      "& > a": {
        color: "#27AE60",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: 8,
      },
    },
    closeBtn: {
      position: "absolute",
      right: 16,
      top: 16,
      cursor: "pointer",
      [theme.breakpoints.down("xs")]: {
        width: 35,
        height: 35,
      },
    },
    stepWrap: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      paddingLeft: "48px",
      boxSizing: "border-box",
      margin: "0 auto",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        flexDirection: "column-reverse",
        alignItems: "center",
      },
    },
    stepText: {
      width: "55%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    stepGif: {
      position: "absolute",
      right: "calc(50% - 320px)",
      width: 300,
      height: 300,
      "& > img": {},
      [theme.breakpoints.down("sm")]: {
        right: "32px",
        width: 250,
        height: 250,
      },
      [theme.breakpoints.down("xs")]: {
        position: "relative",
        right: "initial",
        marginBottom: 12,
        "& > img": {
          width: "100%",
          height: "100%",
        },
      },
    },
    img: {
      position: "absolute",
      right: 0,
      top: 0,
      opacity: 0,
      transition: "all .75s ease-out",
      transform: "translateY(0)",
    },
    up: {
      transform: "translateY(200px)",
      opacity: 0,
    },
    down: {
      transform: "translateY(-200px)",
      opacity: 0,
    },
    visible: {
      transform: "translateY(0)",
      opacity: 1,
    },
    appLinks: {
      position: "absolute",
      bottom: 92,
      [theme.breakpoints.down("xs")]: {
        position: "relative",
        bottom: "initial",
      },
      "& > div": {
        width: 160,
        marginRight: 12,
        [theme.breakpoints.down("xs")]: {
          width: "90%",
          margin: "0 auto",
          flexDirection: "row",
          flexWrap: "nowrap",
          "& > img": {
            marginBottom: 0,
            width: "calc(50% - 6px)!important",
          },
          "& > img:first-child": {
            marginRight: 12,
            marginBottom: "0!important",
          },
        },
        "& > img:first-child": {
          marginBottom: 12,
        },
        "& > img": {
          width: "100%",
        },
      },
      "& > img": {
        width: 104,
      },
    },
    social: {
      marginTop: 80,
      [theme.breakpoints.down("xs")]: {
        marginTop: 40,
      },
      "& > div:first-child": {
        paddingRight: 36,
      },
      "& > div > a:last-child": {
        marginRight: 0,
      },
      "& > div > a": {
        display: "inline-block",
        marginRight: 16,
        "& > img": {
          width: 32,
          height: 32,
        },
      },
    },
    stepper: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: "calc(50% - 300px)",
      alignItems: "center",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        left: "32px",
      },
      [theme.breakpoints.down("xs")]: {
        left: 36,
        top: "calc(50% - 120px)",
      },
      "& > div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        width: 18,
        "& > div:nth-child(2n)": {
          height: 120,
          backgroundColor: "#E6EAF0",
          width: 3,
        },
        "& > div.active:nth-child(2n)": {
          height: 120,
          backgroundColor: "#3F0259",
          width: 3,
        },
        "& > div:nth-child(2n+1)": {
          width: 34,
          height: 34,
          backgroundColor: "#F3F3F3",
          color: "#B3B6BA",
          borderRadius: 17,
          lineHeight: "34px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 16,
          cursor: "pointer",
        },
        "& > div.active:nth-child(2n+1)": {
          border: "none",
          backgroundColor: "#3F0259",
          color: "white",
          lineHeight: "34px",
        },
      },
    },
    inTitle: {
      [theme.breakpoints.down("xs")]: {
        display: "none!important",
      },
    },
    inSubTitle: {
      [theme.breakpoints.down("xs")]: {
        color: "#000D1A!important",
        opacity: 0.7,
        textAlign: "center",
      },
    },
    qr: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  })
);

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const BccMaskedInput = (props: {inputRef: (ref: HTMLInputElement | null) => void}) => {
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
  const [fio, setFio] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [iin, setIin] = React.useState("");
  const [code, setCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [timer, setTimer] = React.useState(0);
  const [resStatus, setResStatus] = React.useState<number | null>(3);
  const [isLoading, setLoading] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const classes = useStyles({});
  const { t } = useTranslation();
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));
  const [city, setCity] = React.useState("");
  const [stepSuccess, setStepSuccess] = React.useState(1);
  const [scrolled, setScrolled] = React.useState(false);
  const [up, setUp] = React.useState(false);

  const cities = [
    "Нур-Султан",
    "Алматы",
    "Шымкент",
    "Актау",
    "Жанаозен",
    "Актобе",
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
    return "xxxxxx".replace(/[xy]/g, function(c) {
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

  const getFio = (num: number) => {
    const fioArray = fio.split(" ");
    return fioArray && fioArray[num] ? fioArray[num] : "";
  };

  const startProcess = () => {
    const formData = new FormData();

    formData.append("TELEPHONE", phoneNumber);
    formData.append("NAME", fio);
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
          firstName: getFio(1),
          middleName: getFio(2),
          lastName: getFio(0),
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
          if (res.variables.status !== 3) {
            api.card
              .order({
                fio: `${fio} [${city}]`,
                phoneNumber: formatPhoneNumber(),
                iin,
                message: res.variables.message,
              })
              .then((r) => console.log(r))
              .catch((e) => console.log(e));
          }
        }
        setStep(2);
        ym("reachGoal", "send_mess");
        setLoading(false);
      })
      .catch((e: any) => {
        setStep(2);
        setResStatus(1);
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const formatPhoneNumber = () => {
    let res = phoneNumber.replace(/\+/, '');
    console.log(res)
    console.log(res.replace(/\(|\)| /g, ""))
    if (phoneNumber.slice(0, 1) === "8") res = "7" + phoneNumber.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const getOtp = () => {
    if (phoneNumber.substr(3, 1) !== "7") {
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

  const handleScroll = (e: any) => {
    if (step <= 1 && resStatus && resStatus > 0) return;
    if (scrolled) return;
    if (e.nativeEvent.wheelDelta > 0) {
      console.log(stepSuccess);
      if (stepSuccess === 1) {
        console.log(stepSuccess, "1");
        return (document.body.style.overflow = "unset");
      } else {
        console.log(stepSuccess, "11");
        setStepSuccess(stepSuccess - 1);
        setUp(true);
        setScrolled(true);
        setTimeout(() => {
          setScrolled(false);
        }, 1000);
        return stepSuccess - 1 >= 1
          ? (document.body.style.overflow = "hidden")
          : "";
      }
    } else {
      if (stepSuccess === 3) {
        console.log(stepSuccess);
        console.log(stepSuccess, "2");
        return (document.body.style.overflow = "unset");
      } else {
        console.log(stepSuccess, "22");
        setStepSuccess(stepSuccess + 1);
        setUp(false);
        setScrolled(true);
        setTimeout(() => {
          setScrolled(false);
        }, 1000);
        return stepSuccess + 1 <= 3
          ? (document.body.style.overflow = "hidden")
          : "";
      }
    }
  };

  const handleClose = () => {
    setOpenError(false);
  };

  const getWpUrl = () => {
    return `https://wa.me/${"77012230228"}?text=${encodeURIComponent(
      `Хочу открыть #картакарта, возникла ошибка. ИИН - ${iin}`
    )}`;
  };

  const getFioByIin = (iinNum: string) => {
    api.camunda
      .getFioByIin(iinNum)
      .then((res) => {
        if (res && res.data && res.data[0] && res.data[0].fio) {
          setFio(res.data[0].fio);
        }
      })
      .catch((err) => {
        setFio("");
      });
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
      <Paper
        elevation={0}
        className={classes.paper}
        onWheel={step > 1 && resStatus === 0 ? handleScroll : () => {}}
      >
        {step > 1 && (
          <img
            src={process.env.PUBLIC_URL + "/images/close.svg"}
            onClick={() => {
              setStep(0);
              setResStatus(null);
              setFio("");
              setPhoneNumber("");
              setIin("");
              setCity("");
              setCode("");
            }}
            className={classes.closeBtn}
          />
        )}
        {step === 0 && (
          <Typography className={classes.box}>{t("block_form.title")}</Typography>
        )}
        {step === 0 ? (
          <Typography className={classes.hintText}>
            <>
              {t("block_form.title_main")}
              <br />
              {t("block_form.title_main_2")}
            </>
          </Typography>
        ) : step === 1 ? (
          <Typography className={classes.hintText}>
            {t("block_form.title2")}
          </Typography>
        ) : (
          ""
        )}
        {step === 1 && (
          <Typography className={classes.hintText2}>
            {t("block_form.hint_text")}
          </Typography>
        )}
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
                  id="phone"
                  name="phone"
                  type="tel"
                  helperText={phoneError ? t("block_6.phone-error") : ""}
                  error={phoneError ? true : false}
                  value={phoneNumber}
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                  label={t("block_form.phone_main")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    inputComponent: BccMaskedInput as any,
                    endAdornment: phoneNumber !== "" && (
                      <InputAdornment position="end">
                        <img
                          src={process.env.PUBLIC_URL + "/images/eraser.svg"}
                          onClick={() => setPhoneNumber("")}
                          className={classes.eraser}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="iin"
                  type="tel"
                  label={t("block_form.iin_main")}
                  name="iin"
                  value={iin}
                  InputProps={{
                    endAdornment: iin !== "" && (
                      <InputAdornment position="end">
                        <img
                          src={process.env.PUBLIC_URL + "/images/eraser.svg"}
                          onClick={() => setIin("")}
                          className={classes.eraser}
                        />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e: any) => {
                    setIin(e.target.value.replace(/\D/g, "").substr(0, 12));
                    if (e.target.value.replace(/\D/g, "").length === 12) {
                      getFioByIin(e.target.value.replace(/\D/g, ""));
                    } else if (e.target.value.replace(/\D/g, "").length > 12) {
                      setFio("");
                    } else setFio("");
                  }}
                />
                {fio && (
                  <TextField
                    size={isXS ? "small" : "medium"}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fio"
                    label={t("block_form.fio")}
                    name="fio"
                    disabled
                    value={fio}
                  />
                )}
                <TextField
                  fullWidth={true}
                  label={t("block_form.city") + "*"}
                  id="city"
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
                      {t("block_form.checkbox_desc")}
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
                          src={process.env.PUBLIC_URL + "/images/card_order_security.svg"}
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
                          {t("block_form.subtitle_desc")}
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
                      {t("block_form.next_main")}
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
                      type="number"
                      id="single-factor-code-text-field"
                      autoComplete="one-time-code"
                      name="code"
                      value={code}
                      onChange={(e: any) =>
                        setCode(e.target.value.replace(/\D/g, "").substr(0, 6))
                      }
                      label={t("block_form.code_main")}
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
                      {t("block_form.confirm_main")}
                    </Button>
                  </Grid>
                  {timer !== 0 ? (
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography className={classes.timer}>
                        {t("block_form.resend_sms_timer")} ({timer})
                      </Typography>
                    </Grid>
                  ) : (
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography
                        className={classes.linkReSendSms}
                        onClick={() => onReSend()}
                      >
                        {t("block_form.resend_sms")}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </>
            ) : resStatus === 0 || resStatus === 2 ? (
              <div className={classes.stepperForm}>
                <Typography className={classes.hintText}>
                  {t("block_form.success1")}
                </Typography>
                <Typography className={classes.hintText2}>
                  {t("block_form.success_hint1")}{" "}
                  <a
                    href="https://www.bcc.kz/branches-and-atms/"
                    target="_blank"
                  >
                    {t("block_form.success_hint2")}
                  </a>
                </Typography>
                {step === 2 && resStatus === 0 && (
                  <BccTypography
                    color="#3F0259"
                    type="p1"
                    weight="bold"
                    align="center"
                    block
                    mb="24px"
                  >
                     {t("block_form.text-1")}
                  </BccTypography>
                )}
                <div className={classes.stepWrap}>
                  <div className={classes.stepper}>
                    <div>
                      {stepSuccess === 1 ? (
                        <>
                          <div
                            onClick={() => setStepSuccess(1)}
                            className="active"
                          >
                            1
                          </div>
                          <div></div>
                          <div onClick={() => setStepSuccess(2)}>2</div>
                          <div></div>
                          <div onClick={() => setStepSuccess(3)}>3</div>
                        </>
                      ) : stepSuccess === 2 ? (
                        <>
                          <div
                            onClick={() => setStepSuccess(1)}
                            className="active"
                          >
                            1
                          </div>
                          <div className="active"></div>
                          <div
                            onClick={() => setStepSuccess(2)}
                            className="active"
                          >
                            2
                          </div>
                          <div></div>
                          <div onClick={() => setStepSuccess(3)}>3</div>
                        </>
                      ) : (
                        <>
                          <div
                            onClick={() => setStepSuccess(1)}
                            className="active"
                          >
                            1
                          </div>
                          <div className="active"></div>
                          <div
                            onClick={() => setStepSuccess(2)}
                            className="active"
                          >
                            2
                          </div>
                          <div className="active"></div>
                          <div
                            onClick={() => setStepSuccess(3)}
                            className="active"
                          >
                            3
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={classes.stepText}>
                    <div>
                      <BccTypography
                        color="#000000"
                        type="h4"
                        block
                        mb="24px"
                        className={classes.inTitle}
                      >
                         {t("block_form.text-2")}
                      </BccTypography>
                      {stepSuccess === 1 ? (
                        <BccTypography
                          color="#3F0259"
                          type="p2l"
                          block
                          mb="40px"
                          className={classes.inSubTitle}
                        >
                          {t("block_form.text-3")}
                        </BccTypography>
                      ) : stepSuccess === 2 ? (
                        <BccTypography
                          color="#3F0259"
                          type="p2l"
                          block
                          mb="36px"
                          className={classes.inSubTitle}
                        >
                          {t("block_form.text-4")}
                        </BccTypography>
                      ) : (
                        <BccTypography
                          color="#3F0259"
                          type="p2l"
                          block
                          mb="36px"
                          className={classes.inSubTitle}
                        >
                          {t("block_form.text-5")}
                        </BccTypography>
                      )}
                    </div>
                    <Grid container wrap="nowrap" className={classes.appLinks}>
                      <Grid item container direction="column">
                        <img
                          src={process.env.PUBLIC_URL + "/images/app_store.svg"}
                          style={{ cursor: "pointer" }}
                          onClick={(e: any) => onClickAppStore()}
                        />
                        <img
                          src={process.env.PUBLIC_URL + "/images/google_play.svg"}
                          style={{ cursor: "pointer" }}
                          onClick={(e: any) => onClickGooglePlay()}
                        />
                      </Grid>
                      <img
                        className={classes.qr}
                        src={process.env.PUBLIC_URL + "/images/qr.svg"}
                      />
                    </Grid>
                  </div>
                  <div className={classes.stepGif}>
                    <img
                      className={`${classes.img} ${
                        stepSuccess === 1
                          ? `${up ? classes.up : classes.down} ${
                              classes.visible
                            } `
                          : ""
                      }`}
                      src={process.env.PUBLIC_URL + `/images/step1.png`}
                    />
                    <img
                      className={`${classes.img} ${
                        stepSuccess === 2
                          ? `${up ? classes.up : classes.down} ${
                              classes.visible
                            }`
                          : ""
                      }`}
                      src={process.env.PUBLIC_URL + `/images/step2.png`}
                    />
                    <img
                      className={`${classes.img} ${
                        stepSuccess === 3
                          ? `${up ? classes.up : classes.down} ${
                              classes.visible
                            }`
                          : ""
                      }`}
                      src={process.env.PUBLIC_URL + `/images/step3.png`}
                    />
                  </div>
                </div>
              </div>
            ) : resStatus === 1 ? (
              <div className={classes.warningForm}>
                <Grid container wrap="nowrap" justify="space-between">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/images/oi.svg"} alt="" />
                  </Grid>
                  <Grid item>
                    <BccTypography type="h3" mb="20px" block>
                    {t("block_form.text-6")}
                    </BccTypography>
                    <BccTypography type="p2l" mb="24px" block>
                    {t("block_form.text-7")}
                    </BccTypography>
                    <Grid container wrap="nowrap" alignItems="center">
                        <a
                          href={getWpUrl()}
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                      <Grid item>
                        <img src={process.env.PUBLIC_URL + "/images/wp.svg"} alt="" />
                      </Grid>
                      <Grid item>
                          <BccTypography type="h6" block color="initial">
                            +7 701 223 0228
                          </BccTypography>
                      </Grid>
                        </a>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            ) : resStatus === 3 ? (
              <div className={classes.warningForm}>
                <Grid container wrap="nowrap" justify="space-between">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/images/oi2.svg"} alt="" />
                  </Grid>
                  <Grid item>
                    <BccTypography type="h3" mb="20px" block>
                    {t("block_form.text-8")}
                    </BccTypography>
                    <BccTypography type="p2l" mb="24px" block>
                    {t("block_form.text-9")}
                      <br />
                      <b>{t("block_form.text-10")}</b>
                    </BccTypography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  justify="center"
                  alignItems="center"
                  className={classes.social}
                >
                  <Grid item>
                    <BccTypography type="p2" weight="medium">
                    {t("block_form.text-11")}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.instagram.com/centercreditkz"
                      target="_blank"
                    >
                      <img src={process.env.PUBLIC_URL + "/images/ig.svg"} alt="" />
                    </a>
                    <a href="https://facebook.com/bcc.kz" target="_blank">
                      <img src={process.env.PUBLIC_URL + "/images/fb.svg"} alt="" />
                    </a>
                    <a
                      href="https://www.youtube.com/user/bcckz"
                      target="_blank"
                    >
                      <img src={process.env.PUBLIC_URL + "/images/yb.svg"} alt="" />
                    </a>
                  </Grid>
                </Grid>
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
