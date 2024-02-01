import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import axios from 'axios';
import searchImages from './api';
import ImageList from './components/ImageList';
import ImageItem from './components/ImageItem';



function App() {
const [images, setImages] = useState([]) 

  const handleSubmit = async (term) => {
   const result = await searchImages(term);
   setImages(result);

  };
  return  (
  <div className="App">

    <SearchHeader search={handleSubmit}/>
    <ImageList imagesPlaceHolder={images}/>
    </div>
  );
  
}

export default App;
