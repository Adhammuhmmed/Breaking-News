    // ! =============> Global ===============>
    let newsList = [];
    let newsType = 'top';
    let country = 'top';
    let flag = document.getElementById('flag');
    let navLinks = document.querySelectorAll('.nav-link');

    // ! =============> When Start ===============>
    apiData();  

 // ! =============> Functions ===============>
// Get Data From News Api
async function apiData(type ='top', country = 'eg') {
    let loaderScreen = document.querySelector('.loader-screen')
    loaderScreen.classList.remove('d-none')
    const api = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_47344d5157501102aa351a97f6d15f8c7c45a&country=${country}&category=${type}`);
    respons = await api.json();
    newsList = respons.results;
    console.log(respons.results)
    loaderScreen.classList.add('d-none')
    displayData()
}

// Display News To User
function displayData() {
    let box = ``;
    newsList.forEach((element) => {
    let {image_url,title,link,pubDate,source_id} = element
    box += `  <div class="item col-md-6 col-lg-4 ">
    <div class="inner ">
        <div class="news">
            <div class="image">
                <img src="${image_url ? image_url : 'Images/news-static.svg'}" alt="new image" class="w-100 d-block">
            </div>
            <div class="content p-3">
                <div class="content-info pt-2">
                    <h1 class="h6 author">${source_id ? source_id : 'Unknown Author' }</h1>
                    <a href="${link}" target="_blank" class="more text-decoration-none d-block my-2">Read More...</a>
                </div>
                <div class="content-description pt-3 d-flex flex-column">
                    <p class="description">${title}</p>
                    <p class="date ms-auto">${pubDate}</p>
                    
                    
                </div>
            </div>
        </div>
    </div>
    </div>`;
    });
    document.getElementById("rowData").innerHTML = box;
}

    // ! =============> Events ===============>
        //Change Data By click On Link
        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function(e) {
                newsType =  this.getAttribute("data-category")
                apiData(newsType, country)
            })
        }
        
        // Change News when change country from options
        flag.addEventListener('change',function(){
        country = flag.value
            apiData(country, newsType)
        })




    `
\
    
    
    
    `