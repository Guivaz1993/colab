import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material';
import useUser from '../../hooks/useUser';

export default function UserCard({
  img,
  firstName,
  lastName,
  age,
  user,
}: {
  img: string;
  firstName: string;
  lastName: string;
  age: number;
  user: {};
}) {
  const { handleModal } = useUser();

  function handleOnClick() {
    handleModal(user);
  }

  return (
    <Card sx={{ width: '100%', background: 'var(--colour-primaryligth)' }}>
      <CardActionArea onClick={handleOnClick}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            sx={{
              display: 'flex',
              color: 'var(--colour-primary)',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Avatar alt={`${firstName} ${lastName}`} src={img} />
            {`${firstName} ${lastName} - ${age}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
