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
import { CenterContent } from "./CenterContent";
import { RightContent } from "./RightContent";



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

       const [openLeft, setOpenLeft] = React.useState(false);
       const handleOpenLeft = () => {
              setOpenLeft(true);
       };
       const handleCloseLeft = () => {
              setOpenLeft(false);
       };


       const [openCenter, setOpenCenter] = React.useState(false);
       const handleOpenCenter = () => {
              setOpenCenter(true);
       };
       const handleCloseCenter = () => {
              setOpenCenter(false);
       };


       const [openRight, setOpenRight] = React.useState(false);
       const handleOpenRight = () => {
              setOpenRight(true);
       };
       const handleCloseRight = () => {
              setOpenRight(false);
       };
       return (
              <React.Fragment>
                     <CssBaseline />
                     <main>
                            {/* Hero unit */}
                            <div className={classes.heroContent}>
                                   <Container maxWidth="sm">
                                          <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                                                 なぜ、フロント？
                                          </Typography>
                                          <Typography variant="h6" align="center" color="textSecondary" paragraph>
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
                                                               <Button size="small" color="primary" onClick={handleOpenLeft}>
                                                                      詳細
                                                               </Button>
                                                        </CardActions>
                                                 </Card>
                                                 <Modal
                                                        className={classes.modal}
                                                        aria-labelledby="transition-modal-title"
                                                        aria-describedby="transition-modal-description"
                                                        open={openLeft}
                                                        onClose={handleCloseLeft}
                                                        closeAfterTransition
                                                        BackdropComponent={Backdrop}
                                                        BackdropProps={{
                                                               timeout: 500
                                                        }}
                                                 >
                                                        <Fade in={openLeft}>
                                                               <LeftContent />
                                                        </Fade>
                                                 </Modal>
                                          </Grid>

                                          <Grid item key={2} xs={12} sm={6} md={4}>
                                                 <Card className={classes.card}>
                                                        <CardMedia
                                                               className={classes.cardMedia}
                                                               image={`${ process.env.PUBLIC_URL }/hirameki.jpg`}
                                                               title="Image title"
                                                        />
                                                        <CardContent className={classes.cardContent}>
                                                               <Typography gutterBottom variant="h6" component="h2">
                                                                      フロントエンジニアとして転職を決意
                                                               </Typography>
                                                               <Typography>
                                                                      日常で利用するアプリケーションからUIの重要性を認識し、スキルを磨くために転職を決意しました。
                                                               </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                               <Button size="small" color="primary" onClick={handleOpenCenter}>
                                                                      詳細
                                                               </Button>
                                                        </CardActions>
                                                 </Card>
                                                 <Modal
                                                        className={classes.modal}
                                                        aria-labelledby="transition-modal-title"
                                                        aria-describedby="transition-modal-description"
                                                        open={openCenter}
                                                        onClose={handleCloseCenter}
                                                        closeAfterTransition
                                                        BackdropComponent={Backdrop}
                                                        BackdropProps={{
                                                               timeout: 500
                                                        }}
                                                 >
                                                        <Fade in={openCenter}>
                                                               <CenterContent />
                                                        </Fade>
                                                 </Modal>
                                          </Grid>

                                          <Grid item key={3} xs={12} sm={6} md={4}>
                                                 <Card className={classes.card}>
                                                        <CardMedia
                                                               className={classes.cardMedia}
                                                               image={`${ process.env.PUBLIC_URL }/study.jpg`}
                                                               title="Image title"
                                                        />
                                                        <CardContent className={classes.cardContent}>
                                                               <Typography gutterBottom variant="h5" component="h2">
                                                                      フロント領域の学習
                                                               </Typography>
                                                               <Typography>
                                                                      業務におけるフロント技術経験が乏しい私は、独学を始めます。
                                                               </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                               <Button size="small" color="primary" onClick={handleOpenRight}>
                                                                      詳細
                                                               </Button>

                                                        </CardActions>
                                                 </Card>
                                                 <Modal
                                                        className={classes.modal}
                                                        aria-labelledby="transition-modal-title"
                                                        aria-describedby="transition-modal-description"
                                                        open={openRight}
                                                        onClose={handleCloseRight}
                                                        closeAfterTransition
                                                        BackdropComponent={Backdrop}
                                                        BackdropProps={{
                                                               timeout: 500
                                                        }}
                                                 >
                                                        <Fade in={openRight}>
                                                               <RightContent />
                                                        </Fade>
                                                 </Modal>
                                          </Grid>
                                   </Grid>
                            </Container>
                     </main>

              </React.Fragment>
       );
}
