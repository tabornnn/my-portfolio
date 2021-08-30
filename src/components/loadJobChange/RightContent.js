import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
       const top = 50;
       const left = 50;

       return {
              top: `${ top }%`,
              left: `${ left }%`,
              transform: `translate(-${ top }%, -${ left }%)`
       };
}

const useStyles = makeStyles((theme) => ({
       paper: {
              position: "absolute",
              width: 700,
              backgroundColor: theme.palette.background.paper,
              border: "2px solid #000",
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3)
       },
       root: {
              maxWidth: 345,
       },
       media: {
              height: 140,
       },

}));



export const RightContent = React.forwardRef((props, ref) => {
       const classes = useStyles();
       const [modalStyle] = React.useState(getModalStyle);
       return (
              <>
                     <div style={modalStyle} className={classes.paper}>
                            <h2 id="simple-modal-title">Text in a modal</h2>
                            <p id="simple-modal-description">
                                   Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </p>
                            RightContent
                     </div>
              </>
       )
})