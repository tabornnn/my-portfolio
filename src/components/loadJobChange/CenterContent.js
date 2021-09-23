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
                                   転職を決意
                            </Typography>

                            <Typography variant="caption" color="textPrimary" component="p">
                                   約2年半のITエンジニアの経験から明確になった「理想のエンジニア像」と<br />
                                   実現するために求めている職場環境を説明いたします。
                            </Typography>

                            <br />

                            <Typography variant="subtitle1" color="primary" component="p">
                                   <b>エンジニアとしてのカバー領域について</b>
                            </Typography>
                            <Typography variant="subtitle2" color="secondary" component="p">
                                   理想①：<u>システム全体を俯瞰できるようなフルスタックエンジニアになりたい</u>
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   <b>◇背景</b>  <br />
                                   業務の中で、性能検証やFWの構築を経験し、<br />
                                   エラーの原因特定や仕様変更による影響箇所の調査時など、<br />
                                   システムを局所的ではなく、全体で見ることの重要性を実感。<br />
                                   インフラからアプリまで幅広くカバーできるエンジニアを目指したい。       <br />
                                   <br />
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   <b>◇現環境と求める環境</b><br />
                                   技術的には、アプリ基盤チームという特性上、幅広い分野に触れることができているが、<br />
                                   大規模システムであることで、情報収集時に別部署を跨ぐなどやりづらさを感じている。<br />
                                   全体像を把握しやすい小〜中規模のシステム構築を担当してみたい。
                                   <br />
                            </Typography>
                            <br />

                            <Typography variant="subtitle1" color="primary" component="p">
                                   <b>ビジネススキルについて</b>

                            </Typography>
                            <Typography variant="subtitle2" color="secondary" component="p">
                                   理想②：<u>変化に対応できるエンジニアになりたい</u>
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">

                                   <b>◇背景</b>  <br />

                                   IT技術は日々進歩するため、常に最新のトレンドを追い求めるなど変化に対応しなければ、<br />
                                   エンジニアとしての価値がなくなっていくと感じた。<br />
                                   <br />

                                   <b>◇現環境と求める環境</b><br />
                                   保険系SIerということもあり、求められるのは「信頼性」や「確実性」。<br />
                                   そのため最新技術の導入には非常に慎重で、何年も前のソースコードが未だに使用されている。<br />
                                   中にいると、世の技術の変遷など感じることはあまりなく、<br />
                                   このままでもずっと生きていけるような気がしてしまう。<br />
                                   この状況に危機感を感じ、最新の技術を扱っている環境に身を置き、<br />
                                   変化に対応できる人材になりたい。


                            </Typography>

                            <br />

                            <Typography variant="subtitle2" color="secondary" component="p">
                                   理想③：<u>サービス志向型のエンジニアになりたい</u>
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   <b>◇背景</b>  <br />
                                   自分たちが構築したシステムに関して、「ユーザーの反応がみたい！」と感じるようになり、<br />
                                   サービス自体をどう改善していくのかという視点も持ったエンジニアになりたい。<br />

                                   <br />
                                   <b>◇現環境と求める環境</b><br />
                                   現環境では、「ユーザーが決めた仕様をどう実現するか」という視点が強く、<br />
                                   サービス自体について考えることはほとんどないと感じる。<br />
                                   よりユーザーに近い視点で開発できるような環境に身を置きたい。<br />
                            </Typography>
                            <br />

                            <Typography variant="subtitle1" color="primary" component="p">
                                   <b>自身の趣味嗜好について</b>
                            </Typography>
                            <Typography variant="subtitle2" color="secondary" component="p">
                                   理想④：<u>モダンなフロントエンド技術に触れたい</u>
                            </Typography>
                            <Typography variant="caption" color="textPrimary" component="p">
                                   <b>◇背景</b>  <br />

                                   個人的に、SPAを実現するようなモダンなフロントエンド技術に興味があり、<br />
                                   フルスタックを目指しつつも、フロントエンドはさらに特化しているような人材を目指しています。<br />
                                   <br />
                                   <b>◇現環境と求める環境</b><br />
                                   現環境では、最新の技術が中々取り入れられないため、<br />
                                   フロント技術は基本的なHTML・CSS・JavaScriptに触れる程度です。<br />
                                   個人としてReactやTypeScriptを学習しているため、これらを活用できるような環境に身を置きたいです。<br />
                            </Typography>
                     </div>
              </>
       )
})