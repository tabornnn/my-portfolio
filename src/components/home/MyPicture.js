import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgStyle: {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
  },
}));

export default function MyPicture() {
  // スタイルのカスタマイズ。Hook式
  const classes = useStyles();
  return (
    <React.Fragment>
      <img className={classes.imgStyle} src={`${ process.env.PUBLIC_URL }/takashi_4.JPG`} alt="Logo" />
    </React.Fragment>
  );
}
