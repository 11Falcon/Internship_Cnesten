import React, { useState } from "react";

// Define a custom hook that encapsulates the data and functionality
export const useDataSender = () => {
    const [data, setData] = useState('');

    const sendDataToServer = async () => {
        const response = await fetch('/receive-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: 'value' }) // Replace with your data
        });

        const responseData = await response.json();
        setData(responseData.message);
    };

    // Return the state and function to be used by components
    return {
        data,
        sendDataToServer
    };
};

// You can also create a React functional component to use the custom hook
function MyComponent() {
    const { data, sendDataToServer } = useDataSender();

    return (
        <div>
            <button onClick={sendDataToServer}>Send Data</button>
            <p>{data}</p>
        </div>
    );
}

export default MyComponent;