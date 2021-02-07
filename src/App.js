import ReactDOM from 'react-dom';
import ServantTable from './components/ServantTable';
import Button from 'react-bootstrap/Button';
import domtoimage from 'dom-to-image';
import {useRef} from "react";

const App = () => {
  const temp = useRef();
  const buttonClick = () => {
        // html2canvas(temp.current, {scrollY: -window.scrollY}).then(function(canvas){
        //   const dataUrl = canvas.toDataURL("png");
        //   window.open(dataUrl,'_blank')
        // })
        domtoimage.toPng(temp.current).then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          window.open(dataUrl,'_blank')
        })
    }

    
  return (
    <div className="container">
      <div className="servant-table" ref={temp}><ServantTable /></div>
      <Button 
      variant="success" 
      size="lg" block 
      onClick={buttonClick}
      >
        Export as image
      </Button>
    </div>
  );
}

export default App;
