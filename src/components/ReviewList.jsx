import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../Services/api';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await api.get('/reviews');
      setReviews(response.data);
    } catch (error) {
      toast.error('Error fetching reviews.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/reviews/delete/${id}`);
      toast.success('Review deleted successfully.');
      fetchReviews();
      setError(null);
    } catch (error) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      }
  };

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id} className="border p-4 rounded mb-4">
          <h3>{review.user.name}</h3>
          <p>Rating: {review.rating} ★</p>
          <p>Comment: {review.comment}</p>
          <p>Type: {review.reviewType === 'pet' ? 'Pet' : 'Shelter'}</p>
          {(review.user._id === localStorage.getItem('userId') || localStorage.getItem('role') === 'shelter') && (
            <>
              <button onClick={() => handleDelete(review._id)}>Delete</button>
              {/* Add an edit functionality if needed */}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
