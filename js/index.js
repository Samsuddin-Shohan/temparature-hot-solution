const inputField = document.getElementById('input-field');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', ()=>{
    const inputValue = inputField.value;
    inputField.value = '';
    const apiKey = '62c00ab6e17e83bd6d12ddbec3730942';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=62c00ab6e17e83bd6d12ddbec3730942`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
});

const displayData = data =>{
    console.log(data);
    const temparatureInKelvin = data.main.temp;
    let temparatureInCensius = temparatureInKelvin-273.15; 
    temparatureInCensius = temparatureInCensius.toFixed(2);
    const cityName = data.name;
    const category = data.weather[0].main;
    //console.log(category);
    //console.log(temparatureInCensius);
    document.getElementById('city').innerText = cityName;
    document.getElementById('temparature').innerText = temparatureInCensius;
    document.getElementById('category').innerText = category;
}