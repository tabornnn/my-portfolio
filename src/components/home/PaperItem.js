import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from '../common/Title';

export default function PaperItem(props) {

  switch (props.name) {
    case "sitePurpose":
      return (
        <React.Fragment>
          <Title>当サイトの目的</Title>
          <Typography  >
            私、井上昂のポートフォリオとなります。<br />
            2022年1月~3月を目処にして、<br />フロントエンドエンジニアとして転職を決断しました。<br />
            当サイトを通じて、私のスキルや転職の経緯を<br />
            知っていただければ幸いです。
          </Typography>
        </React.Fragment>
      );

    case "baseProfile":
      return (
        <React.Fragment>
          <Title>プロフィール</Title>
          <Typography variant="body2">
            井上昂(Takashi Inoue)<br />
            1996年生まれ。24才。社会人3年目。<br />
            大学卒業後、保険系SIerに就職。<br />
            アプリケーション基盤チームで、<br />
            基幹システムの構築に従事し、バックエンド中心に活躍。<br />
            目指しているエンジニア像を実現できる環境を求めて転職を決意。

          </Typography>
          <Typography color="textSecondary" paragraph>
            mail：tabornn.work@gmail.com<br />
            github：
            <a href="https://github.com/tabornnn">https://github.com/tabornnn</a>

          </Typography>
        </React.Fragment>
      );

    default:
      return (
        <React.Fragment>
          Error!
        </React.Fragment>
      );
  }

}
