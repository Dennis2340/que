import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MainPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card sx={{ width: "300px", marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Book a Ride
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click here to book a ride
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Book Now</Button>
          </CardActions>
        </Card>
        <Card sx={{ width: "300px" }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Plan a Ride
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Click here to plan a ride
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Plan Now</Button>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ position: 'absolute', bottom: '20px' }}>
        <Button color="primary" variant="contained" style={{ marginRight: '10px' }}>Sign Up</Button>
        <Button color="primary" variant="contained">Login</Button>
      </Box>
    </div>
  )
}

export default MainPage
