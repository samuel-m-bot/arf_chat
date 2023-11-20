import React from 'react';

const Message = ({ content, role }) => {
    return (
        <div className={`message ${role}`}>
            {content}
        </div>
    );
};

export default Message;
