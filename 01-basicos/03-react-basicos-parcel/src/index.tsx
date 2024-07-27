import React from 'react';
import { createRoot } from 'react-dom/client';


const App = () => {

    return (
        <h1 style={{ textAlign: "center" }}>03 React Básicos con PARCEL</h1>
    );

}


const root = createRoot(document.getElementById("root"));
root.render(<App />);