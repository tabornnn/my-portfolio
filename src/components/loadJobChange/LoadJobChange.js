import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { LeftContent } from "./LeftContent";



const useStyles = makeStyles((theme) => ({
       icon: {
              marginRight: theme.spacing(2),
       },
       heroContent: {
              backgroundColor: theme.palette.background.paper,
              padding: theme.spacing(8, 0, 6),
       },
       heroButtons: {
              marginTop: theme.spacing(4),
       },
       cardGrid: {
              paddingTop: theme.spacing(8),
              paddingBottom: theme.spacing(8),
       },
       card: {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
       },
       cardMedia: {
              paddingTop: '56.25%', // 16:9
       },
       cardContent: {
              flexGrow: 1,
       },

       paper: {
              maxWidth: '80% ',
              maxHeight: '90%',
              backgroundColor: theme.palette.background.paper,
              border: "2px solid #000",
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3)
       },
       modal: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
       },

}));

export default function LoadJobChange() {
       const classes = useStyles();

       const [open, setOpen] = React.useState(false);
       const handleOpen = () => {
              setOpen(true);
       };

       const handleClose = () => {
              setOpen(false);
       };
       return (
              <React.Fragment>
                     <CssBaseline />

                     <main>
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
                                   {/* End hero unit */}
                                   <Grid container spacing={4}>
                                          {/* {cards.map((card) => ( */}
                                          <Grid item key={1} xs={12} sm={6} md={4}>
                                                 <Card className={classes.card}>
                                                        <CardMedia
                                                               className={classes.cardMedia}
                                                               image={`${ process.env.PUBLIC_URL }/workman.jpg`}
                                                               title="Image title"
                                                        />
                                                        <CardContent className={classes.cardContent}>
                                                               <Typography gutterBottom variant="h5" component="h2">
                                                                      現職の活動内容
                                                               </Typography>
                                                               <Typography>
                                                                      現職では、保険系SIerのアプリケーション基盤チームで、共済向けに基幹システムの導入を実施しております。
                                                               </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                               <Button size="small" color="primary" onClick={handleOpen}>
                                                                      詳細
                                                               </Button>
                                                        </CardActions>
                                                 </Card>
                                                 <Modal
                                                        className={classes.modal}
                                                        aria-labelledby="transition-modal-title"
                                                        aria-describedby="transition-modal-description"
                                                        className={classes.modal}
                                                        open={open}
                                                        onClose={handleClose}
                                                        closeAfterTransition
                                                        BackdropComponent={Backdrop}
                                                        BackdropProps={{
                                                               timeout: 500
                                                        }}
                                                 >
                                                        <Fade in={open}>
                                                               <LeftContent />
                                                        </Fade>
                                                 </Modal>
                                          </Grid>

                                          <Grid item key={1} xs={12} sm={6} md={4}>
                                                 <Card className={classes.card}>
                                                        <CardMedia
                                                               className={classes.cardMedia}
                                                               image={`${ process.env.PUBLIC_URL }/hirameki.jpg`}
                                                               title="Image title"
                                                        />
                                                        <CardContent className={classes.cardContent}>
                                                               <Typography gutterBottom variant="h6" component="h2">
                                                                      フロントエンドへの興味
                                                               </Typography>
                                                               <Typography>
                                                                      日常で利用するアプリケーションからUIの重要性を認識し、スキルを磨くために転職を決意しました。
                                                               </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                               <Button size="small" color="primary">
                                                                      詳細
                                                               </Button>

                                                        </CardActions>
                                                 </Card>
                                          </Grid>

                                          <Grid item key={1} xs={12} sm={6} md={4}>
                                                 <Card className={classes.card}>
                                                        <CardMedia
                                                               className={classes.cardMedia}
                                                               image="https://source.unsplash.com/random"
                                                               title="Image title"
                                                        />
                                                        <CardContent className={classes.cardContent}>
                                                               <Typography gutterBottom variant="h5" component="h2">
                                                                      Heading
                                                               </Typography>
                                                               <Typography>
                                                                      This is a media card. You can use this section to describe the content.
                                                               </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                               <Button size="small" color="primary">
                                                                      詳細
                                                               </Button>

                                                        </CardActions>
                                                 </Card>
                                          </Grid>


                                   </Grid>
                            </Container>
                     </main>

              </React.Fragment>
       );
}
