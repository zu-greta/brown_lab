# Brown Lab website
This project contains the code to the Brown Lab website. This README contains information on how to:
- [run, test and deploy the website](#instructions-for-running-and-deployement) 
- [the code directory](#code-structure) 
- updating data:
    - [fetch and updating publications data](#instructions-for-publications-fetching-and-setup)
    - [updating members and projects data](#instructions-for-updating-members-and-projects-data)
- [updating the website](#instructions-for-creating-new-pages) 
- [deploying the site to github pages](#instructions-for-cloning-and-deploying-the-website-on-github-pages-of-any-repository)
- [troubleshooting](#troubleshooting)

---

# instructions for running and deployement
In the project durectory, you can run:

### `npm install`

Installs all the dependencies needed for the project. Run `npm install <LIBRARY TO INSTALL>` for any further libraries you wish to add.

---

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
│   ├── components/             # pieces of UI to reuse (COMPONENTS)
│   │   ├── Alumni.js           # alumni member card 
│   │   ├── AlmuniPDFCard.js    # post-doc fellow member card
│   │   ├── Footer.js           # footer of all pages
│   │   ├── MemberCard.js       # member card + modal
│   │   ├── NavBar.js           # general page navigation bar
│   │   ├── NavBarPerm.js       # projects, publications, members page navigation bar
│   │   ├── ProjectCard.js      # project card
│   │   ├── PublicationCard.js  # publication card
│   │   └──ScrollToTop.js       # reset the scroll of the page
│   ├── data/
│   │   ├── members.json        # data json file of members (active and alumni)
│   │   ├── projects.json        # data json file of projects (current and past)
│   │   └── publications.json   # saved json data file from publication fetch
│   ├── locales/                # english and french translations
│   │   ├── en/
│   │   │   └── translation.json        
│   │   └── fr/
│   │   │   └── translation.json
│   ├── pages/                  # (PAGES and SECTIONS)
│   │   ├── home/               # main page sections
│   │   │   ├── ActiveMem.js        # on main page, members section (Claire Brown + Members intro)
│   │   │   ├── Funding.js          # on main page, funding organizations information
│   │   │   ├── Hero.js             # on main page, carousel
│   │   │   ├── Home.js             # main page setup and routing
│   │   │   ├── Overview.js         # on main page, overview of the lab section
│   │   │   ├── ProjectsSection.js  # on main page, current projects section
│   │   │   └── RecentPubs.js       # on main page, recent publications section
│   │   ├── Members.js          # members page
│   │   ├── Projects.js         # projects page
│   │   └── Publications.js     # publications page
│   ├── i18n.js                 # language translation
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

The next time you push and deploy, the new publications should show up

---

# instructions for updating members and projects data
Edit the corresponding file using the template by adding to the current file (note: don't forget to add commas between each entry), save the changes and push/deploy the project again.

### Members (src/data/members.json)
- There are 2 different types of members: activeMembers and alumniMembers. 
> activeMembers:
```
{
    "title": "POSITION",
    "name": "NAME",
    "extraInfo": "PROJECT NAME (appears on card)",
    "image": "IMAGE PATH WITH EXTENSION PLACED UNDER src/assets/members_images/",
    "bio": "BIO BLURB (appears on modal - view profile)",
    "year": "YEARS AT THE LAB",
    "contact": "CONTACT LINK"
}
```

> alumniMembers (note: if the member is a post-doctoral fellow, make sure the "title" is "Post-Doctoral Fellow"):
```
{
    "title": "POSITION",
    "name": "NAME",
    "extraInfo": "PROJECT",
    "image": "IMAGE PATH WITH EXTENSION PLACED UNDER src/assets/members_images/",
    "thesis": "LINK TO THESIS",
    "year": "YEARS AT THE LAB"
},
{
    "title": "Post-Doctoral Fellow",
    "name": "NAME",
    "extraInfo": "PROJECT",
    "image": "IMAGE PATH WITH EXTENSION PLACED UNDER src/assets/members_images/",
    "thesis": "...",
    "year": "YEARS AT THE LAB"
}
```

### Projects (src/data/projects.json)
- There are 2 different types of projects: current and past.
**TODO**

---

# instructions for creating new pages
*Note*: when editing the NavBar, ensure to add a french/english version in the `src/locales/en/translaton.json` and `src/locales/fr/translaton.json` files. refer to [fr-en-instructions](#instructions-for-french-and-english-translations)

New sections on the Main page: 
- can be added to `src/pages/home/Home.js` for routing and the file placed under `src/pages/home/`
- if needed, add it to the NavBar for easy access by modifying `src/components/NavBar.js` and adding a Nav.Link to the `<Nav className="me-auto">` list
- Refer to ActiveMem, Funding, Hero, Overview, ProjectsSection or RecentPub for reference

New pages:
- can be added to `src/App.js` for routing and the file placed under `src/pages/`
- if needed, add it to the NavBar and NavBarPerm for easy access by modifying `src/components/NavBar.js` and `src/components/NavBarPerm.js` and adding a Nav.Link to the section with the NavDropdown links.
- refer to Members, Projects or Publications for reference

---

# instructions for french and english translations
- add a french/english version in the `src/locales/en/translaton.json` and `src/locales/fr/translaton.json` files by adding a new variable name with the english and french translations accordingly. 
- in the page/component/navbar you want the text to appear in, instead of writing english or french, use the variable by doing `{t("<VARIABLE>")}`.
- make sure to first add `import { useTranslation } from "react-i18next";` at the top of the file and `const { t } = useTranslation();` before the `return` statement

---

# instructions for cloning and deploying the website on github pages of any repository

### forking a repository
fork the repo and clone it. then:
- `git remote add upstream git@github.com:zu-greta/brown_lab.git`
- `git remote -v`

to sync it with the original repo
- `git fetch upstream`
- `git checkout main`
- `git merge upstream/main`
- `git push origin main`

### cloning a repository to make changes
- `git clone <https://github.com/zu-greta/brown_lab.git or git@github.com:zu-greta/brown_lab.git if ssh keys set up>` (find the <>Code button on Github and copy the URL to clone)
- `git pull` for getting changes made in the repository by others
- `git status` to check the status
- `git add .` to add all changes made, `git commit -m "<MESSAGE>"` to commit the changes, `git push` to push them to the repository

### setup github pages for deployement
- fork and then clone the repository into your own Github. make sure the visibility is set to Public
- run `npm install` for all the dependencies
- follow instructions from [this-page](https://github.com/gitname/react-gh-pages), ignoring instructions for creating a new app:
    - in `package.json`, find the homepage link and modify it to match you github repository for example: `"homepage": "http://zu-greta.github.io/brown_lab"`. the other important lines for the deployement process should already be there:
    ```
    "start": "npm-run-all --parallel start:frontend start:backend",
    "start:frontend": "react-scripts start",
    "start:backend": "cd backend && node server.js",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    ```
    - in the repository on Github, find the Settings tab at the top and then the Pages tab on the left bar. select the source as "Deploy from a branch", the Branch should be "gh-pages" "/(root)"
- for extra questions and troubleshooting: [react-app-deploy](https://create-react-app.dev/docs/deployment/)

---

# troubleshooting
Troubleshooting (MacBook problems with downloading files from the cloud):
- `rm -rf node_modules package-lock.json`
- `npm install`
- `npm start`

To avoid the above problem, clone the repository into a folder named <NAME OF YOUR FOLDER>.nosync

---