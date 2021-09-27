import React from 'react';
import image from './couleur.jpg';

function Greeter(props){
    return <h1>hello{props.name}</h1>
}

const App=()=>{
    return(

        <div>
            <Greeter name="world"/>
            <Greeter name="Im the king"/>
        </div>
    );
};
export default ProfilePhotos;