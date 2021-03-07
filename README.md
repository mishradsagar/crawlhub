# CrawlHub
## Problem Statement

Your team is working on an app that will help recruiters review candidates github
information. You have been assigned to work on one feature for the app - to display
a list of repos belonging to a particular GitHub handle, through APIs.
Using: NodeJs, MongoDB.
Review GitHub&#39;s API documentation for the list user repositories endpoint to
understand how this endpoint works. Create an app and push it to GitHub. App
should expose 2 endpoints to fulfil below requirements.
Requirements:
1) The user must be able to search for any GitHub repos handle. The search
must trigger a call to GitHub&#39;s API. The repos associated with that handle
must be displayed on the response. You must display the repo name, owner
name, description, stars count and link to the repo URL.
2) The user must be able to search for any user with the exact name, if not found
show proper error else insert the information in mongoDB, which will be used
for subsequent APIs request. Application should only make one call to github
and returns from mongoDB on subsequent requests for the same user.

## Setup and testing

```sh
git clone <repo url>
cd crawlhub
```
Add required env file to the project folder
```sh
npm i
npm run start
```

## VS Code Extention setup for integrated testing

- Install Rest Client extension on VSCode
- Open http-test/user.http
- Any api can be called directly by clicking on _send request_ above any given url in user.http.