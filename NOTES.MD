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

see the changed files
git status

merge develop or master to your own functional branch
git merge origin/develop
or
git merge origin/master

reset the branch to previous changes
git reset --merge

logs
https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
git log
git log --pretty=oneline
git log --pretty=format
git log --since=2.weeks

git fetch, merge, pull
https://help.github.com/articles/fetching-a-remote/


See the summary of changes again:
git diff --stat master@{1} master

See all of the changes: 
git diff master@{1} master

jump back to beginning of file by typing any one of the following command
1G OR gg

jump to line number 700 (press ESC type 700G)
700G

 #Set up eslint
 npm i eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-eslint --save-dev
