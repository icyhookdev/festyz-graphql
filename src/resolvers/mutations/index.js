export const mutationsResolver = {
  createOrganization (parents, args, { models }) {
    return models.Organization.create(args)
  },
  updateOrganization (parents, { _id, input }, { models }) {
    return models.Organization.findOneAndUpdate({_id},input,{new: true})
  },
  createEvent (parents, args, { models }) {
    return models.Event.create(args)
  },
  updateEvent (parents, {_id, input}, { models }) {
    return models.Event.findOneAndUpdate({_id}, input, {new: true})
  }
}