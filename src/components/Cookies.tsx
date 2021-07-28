import React from 'react';
import CookieConsent from "react-cookie-consent";

export function Cookies(){
  return(
    <CookieConsent 
    location="bottom" 
    cookieName="Cookies" 
    style={{ 
      background: "#f2f2f2", 
      color: "#c94163" 
    }}
    buttonStyle={{ 
      backgroundColor: "#ffb7ca", 
      color: "#c94163", 
      fontSize: "1rem",
      borderRadius: "5px"
    }}
    buttonText={"Eu aceito"}
    expires={999}
    overlay
    onAccept={() => window.location.reload(true)}
  >
    Este website usa cookies para melhorar sua experência.
  </CookieConsent>
  )
}