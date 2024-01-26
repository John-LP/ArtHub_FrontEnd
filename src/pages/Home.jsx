import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Home.css";
import Navbar from '../components/navbar';

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/artworks`);
        setArtworks(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='parent'>
      <h1>Artworks</h1>
        <div className='artworks'>
        {artworks.map((artwork) => (
          <div key={artwork.id}>
             <h3><u>{artwork.title}</u></h3>
            <img className="artwork-img" src={artwork.image_url} alt={artwork.title} />
          </div>
        ))}
        </div>
        </div>
    </div>
  );
};

export default Home;
