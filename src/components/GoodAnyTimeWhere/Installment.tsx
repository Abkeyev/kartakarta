import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  EmojiObjects,
  ArrowDropDown,
  ArrowDropUp,
  Error,
} from "@material-ui/icons";
import NumberFormat from "react-number-format";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        marginTop: 10,
      },
      subTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        color: "#141414",
      },
      subTitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#5B5B5B",
      },
      noteBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "4px 8px 4px 8px",
        marginTop: 10,
        "&:hover": {
          backgroundColor: "#E8E8E8",
          cursor: "pointer",
        },
      },
      noteIcons: {
        fontSize: 11,
        color: "#B9B9B9",
        marginRight: 5,
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B",
      },
      noteShow: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
        textAlign: "center",
        margin: "10px auto 10px auto",
      },
      noteBold: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 10,
        color: "black",
      },
      noteDetailBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "10px 20px 0px 20px",
        marginTop: 10,
      },
      noteDetail: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B",
        marginTop: 10,
        "& > a": {
          color: "#3F0259",
        },
      },
      noteDetailButton: {
        textTransform: "none",
        color: "#3F0259",
        fontSize: 12,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: "#3F0259",
      },
      tableBlock: {
        padding: 0,
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        borderRadius: "4px",
        marginTop: 16,
      },
      tableBlockLeft: {
        padding: 16,
        textAlign: "center",
        borderBottom: "1px solid E8E8E8",
      },
      tableBlockLeftTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        color: "#141414",
      },
      tableBlockLeftDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#5B5B5B",
      },
      tableBlockLeftCommision: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 36,
        color: "#FFCF87",
      },
      tableBlockLeftCommisionText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#898989",
      },
      tableMoth: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        color: "#898989",
      },
      tableTotalPrice: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 16,
        color: "black",
      },
      tableTd: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
      },
      tableProductName: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#5B5B5B",
      },
      tableProductPrice: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#B9B9B9",
      },
      tableCell: {
        minWidth: 95,
        textAlign: "center",
      },
      table: {
        overflowX: "auto",
      },
      img: {
        width: "100%",
        height: "100%",
        marginTop: 25,
      },
      spanPartners: {
        color: "#3F0259",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
        fontStyle: "bold",
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      container: {
        marginTop: 10,
      },
      subTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414",
      },
      subTitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B",
      },
      noteBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "16px 16px 16px 16px",
        lineHeight: "42px",
        marginTop: 10,
        "&:hover": {
          backgroundColor: "#E8E8E8",
          cursor: "pointer",
        },
      },
      noteIcons: {
        fontSize: 20,
        color: "#B9B9B9",
        verticalAlign: "middle",
        marginRight: 10,
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
      },
      noteShow: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
        verticalAlign: "middle",
        textAlign: "right",
      },
      noteBold: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        color: "black",
      },
      noteDetailBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "20px 47px 0px 47px",
        marginTop: 10,
      },
      noteDetail: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#5B5B5B",
        marginTop: 10,
        "& > a": {
          color: "#3F0259",
        },
      },
      noteDetailButton: {
        textTransform: "none",
        color: "#3F0259",
        fontSize: 16,
        marginTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderColor: "#3F0259",
      },
      tableBlock: {
        padding: 0,
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        borderRadius: "8px",
        marginTop: 32,
      },
      tableBlockLeft: {
        padding: 32,
        borderRight: "1px solid #E8E8E8",
      },
      tableBlockLeftTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 22,
        color: "#141414",
      },
      tableBlockLeftDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
      },
      tableBlockLeftCommision: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 72,
        color: "#FFCF87",
      },
      tableBlockLeftCommisionText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989",
      },
      tableMoth: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 12,
        color: "#898989",
      },
      tableTotalPrice: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        color: "black",
      },
      tableTd: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "black",
      },
      tableProductName: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#5B5B5B",
      },
      tableProductPrice: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#B9B9B9",
      },
      tableCell: {
        minWidth: 110,
        textAlign: "center",
      },
      table: {
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          height: 8,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#A6A6A6",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#E4E4E4",
        },
      },
      img: {
        width: 400,
        height: 250,
        marginTop: 20,
      },
      spanPartners: {
        color: "#3F0259",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
        fontStyle: "bold",
      },
    },
  })
);

interface InstallmentModel {
  img: string;
  name: string;
  price: number;
  installment: number;
  beginMonth: number;
}

const Installment = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();
  const [isShowNote, setShowNote] = React.useState(false);

  const toggleNote = (val: boolean) => {
    setShowNote(val);

    ReactGA.event({
      category: "BccCard_to_uncover",
      action: "to_uncover",
    });
  };

  const monthArr = [
    `${t("block_3.tableMonth_1_tab_1")}`,
    `${t("block_3.tableMonth_2_tab_1")}`,
    `${t("block_3.tableMonth_3_tab_1")}`,
    `${t("block_3.tableMonth_4_tab_1")}`,
    `${t("block_3.tableMonth_5_tab_1")}`,
    `${t("block_3.tableMonth_6_tab_1")}`,
    `${t("block_3.tableMonth_7_tab_1")}`,
    `${t("block_3.tableMonth_8_tab_1")}`,
    `${t("block_3.tableMonth_9_tab_1")}`,
    `${t("block_3.tableMonth_10_tab_1")}`,
    `${t("block_3.tableMonth_11_tab_1")}`,
    `${t("block_3.tableMonth_12_tab_1")}`,
    `${t("block_3.tableMonth_1_tab_1")}`,
  ];

  const items: InstallmentModel[] = [
    {
      img: "installment_dubai.svg",
      name: `${t("block_3.tableInfo_1_tab_1")}`,
      price: 180000,
      installment: 12,
      beginMonth: 1,
    },
    {
      img: "installment_smartphone.svg",
      name: "Смартфон",
      price: 240000,
      installment: 6,
      beginMonth: 2,
    },
    {
      img: "installment_ring.svg",
      name: `${t("block_3.tableInfo_2_tab_1")}`,
      price: 60000,
      installment: 3,
      beginMonth: 3,
    },
  ];

  const totalMothSum = (index: number) => {
    let result = 0;
    items.forEach((val) => {
      result +=
        val.beginMonth - 1 < index && index < val.beginMonth + val.installment
          ? val.price / val.installment
          : 0;
    });
    return result;
  };

  const onClickPartners = () => {
    ReactGA.event({
      category: "BccCard_partners_mode_install",
      action: "partners_mode_install",
    });
  };

  const onClickOrderButton = () => {
    ReactGA.event({
      category: "BccCard_Button_first_purchase",
      action: "Button_first_purchase",
    });
    props.scrollToOrder(false);
  };

  return (
    <Grid container>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.container}
      >
        <Typography className={classes.subTitle}>
          {t("block_3.title_2_tab_1")}
        </Typography>
        <Typography className={classes.subTitleDesc}>
          {t("block_3.subtitle_2_tab_1")}
        </Typography>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.tableBlock}
      >
        <Grid container>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className={classes.tableBlockLeft}
          >
            <Typography className={classes.tableBlockLeftTitle}>
              {t("block_3.tableTitle_tab_1")}
            </Typography>
            <Typography className={classes.tableBlockLeftDesc}>
              {t("block_3.tableSubtitle_2_tab_1")}
            </Typography>
            <Typography>
              <span className={classes.tableBlockLeftCommision}>0%</span>
              &nbsp;&nbsp;
              <span className={classes.tableBlockLeftCommisionText}>
                {t("block_3.tableSubtitle_3_tab_1")}
              </span>
            </Typography>
          </Grid>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={12}
            xs={12}
            className={classes.table}
          >
            <Table>
              <TableBody>
                <TableRow>
                  {monthArr.map((m, i) => (
                    <TableCell key={i} className={classes.tableCell}>
                      <Typography className={classes.tableMoth}>{m}</Typography>
                      <Typography className={classes.tableTotalPrice}>
                        <NumberFormat
                          value={totalMothSum(i)}
                          thousandSeparator={" "}
                          displayType="text"
                        />{" "}
                        ₸
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
                {items.map((val, i) => (
                  <TableRow
                    key={i}
                    style={i % 2 === 0 ? { backgroundColor: "#FAFAFA" } : {}}
                  >
                    {monthArr.map((m, index) => (
                      <TableCell key={index} className={classes.tableCell}>
                        {val.beginMonth - 1 <= index &&
                          (val.beginMonth - 1 < index ? (
                            index < val.beginMonth + val.installment && (
                              <Typography className={classes.tableTd}>
                                <NumberFormat
                                  value={val.price / val.installment}
                                  thousandSeparator={" "}
                                  displayType="text"
                                />{" "}
                                ₸
                              </Typography>
                            )
                          ) : (
                            <Grid container>
                              <Grid
                                item
                                xl={false}
                                lg={false}
                                md={false}
                                sm={false}
                                xs={false}
                              >
                                <img src={val.img} alt={val.name} />
                              </Grid>
                              <Grid
                                item
                                xl={true}
                                lg={true}
                                md={true}
                                sm={true}
                                xs={true}
                              >
                                <Typography
                                  className={classes.tableProductName}
                                >
                                  {val.name}
                                </Typography>
                                <Typography
                                  className={classes.tableProductPrice}
                                >
                                  <NumberFormat
                                    value={val.price}
                                    thousandSeparator={" "}
                                    displayType="text"
                                  />{" "}
                                  ₸
                                </Typography>
                              </Grid>
                            </Grid>
                          ))}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            onClick={() => toggleNote(!isShowNote)}
          >
            <Grid container className={classes.noteBlock}>
              <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
                <Grid container direction="row">
                  <Grid item sm={false} xs={false}>
                    <EmojiObjects className={classes.noteIcons} />
                    <span className={classes.noteBold}>
                      {t("block_3.collapseTitle_tab_1")}
                    </span>
                    &nbsp;&nbsp;
                  </Grid>
                  <Grid item sm={true} xs={true}>
                    <span className={classes.note}>
                      {t("block_3.collapseSubtitle_2_tab_1")}
                    </span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={3}
                xs={12}
                className={classes.note}
              >
                {isShowNote ? (
                  <div className={classes.noteShow}>
                    {t("block_3.collapseButton_3_tab_1")}{" "}
                    <ArrowDropUp className={classes.noteIcons} />
                  </div>
                ) : (
                  <div className={classes.noteShow}>
                    {t("block_3.collapseButton_4_tab_1")}{" "}
                    <ArrowDropDown className={classes.noteIcons} />
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
          {isShowNote && (
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.noteDetailBlock}
            >
              <Grid container>
                <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                  <Typography className={classes.noteBold}>
                    {t("block_3.collapseShowTitle_tab_1")}
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    {t("block_3.collapseShowSubtitle_1_tab_1")}
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    {t("block_3.collapseShowSubtitle_2_tab_1")}
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    {t("block_3.collapseShowSubtitle_3_tab_1")}
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    <span>{t("block_3.collapseShowSubtitle_4_tab_1")}</span>
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    <Button
                      variant="outlined"
                      className={classes.noteDetailButton}
                      onClick={() => onClickOrderButton()}
                    >
                      {t("block_3.button_main")}
                    </Button>
                  </Typography>
                </Grid>
                <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                  <Grid container justify="center">
                    <img
                      className={classes.img}
                      src="installments_star_mobile_banking.gif"
                      alt="installments_star_mobile_banking"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={classes.noteBlock}
          >
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Error className={classes.noteIcons} />
                <span className={classes.note}>
                  {t("block_3.collapseShowInfo_tab_1")}
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Installment;
