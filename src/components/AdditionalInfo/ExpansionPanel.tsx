import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        width: "100%",
        marginTop: 10
      },
      item: {
        marginBottom: 10,
        backgroundColor: "#FAFAFA",
        borderRadius: 4,
        borderColor: "transparent",
        "&:before": {
          height: 0
        }
      },
      summary: {
        fontSize: theme.typography.pxToRem(10),
        color: "#141414"
      },
      details: {
        fontSize: theme.typography.pxToRem(10),
        color: "#5B5B5B"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        width: "100%",
        marginTop: 15
      },
      item: {
        marginBottom: 15,
        backgroundColor: "#FAFAFA",
        borderRadius: 4,
        borderColor: "transparent",
        "&:before": {
          height: 0
        }
      },
      summary: {
        fontSize: theme.typography.pxToRem(16),
        color: "#141414"
      },
      details: {
        fontSize: theme.typography.pxToRem(16),
        color: "#5B5B5B"
      }
    }
  })
);

const ControlledExpansionPanels = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const arrays = [
    {
      question: `${t('block_8.title_20_tab_3')}`,
      answer:
        `${t('block_8.subtitle_20_tab_3')}`
    },
    {
      question: `${t('block_8.title_21_tab_3')}`,
      answer:
        `${t('block_8.subtitle_21_tab_3')}`
    },
    {
      question: `${t('block_8.title_22_tab_3')}`,
      answer:
        `${t('block_8.subtitle_22_tab_3')}`
    },
    {
      question: `${t('block_8.title_23_tab_3')}`,
      answer:
        `${t('block_8.subtitle_23_tab_3')}`
    },
    {
      question: `${t('block_8.title_24_tab_3')}`,
      answer:
        `${t('block_8.subtitle_24_tab_3')}`
    },
    {
      question: `${t('block_8.title_25_tab_3')}`,
      answer:
        `${t('block_8.subtitle_25_tab_3')}`
    },
    {
      question: `${t('block_8.title_26_tab_3')}`,
      answer:
        `${t('block_8.subtitle_26_tab_3')}`
    },
    {
      question: `${t('block_8.title_27_tab_3')}`,
      answer:
        `${t('block_8.subtitle_27_tab_3')}`
    },
    {
      question: `${t('block_8.title_28_tab_3')}`,
      answer:
        `${t('block_8.subtitle_28_tab_3')}`
    },
    {
      question: `${t('block_8.title_29_tab_3')}`,
      answer:
        `${t('block_8.subtitle_29_tab_3')}`
    },
    {
      question: `${t('block_8.title_30_tab_3')}`,
      answer:
        `${t('block_8.subtitle_30_tab_3')}`
    },
    {
      question: `${t('block_8.title_31_tab_3')}`,
      answer:
        `${t('block_8.subtitle_31_tab_3')}`
    },
    {
      question: `${t('block_8.title_32_tab_3')}`,
      answer:
        `${t('block_8.subtitle_32_tab_3')}`
    },
    {
      question: `${t('block_8.title_32_2_tab_3')}`,
      answer:
        `${t('block_8.subtitle_32_2_tab_3')}`
    },
    {
      question: `${t('block_8.title_33_tab_3')}`,
      answer:
        `${t('block_8.subtitle_33_tab_3')}`
    },
    {
      question: `${t('block_8.title_34_tab_3')}`,
      answer:
        `${t('block_8.subtitle_34_tab_3')}`
    },
    {
      question: `${t('block_8.title_35_tab_3')}`,
      answer:
        `${t('block_8.subtitle_35_tab_3')}`
    },
    {
      question: `${t('block_8.title_36_tab_3')}`,
      answer:
        `${t('block_8.subtitle_36_tab_3')}`
    }
  ];

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {arrays.map((m, i) => (
        <ExpansionPanel
          elevation={0}
          className={classes.item}
          expanded={expanded === `${i}`}
          onChange={handleChange(`${i}`)}
          key={i}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.summary}>{m.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>{m.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default ControlledExpansionPanels;
