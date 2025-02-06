const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
// Movie Data Array1
const movies = [
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
];

// Target the container
const movieContainer = document.getElementById("movie-container");

// Function to generate star rating HTML
const generateStars = (rating) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "⭐" : "☆";
    }
    return stars;
};

// Loop through movies and create movie cards dynamically
movies.forEach(movie => {
    // Use provided video link if available; otherwise, generate a default link
    const movieLink = movie.link ? movie.link : `/watch?title=${encodeURIComponent(movie.title.toLowerCase().replace(/\s+/g, "-"))}`;

    const movieCard = `
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <a href="${movieLink}" target="_blank">
                <img src="${movie.image}" alt="${movie.title}" class="w-full object-cover h-auto">
            </a>
            <div class="p-4">
                <h3 class="text-xl font-bold">${movie.title}</h3>
                <p class="mt-2 text-gray-400">${movie.genre}</p>
                <p class="mt-2 text-yellow-400 text-lg">${generateStars(movie.rating)}</p>
            </div>
        </div>
    `;
    movieContainer.innerHTML += movieCard;
});
//// Movie Data Array2
const movies1 = [
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
];

// Target the container
const movieContainer2 = document.getElementById("movie-container2");

// Function to generate star rating HTML
const generateStars1 = (rating) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "⭐" : "☆";
    }
    return stars;
};

// Loop through movies and create movie cards dynamically
movies.forEach(movie => {
    // Use provided video link if available; otherwise, generate a default link
    const movieLink = movie.link ? movie.link : `/watch?title=${encodeURIComponent(movie.title.toLowerCase().replace(/\s+/g, "-"))}`;

    const movieCard = `
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <a href="${movieLink}" target="_blank">
                <img src="${movie.image}" alt="${movie.title}" class="w-full object-cover h-auto">
            </a>
            <div class="p-4">
                <h3 class="text-xl font-bold">${movie.title}</h3>
                <p class="mt-2 text-gray-400">${movie.genre}</p>
                <p class="mt-2 text-yellow-400 text-lg">${generateStars(movie.rating)}</p>
            </div>
        </div>
    `;
    movieContainer2.innerHTML += movieCard;
});

//// Movie Data Array3
const movies2 = [
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
    { title: "Movie Title 1", genre: "Action, Adventure", image: "/img-conent/the-avengers-android-71dsuk38vdgeckj1.jpg", rating: 4, link: "https://www.youtube.com/watch?v=ahXQSE0hiBM" },
];

// Target the container
const movieContainer3 = document.getElementById("movie-container3");

// Function to generate star rating HTML
const generateStars2 = (rating) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "⭐" : "☆";
    }
    return stars;
};

// Loop through movies and create movie cards dynamically
movies.forEach(movie => {
    // Use provided video link if available; otherwise, generate a default link
    const movieLink = movie.link ? movie.link : `/watch?title=${encodeURIComponent(movie.title.toLowerCase().replace(/\s+/g, "-"))}`;

    const movieCard = `
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <a href="${movieLink}" target="_blank">
                <img src="${movie.image}" alt="${movie.title}" class="w-full object-cover h-auto">
            </a>
            <div class="p-4">
                <h3 class="text-xl font-bold">${movie.title}</h3>
                <p class="mt-2 text-gray-400">${movie.genre}</p>
                <p class="mt-2 text-yellow-400 text-lg">${generateStars(movie.rating)}</p>
            </div>
        </div>
    `;
    movieContainer3.innerHTML += movieCard;
});


// Slideshow Data Array
const slides = [
    { image: "/img-slide/1.jpg", title: "Avengers", description: "Avengers Infinity War Final Battle Climax Scene Thanos Vs Avengers Wakanda Fight Scenes" },
    { image: "/img-slide/2.jpg", title: "Avengers", description: "Avengers Infinity War Final Battle Climax Scene Thanos Vs Avengers Wakanda Fight Scenes" },
    { image: "/img-slide/3.jpg", title: "Avengers", description: "Avengers Infinity War Final Battle Climax Scene Thanos Vs Avengers Wakanda Fight Scenes" }
];

// Target the slideshow container
const slideshowContainer = document.getElementById("slideshow-container");

// Loop through slides and create them dynamically
slides.forEach((slide, index) => {
    const slideDiv = `
        <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}" id="slide${index}">
            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 right-0 p-6">
                <h2 class="text-3xl font-bold">${slide.title}</h2>
                <p class="mt-2">${slide.description}</p>
                <button class="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded">Watch Now</button>
            </div>
        </div>
    `;
    slideshowContainer.innerHTML += slideDiv;
});

// Slideshow Functionality
let currentIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll("#slideshow-container > div");
    slides.forEach((slide, i) => {
        slide.classList.remove("opacity-100");
        slide.classList.add("opacity-0");
        if (i === index) {
            slide.classList.add("opacity-100");
        }
    });
}

// Auto-slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);