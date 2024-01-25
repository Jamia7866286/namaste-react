import React from 'react';
import { useRouteError } from 'react-router-dom';

 const ErrorBoundary = () => {
    let error = useRouteError();
    console.error(error);


    return (
        <div>
            <h1>Oops!</h1>
            <span>{error.statusText}</span>
        </div>
    )
}

export default ErrorBoundary