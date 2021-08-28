import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from '../common/Title';

export default function PaperItem(props) {

  switch (props.name) {
    case "sitePurpose":
      return (
        <React.Fragment>
          <Title>当サイトの目的</Title>
          <Typography component="p" variant="h6">
            井上昂のポートフォリオ。
          </Typography>
          <Typography component="p" variant="h6">
            2022年4月にフロントエンジニアとして転職できるよう活動中。
          </Typography>
          <Typography component="p" variant="h6">
          </Typography>
        </React.Fragment>
      );

    case "baseProfile":
      return (
        <React.Fragment>
          <Title>基本プロフィール</Title>
          <Typography component="p" variant="h6">
            1996年生まれ。<b>24才</b>。社会人3年目。
          </Typography>
          <Typography component="p" variant="h6">
            大学卒業後、保険系SIerに就職。
          </Typography>
          <Typography component="p" variant="h6">
            アプリケーション基盤Tで、<br />
            サーバーサイドエンジニアとして活躍。
          </Typography>
          <Typography component="p" variant="h6">
            フロントエンドの技術に興味を持ち、<br />
            独学でSPAアプリケーション構築技術を習得。
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
