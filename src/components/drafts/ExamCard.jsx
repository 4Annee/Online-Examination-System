import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BGIMG from '../../assets/bgImg.png'
import './ExamCard.css'
import axios from 'axios';

const ExamCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image= {BGIMG}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Exam Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Exam startingTime and EndingTime
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Publish</Button>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>
  )
}

export default ExamCard
