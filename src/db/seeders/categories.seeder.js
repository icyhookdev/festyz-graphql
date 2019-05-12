import Model from '../models/Category';
import faker from 'faker';
import moment from 'moment';

const OrganizationSeeder = {
  run: async function () {
    const data = []

    for(let i = 0; i < 10; i++){
      data.push({
        name: faker.commerce.department(),
        description: faker.lorem.sentence(5),
        coverImage: faker.image.imageUrl(),
        color: faker.internet.color(),
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