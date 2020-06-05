import React from 'react';
import ImageItem from './ImageItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


const Images = ({ images, loading }) => {
    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div style={imageStyle}>
                {images.map((image) => (
                    <ImageItem key={image.data[0].nasa_id} image={image} />
                ))}
            </div>
        );
    }
};

Images.propTypes = {
    images: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const imageStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
};

export default Images;
