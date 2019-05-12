const Seeder = require('  ').Seeder;
import Model from '../src/db/models/Event';
import faker from 'faker';

var EventsSeeder = Seeder.extend({
  shouldRun: function () {
    return Model.countDocuments().exec().then(count => count === 0);
  },

  run: function () {
    const data = []

    for(let i = 0; i < 10; i++){
      data.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email()
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
});

export default EventsSeeder;