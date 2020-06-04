import React, { Component } from 'react';
import ImageItem from './ImageItem';

class Images extends Component {

  render() {
    return (
      <div style={imageStyle}>
        {this.props.images.map(image => (
          <ImageItem key={image.data[0].nasa_id} image={image} />
        ))}
      </div>
    );
  }
}

const imageStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Images;
