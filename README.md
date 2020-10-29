# SocialNetwork API

This a social network api build using graphQL.

## Available Resources

### Space

This the place where users can join and shares similar interests

### Post

The entity that is created by the user. It can be part of a space or attached to an individual user.

### User

The actor that creates post and become part of a space.

## In Space Permissions

There are three different types of members of a space - Members, Moderators and Admins

Below are the follwing options availale to users belongs to a space :

| Type      | Options                                   |
| --------- | ----------------------------------------- |
| member    | can create post                           |
|           | can delete his post                       |
|           | can edit his post                         |
| moderator | All the options of members                |
|           | can delete any particular post            |
|           | can ban a user                            |
| admin     | All the options of moderators             |
|           | can delete an entire posts                |
|           | can make other user as moderator or admin |
|           | can edit space's descriptions             |
|           | can delete the space                      |

# WORK IN PROGRESS
