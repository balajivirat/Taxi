document.getElementById("taxiForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  alert('Booking Confirmed')
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const rideType = document.getElementById("rideType").value;
  
    // const fare = calculateFare(pickup, dropoff, rideType);
  
    const confirmationMessage = `
      Booking Confirmed!
      Pickup: ${pickup}
      Drop-off: ${dropoff}
      Date: ${date}
      Time: ${time}
      Phone Number: ${rideType}
    `;
    const message = {
      to: "udayavisco@gmail.com",
      subject: "Test Email",
      message: confirmationMessage,
    };
    document.getElementById("confirmation").innerHTML = confirmationMessage;
    
    // JavaScript Fetch Example
    const url = 'http://localhost:3000/send-email';


const data = {
    subject: 'Hello!',
    message: confirmationMessage,
    to: 'udayavisco@gmail.com'
};
console.log('data',data);

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        document.getElementById("pickup").value = '';
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // try {
    //   const response = await fetch('http://localhost:3000/send-email',{
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({message})
    //   });
    //   if (response.ok) {
    //     alert('Email Sent Successfully')
    //   } else {
    //     alert('Failed to sent Email')
    //   }
    // } catch (error) {
    //   console.error('ERROR',error);
    //   alert('An error occurred')
    // }
    window.location.href = "slide.html";
  });
  
  function calculateFare(pickup, dropoff, rideType) {
    // Simplified fare calculation
    const baseFare = 10;
    const rideTypeMultiplier = {
      economy: 1,
      premium: 1.5,
      luxury: 2,
    };
    const distance = Math.floor(Math.random() * 10) + 1; // Random distance for demo
    return (baseFare + distance * 2) * rideTypeMultiplier[rideType];
  }
  