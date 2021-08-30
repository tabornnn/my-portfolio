import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { LeftContent } from "./LeftContent";
import { CenterContent } from "./CenterContent";
import { RightContent } from "./RightContent";
import LeftHead from "./LeftHead";
import CenterHead from "./CenterHead";
import RightHead from "./RightHead";

// function getModalStyle() {
//        const top = 50;
//        const left = 50;

//        return {
//               top: `${ top }%`,
//               left: `${ left }%`,
//               transform: `translate(-${ top }%, -${ left }%)`
//        };
// }


const useStyles = makeStyles((theme) => ({
       root: {
              maxWidth: 345,
       },
       paper: {
              position: "absolute",
              width: 700,
              backgroundColor: theme.palette.background.paper,
              border: "2px solid #000",
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3)
       },
       media: {
              height: 140,
       },
}));



export default function CardTemplate(props) {
       const classes = useStyles();
       // getModalStyle is not a pure function, we roll the style only on the first render
       // const [modalStyle] = React.useState(getModalStyle);
       const [open, setOpen] = React.useState(false);
       const handleOpen = () => {
              setOpen(true);
       };
       const handleClose = () => {
              setOpen(false);
       };
       const contents = (contentKey) => {
              switch (contentKey) {
                     case "LeftContent":
                            return (
                                   <LeftContent />
                            )
                     case "CenterContent":
                            return (
                                   <CenterContent />
                            )
                     case "RightContent":
                            console.log("rightconyrny")
                            return (
                                   <RightContent />
                            )
                     default:
                            console.log("default");
              }
       }

       const head = (contentKey) => {
              switch (contentKey) {
                     case "LeftContent":
                            return (
                                   <LeftHead />
                            )
                     case "CenterContent":
                            return (
                                   <CenterHead />
                            )
                     case "RightContent":
                            console.log("rightconyrny")
                            return (
                                   <RightHead />
                            )
                     default:
                            console.log("default");
              }
       }

       return (
              <>
                     <Card className={classes.root}>
                            <CardActionArea
                                   onClick={handleOpen}
                            >
                                   {head(props.contentKey)}
                            </CardActionArea>
                     </Card>
                     <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                     >
                            {contents(props.contentKey)}
                     </Modal>
              </>
       )
}
