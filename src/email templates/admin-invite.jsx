import myImage1 from "../components/appstore-img.png"
import myImage2 from "../components/googleplay-img.png"


const AdminInvite = ({ userType, email }) => {

    return(
        <div style={{backgroundColor: "rgb(11, 88, 114)", paddingTop:"15px", width: "100%", height:"100%", textAlign: "center", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Times, serif"}}>
            <div style={{backgroundColor: "white", width: "90%", margin: "50px auto", borderRadius: "20px"}}>
                <div style={{padding: "40px"}}>
                   <img src="https://payina.com.ng/assets/logo-ufYoANu_.png" alt="payina company logo" style={{width: "250px", height: "auto", marginBottom:"40px"}}/>
                <p style={{fontSize: "2rem", color: "black", fontWeight: "bolder"}}>Welcome!</p>
                </div>
            </div>
            <div style={{borderBottom: "2px solid rgb(50, 50, 50)", width: "90%", margin: "0 auto"}}></div> <br/>                       
            <div style={{width: "90%", margin: "0 auto", color: "white", fontSize: "1.1rem", textAlign: "left", fontWeight: "bold"}}>
              <p>Dear {email},</p>
              <br/>
              <p>You have been invited to join as an admin with the role: {userType}</p>
              <p>Please click the link below to complete your registration:</p>
              <a href="https://payina.com.ng/onboarding/email_verification" style={{color: " #1a73e8", textDecoration: "underline"}}>Complete Your Registration</a>
              <p>This link will expire in {expiryHours} hours.</p>
              <p>If you did not request this invitation, please ignore this email.</p>
              <p>Thank you,<br/>The PAYINA team</p>
              <br/>
            </div>
            <div style={{borderBottom: "2px solid rgb(50, 50, 50)", width: "90%", margin: "0 auto"}}></div> <br/>      
            <div style={{color: "white", fontSize: "1.1rem", margin: "20px auto", textAlign: "center", width: "90%"}}>
                <p style={{padding: "20px"}}><strong style={{color: "red"}}>Important Notice: </strong> Payina will never ask for your personal details or request any additional hidden charges. 
                   If you receive any suspicious messages or notifications claiming to be from Payina, please do not engage.
                   For your security, report any unusual activity immediately by reaching out to our official support team at {email}.<br/>
                   Your safety is our top priority.
                </p>
                <p style={{fontSize: "1.1rem"}}>Also available on mobile</p>
                <div style={{display: "flex", width: "50%", justifyContent: "space-between", margin: "10px auto"}}>
                    <a href="https://play.google.com/store/apps/details?id=com.nxtgenhub.payina">
                       <img src={myImage2} alt="Download Payina from Google Play" style={{width: "100%", height: "auto"}}/>
                    </a>
                    <a href="https://www.apple.com/us/search/payina?src=serp">
                       <img src={myImage1} alt="Download Payina from the App Store" style={{width: "100%", height: "auto"}} />
                    </a>
                </div>
            </div>   
        </div>
    )
}

export default AdminInvite;