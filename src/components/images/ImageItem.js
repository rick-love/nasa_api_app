import React from 'react';

const ImageItem = ({image: { data, links }, href }) => {
  console.log(data);
  return (

      <div className='card text-center'>
        <img
          src={links[0].href}
          alt=''
          className='round-img'
          style={{ width: '150px' }}
        />
        <h3>{data[0].title}</h3>
        <p>{data[0].description}</p>

        <div>
          <a href={href} className='btn btn-primary'>Link</a>
        </div>
      </div>
    );
  }

export default ImageItem;
