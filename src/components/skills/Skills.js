import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Rating from '@material-ui/lab/Rating';
import Title from '../common/Title';
import Paper from '@material-ui/core/Paper';


// Generate Order Data
function createData(element, level, explain) {
       return { element, level, explain };
}

// Rateのオブジェクトを返す関数
const levelDef = (level) => {
       return (
              <Rating name="read-only" value={level} max={3} readOnly />
       )
}


const frontRows = [
       createData("HTML", levelDef(2), "基本的なタグの意味を理解し、webページを実装できる。"),
       createData("CSS", levelDef(2), "基本的なタグの意味を理解し、webページを実装できる"),
       createData("JavaScript", levelDef(2), "基本的な使い方を理解し、動的なwebページを実装できる"),
       createData("TypeScript", levelDef(1), "概念レベルの理解。学習中。"),
       createData("React", levelDef(2), "基本的な使い方を理解し、CRUDアプリケーションを構築できる。(当サイトもReactを利用)"),
       createData("Materil UI", levelDef(2), "基本的な使い方を理解し、Webサイトを構築できる。(当サイトもMaterilal UIを利用)"),
       createData("Thymeleaf", levelDef(3), "業務で利用経験があり、他者のコードをRvできるレベルである。"),
];

const backRows = [
       createData("Java", levelDef(2), "Java言語を利用してアプリケーションを構築でき、他者のコードRvを実施できる"),
       createData("SQL", levelDef(3), "適切なSQL文の作成からチューニングまで実施できる"),
       createData("Spring FW", levelDef(2), "FWの使用に準拠したWebアプリケーションを構築できる"),
       createData("Linux", levelDef(2), "シェルを通しての操作、シェルスクリプトを作成することができる。"),
       createData("Docker", levelDef(2), "コンテナの概念を理解し、環境を適切に扱うことができる。"),
];

const toolRows = [
       createData("GitLab", levelDef(3), "開発ルールに準拠した適切な利用ができる"),
       createData("Redmine", levelDef(3), "開発ルールに準拠した適切な利用ができる"),
       createData("Slack", levelDef(3), "開発ルールに準拠した適切な利用ができる"),
];


const useStyles = makeStyles((theme) => ({
       seeMore: {
              marginTop: theme.spacing(3),
       },
       paper: {
              padding: theme.spacing(2),
              display: 'flex',
              overflow: 'auto',
              flexDirection: 'column',
       },
}));

function preventDefault(event) {
       event.preventDefault();
}

export default function Skills() {
       const classes = useStyles();
       return (
              <>

                     <Paper className={classes.paper}>
                            <Title>フロントエンド</Title>
                            <Table size="small">
                                   <TableHead>
                                          <TableRow>
                                                 <TableCell width="15%">技術要素</TableCell>
                                                 <TableCell width="15%">レベル</TableCell>
                                                 <TableCell width="70%">説明</TableCell>
                                                 {/* <TableCell align="right">Sa？le Amount</TableCell> */}
                                          </TableRow>
                                   </TableHead>
                                   <TableBody>
                                          {frontRows.map((row) => (
                                                 <TableRow key={row.element}>
                                                        <TableCell>{row.element}</TableCell>
                                                        <TableCell>{row.level}</TableCell>
                                                        <TableCell>{row.explain}</TableCell>
                                                        <TableCell>{row.paymentMethod}</TableCell>
                                                        <TableCell align="right">{row.amount}</TableCell>
                                                 </TableRow>
                                          ))}
                                   </TableBody>
                            </Table>
                     </Paper>

                     <br /><br />


                     <Paper className={classes.paper}>
                            <Title>バックエンド</Title>
                            <Table size="small">
                                   <TableHead>
                                          <TableRow>
                                                 <TableCell width="15%">技術要素</TableCell>
                                                 <TableCell width="15%">レベル</TableCell>
                                                 <TableCell width="70%">説明</TableCell>
                                                 {/* <TableCell align="right">Sa？le Amount</TableCell> */}
                                          </TableRow>
                                   </TableHead>
                                   <TableBody>
                                          {backRows.map((row) => (
                                                 <TableRow key={row.element}>
                                                        <TableCell>{row.element}</TableCell>
                                                        <TableCell>{row.level}</TableCell>
                                                        <TableCell>{row.explain}</TableCell>
                                                        <TableCell>{row.paymentMethod}</TableCell>
                                                        <TableCell align="right">{row.amount}</TableCell>
                                                 </TableRow>
                                          ))}
                                   </TableBody>
                            </Table>
                     </Paper>

                     <br /><br />

                     <Paper className={classes.paper}>
                            <Title>ツール類</Title>
                            <Table size="small">
                                   <TableHead>
                                          <TableRow>
                                                 <TableCell width="15%">技術要素</TableCell>
                                                 <TableCell width="15%">レベル</TableCell>
                                                 <TableCell width="70%">説明</TableCell>
                                                 {/* <TableCell align="right">Sa？le Amount</TableCell> */}
                                          </TableRow>
                                   </TableHead>
                                   <TableBody>
                                          {toolRows.map((row) => (
                                                 <TableRow key={row.element}>
                                                        <TableCell>{row.element}</TableCell>
                                                        <TableCell>{row.level}</TableCell>
                                                        <TableCell>{row.explain}</TableCell>
                                                        <TableCell>{row.paymentMethod}</TableCell>
                                                        <TableCell align="right">{row.amount}</TableCell>
                                                 </TableRow>
                                          ))}
                                   </TableBody>
                            </Table>
                     </Paper>
              </>
       )
}

