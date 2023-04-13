import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import useUser from '../../hooks/useUser';
import { User } from '../../hooks/useUserProvider';

export interface SimpleDialogProps {
  open: boolean;
  onClose: (user: User) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const { currentUser } = useUser();

  function handleClose() {
    onClose({
      cell: '',
      dob: {
        date: '',
        age: 0,
      },
      email: '',
      gender: '',
      id: {
        name: '',
        value: '',
      },
      location: {
        city: '',
        state: '',
        country: '',
        postcode: 0,
        street: { number: 0, name: '' },
      },
      name: {
        title: '',
        first: '',
        last: '',
      },
      phone: '',
    login: { uuid: "" },
    picture: { large: "" },});
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle
        sx={{
          background: 'var(--colour-secundary)',
          fontSize: '2.8rem',
          color: 'var(--colour-primarydark)',
          fontWeight: 700,
          borderBottom: "#3655b3 solid 3px"
        }}
      >
        {`${currentUser?.name?.title} ${currentUser?.name?.first} ${currentUser?.name?.last} `}
      </DialogTitle>
      <DialogContent sx={{ background: 'var(--colour-secundary)' }}>
        <p>
          <strong>Data de nascimento: </strong>
          {`${new Date(currentUser?.dob?.date).toLocaleDateString('pt-BR')} (${
            currentUser?.dob?.age
          })`}
        </p>
        <p>
          <strong>Sexo: </strong>
          {currentUser?.gender === 'female' ? 'Feminino' : 'Masculino'}
        </p>
        <p>
          <strong>{`${currentUser?.id?.name} : `}</strong>
          {currentUser?.id?.value}
        </p>
        <h3>Contatos</h3>
        <p>
          <strong>Telefone: </strong>
          {currentUser?.phone}
        </p>
        <p>
          <strong>Celular: </strong>
          {currentUser?.cell}
        </p>
        <p>
          <strong>E-mail: </strong>
          {currentUser?.email}
        </p>
        <h3>Endereço</h3>
        <p>
          <strong>CEP: </strong>
          {currentUser?.location?.postcode}
        </p>
        <p>
          {`${currentUser?.location?.city} / ${currentUser?.location?.state} - ${currentUser?.location?.country}`}
        </p>
        <p>
          {`${currentUser?.location?.street?.name}, ${currentUser?.location?.street?.number}`}
        </p>

      </DialogContent>
    </Dialog>
  );
}
