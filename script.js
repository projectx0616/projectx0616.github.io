function searchLocations() {
    var city = document.getElementById("cityInput").value;
    var touristLocations = getTouristLocations(city);
    displayTouristLocations(touristLocations);
}

function getTouristLocations(city) {
    var locations = {
        "New York": [
            { name: "Statue of Liberty", image: "https://example.com/statue_of_liberty.jpg" },
            { name: "Central Park", image: "https://example.com/central_park.jpg" },
            { name: "Empire State Building", image: "https://example.com/empire_state_building.jpg" }
        ],
        "Paris": [
            { name: "Eiffel Tower", image: "https://example.com/eiffel_tower.jpg" },
            { name: "Louvre Museum", image: "https://example.com/louvre_museum.jpg" },
            { name: "Notre-Dame Cathedral", image: "https://example.com/notre_dame_cathedral.jpg" }
        ],
        "Kolkata": [
            { name: "Howrah Bridge", image: "Images/howrah_bridge_1-sixteen_nine.avif" },
            { name: "Victoria Memorial Hall", image: "Images/Untitled-design.jpg" },
            { name: "Dakshineswar Kali Mandir", image: "Images/1636190130_dakshineswar-kali-temple-20214.jpg"},
            { name: "Science City", image: "Images/1640317105_science-city-entrance.jpg"},
        ],
        "Delhi": [
            { name: "Lotus Temple", image: "Images/lotus_temple.jpg", },
            { name: "India Gate", image: "Images/india_gate.jpg"},
            { name: "Akshardham", image: "Images/Akshardham.jpg"},
            { name: "Rashtrapati Bhavan", image: "Images/Rashtripati_bhavan.jpg"}
        ],
        "Mumbai": [
            { name: "Gateway Of India", image: "Images/Gateway-of-India.jpg"},
            { name: "Marine Drive", image: "Images/marine_drive.jpg"},
            { name: "Film City", image: "Images/film-city-mumbai.jpg"},
            { name: "Sea Link", image: "Images/sea_link.jpg"}
        ],
        "Jaipur": [
            { name: "Hawa Maha", image: "Images/hawa_mahal.jpg" },
            { name: "Jal Mahal", image: "Images/Jal-Mahal.jpg"},
            { name: "Jawahar Kala", image: "Images/jawahar-kala-kendra.jpg"}
        ],
        "Mathura": [
            { name: "Prem Mandir", image: "Images/prem_mandir.jpg"},
            { name: "Banke Bihari Mandir", image: "Images/banke_bihari-mandir.jpg"},
            { name: "Nidhivan", image: "Images/nidhivan.jpg"},
            { name: "Sri Sri Krishna Balaram Mandir", image: "Images/Krishna_balaram_mandir.jpg"},
            { name: "Madan Mohan Temple", image: "Images/Madan_Mohan_Temple.jpg"},
            { name: "Keshi Ghat", image: "Images/Keshi_ghat.jpg"},
            { name: "Seva Kunj", image: "Images/Seva-Kunj-Vrindavan.jpg"},
            { name: "Shri Krishna Janmasthan", image: "Images/Shri_krishna Janmasthan.jpg"}
        ],
        "Agra": [
            { name: "Taj Mahal", image: "Images/Taj_mahal.jpg"},
            { name: "Red Fort", image: "Images/red_fort.jpg"},
            { name: "Jama Masjid", image: "Images/Jama_masjid.jpg"},
            { name: "Moti Masjid", image: "Images/Moti-Masjid-Agra.jpg"}
        ]
        // Add more cities and their tourist locations with images as needed
    };

    return locations[city] || [];
}

function displayTouristLocations(locations) {
    var touristLocationsContainer = document.getElementById("touristLocations");
    touristLocationsContainer.innerHTML = ""; // Clear previous results

    if (locations.length === 0) {
        touristLocationsContainer.innerHTML = "<p>No tourist locations found for this city.</p>";
    } else {
        locations.forEach(function(location) {
            var locationDiv = document.createElement("div");
            locationDiv.classList.add("location-item");

            var locationName = document.createElement("h4");
            locationName.textContent = location.name;
            locationDiv.appendChild(locationName);

            var locationImage = document.createElement("img");
            locationImage.src = location.image;
            locationImage.alt = location.name;
            locationDiv.appendChild(locationImage);

            // Create direction button for each location
            // Create a button element
            var directionButton = document.createElement("button");
            directionButton.className = "btn btn-primary";

            // Create a link element
            var directionLink = document.createElement("a");
            directionLink.textContent = "Get Directions and Historic Information";
            
            // Determine the URL for the directions page based on the location
            var directionsPageUrl = '';
            if (location.name === "Howrah Bridge") {
                directionsPageUrl = '/mapinfo/kolkata/howrah/howrah.html';
            } else if (location.name === "Victoria Memorial Hall") {
                directionsPageUrl = '/mapinfo/kolkata/victoria memorial/victoria.html';
            } else if (location.name === "Gateway Of India") {
                directionsPageUrl = '/mapinfo/Mumbai/Gateway/gateway.html';
            }  

            // Add more conditions as needed for other locations

            directionLink.href = directionsPageUrl;

            // Append the link inside the button
            directionButton.appendChild(directionLink);

            // Append the button to the location div
            locationDiv.appendChild(directionButton);

            touristLocationsContainer.appendChild(locationDiv);
        });
    }

    touristLocationsContainer.classList.add("visible");
}



function showDirections(location) {
    // Implement your code to show directions for the selected location
    // This function will depend on how you're retrieving and displaying directions.
    // You can use the HERE API or any other mapping service for this purpose.
    console.log('Showing directions for:', location.name);
}

