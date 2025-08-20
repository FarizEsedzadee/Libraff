const books = document.getElementById('books');

fetch("http://localhost:3000/kitablar")
.then(response => response.json())
.then(data => {
    data.forEach(item => {
        books.innerHTML += `
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
  <a href="#">
    <img class="rounded-t-xl object-cover h-64 w-full" src="${item.image}" alt="${item.title}" />
  </a>
  <div class="p-6">
    <a href="#">
      <h5 class="text-lg font-bold text-gray-900 hover:text-blue-600 transition duration-200">${item.title}</h5>
    </a>
    <p class="text-sm text-gray-500 mt-1">${item.author}</p>

    <div class="flex items-center mt-4 mb-3">
      <div class="flex items-center space-x-1">
        ${'★'.repeat(Math.floor(item.rating))}<span class="text-gray-300">${'★'.repeat(5 - Math.floor(item.rating))}</span>
      </div>
      <span class="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">${item.rating.toFixed(1)}</span>
    </div>

    <p class="text-sm text-gray-600 line-clamp-3 h-14 mb-4">${item.description}</p>

    <div class="flex items-center justify-between">
      <span class="text-2xl font-semibold text-gray-900">${item.price.amount} ${item.price.currency}</span>
      <button class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition">Add to cart</button>
    </div>
  </div>
</div>`
    });    
})