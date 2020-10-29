/**
 * Status description:
 * pending : Needs approval by concerned user
 * action: Visible 
 * archived: archived for reference
 * deleted: Post is deleted
 * inactive: 
 */
const SPACE_STATUS_ENUM = [ "pending", "active", "archived", "deleted", "inactive", null ]
const SPACE_VISIBLITY_ENUM = [ "public", "private" ]

module.exports = {
  SPACE_STATUS_ENUM,
  SPACE_VISIBLITY_ENUM
}