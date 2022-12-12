import { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [text, setText] = useState('');
  
  const downloadQRCode = () => {
    const canvas = document.querySelector('canvas');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }


  return (
    <div className=" bg-gray-200   min-hero" >
    <div className="container mx-auto px-4">
      <h1 className="flex justify-center items-center text-5xl font-bold mb-4">QR Code Generator</h1>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
          Text to encode:
        </label>
      <div className="mb-4 flex space-x-3">
        
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
          <button
            onClick={() => setText('')}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow "
          >
            Clear
          </button>
      </div>
      
      <div className="mb-10 mt-10 flex justify-center">
        <QRCode value={text}  size={256} fgColor="#1C2833" bgColor="#E5E7EB"/>
      </div>
      <div className="flex justify-center items-center">
      <button
        onClick={downloadQRCode}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-500 ease-in-out"
      >
        Download QR Code
      </button>
      </div>
    </div>
  </div>
  )
}

export default App
