const randomUserLoad = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => randomUsers(data.results))
}
const randomUsers = users => {
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        console.log(user)
        const userContainer = document.createElement('div');
        userContainer.classList.add('bg');
        userContainer.innerHTML = `
        <h2>Title:${user.name.title} 🔥</h2>
        <h2>First Name:${user.name.first}</h2>
        <h2>Last Name:${user.name.last}</h2>
        <h3>Phone:${user.phone}</h3>
        <h3>Email:${user.email}</h3>
        <h3>Users ID:${user.id.value}</h3>
        <h3>Gender:${user.gender} ✨</h3>
        <ul>
        <li>City:${user.location.city}</li>
        <li>Coordinates:<ul>
                            <li>latitude: ${user.location.coordinates.latitude}</li>
                            <li>longitude: ${user.location.coordinates.longitude}</li>
                        </ul></li>
        <li>Postcode:${user.location.postcode}</li>
        <li>City:${user.location.city}</li></ul`
        usersContainer.appendChild(userContainer)
    }

}