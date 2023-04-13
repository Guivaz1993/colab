import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';

export default function UserCard({
  img,
  firstName,
  lastName,
  age,
}: {
  img: string;
  firstName: string;
  lastName: string;
  age: number;
}) {
  return (
    <Card sx={{ width: '100%', background: '#e6e6e6' }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <Avatar alt={`${firstName} ${lastName}`} src={img} />
            {`${firstName} ${lastName} - ${age}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
