import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function UserCard({img,firstName,lastName,age}:{img:string,firstName:string,lastName:string,age:number}) {
  return (
    <Card sx={{ width: "18rem", height: "20vh",padding: "1rem"}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      /> */}
      <CardContent>
      <Avatar alt={`${firstName} ${lastName}`} src={img} />
        <Typography gutterBottom variant="h6" component="div" sx={{textOverflow:"ellipsis",overflow:"hidden"}}>
          {`${firstName} ${lastName} - ${age}`} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Mais informações</Button>
      </CardActions>
    </Card>
  );
}