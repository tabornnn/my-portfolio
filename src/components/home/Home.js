import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import PaperItem from './PaperItem'
import MyPicture from './MyPicture';


// スタイルのカスタマイズ。Hook式
const useStyles = makeStyles((theme) => ({

       paper: {
              padding: theme.spacing(2),
              display: 'flex',
              overflow: 'auto',
              flexDirection: 'column',
       },
       // fixedHeight: {
       //        // height: 240,
       //        height: 550,
       // },

       fixedHeight2: {
              marginTop: 32,
              height: 255,
       },

       fixedHeight3: {
              marginBottom: 32,
              height: 255,
       }
}));


export default function Home() {
       const classes = useStyles();

       const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
       const fixedHeight2Paper = clsx(classes.paper, classes.fixedHeight2);
       const fixedHeight3Paper = clsx(classes.paper, classes.fixedHeight3);

       return (
              <>
                     <Grid container spacing={3}>
                            {/* Chart */}
                            {/* xs,md,lgについては下記サイトを参照 */}
                            {/* https://qiita.com/akatsuki174/items/53b7367b04ed0b066bbf */}
                            <Grid item xs={12} md={6} lg={7}>
                                   <Paper className={fixedHeightPaper}>
                                          <MyPicture />
                                   </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={6} lg={5}>
                                   <Paper className={fixedHeight3Paper}>
                                          <PaperItem name={"sitePurpose"} />
                                   </Paper>
                                   <Paper className={fixedHeight2Paper}>
                                          <PaperItem name={"baseProfile"} />
                                   </Paper>
                            </Grid>
                     </Grid>
              </>
       );
}
