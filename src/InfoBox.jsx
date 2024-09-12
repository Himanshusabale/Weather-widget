import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1564314966899-839134794c8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://unsplash.com/photos/a-window-with-rain-drops-on-it-vw0hDAqkTWQ";
   
    return(
        <div className="InfoBox">
        <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : (info.temp>15 ? HOT_URL : COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}  {
            info.humidity >80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/>:<AcUnitIcon/> 
        }
        </Typography>
        <Typography variant="body2" color= 'text.secondary' component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temperature = {info.tempMin}&deg;C</p>
         <p>Max Temperature = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i>and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
   </div>
   </div>
);
}