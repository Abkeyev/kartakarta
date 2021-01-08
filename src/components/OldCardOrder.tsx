import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
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
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        marginTop: "8px",
        padding: "36px 20px 36px 20px",
        alignItems: "center",
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
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        padding: "64px 252px 64px 252px",
        maxWidth: 1280,
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
    cityTitle: {
      textTransform: "capitalize",
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

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

const OldCardOrder = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [iin, setIin] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);
  const [timer, setTimer] = React.useState(0);
  const [code, setCode] = React.useState("");
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
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
        fio.length > 1 &&
        iin.length === 12 &&
        phoneNumber.replace("_", "").length === 17 &&
        city.length > 1 &&
        agree
      );
    } else if (step === 1) {
      return code.length === 6;
    } else {
      return true;
    }
  };

  const formatPhoneNumber = () => {
    let res = phoneNumber;
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
      .sendOtp({ phone: formatPhoneNumber() })
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
      category: "Kartakarta_finalfeedback",
      action: "Success_finalfeedback",
    });
    api.authOtp
      .confirmOtp({
        phone: formatPhoneNumber(),
        otp: code,
        iin: iin
      })
      .then((userContext) => {
        props.scrollToOrder(false);
        localStorage.setItem("userContext", JSON.stringify(userContext));
        sendForm();
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
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

  const sendForm = () => {
    ReactGA.event({
      category: "BccCard_kartakarta_Apply_Success",
      action: "kartakarta_Apply_Success",
    });

    const time: any = new Date();
    let itemsArrayHelp: any = [];
    itemsArrayHelp.push(["11111111111", time]);

    let itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items")!)
      : [itemsArrayHelp];

    for (let i = itemsArray.length - 1; i >= 0; i--) {
      if (itemsArray[i][0] === phoneNumber) {
        if (Date.parse(time) - Date.parse(itemsArray[i][1]) < 1000 * 60 * 15) {
          props.snackUp(t("block_9.snack_bar_repeat"));
          return;
        }
      }
    }

    itemsArray.push([phoneNumber, time]);
    localStorage.setItem("items", JSON.stringify(itemsArray));

    if (
      time.getDay() >= 1 &&
      time.getDay() <= 5 &&
      (time.getHours() >= 9 || time.getHours() < 21)
    ) {
      props.snackUp(t("block_9.snack_bar_week"));
    } else if (
      (time.getDay() === 6 || time.getDay() === 0) &&
      (time.getHours() >= 11 || time.getHours() < 20)
    ) {
      props.snackUp(t("block_9.snack_bar_week"));
    } else {
      props.snackUp(t("block_9.snack_bar_week_end"));
    }

    setTimeout(() => {
      if (phoneNumber && setPhoneNumber) {
        const formData = new FormData();

        formData.append("TELEPHONE", phoneNumber);
        formData.append("NAME", fio);
        formData.append("BRANCH", city);
        formData.append("IIN", iin);
        formData.append("SYSTEM_TITLE", "#картакарта");
        formData.append("SYSTEM_POST_EVENT", "NEW_USER");
        formData.append("SYSTEM_LINK", "https://www.bcc.kz/kartakarta");
        formData.append("SYSTEM_IBLOCK_ID", "143");
        formData.append("SYSTEM_NAME_ELEMENT", "NAME");
        formData.append("SYSTEM_STATUS", "2901640");
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
      }

      api.camunda
        .callback({
          fio: fio,
          phone: formatPhoneNumber(),
          iin: iin,
          city: city,
          date: moment().format("DD-MM-YYYY"),
          requestID: uuid(),
          utm_source: getUrlParameter("utm_source"),
          utm_medium: getUrlParameter("utm_medium"),
          utm_campaign: getUrlParameter("utm_campaign"),
          utm_term: getUrlParameter("utm_term"),
          utm_content: getUrlParameter("utm_content"),
        })
        .then((r: any) => {
          props.scrollToOrder(false);
          setStep(0);
          setFio("");
          setCity("");
          setPhoneNumber("");
          setTimer(0);
          setCode("");
          setPhoneError(false);
          setLoading(false);
          setOpenError(false);
        })
        .catch((e: any) => {
          props.scrollToOrder(false);
          console.error(e);
          setStep(0);
          setFio("");
          setCity("");
          setPhoneNumber("");
          setTimer(0);
          setCode("");
          setPhoneError(false);
          setLoading(false);
          setOpenError(false);
        });
    }, 2000);

    ym("reachGoal", "send_mess");
  };

  const handleClose = () => {
    setOpenError(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getOtp();
  };

  const classes = useStyles({});
  const { t } = useTranslation();

  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

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
          {t("block_6.title_main_2")}
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
        <form onSubmit={handleSubmit} className={classes.form}>
          <BlockUi tag="div" blocking={isLoading}>
            {step === 0 ? (
              <>
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="name"
                  label={t("block_6.name_main") + "*"}
                  name="name"
                  value={fio}
                  onChange={(e: any) => setFio(e.target.value)}
                />
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="phone"
                  name="phone"
                  helperText={phoneError ? t("block_6.phone_error") : ""}
                  error={phoneError ? true : false}
                  value={phoneNumber}
                  onChange={(e: any) => setPhoneNumber(e.target.value)}
                  label={t("block_6.phone_main")}
                  InputProps={{
                    inputComponent: BccMaskedInput as any,
                  }}
                />
                <TextField
                  size={isXS ? "small" : "medium"}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="iin"
                  label={t("block_6.iin_main")}
                  name="iin"
                  value={iin}
                  onChange={(e: any) =>
                    setIin(e.target.value.replace(/\D/g, "").substr(0, 12))
                  }
                />
                <TextField
                  fullWidth={true}
                  label={t("block_6.city") + "*"}
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
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      disabled={!isValid()}
                    >
                      {t("block_6.help_btn")}
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
            ) : (
                  <></>
                )}
          </BlockUi>
        </form>
      </Paper>
    </Grid>
  );
};

export default OldCardOrder;
