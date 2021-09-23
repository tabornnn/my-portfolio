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
                                   モダンなフロントエンド技術の学習
                            </Typography>

                            <Typography variant="caption" color="textPrimary" component="p">
                                   私自身の嗜好として「モダンなフロントエンド技術」に興味がありますが、<br />
                                   業務上フロントエンドに関しては簡単なHTML・CSS・JavaScriptのみ。<br />
                                   そのため個人で学習を進めており、<br />
                                   目標を「<b>リッチなデザインのSPAをReactで構築できること</b>」に設定しました。<br />
                                   仕事の合間をぬって学習を進めていき、<br />
                                   結果として目標は達成できたと考えております。<br />
                                   (当サイトもReact + Material UIの構成で構築しております。)<br /><br />


                            </Typography>
                     </div>
              </>
       )
})