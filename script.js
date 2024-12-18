// Dummy data for products
let dummyData = [
    {
        id: 1,
        productName: "Rolls-Royce Phantom",
        productPrice: "$460,000",
        productDescription: "The Rolls-Royce Phantom is the epitome of luxury, known for its handcrafted excellence, quiet ride, and elite status.",
        productImageUrl:"https://hips.hearstapps.com/hmg-prod/images/phantom-scintilla-private-collection-0-1-66b50a5eddd44.jpg?crop=0.832xw:0.832xh;0.0849xw,0.168xh&resize=2048:*"

    },
    {
        id: 2,
        productName: "Bentley Mulsanne",
        productPrice: "$350,000",
        productDescription: "The Mulsanne is Bentley's flagship model, offering luxury with a high-performance twin-turbo V8 engine.",
        productImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Rn7v1i7MKNs7B2YyUz47yRpW7LDxeAhkSQ&s"

    },
    {
        id: 3,
        productName: "Aston Martin DBS",
        productPrice: "$316,000",
        productDescription: "The DBS combines Aston Martin heritage with modern featuring powerful V12 engine luxurious interior.",
        productImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC6y-0YGGk_BC85_5WpUOwNksxQ8FB_4EVQ&s"
        
    }
];


function showProducts() {
    const mainContainer = document.getElementById('main');
    mainContainer.innerHTML = ''; 

    
    const productCards = dummyData.map(product => {
       
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = product.id;

        
        const img = document.createElement('img');
        img.src = product.productImageUrl;
        img.alt = product.productName;

    
        const carName = document.createElement('h2');
        carName.innerText = product.productName;
        const price = document.createElement('h3');
        price.innerText = product.productPrice;
        const description = document.createElement('p');
        description.innerText = product.productDescription;

       
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';

      
        deleteButton.addEventListener('click', () => {
            
            dummyData = dummyData.filter(p => p.id !== product.id);
            showProducts(); 
        });

       
        card.appendChild(img);
        card.appendChild(carName);
        card.appendChild(price);
        card.appendChild(description);
        card.appendChild(deleteButton);

        return card; 
    });

    
    mainContainer.append(...productCards); 
}

window.onload = showProducts;
