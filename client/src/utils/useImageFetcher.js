import { useState, useEffect } from 'react';
import axios from 'axios';

const useImageFetcher = ({ category, pageNumber }) => {
    const [images, setImages] = useState([]);
    // app starts loading before app is rendered, so we set isLoading to true
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetchImages();
    }, [pageNumber, category]);

    const fetchImages = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:5000/api/gallery/', {
                params: {
                    page: pageNumber,
                    q: category
                }
            });

            const fetchedImages = response.data;
            setImages(fetchedImages);
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    };



    return {
        images,
        isLoading,
        error,
    };
}

export default useImageFetcher;


// useEffect(() => {
  //   (async () => {
  //     await fetchImages();
  //   })();

  // }, [pageNumber, category]);

  // const fetchImages = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/gallery/', {
  //       params: {
  //         page: pageNumber,
  //         q: category
  //       }
  //     });
  //     const fetchedImages = response.data;
  //     setImages(fetchedImages);

  //   } catch (error) {
  //     console.error('Failed to fetch images: ', error);
  //   }
  // };