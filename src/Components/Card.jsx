import PropTypes from 'prop-types';
import "./Card.css"
const Card = ({profiles}) => {

  //^^ Function to open Google map....!
  
        const handleSummaryClick = () => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profiles.location)}`;
    
            window.open(mapsUrl, '_blank');
  };
  return (
    <div className='card'>
    <img src={profiles.img} alt='img' className='img'></img>
    <p id='name'>{profiles.name}</p>
    <p id='info'>{profiles.about}</p>
    <button className="btn btn-secondary" onClick={handleSummaryClick}>Summary</button>
</div>
  )
}
export default Card
 Card.propTypes ={
    profiles:PropTypes.object
 }
