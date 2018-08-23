# project-4
# Project requirements:
https://git.generalassemb.ly/WebDev-Connected-Classroom/Project-4/blob/master/README.md

# Objective: 
We will be creating a basic internet forum that will have threads and posts within those threads. Once this has been achieved, more features will be added as seen fit.

# Discord Server: The War Room: https://discord.gg/2dSnwCN
The link above is set to never expire in case you are accidentally removed from the server.


# GitHub workflow notes:
1. ```git checkout -b <enter_subject_branch_name_here>``` This will create a new branch and switch to it, a production branch.
2. Proceed with coding.
3. ```git add .```
4. ```git commit -m "enter_subject_dev_message_here"```
5. ```git checkout master``` This will switch you back to the master branch on your local machine.
6. ```git pull``` This will update your local master branch with the most recent version of the remote repo master branch.
7. ```git checkout <enter_subject_branch_name_here>``` This will switch you back to your production branch.
8. ```git push``` This will allow you to update your production branch on the local repo and make merge requests.


---


# MVP:
OP = Original Post
1. Landing page containing OP's
    * Create OP
    * Delete OP

2. Comments within OP's
    * Create Comments
    * Delete Comments
    * Edit Comments


# Workload Breakdown:
### Trello Board: https://trello.com/b/xFp2XG5b/full-crud-django-react
1. Team Django:
    * Erica - Person B
    * Michael - Person A
2. Team React:
    * Ben - Person 2
    * Patrick - Person 3
3. Version Control: 
    * Eric - Person 1


---


# ERD Diagrams

### Thread Model:
| id | title | body | author | creation_date |
| --- | --- | --- | --- | --- |

### Post Model:
| id | Thread.id | body | author | creation_date |
| --- | --- | --- | --- | --- |


# Routes architechture

### Thread Routes:
| ACTION | METHOD | NAME |
| ------ | ----- | --- |
| /threads/ | GET | index |
| /threads/new | GET | new |
| /threads/ | POST | create |
| /threads/<int:id> | GET | show |
| /threads/<int:id> | DELETE | delete |

### "Post" Routes:
| ACTION | METHOD | NAME |
| ------ | ----- | --- |
| /posts/ | GET | index |
| /posts/new | GET | new |
| /posts/ | POST | create |
| /posts/<int:id> | GET | show |
| /posts/<int:id>/edit | GET | edit |
| /posts/<int:id> | PUT | update |


# React Wireframe:
![alt text](https://media.discordapp.net/attachments/479699783637008404/479756170651893770/image.jpg?width=405&height=540)