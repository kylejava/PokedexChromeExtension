import {React, useState, useEffect} from 'react';
import Button from '@mui/material/Button';

function ImageDisplay({picture, shiny_picture}){
  const [currentPicture, setCurrentPicture] = useState("");
  const [regularVariant, setRegularVariant] = useState("");

  const [shinyVariant, setShinyVariant] = useState("");

  useEffect(()=>{
    setCurrentPicture(picture);
    setRegularVariant(currentPicture == picture ? "contained" : "outlined");
    setShinyVariant(currentPicture == shiny_picture ? "contained" : "outlined");
    console.log(currentPicture)
  }, [picture, shiny_picture]);

  function changePicture(){
    setCurrentPicture(currentPicture == picture ? shiny_picture : picture);
    setRegularVariant(currentPicture == picture ? "contained" : "outlined");
    setShinyVariant(currentPicture == shiny_picture ? "contained" : "outlined");
    console.log(currentPicture)

  };


  return(
    <div>
      <Button variant={regularVariant} onClick={changePicture}>Non-Shiny</Button>
      <Button variant={shinyVariant} onClick={changePicture}>"Shiny"</Button>
      <img src={currentPicture}></img>
    </div>
  )
}




export default ImageDisplay;
