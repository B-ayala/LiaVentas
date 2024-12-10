import React from 'react';
import { Button } from '../../ui/button';
import { X } from 'lucide-react';
import { Card, CardContent, Box } from '@mui/material';

interface CartNotificationProps {
  onClose: () => void;
}

export default function CartNotification({ onClose }: CartNotificationProps) {
  return (
    <Card className="w-[300px] shadow-lg">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <p className="text-sm font-medium">Remeron Maribel (Negro, UNICO)</p>
            <p className="text-sm text-muted-foreground">$26.970</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-green-600">¡Agregado al carrito con éxito!</p>
        <div className="flex items-center justify-between pt-2 border-t">
          <p className="text-sm font-medium">Total (3 productos):</p>
          <p className="text-sm font-medium">$80.910</p>
        </div>
      </CardContent>
      <Box className="p-4 pt-0">
        <Button className="w-full bg-black hover:bg-black/90" variant="default">
          VER CARRITO
        </Button>
      </Box>
    </Card>
  );
}
