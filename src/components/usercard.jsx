function Usercard(){
    const profilePhoto = "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D";
    const name = "Ashish Yadav";
    const mail = "ashish@mail.com";
    const phoneNumber = "9911005xxx";
    const address = "Error 404 not Found  ";


    return(
        <>
        <div style={{ border: "1px solid white", padding: "2rem" }}>
        <img src={profilePhoto} alt="image" />
           <h2>Name: {name}</h2>
           <p>Mail: {mail}</p> 
           <p>Phone Number: {phoneNumber}</p> 
           <p>Address: {address}</p> 
        </div>
        </>
    )
}
export default Usercard