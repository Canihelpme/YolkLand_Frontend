import React from 'react';

const PhotoItem = (props) => {
    return (
        <div>
            <h5>{props.photo.title}</h5>
        </div>
    );
};

export default PhotoItem;