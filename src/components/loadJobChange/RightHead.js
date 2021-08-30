import React from "react";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
export default function RightHead() {
       return (
              <>

                     <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                     />
                     <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                   Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                   across all continents except Antarctica
                            </Typography>
                     </CardContent>
              </>
       )
}