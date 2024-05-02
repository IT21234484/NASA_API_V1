import { useEffect, useState } from "react";
import NASADataService from "../../services/NASADataService.js";

const Rovers = () => {
  const [roverPhotos, setRoverPhotos] = useState([]);
  
  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const photos = await NASADataService.getRoverPhotos(); //
      setRoverPhotos(photos);
    };
    fetchRoverPhotos();
  }, []);

  return (
    <div>
      <h1>Rover Photos</h1>
      <ul>
        {roverPhotos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.img_src} alt={photo.camera.full_name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rovers;
