export const canEdit = function (user, listing) {
  return user.admin || (user.id == listing.user_id)
}
