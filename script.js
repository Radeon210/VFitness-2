// script.js

const membershipTiers = [
    { name: "Basic", price: "$30/month", description: "Access to gym facilities during off-peak hours" },
    { name: "Standard", price: "$50/month", description: "Access to gym facilities at all times, Unlimited classes" },
    { name: "Premium", price: "$80/month", description: "All benefits of Standard Membership, Access to personal training sessions" }
];

// Dummy data for class schedule remains the same
const classSchedule = [
    { name: "Yoga", time: "8:00 AM", instructor: "Emily" },
    { name: "Spin", time: "12:00 PM", instructor: "John" },
    { name: "HIIT", time: "6:00 PM", instructor: "Sarah" }
];

// Function to generate membership options
function generateMembershipOptions() {
    const membershipContainer = document.querySelector('.membership-options');
    membershipContainer.innerHTML = ''; 

    membershipTiers.forEach(tier => {
        const div = document.createElement('div');
        div.className = 'membership-card';
        div.setAttribute('onclick', 'showDetails(this)');
        div.innerHTML = `
            <h3>${tier.name} Membership</h3>
            <p>${tier.description}</p>
            <p><strong>Price:</strong> ${tier.price}</p>
            <div class="details">
                <button onclick="purchaseMembership('${tier.name}')">Purchase</button>
            </div>
        `;
        membershipContainer.appendChild(div);
    });
}

// Call functions to generate content on page load
document.addEventListener('DOMContentLoaded', function() {
    generateMembershipOptions();
    generateClassSchedule();
});

// Function to perform search
function search() {
    // input
    var searchText = document.getElementById('searchInput').value.toLowerCase();

    // Perform
    if (searchText.trim() !== "") {
        // search
        alert("Searching for: " + searchText);
    } else {
        alert("Please enter a search term.");
    }
}

// script.js
function showDetails(card) {
    card.querySelector('.details').classList.toggle('show');
}
