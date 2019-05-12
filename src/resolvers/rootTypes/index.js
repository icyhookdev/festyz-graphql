export const eventResolver = {
  organization ({ organizationId }, _ ,{ models }) {
    return models.Organization.findOne({_id: organizationId })
  }
}

export const organizationResolver = {
  events ({ _id }, args, { models }) {
    return models.Event.find({ organizationId: _id })
  }
}