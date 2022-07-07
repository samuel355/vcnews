import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '';
const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
        })
    }, [])

    return ( 
        <div className = "App">
            <p>Here we go again with Allan AI</p>
        </div>
    );
}

export default App;