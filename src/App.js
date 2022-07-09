import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '716994185ae941b55c6098865ed851422e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) =>{
                if(command === 'newHeadlines'){
                    console.log(articles);
                }
            }
        })
    }, [])

    return ( 
        <div className = "App">
            <p>Here we go again with Allan AI</p>
        </div>
    );
}

export default App;