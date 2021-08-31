import React from "react";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
export default function CenterHead() {
       return (
              <>
                     <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={`${ process.env.PUBLIC_URL }/hirameki.jpg`}
                            title="Contemplative Reptile"
                     />
                     <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                   フロントエンドへの興味
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                   日常で利用するアプリケーションからUIの重要性を認識し、スキルを磨くために転職を決意しました。
                            </Typography>
                     </CardContent>
              </>
       )
}