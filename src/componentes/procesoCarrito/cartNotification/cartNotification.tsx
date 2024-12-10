import React from 'react';
import { Button } from '@mui/material';
import { Card, CardContent, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CartNotificationProps {
  onClose: () => void;
}

export default function CartNotification({ onClose }: CartNotificationProps) {
  return (
    <Card
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '100%',
        maxWidth: '350px', // Ajuste para tamaño responsivo
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 50,
      }}
    >
      <CardContent style={{ padding: '16px', position: 'relative' }}>
        <IconButton
          onClick={onClose}
          style={{ position: 'absolute', top: '8px', right: '8px' }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom>
          ¡Producto añadido al carrito!
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Remeron Maribel (Negro, UNICO)
        </Typography>
        <Typography variant="body1" style={{ marginTop: '8px' }}>
          Precio: $26.970
        </Typography>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '16px',
          }}
        >
          <Typography variant="body1">Total (3 productos):</Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            $80.910
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '16px', width: '100%' }}
          onClick={() => alert('Ir al carrito')}
        >
          Ver carrito
        </Button>
      </CardContent>
    </Card>
  );
}
