import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  maxHeight:'98vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowY:'auto',
  scrollbarWidth: "none"
};

export default function TransitionsModal({open,setOpen}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" sx={{'display':"flex",'justifyContent':'space-between','alignItems':'center'}} variant="h6" component="h2">
          <CloseIcon onClick={handleClose} sx={{cursor:"pointer"}} />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
             <Form setOpen={setOpen}/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

