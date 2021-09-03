import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import PaperItem from './PaperItem'
import MyPicture from './MyPicture';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
       paperHalf: {
              // display: 'flex',

              width: '95%',
              height: 120,
              // marginTop: 20,
              marginLeft: 10,
              // textAlign: 'center',
              // justifyContent: 'center',s
              // alignItems: 'center'


       },
       flexContainer: {
              padding: theme.spacing(2),
              display: 'flex',
              overflow: 'auto',
              flexDirection: 'column',
              margin: '0 auto',
              justifyContent: 'center',
              // marginLeft: 10,
              // marginRight: 10,
              // alignItems: 'center',

       },

}));


export default function Home(props) {
       const classes = useStyles();

       const myPicture = clsx(classes.paper, classes.myPicture);
       const fixedHeightPaper = clsx(classes.paper, classes.fixedPaper);
       const paperHalf = classes.paperHalf
       // const flexContainer = classes.flexContainer



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
                                          <PaperItem name={"baseProfile"} />
                                   </Paper>
                                   <br />
                                   <br />

                                   {/* <Grid container spacing={0}> */}
                                   <Grid container spacing={2}>


                                          <Grid item xs={6} md={6} lg={6}>
                                                 <Card className={paperHalf}>
                                                        <CardContent>
                                                               {/* <Title>転職までの経緯</Title> */}
                                                               <Typography component="h2" variant="subtitle1" color="primary" gutterBottom>
                                                                      転職までの経緯
                                                               </Typography>
                                                        </CardContent>

                                                        <CardActions>
                                                               <Button size="small" onClick={props.updateStateFunc[1]}>&gt;&gt;詳しくみる</Button>
                                                        </CardActions>
                                                 </Card>
                                          </Grid>

                                          <Grid item xs={6} md={6} lg={6}>
                                                 <Card className={paperHalf}>
                                                        <CardContent>
                                                               <Typography component="h2" variant="subtitle1" color="primary" gutterBottom>
                                                                      スキルセット
                                                               </Typography>
                                                               {/* <Typography color="textSecondary">
                                                                      現職の内容と、転職を決めた経緯を説明
                                                               </Typography> */}
                                                        </CardContent>

                                                        <CardActions>
                                                               <Button size="small" onClick={props.updateStateFunc[2]}>
                                                                      &gt;&gt;詳しくみる
                                                               </Button>
                                                        </CardActions>
                                                 </Card>

                                          </Grid>
                                   </Grid>

                            </Grid>
                     </Grid>
              </>
       );
}
