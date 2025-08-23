# Brown Lab website
This project contains the code to the Brown Lab website. This README contains information on how to:
- run, test and deploy the website 
- the code directory 
- updating data:
    - fetch and updating publications data
    - updating members and projects data
- updating the website 
- deploying the site to github pages

---

# instructions for running and deployement
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

In the project directory, you can run:

### `npm run deploy`

That build deploy to the github pages.\
Open [https://zu-greta.github.io/brown_lab/](https://zu-greta.github.io/brown_lab/) to view it in your browser.

---

In case of problems:
- `rm -rf node_modules package-lock.json`
- `npm install`
- `npm start`

---

# code structure

```
brown_lab
.
├── README.md                   # instructions and code structure of the project
├── api/                        # api calls 
│   ├── publications.js         # fetch publications using serpapi and prof google scholar key
│   └── server.js               # runs the function to fetch the publications
├── backend/                    # api functionality related code
│   ├── fetch_and_save.js       # fetches the publications and saves them
│   └── server.js               # runs the function to fetch and save publications
├── src/                        # source code of the project
│   ├── assets/                 # images
- TODO: add images in assets ^
│   ├── components/             # pieces of UI to reuse (COMPONENTS)
│   │   ├── Alumni.js           # alumni member card + modal
│   │   ├── Footer.js           # footer of all pages
│   │   ├── MemberCard.js       # member card + modal
│   │   ├── NavBar.js           # general page navigation bar
│   │   ├── NavBarPerm.js       # projects, publications, members page navigation bar
│   │   ├── ProjectCard.js      # project card
│   │   ├── PublicationCard.js  # publication card
- TODO: check 
│   │   └──ScrollToTop.js       # reset the scroll of the page
│   ├── data/
│   │   ├── members.json        # data json file of members (active and alumni)
- TODO: add info for members and pictures ^
│   │   ├── projects.json        # data json file of projects (current and past)
- TODO: add info for projects and pictures ^
│   │   └── publications.json   # saved json data file from publication fetch
- TODO: refresh publications and get a key? ^
│   ├── pages/                  # (PAGES and SECTIONS)
│   │   ├── home/               # main page sections
│   │   │   ├── ActiveMem.js        # on main page, members section (Claire Brown + Members intro)
│   │   │   ├── Funding.js          # on main page, funding organizations information
│   │   │   ├── Hero.js             # on main page, carousel
- TODO: add slogan? ^
│   │   │   ├── Home.js             # main page setup and routing
│   │   │   ├── Overview.js         # on main page, overview of the lab section
- TODO: text and images ^
│   │   │   ├── ProjectsSection.js  # on main page, current projects section
│   │   │   └── RecentPubs.js       # on main page, recent publications section
- TODO: check ^
│   │   ├── Members.js          # members page
│   │   ├── Projects.js         # projects page
│   │   └── Publications.js     # publications page
- TODO: check ^
│   ├── App.css                 # general style (eg. font-family)
│   └── App.js                  # overall website routing
└── .gitignore

```

---

# instructions for publications fetching and setup

### setup backend and api key
1. create a free account on [SerpApi](https://serpapi.com/)
2. go to your [dashboard](https://serpapi.com/dashboard), find "Your Private API Key" and copy it
3. in this github repository under `backend/`, create a new file called `.env` and paste "SERPAPI_KEY=<YOUR PRIVATE KEY HERE>"
4. monitor your dashboard in case of problems. you have 250 free searches every month

### fetch and save publications
In the backend directory, to fetch the updated publications, you can run:
- `node fetch_and_save.js`

---

# instructions for updating members and projects data

TODO: paste a template of the json files and formats expected

---

# instructions for creating new pages

TODO: instructions on how to add a new page to the site (creating a page, where to put it, routing etc)

---

# instructions for cloning and deploying the website on github pages of any repository

TODO

---