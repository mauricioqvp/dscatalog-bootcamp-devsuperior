import React from 'react';
import Alert from './Alertmeu';

const App = () => {
    return (
        <div className="container mt-5">
            <Alert text="Mauricio" />
            <Alert text="Nélio" />
            <Alert text="BootCamp" />
            <Alert text="DevSupeior" />
        </div>
    )
}

export default App;