import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
       paper: {
              maxWidth: "90%",
              maxHeight: "80%",
              backgroundColor: theme.palette.background.paper,
              border: "2px solid #000",
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3),
              overflow: "scroll",
       },
       root: {
              maxWidth: 345,
       },
       media: {
              height: 140,
       },
       p: {
              textIndent: 20,
       },

}));

export const RightContent = React.forwardRef((props, ref) => {
       const classes = useStyles();

       return (
              <>
                     {/* <div style={modalStyle} className={classes.paper}> */}
                     <div className={classes.paper}>

                            <Typography gutterBottom variant="h7" component="h2">
                                   フロント領域の学習
                            </Typography>

                            <Typography variant="caption" color="textPrimary" component="p">
                                   フロントエンドエンジニアとしての転職を決意した私ですが、<br />
                                   業務で画面デザイン経験は乏しく、一から独学で勉強することにしました。<br />
                                   目標を「<b>リッチなデザインのSPAを独力で構築できること</b>」に設定し、<br />
                                   そのための技術要素として<b>React</b>と<b>Material Ui</b>を選定しました。<br />
                                   仕事の合間をぬって勉強を重ね、結果として目標は達成できたと考えております。<br />
                                   (当サイトもReact + Material UIの構成で構築しております。)<br /><br />

                                   ただ、テストの手法やコードの可読性、再利用性などは<br />
                                   業務経験の中でスキルを磨いていきたいなと思っているので、
                                   今はまだ自信がありません、、
                            </Typography>
                     </div>
              </>
       )
})