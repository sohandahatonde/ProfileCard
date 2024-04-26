import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom"


const UdpateForm = () => {
    const [userData , setUserData]= useState();

    const {
        register,
        handleSubmit,
        setValue
      } = useForm();

      // ^^ UseParams to get userId..!
    const params = useParams();
    useEffect(()=>{
        fetchUserData();
    },[params.id])
    console.log(params.id);

    //^^ Fetech request get user data...!
    const fetchUserData =async ()=>{
        const Data = await fetch(`http://localhost:3000/profile/`+params.id)
        const userData = await Data.json()
        setUserData(userData)
        setValue("name",userData.name)
        setValue("about",userData.about)
        setValue("location",userData.location)
    }
    //^^ fetch request for update user...!
   const updateUser = async(updateData) =>{
    const Data = await fetch(`http://localhost:3000/profile/`+params.id,{
        method:"PATCH",
        body:JSON.stringify({...updateData}),
    })
   }
  return (
    <div className="container">
  <form onSubmit={handleSubmit((Data)=>{
     updateUser(Data);
  })}>
  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label" >Name :-</label>
    <input type="text" className="form-control" id="exampleInputName1" {...register('name',)}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAbout" className="form-label">About</label>
    <input type="text" className="form-control" id="exampleInputAbout" {...register('about', )} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputLocation" className="form-label" >Location</label>
    <input type="text" className="form-control" id="exampleInputLocation" {...register('location',)} />
  </div>
   <div>
   <button type="submit" className="btn btn-primary me-3">Update</button>
   <Link to="/Admin"><button type="submit" className="btn btn-primary">back</button></Link>
   </div>
</form>
    </div>
  )
}

export default UdpateForm
