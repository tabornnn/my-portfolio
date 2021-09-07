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
                                   Netfilxを利用した経験
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   {/* <div className={classes.p}> */}

                                   私は動画配信サービスのNetflixとAmazon Primeの両方に登録しています。<br />
                                   しかし長年利用する間に、「Netflixをまず見て、なかったらAmazon Primeをみる」という流れになり、<br />
                                   私の中でNetflixが優勢になっていました。<br />

                                   コンテンツ内容としてはあまり相違がない両サービスですが、単純にNetflixの方がアプリを触っていて快適だったのです。<br />

                                   これについて深堀してみると、<br />
                                   ・各アイテムの色味や配置、大きさなどのデザイン<br />
                                   ・表示している画面に応じて変化するアイテムの状態
                                   (動画の自動再生機能など)<br />
                                   といったUI部分に惹かれていたのでした。<br />

                                   私はこの経験を通して、利用者が同様の体験をするようなサービスを作りたいと思うとともに、<br />
                                   システムにおける<b>フロントエンドの技術</b>に興味を抱きました。<br />
                                   <br />
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