/* Status description:
* admin : The admin of the space
* moderator: Moderator of the space 
* normal: A normal user joined to space
*/
const SPACE_USER_RELATION_ENUM = ["admin","moderator",'normal'];
const SPACE_USER_STATUS_ENUM = ["approved","pending","banned"];
module.exports = {
  SPACE_USER_RELATION_ENUM,
  SPACE_USER_STATUS_ENUM
}