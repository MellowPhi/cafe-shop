const reviewBtn = document.getElementById("reviewButton");
const reviewForm = document.getElementById("reviewForm");

function Review(title, comment, name) {
    this.title = title;
    this.comment = comment;
    this.name = name;
}

const sampleReviews = [
    new Review("Great Restaurant!", "The coffee is great, here!", "Tom"),
    new Review("I love this place!", "You have to try the homemade brownies here!", "Alli"),
    new Review("Great first visit!", "You should try this place.", "Steph")
]

const reviewElement = document.getElementById('reviewsRow');

function createReview(review) {
    reviewElement.innerHTML += `
        <div class="col-lg-4 col-md-6 py-3">
            <div class="card h-100">
                <div class="card-body">
                    <h4 class="card-title">${review.title}</h4>
                    <blockquote class="blockquote mb-0">
                        <p>${review.comment}</p>
                        <footer class="text-end blockquote-footer"><i>${review.name}</i></footer>
                    </blockquote>
                </div>
            </div>
        </div>`
}

sampleReviews.forEach(createReview);

reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("reviewTitle").value;
    const comment = document.getElementById("reviewText").value;
    let name = document.getElementById("reviewName").value;

    if (!name) {
        name = "Anonymous";
    }

    const newReview = new Review(title, comment, name);
    createReview(newReview);
})