const { gql } = require('apollo-server');
// Unions
const unions = gql`
  union Resource = Space | App | User
`

// Types
const types = gql`
  type Permission {
    _id: ID,
    context: Resource,
    applysOn: ID,
    roleName: String,
    canCreatePost: Boolean,
    canEditPost: Boolean,
    onCreatePostStatus: POST_STATUS_ENUM,
    canDeletePost: Boolean,
    canCreateSpace: Boolean,
    canDeleteSpace: Boolean,
    canEditSpace: Boolean,
    onCreateSpaceStatus: SPACE_STATUS_ENUM,
    canChangeSpaceStatus: Boolean
  } 
`
const inputs = gql`
  input InputPermission {
    canCreatePost: Boolean,
    canEditPost: Boolean,
    onCreatePostStatus: String,
    canDeletePost: Boolean,
    canCreateSpace: Boolean,
    canDeleteSpace: Boolean,
    canEditSpace: Boolean,
    onCreateSpaceStatus: String,
    canChangeSpaceStatus: Boolean
  }
`
// Queries
const queries = `
  """ To get all permissions """
  getPermissions: [Permission]
`
// Mutations
const mutations = `
  """ Add new permission """
  createPermission( context: String!, applysOn: String!, roleName: String!, permission: InputPermission ): Permission
`

module.exports = {
  unions,
  types,
  inputs,
  queries,
  mutations
}