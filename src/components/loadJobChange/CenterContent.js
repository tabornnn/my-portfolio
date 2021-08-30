import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

function getModalStyle() {
       const top = 50;
       const left = 50;

       return {
              top: `${ top }%`,
              left: `${ left }%`,
              transform: `translate(-${ top }%, -${ left }%)`
       };
}

const useStyles = makeStyles((theme) => ({
       paper: {
              position: "absolute",
              width: 700,
              backgroundColor: theme.palette.background.paper,
              border: "2px solid #000",
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3)
       },
       root: {
              maxWidth: 345,
       },
       media: {
              height: 140,
       },

}));



export const CenterContent = React.forwardRef((props, ref) => {
       const classes = useStyles();
       const [modalStyle] = React.useState(getModalStyle);
       return (
              <>
                     <div style={modalStyle} className={classes.paper}>
                            <Typography gutterBottom variant="h7" component="h2">
                                   フロントエンドへの興味
                            </Typography>
                            <Typography variant="subtitle1" color="primary" component="p">
                                   利用者の立場で気づいたUIの重要性
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   <div className={classes.p}>
                                          共済系基幹システムをメインフレームからオープン化対応。
                                   </div>
                                   <div className={classes.p}>
                                          約3年に及ぶプロジェクトの立ち上げから参画。
                                   </div>
                                   <br />
                            </Typography>
                     </div>
              </>
       )
})