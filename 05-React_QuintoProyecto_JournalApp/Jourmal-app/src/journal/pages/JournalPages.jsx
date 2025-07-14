import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { startNewNote } from '../../store/journal/thunks';



export const JournalPages = () => {

const dispatch = useDispatch();
const {isSaving, active} = useSelector(state => state.journal || { isSaving: false });

const onClickNewNote  =() => {
  dispatch(startNewNote())
  console.log('Crear una nueva nota');
}


  return (
    <JournalLayout>
      {/* Puedes alternar entre NothingSelectedView y NoteView según el estado de la app */}
      {/* <NothingSelectedView /> */}

    {
        active ? <NoteView /> : <NothingSelectedView />
    }


      <IconButton
        size='large'
        disabled={isSaving}
        onClick={ onClickNewNote}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}