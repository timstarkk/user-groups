
#  User Groups

A basic application for adding and removing users from groups as well as list which groups a user is associated with, and vice versa.

From the homepage, simply click and drag a user to the group you wish to associate them with, and that's it!
If you want to remove a user from a group that can be done from either the ```'/groups/[id]'``` page, or ```'/users/[id]'```. (after clicking 'edit')

## To Run Locally

### System Requirements: 

 - Node.js 12.22.0 or later
 - MacOS, Windows (including WSL), and Linux are supported

 
### Instructions:
 1. Clone repo: ```'git clone https://github.com/timstarkk/user-groups.git'```
 2.  Navigate to root directory ```'/user-groups'```
 3. Install Dependencies ```'yarn install'``` or ```'npm install'```
 4. Run ```'yarn build'``` or ```'npm build'``` to create an optimized production build
 5. Run ```'yarn start'``` or ```'npm start'```to start the application
 6. Visit ```'http://localhost:3000'```, enjoy!
	
  
##  Server

  

This project uses a dummy API implemented in `src/pages/api` which creates a simple
interface for managing user groups. It is deliberately simple, and the documentation
can be found at `/swagger`. If you want to make changes to the API, feel free. You
can find instructions for syncing the client API below.

  

##  Client

The client is built using `next`, and utilises css-in-js along with `twin.macro`
for styling. The client api for the server is generated using a tool called
[`orval`](https://orval.dev/), which can be invoked to synchronize the client code
with the server openapi definitions after making changes.

  

```
yarn install
yarn api:sync
```

The resulting service definitions (fully typed) are generated into `src/service`,
and available as hooks, using `react-query` for persistence and caching.

Other commands are available in `package.json`
