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
            2022年4月を目処にして、<br />フロントエンドエンジニアとして転職を決断しました。<br />
            当サイトを通じて、私のスキルや転職の経緯を<br />
            知っていただければ幸いです。
          </Typography>
        </React.Fragment>
      );

    case "baseProfile":
      return (
        <React.Fragment>
          <Title>基本プロフィール</Title>
          <Typography component="p" >

            1996年生まれ。24才。社会人3年目。<br />
            大学卒業後、保険系SIerに就職。<br />
            アプリケーション基盤チームで、<br />
            サーバーサイドエンジニアとして活躍。<br />
            日常の中でフロントエンドの技術に興味を持ち、<br />
            独学でSPAアプリケーション構築技術を習得。
          </Typography>
          <Typography color="textSecondary" paragraph>
            mail：tabornn.work@gmail.com<br />
            github：
            <a href=" https://github.com/tabornnn">リンク</a>

          </Typography>
        </React.Fragment>
      );

    default:
      return (
        <React.Fragment>
          あいうえお
        </React.Fragment>
      );
  }

}
