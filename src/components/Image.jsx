import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const CleanImage = ({ file }) => {
  return (
    <div style={{ maxWidth: '100%', maxHeight: '100vh' }} className='imagePreview'>
      <TransformWrapper>
        <TransformComponent>
          <img
            src={file.preview}
            alt={file.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius:'5%'}}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default CleanImage;
