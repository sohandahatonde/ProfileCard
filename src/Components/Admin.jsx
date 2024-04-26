import { Link } from "react-router-dom"
import "./Card.css"
import PropTypes from 'prop-types';

const Admin = ({profiles}) => {

  // Created fetch requested to delete users
  const handleDelete= async(e,profiles)=>{
        const data = await fetch("http://localhost:3000/profile/" +profiles.id,{
          method:"DELETE",
          body:JSON.stringify(profiles),
        })
  }
  
  return (
    <>
    <div className='card'>
    <img src={profiles.img} alt='img' className='img'></img>
    <p id='name'>{profiles.name}</p>
    <p id='info'>{profiles.about}</p>
    <div>
    <Link to={`/Admin/updateForm/${profiles.id}`}><button  type="button" className="btn btn-primary btn-sm me-2">Update</button></Link>
    <button onClick={e=>handleDelete(e,profiles)} type="button" className="btn btn-secondary btn-sm">Deleted</button>
    </div>
   </div>
    </>
  
  )
}
export default Admin

Admin.propTypes ={
    profiles:PropTypes.object
 }
