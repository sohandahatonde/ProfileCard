import Data from "../../Data.json"
import Admin from "./Admin"

const AdminList = () => {
  return (
    <div className='profile-card-list'>
      {Data.profile.map((profile,index)=>(
        <Admin
        key={index}
        profiles={profile}
        />
      ))}
    </div>
  )
}

export default AdminList
