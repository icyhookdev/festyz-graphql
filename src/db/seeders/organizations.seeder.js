import Model from '../models/Organization';
import faker from 'faker';
import moment from 'moment';

const OrganizationSeeder = {
  run: async function () {
    const data = []

    for(let i = 0; i < 10; i++){
      data.push({
        name: faker.company.companyName(),
        shortDescription: faker.lorem.sentence(5),
        longDescription: faker.lorem.sentences(5),
        logoUrl: faker.image.imageUrl(),
        websiteUrl: faker.internet.url(),
        createdOn: moment().format('YYYY-MM-DD HH:mm:ss'),
      })

    }

    Model.create(data, function(err){
      if(err){
        console.log('Something bad happened', err);
        process.exit();
      }

      console.log('Seed executed succesfully');
      process.exit();
    });
  }
};

export default OrganizationSeeder;