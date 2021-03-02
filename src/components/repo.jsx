import React from 'react';

export const Repo = (props) => {
    return (
        <div>
            <button onClick={() => props.history.goBack()}>back</button>
            card
        </div>
    );
};
