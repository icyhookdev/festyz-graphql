export const queriesResolver = {
  organization (parents,{ _id },{ models }) {
    return models.Organization.findOne({ _id })
  },
  organizations (parents, args, { models }) {
    return models.Organization.find({})
  },
  category (parents,{ _id },{ models }) {
    return models.Category.findOne({ _id })
  },
  categories (parents, args, { models }) {
    return models.Category.find({})
  },
  event (parents,{ _id },{ models }) {
    return models.Event.findOne({ _id })
  },
  events (parents, args, { models }) {
    return models.Event.find({})
  }
}