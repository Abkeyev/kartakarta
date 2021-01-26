import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            mainRoot: {
                backgroundColor: 'black'
            },
            root: {
                padding: paddingDownSm
            },
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                color: 'white'
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            mainRoot: {
                backgroundColor: 'black'
            },
            ...rootSmXl,
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 15,
                color: 'white'
            }
        }
    })
)

const Footer = () => {

    const classes = useStyles({});
    const { t } = useTranslation();

    return (
        <Grid container className={classes.mainRoot}>
            <Grid container className={classes.root}>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Typography className={classes.myFont}>© 2000 - {new Date().getFullYear()} {t('footer.copyright_main')}</Typography>
                    <Typography className={classes.myFont}>{t('footer.copyright_2_main')}</Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Typography className={classes.myFont}>{t('footer.copyright_3_main')}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer;