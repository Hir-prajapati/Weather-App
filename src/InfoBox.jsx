import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import "./InfoBox.css"

export default function InfoBox({info}){
    let INIT_URL="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL="https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg"
    let RAIN_URL="https://images.unsplash.com/photo-1664208736770-bd418684925d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className='Box'>
        <div className="InfoBox"> 
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL: info.temp>15 && info.temp<40?INIT_URL: info.temp<15 ?COLD_URL: HOT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormRoundedIcon/>:info.temp>15 ? <WbSunnyOutlinedIcon/>:<AcUnitOutlinedIcon/>}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
         <p>Tempeture={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
        </div>
    )
}