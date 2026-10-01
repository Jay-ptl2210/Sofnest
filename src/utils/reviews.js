// Initial curated reviews for Sofnest
const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Priya Sharma',
    mobile: '+91 98250 148xx',
    city: 'Ahmedabad',
    product: 'Standard 155 mm Panty Liners',
    rating: 5,
    description: 'Super soft top layer! Fits perfectly during long college hours and keeps me fresh all day without any irritation.',
    date: '14 Sep 2026',
    status: 'Approved'
  },
  {
    id: 'rev-2',
    name: 'Ananya Mehta',
    mobile: '+91 99099 231xx',
    city: 'Mumbai',
    product: 'Standard 180 mm Panty Liners',
    rating: 5,
    description: 'The 180mm length gives great extra coverage during workout hours and ovulation days. Staying adhesive is really strong.',
    date: '10 Sep 2026',
    status: 'Approved'
  },
  {
    id: 'rev-3',
    name: 'Kavita Joshi',
    mobile: '+91 97241 882xx',
    city: 'Surat',
    product: 'Standard 155 mm Panty Liners',
    rating: 5,
    description: 'Very comfortable and thin! Truly feels like wearing nothing extra. Highly recommended for daily freshness.',
    date: '05 Sep 2026',
    status: 'Approved'
  },
  {
    id: 'rev-4',
    name: 'Sneha Patel',
    mobile: '+91 94265 771xx',
    city: 'Vadodara',
    product: 'Standard 180 mm Panty Liners',
    rating: 5,
    description: 'Best quality panty liner I have tried in India. Breathable backing keeps away sweat during active travel.',
    date: '01 Sep 2026',
    status: 'Approved'
  }
];

// Returns approved reviews for public website rendering
export function getStoredReviews() {
  try {
    const all = getAllReviewsForAdmin();
    return all.filter(r => r.status === 'Approved');
  } catch (e) {
    console.error("Error reading public reviews", e);
  }
  return INITIAL_REVIEWS;
}

// Returns all reviews (user submitted + initial) for Admin Panel
export function getAllReviewsForAdmin() {
  try {
    const saved = localStorage.getItem('sofnest_customer_reviews');
    if (saved !== null) {
      return JSON.parse(saved);
    } else {
      // First time initialization: seed localStorage with default reviews
      localStorage.setItem('sofnest_customer_reviews', JSON.stringify(INITIAL_REVIEWS));
      return INITIAL_REVIEWS;
    }
  } catch (e) {
    console.error("Error reading admin reviews", e);
  }
  return INITIAL_REVIEWS;
}

// Saves a new review from user or admin
export function saveReview(newReview) {
  try {
    const reviewWithStatus = {
      status: 'Approved',
      ...newReview
    };

    const currentAll = getAllReviewsForAdmin();
    const updated = [reviewWithStatus, ...currentAll.filter(r => r.id !== reviewWithStatus.id)];
    localStorage.setItem('sofnest_customer_reviews', JSON.stringify(updated));

    // Dispatch custom window event
    window.dispatchEvent(new Event('sofnest_reviews_updated'));

    // Silent background mail notification to owner
    try {
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (apiKey && apiKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: apiKey,
            subject: `New Customer Rating & Feedback - ${reviewWithStatus.name} (${reviewWithStatus.rating} ⭐)`,
            from_name: 'Sofnest Review System',
            to_email: 'info@sofnest.com',
            customer_name: reviewWithStatus.name,
            mobile_number: reviewWithStatus.mobile,
            city: reviewWithStatus.city,
            product_selected: reviewWithStatus.product,
            rating: `${reviewWithStatus.rating} / 5 Stars ⭐`,
            review_description: reviewWithStatus.description,
            date: reviewWithStatus.date,
            admin_portal: 'https://sofnest.in/admin'
          })
        }).catch(() => {});
      }
    } catch (e) {
      // Ignore network errors silently
    }

    return true;
  } catch (e) {
    console.error("Error saving review", e);
    return false;
  }
}

// Deletes a review by ID (Admin)
export function deleteReview(reviewId) {
  try {
    const currentAll = getAllReviewsForAdmin();
    const updated = currentAll.filter(r => r.id !== reviewId);
    localStorage.setItem('sofnest_customer_reviews', JSON.stringify(updated));
    window.dispatchEvent(new Event('sofnest_reviews_updated'));
    return true;
  } catch (e) {
    console.error("Error deleting review", e);
    return false;
  }
}

// Toggles review status between Approved and Hidden (Admin)
export function toggleReviewStatus(reviewId) {
  try {
    const currentAll = getAllReviewsForAdmin();
    const updated = currentAll.map(r => {
      if (r.id === reviewId) {
        return { ...r, status: r.status === 'Approved' ? 'Hidden' : 'Approved' };
      }
      return r;
    });
    localStorage.setItem('sofnest_customer_reviews', JSON.stringify(updated));
    window.dispatchEvent(new Event('sofnest_reviews_updated'));
    return true;
  } catch (e) {
    console.error("Error toggling review status", e);
    return false;
  }
}
