# Git and GitHub
### Version Control
-> Checkpoint of your code
### Git: 
-> Version Control Language
### .git 
-> git file to track your changes
### Functions: 
- Initialize Git: git init
- Check status of staging area: git status
- Add selected files to the staging area: git add < files >
- Add checkpoint (push into local repository): git commit -m "your message" (Use present tense)
- Check history of commit: git log
- Revert back to the last version (committed): git checkout
- Check the differences between previous checkpoint and current working directory: git diff < filename >
- Push existing local repository to the remote repository: git push <origin> < branch name >
- remove?? : git rm
### GitHub
-> Host Remote Repository
a. Public Repository: Open Source (contribute to the society)
b. Private Repository: For secret projects 
### .gitignore: 
-> ignore files from being committed/pushed
-> Examples of things you need to ignore = .env, venv, secret keys, Personal API keys, User preferences
-> Check for references in gitignore repo by github
### Cloning a remote repository into the local repository
-> git clone < link to repository >
### Branching and Merging
-> Others can commit too but to a branch of the repository, so that the integrity of the repository stays. When we're sure the branch won't ruin the main code -> merge
-> git branch: see how many branch there is
-> git checkout < branch name >: get to the branch
-> git merge: merge changes between the branch and master
### Forking and Pull Requests: 
-> Allow others to add changes, and suggest changes
-> Pull request: the request of change
-> Forking: getting repository from others
