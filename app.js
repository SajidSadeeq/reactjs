import React from 'react'
import ReactDOM from 'react-dom/client'

const paragrah = <p>dumy text</p>

const Div = () => {
    return <div>this is from div</div>
}

const HeaderComponent = () => (
    <div>
        <h1>First Component</h1>
        <h2>Component details</h2>
        { paragrah }
        <Div></Div>
        {Div()}
        {<Div />}
        { console.log("here") }
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);