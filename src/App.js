
import './App.css';
import {Sedan} from './icons/SedanIcon';
import {Suv} from './icons/SUVIcon';
import {Luxury} from './icons/LuxuryIcon';

const Bright_orange = "hsl(31, 77%, 52%)";
const Dark_cyan = "hsl(184, 100%, 22%)";
const Very_dark_cyan = "hsl(179, 100%, 13%)";

const data = [
  {
    background: Bright_orange,
    icon: <Sedan/>,
    title: 'Sedans',
    details: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip'
  },
  {
    background: Dark_cyan,
    icon: <Suv/>,
    title: 'SUVS',
    details: 'Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.'
  },
  {
    background:Very_dark_cyan,
    icon: <Luxury />,
    title: 'Luxury',
    details: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style'
  },
]

function App() {
  return (
      <div className='App'>
      <Cardcomponent icon ={<Sedan/>} title= {"SEDANS"} details={"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip"} background={Bright_orange} />
      <Cardcomponent icon ={<Suv/>} title= {"SUVS"} details={"Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures."} background={Dark_cyan} />
      <Cardcomponent icon ={<Luxury/>} title= {"LUXURY"} details={"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style"} background={Very_dark_cyan} />
      </div>
  );

}
function Cardcomponent({icon, title, details, background}){
  return (
    <div  className='Page' style={{backgroundColor: background}}>
      <div className='Icon'>{icon}</div>
      <h2>{title}</h2>
      <p>{details}</p>
      <button className='btn'>Learn more</button>
    </div>
  )
}

export default App;

