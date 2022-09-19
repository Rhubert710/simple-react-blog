const Header = (props) => {
    const { user } = props;
  
    
  
  
    return (

      <div style={{display:"flex", justifyContent:"space-between", backgroundColor:"blue", color:"white"}}>

        <div>Siimple Blog</div>
        {user ?
        <img src={user.profilePhotoUrl} alt={user.profilePhotoUrl} /> : <div>No Photo</div>}

      </div>

    )
  };
  
  export default Header;