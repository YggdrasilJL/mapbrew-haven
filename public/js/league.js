const userNameInput = document.getElementById('username');
const userCreationsInput = document.getElementById('usercreations');
const reviewInput = document.getElementById('review');
const reviewForm = document.getElementById('review-form');

// Helper function that accepts a `review` object, sends a POST request and returns the result
const postReview = (review) =>
    // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
    fetch('api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful POST request:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error in POST request:', error);
        });

// Listen for when the form is submitted
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Create a new review object from the input values
    const newReview = {
        userName: userNameInput.value.trim(),
        userCreations: userCreationsInput.value.trim(),
        review: reviewInput.value.trim(),
    };

    // Call our postReview method to make a POST request with our `newReview` object.
    postReview(newReview)
        .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
        .catch((err) => console.error(err));
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});