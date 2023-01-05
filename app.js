import React from 'react'
import ReactDOM from 'react-dom/client'

const H1 = React.createElement(
    "h1", 
    {
        id: "title",
        key:"title"
    }
    , "Hello Pakistan, Welcome to 2023"
);
const H2 = React.createElement(
    "h2",
    {
        id:"title1",
        key:"title2"
    },
    "This is loveable"
)

const container = React.createElement(
    "div",
    {
        id:"new-root"
    },
    [H1,H2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);