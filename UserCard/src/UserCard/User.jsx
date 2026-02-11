  import React, { useState } from 'react'
  import './user.css'
  const User = () => {
    const [users,setUsers] = useState([]);//make new user empty array 
    function adduserhandler(e){
      e.preventDefault();
      const form = e.target.form;
      const image = form.userimagesrc.value.trim();
      const name = form.cardusername.value.trim();
      const title = form.userpositiontitle.value.trim();
      const message = form.messagebyuser.value.trim();
      if(!image || !name || !title || !message){
        alert("please fill all the fields");
        return;
    }
    const newUser={
    image:form.userimagesrc.value,
    name:form.cardusername.value,
    title:form.userpositiontitle.value,
    message:form.messagebyuser.value
    };
    setUsers([...users, newUser]);
      form.reset();
    }
    return (
      <>
      <div className="userComnent">
        <div className="userheading">
          <h1>User Card Component</h1>
        </div>

        <div className="formsection">
          <form action="">
            <label htmlFor="userimgsrc">Image src</label><br />
            <input type="text" id='userimagesrc' name='userimagesrc'/><br /><br />
            <label htmlFor="username" >UserName</label><br />
            <input type="text" id='username' name='cardusername'/>
            <br /><br />
            <label htmlFor="usertitle">Position</label><br />
            <input type="text" id='usertitle' name='userpositiontitle'/><br /><br />

            <textarea name="messagebyuser" id="" maxLength={100}  placeholder='Enter Message...' ></textarea><br /><br />

            <button onClick={adduserhandler}>Add User</button>
          </form>
        </div>

      </div>
      {users.length > 0 && (
  <div className="userprofilecar">
    {users.map((user,index)=>(
      <div className="container" key={index}>
        <img src={user.image} alt="user"/>
        <h1>{user.name}</h1>
        <h2>{user.title}</h2>
        <div className="userdivmessage">
          <h4>{user.message}</h4>
        </div>
        
      </div>
    ))}
  </div>
)}
    </>
    )
  }

export default User
