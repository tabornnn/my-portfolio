import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardTemplate from "./CardTemplate";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



// function getModalStyle() {
//        const top = 50;
//        const left = 50;

//        return {
//               top: `${ top }%`,
//               left: `${ left }%`,
//               transform: `translate(-${ top }%, -${ left }%)`
//        };
// }

const useStyles = makeStyles((theme) => ({

       root: {
              maxWidth: 345,
       },
       media: {
              height: 140,
       },
       heroContent: {
              backgroundColor: theme.palette.background.paper,
              padding: theme.spacing(6, 6, 3),
              width: "75%",
              margin: "auto",
       },
       cardGrid: {
              paddingTop: theme.spacing(8),
              paddingBottom: theme.spacing(8),
       },

}));

export default function LoadJobChange() {
       const classes = useStyles();
       // getModalStyle is not a pure function, we roll the style only on the first render
       // const [modalStyle] = React.useState(getModalStyle);
       // const [open, setOpen] = React.useState(false);

       // const handleOpen = () => {
       //        setOpen(true);
       // };

       // const handleClose = () => {
       //        setOpen(false);
       // };


       return (
              <>
                     <div className={classes.heroContent}>
                            <Container>
                                   <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                          なぜ、フロントエンドなのか？
                                   </Typography>
                                   <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                          現職はサーバーサイドが主戦場です。<br />
                                          そんな私がフロントエンドエンジニアとして<br />
                                          転職を決意した経緯を説明します。
                                   </Typography>
                            </Container>
                     </div>
                     <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={7}>

                                   <Grid container spacing={5}>
                                          <Grid item xs={12} md={4} lg={4}>
                                                 <CardTemplate contentKey="LeftContent" />
                                          </Grid>
                                          <Grid item xs={12} md={4} lg={4}>
                                                 <CardTemplate contentKey="CenterContent" />
                                          </Grid>
                                          <Grid item xs={12} md={4} lg={4}>
                                                 <CardTemplate contentKey="RightContent" />
                                          </Grid>
                                   </Grid>
                            </Grid>

                     </Container>


              </>

       );
}
