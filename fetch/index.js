const categories = document.getElementById("categories")


// fetch("https://northwind.vercel.app/api/products")
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => { const p = document.createElement('p')
//             p.textContent = `${item.name} - ${item.description} - ${item.id}`
//             categoriesDiv.appendChild(p)
//         })
//     })
const inpOne=document.getElementById('name')
btn.addEventListener('click', function () {
        fetch('https://northwind.vercel.app/api/products', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: inpOne.value,
               }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("data gonderildi" + data);
              });
    })
