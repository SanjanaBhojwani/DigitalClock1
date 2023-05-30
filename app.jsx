import React, { useState } from "react";

const App = () => {
    let time=new Date().toLocaleTimeString();

    const [cTime,setCTime]=useState(time);

    const UpdateTime = () =>{
        time=new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(UpdateTime, 1000);

    return (
      <div style={{backgroundImage:`url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Ftop-view-black-empty-blank-cardboard-wide-rectangular-box-black-grunge-background_644270-110.jpg&tbnid=N33BdfnZpOCqMM&vet=12ahUKEwjmgY_JrJr_AhXZ83MBHad4A74QMygDegUIARDRAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Ftop-view-black-empty-blank-cardboard-wide-rectangular-box-black-grunge-background_32761826.htm&docid=ONch8sYrNvDo_M&w=626&h=443&q=black%20background%20with%20empty%20rectangle%20box&ved=2ahUKEwjmgY_JrJr_AhXZ83MBHad4A74QMygDegUIARDRAQ")`}}>
    <h1 style={{Border: 5,fontSize:110,textAlign:"center",borderColor:"black"}}>
      {cTime}
    </h1>
    </div>
  );
};

export default App;
