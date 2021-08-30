import React from "react";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
export default function LeftHead() {
       return (
              <>
                     <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={`${ process.env.PUBLIC_URL }/workman.jpg`}
                            title="Contemplative Reptile"
                     />
                     <CardContent>
                            <Typography gutterBottom variant="h6" >
                                   現職の活動内容
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   現職では、保険系SIerのアプリケーション基盤チームで、共済向けに基幹システムの導入を実施しております。
                            </Typography>

                     </CardContent>
              </>
       )
}