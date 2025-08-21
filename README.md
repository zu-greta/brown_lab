# instructions
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
rm -rf node_modules package-lock.json
npm install
npm start

---

In the backend directory, you can run:

### `node fetch_and_save.js`

To fetch the publications.

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
│   ├── components/             # pieces of UI to reuse
│   │   ├── Alumni.js           # alumni member card + modal
│   │   ├── Footer.js           # footer of all pages
│   │   ├── Join.js             # join us button
│   │   ├── MemberCard.js       # member card + modal
│   │   ├── NavBar.js           # general page navigation bar
│   │   ├── NavBarPerm.js       # projects, publications, members page navigation bar
│   │   ├── ProjectCard.js      # project card
│   │   ├── PublicationCard.js  # publication card
│   ├── data/
│   │   ├── members.json        # data json file of members (active and alumni)
│   │   ├── publications.json   # saved json data file from publication fetch
│   ├── pages/
│   │   ├── ActiveMem.js        # on main page, members section (Claire Brown + Members intro)
│   │   ├── Funding.js          # on main page, funding organizations information
│   │   ├── Hero.js             # on main page, carousel
│   │   ├── Home.js             # main page setup
│   │   ├── Join.js             # join page
│   │   ├── Members.js          # members page
│   │   ├── Overview.js         # on main page, overview of the lab section
│   │   ├── Projects.js         # projects page
│   │   ├── ProjectsSection.js  # on main page, current projects section
│   │   ├── Publications.js     # publications page
│   │   ├── RecentPubs.js       # on main page, recent publications section
│   ├── App.css                 # general style
│   └── App.js                  # overall routing
└── .gitignore

```

---