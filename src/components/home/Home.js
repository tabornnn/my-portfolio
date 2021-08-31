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
              margin: '0 auto',
              justifyContent: 'center',
              marginLeft: 10,
              marginRight: 10,
              // alignItems: 'center',
       },

       myPicture: {
              marginTop: 20,
       },
       fixedPaper: {
              marginTop: 20,

       },

}));


export default function Home() {
       const classes = useStyles();

       const myPicture = clsx(classes.paper, classes.myPicture);
       const fixedHeightPaper = clsx(classes.paper, classes.fixedPaper);


       return (
              <>
                     <Grid container spacing={1}>

                            {/* Chart */}
                            {/* xs,md,lgについては下記サイトを参照 */}
                            {/* https://qiita.com/akatsuki174/items/53b7367b04ed0b066bbf */}
                            <Grid item xs={12} md={6} lg={7}>
                                   <Paper className={myPicture}>
                                          <MyPicture />
                                   </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={6} lg={5}>
                                   <Paper className={fixedHeightPaper}>
                                          <PaperItem name={"sitePurpose"} />
                                   </Paper>
                                   <br />
                                   <Paper className={fixedHeightPaper}>
                                          <PaperItem name={"baseProfile"} />
                                   </Paper>
                            </Grid>
                     </Grid>
              </>
       );
}
