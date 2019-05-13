import { Event, Organization, Category }  from '../models';
import moment from 'moment';
import faker from 'faker';

var EventsSeeder = {
  getRandomOrganization: () => new Promise(function(resolve,reject){
    Organization.count().exec(function (err, count) {
      const random = Math.floor(Math.random() * count)
      Organization.findOne().skip(random).exec(
        function (err, result) {
          resolve(result._id);
        })
    });
  }),
  getRandomCategory: () => new Promise(function(resolve,reject){
    Category.count().exec(function (err, count) {
      const random = Math.floor(Math.random() * count)
      Category.findOne().skip(random).exec(
        function (err, result) {
          resolve(result._id);
        })
    });
  }),
  run: async function () {
    const data = []


    const targetPublic = ['all-public', 'children', 'teenage'];


    for(let i = 0; i < 50; i++){

      const randomOrganization = await this.getRandomOrganization();
      const randomCategory = await this.getRandomCategory();
  
      data.push({
        title: faker.lorem.words(2),
        shortDescripction: faker.lorem.sentence(5),
        longDescripction: faker.lorem.sentences(5),
        categoryId: randomCategory,
        targetPublic: faker.random.arrayElement(targetPublic),
        datetime: faker.date.future(),
        additionalDatetime: [],
        organizationId: randomOrganization,
        allowedItems: [],
        address: faker.address.streetAddress(),
        geoJsonAddress: { type: 'Point', coordinates: [parseFloat(faker.address.latitude()), parseFloat(faker.address.longitude())] },
        durationUnit: 'hours',
        duration: 1,
        frequency: 0,
        frequencyInterval: 'day', 
        isFree: faker.random.boolean(),
        capacity: faker.random.number(100,800,0),
        ticketsUrl: faker.internet.url(),
        imagesUrls: [faker.image.imageUrl(), faker.image.imageUrl, faker.image.imageUrl],
        coverImageUrl: faker.image.imageUrl(),
        status: faker.random.arrayElement(['draft', 'live', 'started', 'ended', 'completed', 'canceled']),
        createdOn: moment(),      
      })
    }

    Event.create(data, function(err){
      if(err){
        console.log('Something bad happened', err);
        process.exit();
      }

      console.log('Seed executed succesfully');
      process.exit();
    });

  }
};

export default EventsSeeder;