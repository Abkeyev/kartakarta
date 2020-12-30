import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Tab from "./Tab";
import { rootSmXl, paddingDownSm } from "../helper/DefaultStyle";
import ExpansionPanel from "./ExpansionPanel";
import ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

const useStylesTarifs = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "black"
      },
      a: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        margin: "4px 0",
        whiteSpace: "nowrap"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black"
      },
      a: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        margin: "4px 0"
      }
    }
  })
);

const Tarifs = () => {
  const classes = useStylesTarifs({});
  const { t } = useTranslation();

  const rows = [
    { code: `${t('block_8.title_1_tab_2')}`, value: `${t('block_8.free_main')}` },
    { code: `${t('block_8.title_2_tab_2')}`, value: `${t('block_8.free_main')}` },
    { code: `${t('block_8.title_3_tab_2')}`, value: `${t('block_8.free_main')}` },
    { code: `${t('block_8.title_4_tab_2')}`, value: `${t('block_8.free_main')}` },
    { code: `${t('block_8.title_5_tab_2')}`, value: `${t('block_8.free_main')}` },
    {
      code: `${t('block_8.title_6_tab_2')}`,
      value: (
        <Typography className={classes.td}>
          {t('block_8.subtitle_6_tab_2')} <br /> {t('block_8.subtitle_6_2_tab_2')}
        </Typography>
      )
    },
    {
      code: `${t('block_8.title_7_tab_2')}`,
      value:
        `${t('block_8.subtitle_6_tab_2_1')}`
    }
  ];

  return (
    <Box width={0.7}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
          <TableRow key={15}>
            <TableCell colSpan={2} className={classes.td}>
              {
                // <div>
                //   <Typography>
                //     <a href="tarifs_kz.pdf" className={classes.a}>
                //       <img src="pdf.svg" alt="pdf" />
                //       &nbsp; {t('block_8.title_10_tab_2')}
                //     </a>
                //   </Typography>
                //   <Typography>
                //     <a href="tarifs_ru.pdf" className={classes.a}>
                //       <img src="pdf.svg" alt="pdf" />
                //       &nbsp; {t('block_8.title_11_tab_2')}
                //     </a>
                //   </Typography>
                //  <Typography>
                //     <a href="tarifs_en.pdf" className={classes.a}>
                //       <img src="pdf.svg" alt="pdf" />
                //       &nbsp; {t('block_8.title_12_tab_2')}
                //     </a>
                //   </Typography> 
                // </div>
              }
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

const Conditions = () => {
  const classes = useStylesTarifs({});
  const { t } = useTranslation();

  const rows = [
    { code: `${t('block_8.title_1_tab_1')}`, value: `${t('block_8.subtitle_1_tab_1')}` },
    { code: `${t('block_8.title_2_tab_1')}`, value: `${t('block_8.subtitle_2_tab_1')}` },
    {
      code: `${t('block_8.title_3_tab_1')}`,
      value: (
        <Typography className={classes.td}>
          <b>{t('block_8.subtitle_3_tab_1')}</b>
          <br />
          {t('block_8.subtitle_3_1_tab_1')}
          <br />
          {t('block_8.subtitle_3_2_tab_1')}
        </Typography>
      )
    },
    { code: `${t('block_8.title_4_tab_1')}`, value: "0%" },
    { code: `${t('block_8.title_5_tab_1')}`, value: `${t('block_8.subtitle_5_tab_1')}` }
  ];

  return (
    <Box width={0.7}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Documents = () => {
  const classes = useStylesTarifs({});
  const { t } = useTranslation();

  const rows = ["Программа рассрочки.pdf"];

  return (
    <Box width={0.7}>
      <Table>
        <TableBody>
          {/* <TableRow>
            <TableCell colSpan={2} className={classes.td}>
              <Typography>
                <a href="Cashback_program_ru.pdf" className={classes.a}>
                  <img src="pdf.svg" alt="pdf" />
                  &nbsp; {t('block_8.title_13_tab_4')}
                </a>
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className={classes.td}>
              <Typography>
                <a href="Cashback_program_kz.pdf" className={classes.a}>
                  <img src="pdf.svg" alt="pdf" />
                  &nbsp; {t('block_8.title_14_tab_4')}
                </a>
              </Typography>
            </TableCell>
          </TableRow> */}

          {/* <TableRow>
            <TableCell colSpan={2} className={classes.td}>
              <Typography>
                <a href="#!" className={classes.a}>
                  <img src="pdf.svg" alt="pdf" />
                  &nbsp; {t('block_8.title_15_tab_4')}
                </a>
              </Typography>
            </TableCell>
          </TableRow>*/}

        </TableBody>
      </Table>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      },

      cashbackRowMain: {
        padding: '32px 0'
      },
      cashbackRow: {
        padding: '32px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        '& img': {
          filter: 'grayscale(1) contrast(10)'
        },
        '& a': {
          width: '100%',
          marginBottom: 16,
          background: '#FAFAFA',
          borderRadius: 8,
          padding: '14px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'normal',
          fontSize: 16,
          color: '#000D1A',
          textDecoration: 'none'
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      },
      cashbackRowMain: {
        padding: '32px 0'
      },
      cashbackRow: {
        padding: '32px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& img': {
          filter: 'grayscale(1) contrast(10)'
        },
        '& a': {
          width: '40%',
          background: '#FAFAFA',
          borderRadius: 8,
          padding: '14px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'normal',
          fontSize: 16,
          color: '#000D1A',
          textDecoration: 'none'
        }
      }
    }
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const swipeTab = (index: number) => {
    let actionName = "Additional_Conditions";

    if (index === 1) {
      actionName = "Additional_Rates";
    } else if (index === 2) {
      actionName = "Additionally_FAQ";
    }

    ReactGA.event({
      category: `BccCard_${actionName}`,
      action: actionName
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.cashbackRowMain} item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>{t('block_8.button_4_tab_4')}</Typography>
        <div className={classes.cashbackRow}>
          <a href={t("block_8.file_name_tarifs")} className={classes.a}>
            <img src="pdf.svg" alt="pdf" />
                    &nbsp; {t('block_8.button_2_tab_2')}
          </a>
          <a href={t("block_8.file_name")} className={classes.a}>
            <img src="pdf.svg" alt="pdf" />
                    &nbsp; {t('block_8.title_13_tab_4')}
          </a>
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>{t('block_8.title_main')}</Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Tab
          onHandleChanged={(i: number) => swipeTab(i)}
          menuTitle={[
            `${t('block_8.button_1_tab_1')}`,
            `${t('block_8.button_2_tab_2')}`,
            `${t('block_8.button_3_tab_3')}`
          ]}
          pans={[<Conditions />, <Tarifs />, <ExpansionPanel />]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
