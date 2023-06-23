const apikey = '-k5cMFRfdiFP-8Z_l7hGJnTnFf508Rrh5HZh46zu0YE';

const searchinput = document.querySelector('.search-input');
const searchResults = document.querySelector('.pics');
const showmore = document.querySelector('.showmores');

let inputData = 'Dog';
let page = 1;

async function Search()
{
	inputData = searchinput.value;
	let url =  `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apikey}`;
	const response = await fetch(url);
	var data = await response.json();

	console.log(data);
	const results = data.results;

	if(page ===1)
	{
		searchResults.innerHTML = "";
	}

	results.map((result) =>{
		const ImageWrapper = document.createElement('div');
		ImageWrapper.classList.add("first");
		const Image = document.createElement('img');
		Image.src = result.urls.small;
		const ImageLink = document.createElement('a');
		ImageLink.href = result.links.html;
		ImageLink.target = '_blank';
		ImageLink.textContent = result.alt_description;

		ImageWrapper.appendChild(Image);
		ImageWrapper.appendChild(ImageLink);
		searchResults.appendChild(ImageWrapper);
	});
	page++;
	if(page>1)
	{
		showmore.style.display = "block";
	}
	
		
	
}

function searchbutton()
{
	searchResults.innerHTML = "";
	Search();
}

function showmorepics()
{
	Search();
}