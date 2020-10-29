/**
 * Status description:
 * pending : Needs approval by concerned user
 * action: Visible 
 * archived: archived for reference
 * deleted: Post is deleted
 * inactive: 
 */
const POST_STATUS_ENUM = [ "active", "inactive", "pending", "archived", "deleted" ];
/**
 * Type description:
 * link : any url
 * image: Post with image
 * video: Post with video
 */
const POST_TYPE_ENUM = [ "link", "image", "video" ];
module.exports = {
  POST_STATUS_ENUM,
  POST_TYPE_ENUM
}