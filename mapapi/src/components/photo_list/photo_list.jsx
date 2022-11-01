import React from 'react';
import PhotoItem from '../photo_item/photo_item';

const PhotoList = (props) => {
    return (
        <div>
            {props.photos.map(photo => (
                <PhotoItem key={photo.id}  photo={photo} />
            ))}
        </div>
    );
};

export default PhotoList;