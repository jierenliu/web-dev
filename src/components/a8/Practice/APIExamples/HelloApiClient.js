import React, {useEffect, useState} from "react";
const HelloApiClient = () => {
    const [hello, setHello] = useState('');
    useEffect(() => {
        fetch('https://tranquil-island-31288.herokuapp.com/hello')
            .then(response => response.text())
            .then(text => setHello(text));
    }, []);
    return (
        <h1>{hello}</h1>
    );
};
export default HelloApiClient;
