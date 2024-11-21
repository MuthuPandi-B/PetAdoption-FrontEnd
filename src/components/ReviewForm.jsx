import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../Services/api';

const ReviewForm = ({ onReviewAdded }) => {
  const [petRating, setPetRating] = useState(0);
  const [petComment, setPetComment] = useState('');
  const [shelterRating, setShelterRating] = useState(0);
  const [shelterComment, setShelterComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/reviews/create', { rating: petRating, comment: petComment, reviewType: "pet" });
      await api.post('/reviews/create', { rating: shelterRating, comment: shelterComment, reviewType: "shelter" });
      toast.success('Review added successfully.');
      onReviewAdded();
      setPetRating(0);
      setPetComment('');
      setShelterRating(0);
      setShelterComment('');
    } catch (error) {
      toast.error('Error adding review.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rating for Pet:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onClick={() => setPetRating(star)} style={{ cursor: 'pointer', color: petRating >= star ? 'gold' : 'gray' }}>
            ★
          </span>
        ))}
      </div>
      <div>
        <label>Comment for Pet:</label>
        <textarea value={petComment} onChange={(e) => setPetComment(e.target.value)} required />
      </div>
      <div>
        <label>Rating for Shelter:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onClick={() => setShelterRating(star)} style={{ cursor: 'pointer', color: shelterRating >= star ? 'gold' : 'gray' }}>
            ★
          </span>
        ))}
      </div>
      <div>
        <label>Comment for Shelter:</label>
        <textarea value={shelterComment} onChange={(e) => setShelterComment(e.target.value)} required />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
