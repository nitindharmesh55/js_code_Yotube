const SearchInput = document.getElementById("searchInput");
const SearchBtn = document.getElementById("btnSearch");
const Profilecontainer = document.getElementById("profileContainer");
const loading = document.getElementById("loading");
const URL = "https://api.github.com/users/";

const generateFile = (Profile) => {
    return `
    
        <section class="profile-box">
            <div class="topSection">
                <div class="left">
                    <div class="avatar">
                        <img src="${Profile.avatar_url}" alt="ProfilePicture">
                    </div>
                    <div class="self">
                        <h1>${Profile.name}</h1>
                        <p>${Profile.login}</p>
                    </div>
                </div>
                <a href="${Profile.html_url}">
                <button class="searchBtn">Check Profile</button> </a>
            </div>

            <div class="about">
                <h2>About</h2>
                <p>${Profile.bio}</p>
            </div>
            <div class="status">
                <div class="status_item">
                    <h2>Follower</h2>
                    <p>${Profile.followers}</p>
                </div>

                 <div class="status_item">
                    <h2>Following</h2>
                    <p>${Profile.following}</p>
                </div>

                 <div class="status_item">
                    <h2>Repo</h2>
                    <p>${Profile.public_repos}</p>
                </div>
            </div>
        </section>`;
}


const FectchData = async () => {

    const userName = SearchInput.value;

    loading.innerText = "loading....."
    loading.style.color = "black";
    try {
        const response = await fetch(`${URL}${userName}`);
        const data = await response.json();
        if(!data.message){
            loading.innerText = "";
            Profilecontainer.innerHTML = generateFile(data);
        }
        else{
            loading.innerText = data.message;
            loading.style.color =  "red";
        }

    } catch (error) {
        console.log("Error");
         loading.innerText = "";

    }
}


SearchBtn.addEventListener("click", FectchData);