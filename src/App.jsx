

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from './components/Image.jsx'

function App() {
  const [input, setInput] = useState([]);
  
  const [output, setOutput] = useState([]);
  const [parameters, setParameters] = useState({});
 
  const onDrop = useCallback(acceptedFiles => {
    // addAttempt(input,output,parameters)  
    setInput(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
    
 }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className='main'>

      <div className='container'>
      
      <div className='IO'>
        <div className='Input'>
        <div {...getRootProps()} className='selectfield'>
          <input {...getInputProps()} />
          {isDragActive ? <p> <i style={{display:'block'}}className="fa-solid fa-arrow-down"></i>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
        </div> 
        {input.length>0 && (
          <Image file={input[0]}></Image>
        )}
      


        </div>
        </div>

        <div className='IO output'>



        {input.length>0 && (
          <Image file={input[0]}></Image>
        )}
        </div>


          <div className='parameters'>
            <h3>Parameters</h3>
            <div className='paragrid'>
<div className='Parameter'>Height</div>
<div className='Parameter'>Resolution</div>
<div className='Parameter'>Density</div>

<div className='Parameter'>Height</div>
<div className='Parameter'>Resolution</div>
</div>

        </div>



        </div>

     
       </div>
      

   
  );
}

export default App;


{/* <div className='parametersPanel'>
        <h2>Parameters</h2>
        <hr style={{width:'100%'}}/>
        <div className='parameterField'>
          <div className='Parameters'>Hi</div>
          <div className='Parameters'>Hi</div>
        </div>
      </div> */}