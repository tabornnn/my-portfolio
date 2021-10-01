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
                                   共済組合の学生向け商品に関して、契約管理システムをオープン化する対応。<br />
                                   既存のホストや周辺システムとの整合性を担保しつつ、新規に契約管理システムを構築を実施。<br />
                            </Typography>
                            <br />
                            <Typography variant="subtitle1" color="primary" component="p">
                                   所属チームについて
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   アプリケーション基盤チームに所属。FWの構築や共通部品の作成などに従事。<br />
                                   インフラチームとアプリチーム双方と連携を取りながら業務を進める。
                                   <br />
                            </Typography>
                            <br />
                            <Typography variant="subtitle1" color="primary" component="p">
                                   経験業務について
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   <b>1 . 性能検証</b>
                                   <br />
                                   オンライン/バッチシステムの性能測定を担当し、
                                   問題発見・原因究明・チューニング・顧客報告を遂行。<br /><br />

                                   <b>2 . FW/共通部品の構築</b><br />
                                   ・排他制御機構の設計開発<br />
                                   ・業務アプリ側が利用する共通部品の作成<br />
                                   ・DB2へのアクセス部品の作成。(ストアドプロシージャ/ファンクション)<br /><br />

                                   <b>3 . テスト環境の構築</b><br />
                                   Dockerを用いたテスト環境を構築<br /><br />

                                   <b>4 . 認証基盤の構築</b><br />
                                   Keycloakを利用し、周辺システムと認証基盤を統合<br /><br />

                                   <b>5 . PMO</b><br />
                                   チーム内のPMOとして各メンバーの業務遂行をサポート<br />
                                   会議のファシリテータやWBSの更新、各メンバーへの作業指示を実施<br />
                                   <br />
                            </Typography>
                            <Typography variant="subtitle1" color="primary" component="p">
                                   実績
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">

                                   <b>1 . システムの根幹となる排他制御機構の設計開発を遂行</b><br />
                                   周辺システムとの整合性も考慮した排他制御機構を設計<br /><br />

                                   <b>2 . オンライン、バッチの性能検証を担当し、作業計画、実施、結果の考察、チューニングを実施し顧客への報告を実施。</b><br />
                                   <br />

                                   <b>3. チーム内PMOとして、成果物管理や会議のファシリテータを担当し、プロジェクトの円滑化を推進</b><br />
                            </Typography>
                     </div>
              </>
       )
})
