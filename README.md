## React front-end for tclone
Try it [here](https://tclone.netlify.app)
back-end repo [here](https://github.com/muzam1l/tclone-api)


![Demo](./docs/tclone-demo.gif)

> *looks exactly like twitter web app* 😊

It is my own take on building Twitter clone, I have tried to keep things simple and concise. With minimal modules needed, it is very lightweight and fast, yet very functional and feature-rich (more improvements coming).

## Things working ⚡
-  __Authentication__ (simple one 💩)
Authentication is done with passport local-strategy with sessions managed [server](https://github.com/muzam1l/tclone-api) side via cookies (I need some help regarding prevention of session-hijacking). No session data is stored in local-storage and cookies are also httpOnly. Log-in session is detected in React, at app start, by sending and checking get request to authenticating api, and subsequent api requests also check for `403`, to destroy session, as an added measure.

- __State management__ (pretty much non-existent 😄)
Only **global** state is of authentication, which is maintained via React [context](./src/utils/context/auth.js), everything else is in the local state of components. In cases where data is needed in more than one places, like [posts](./src/comps/Posts.js) and [trends](./src/comps/Trends.js), they have their own lightweight components which are reused, for example [trends](./src/comps/Trends.js) and [TrendingCard](./src/layouts/main/sidebar/TrendingCard.js). 
- __Styling__ (UPDATED! to use bootstrap)
First step towards learning from my mistakes and improving this mess, i removed all of my custom css (courage 😎), and replaced it with bootstrap classes, now DOM and directories are both clean and more portable, accessibility should improve and extensibilty would now be easier (Currently i did not add any new major features but extending it would now be an agenda!). Bootstrap is customised to match twitter/tclone theme mostly with overriding Sass variables and also extending classes and adding my own ones too. Though all of the styling and responsive layout is now bootstrap powered, i have reatined react-responsive Media queries to not load the hidden components at all. This change lays the strong base to entend this project beyond!.
- __Compose posts__ (minimal as it can be)
Though I am considering implementing modal and media sharing in posts (Tweets). Right now, it is very concise and only lets you to share text-based posts only. But tweets are parsed for hashtags, so you may be able to make a hashtag through trends (right now dominated by pre-populated posts).
- __Pre populated posts__ (only original feature of this project 💪).
when you open [tclone](https://tclone.netlify.app/), you see a bunch of users and their tweets (after you follow them). These are actual recent tweets of these accounts on Twitter and fetched via twitter api and then populated in database (so no, NASA didn't log into this clone 💣). Tweet Model on this project is exactly compatible with Tweet objects returned by Twitter api so you can pre populate  you own set of tweets (parsed automatically) for your own fork of this project (Go make one...----------------------------------------------------------------         please🥺).
- __Trends and User suggestions__ (*It ain't much but it's honest work*)
Hashtags with higher posts are stored as trends on the sidebar or on explore page and you can click on them to search for posts with given hashtags and users you are not following are also listed in Who to follow card on sidebar. Trends are now realtime, so go on rise your hastag to trending section 💥.
- __Search__ (it is easily done through mongoDB queries but I was proud to have it 🥇)
You can search for text that the posts contain or for hashtags (by prefixing search with #) and for users, prefix your query with @ to find user of that username (or name) and all of this just works and is enough to search through all of database 🥳)

## TODO
All those things which I want to do and makes me learn smarting new and ........ lets see what I can do 🤷‍♂️.

## Contributing
This is my favorite part. Just do it...💥
There are no guidelines for code or whatsoever and I never write tests (because I can't 😁).
So just bombard me with pull requests 🥺.

## Footnote
If you are still reading up to this point, there is no special Treat for you, but I will say **Thank you**.
