import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardTemplate from "./CardTemplate";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({

       root: {
              maxWidth: 345,
       },
       media: {
              height: 140,
       },
       heroContent: {
              backgroundColor: theme.palette.background.paper,
              padding: theme.spacing(8, 0, 6),
       },
       cardGrid: {
              paddingTop: theme.spacing(8),
              paddingBottom: theme.spacing(8),
       },

}));

export default function LoadJobChange() {
       const classes = useStyles();


       return (
              <>
                     <CssBaseline />

                     {/* Hero unit */}
                     <div className={classes.heroContent}>
                            <Container maxWidth="sm">
                                   <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                          なぜ、フロントなのか？
                                   </Typography>
                                   <Typography variant="h7" align="center" color="textSecondary" paragraph>
                                          現職はサーバーサイドが主戦場です。<br />
                                          そんな私がフロントエンドエンジニアとして
                                          転職を決意した経緯を説明します。
                                   </Typography>
                            </Container>
                     </div>

                     <Container className={classes.cardGrid} maxWidth="md">

                            <Grid container spacing={4}>

                                   <Grid container spacing={5}>
                                          <Grid item xs={12} sm={6} md={4}>
                                                 <CardTemplate contentKey="LeftContent" />
                                          </Grid>
                                          <Grid item xs={12} sm={6} md={4}>
                                                 <CardTemplate contentKey="CenterContent" />
                                          </Grid>
                                          <Grid item xs={12} sm={6} md={4}>
                                                 <CardTemplate contentKey="RightContent" />
                                          </Grid>
                                   </Grid>
                            </Grid>

                     </Container>


              </>

       );
}
