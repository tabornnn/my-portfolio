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

       p2: {
              textIndent: 40,
       }

}));

export const LeftContent = React.forwardRef((props, ref) => {
       const classes = useStyles();

       return (
              <>
                     {/* <div style={modalStyle} className={classes.paper}> */}
                     <div className={classes.paper}>

                            <Typography gutterBottom variant="h7" component="h2">
                                   現職の活動内容について
                            </Typography>
                            <Typography variant="subtitle1" color="primary" component="p">
                                   参加案件について
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

                            <Typography variant="subtitle1" color="primary" component="p">
                                   所属チームについて
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   <div className={classes.p}>
                                          アプリケーション基盤チームに所属。FWの構築や共通部品の作成などを遂行。
                                   </div>
                                   <div className={classes.p}>
                                          インフラチームとアプリチーム双方と連携を取りながら業務を進める。
                                   </div>
                                   <br />
                            </Typography>

                            <Typography variant="subtitle1" color="primary" component="p">
                                   経験業務について
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">

                                   <div className={classes.p}>
                                          1 . 性能測定
                                   </div>
                                   <div className={classes.p2}>
                                          オンライン/バッチシステムの性能測定を担当し、
                                          問題発見・原因究明・チューニング・顧客報告を遂行。
                                   </div>


                                   <div className={classes.p}>
                                          2 . FW/共通部品の構築
                                   </div>
                                   <div className={classes.p2}>
                                          ・排他制御機構の設計開発
                                   </div>
                                   <div className={classes.p2}>
                                          ・業務アプリ側が利用する共通部品の作成
                                   </div>
                                   <div className={classes.p2}>
                                          ・DB2へのアクセス部品の作成。(ストアドプロシージャ/ファンクション)
                                   </div>

                                   <div className={classes.p}>
                                          3 . テスト環境の構築
                                   </div>
                                   <div className={classes.p2}>
                                          Dockerを用いたテスト環境を構築
                                   </div>
                                   <div className={classes.p}>
                                          4 . 認証基盤の構築
                                   </div>
                                   <div className={classes.p2}>
                                          keycloakを利用し、周辺システムと認証基盤を統合
                                   </div>
                                   <div className={classes.p}>
                                          5 . PMO
                                   </div>
                                   <div className={classes.p2}>
                                          チーム内のPMOとして各メンバーの業務遂行をサポート
                                   </div>
                                   <div className={classes.p2}>
                                          会議のファシリテータやWBSの更新、各メンバーへの作業指示を実施
                                   </div>
                                   <br />
                            </Typography>

                            <Typography variant="subtitle1" color="primary" component="p">
                                   身につけたスキル
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">

                                   <div className={classes.p}>
                                          1 . ITスキル
                                   </div>
                                   <div className={classes.p2}>
                                          Webシステム構築に必要なインフラ・ミドルウェアの構成要素の理解し、適切に利用できること。
                                   </div>
                                   <div className={classes.p2}>
                                          システムの非機能面を考慮した設計ができること(主にSQL)。
                                   </div>

                                   <div className={classes.p}>
                                          2 . ビジネススキル
                                   </div>
                                   <div className={classes.p2}>
                                          チームで働くために必要なコミュニケーション能力。(トレース、ヘルプ、進捗報告、会議運営)
                                   </div>

                            </Typography>


                     </div>
              </>
       )
})