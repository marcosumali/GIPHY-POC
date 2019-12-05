## GIPHY POC
GIPHY POC is a proof of concept of web application that aggregates results from various image libraries e.g. GIPHY API. This repository is set up for maintaining documentation of the application development.

### Tech Stack
1. Front-end:
   * Single Page Framework: React JS
   * State Management: Redux
   * UI Framework: Bootstrap
   _Reason: Most popular framework for application development._

### Prerequisites Instructions
1. Git clone the folder directory to your local computer.
2. Switch to master branch for final reviewed documentation and go inside the 'client' folder.
3. Create a env file on the root of the application (inside the 'client' folder and inline with 'src' folder).
4. On the env file, create a 'REACT_APP_APIKEY' variable and assigned a value to it.
   You can use our private key value as consideration which is JPj9Ot5N6th4djaq4QL33fcdglVU5a37.
5. On your terminal, type 'yarn start' and enter to run the application in development mode.

### Remarks
1. Structure of folder 'src':
   * assets: consist of general asset required for the application development including generally used CSS and changes to bootstrap CSS is documented here.
   * components: consist of jsx component that is used to build each page for development.
   * pages: consist of each dedicated page for front-end development.
   * store: consist of actions and reducers to mutate changes to state management.
2. Color CSS is managed centrally and documented on 'index.css' on the root file.
3. For public images is stored inside the 'public' folder and for path routing is documented on the 'App.js'.
4. For each action and function purpose is documented on each above actions and functions as commentaries.
5. If you are using localhost to start the applications, consider to change API endpoint to 'http'.
6. For any questions, you can always contact me at marco.sumali90@gmail.com.
      
