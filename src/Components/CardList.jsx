
import Card from "./Card"
import Data from "../../Data.json"
const CardList = () => {

  return (
       <div className='profile-card-list'>
            {Data.profile.map((profile, index) =>(
                <Card
                    key={index}
                    profiles={profile}
                />
            ))}
    </div>
  )
}

export default CardList
