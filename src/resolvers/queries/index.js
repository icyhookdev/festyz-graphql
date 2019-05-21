import { Pagination } from '@limit0/mongoose-graphql-pagination';

const getPaginated = async (models, subject, args) => {

  const { first, after, field, order, criteria } = args;

  const paginated = new Pagination(models[subject], {
    pagination: { first, after, },
    sort: { field, order },
  });

  const data = await paginated.getEdges();
  const totalCount = await paginated.getTotalCount();
  const hasNextPage= await paginated.hasNextPage();
  const cursor= await paginated.getEndCursor();

  return { data: data.map(item =>  item.node), totalCount, cursor, hasNextPage } ;

}

export const queriesResolver = {
  organization (parents,{ _id },{ models }) {
    return models.Organization.findOne({ _id })
  },
  async organizations (parents, args, { models }) {
    return getPaginated(models, 'Organization', args);
  },
  category (parents,{ _id },{ models }) {
    return models.Category.findOne({ _id })
  },
  async categories (parents, args, { models }) {
    return getPaginated(models, 'Category', args);
  },
  event (parents,{ _id },{ models }) {
    return models.Event.findOne({ _id })
  },
  async events (parents, args, { models }) {
    return getPaginated(models, 'Event', args);
  }
}