import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

interface AlexanderAEPProps {
  title: string;
  description: string;
  avatar: string;
}

const AlexanderAEP: React.FC<AlexanderAEPProps> = ({ title, description, avatar }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '16px auto' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={title} src={avatar} sx={{ marginRight: '16px' }} />
        <div>
          <Typography variant="h2" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlexanderAEP;
