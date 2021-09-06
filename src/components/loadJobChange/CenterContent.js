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

export const CenterContent = React.forwardRef((props, ref) => {
       const classes = useStyles();

       return (
              <>
                     {/* <div style={modalStyle} className={classes.paper}> */}
                     <div className={classes.paper}>

                            <Typography gutterBottom variant="h7" component="h2">
                                   フロントエンジニアとして転職を決意
                            </Typography>
                            <Typography variant="subtitle1" color="primary" component="p">
                                   AirbnbのUIに衝撃を受ける
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   {/* <div className={classes.p}> */}

                                   私が初めてAirbnbを利用した際、UIに関連する以下のポイントに感動を受けました。<br />
                                   ・ユーザーの<b>目的を達成するまでの楽さ</b><br />
                                   ・高い<b>操作性</b><br />
                                   ・リッチな<b>デザイン</b><br />
                                   機能的には他の旅行サイトと比較しても大きな差異はないため、使いやすいAirbnbを利用するようになりました。<br />
                                   この経験から私はサービスにおける<b>UIの重要性を認識</b>するともに、<br />
                                   同じような感動を自分も与えたいと感じました。
                                   <br /><br />
                            </Typography>

                            <Typography variant="subtitle1" color="primary" component="p">
                                   SoRからSoEへ、転職を決意
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   私が現在勤めている企業の構築対象システムは、保険・共済向けに基幹システムであることから、<br />
                                   品質・安定性・継続性を重視する<b>SoR</b>の考え方に沿ったシステムです。<br />
                                   この考えから構築されるシステムは、<b>UI部分はあまり重視されていなく</b>、<br />
                                   フロントエンドにおいても最新の技術を採用する機会に望まれませんでした。<br />
                                   しかし私の情熱はフロントエンド技術に傾いていたため、<br />
                                   顧客との繋がりを重視したSoEのシステムを構築している企業で、フロントエンド技術を極めたいと考えました。<br />
                                   こういった経緯があり、私は転職を決意したのです。

                                   <br />
                            </Typography>

                     </div>
              </>
       )
})