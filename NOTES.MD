#Set up a personal github account
If you are facing this propblem on mac or windows:
GitHub: Permission denied (publickey). fatal: Could not read from remote repository

https://help.github.com/articles/set-up-git/

#How to manage branches on github
https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches

Create the branch on your local machine and switch in this branch :
git checkout -b [name_of_your_new_branch]

Change working branch :
git checkout [name_of_your_new_branch]

Push the branch on github and set upstream:
git push origin [name_of_your_new_branch] -u

 see all branches created by using :
 git branch

 #Set up eslint
 npm i eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react  --save-dev
