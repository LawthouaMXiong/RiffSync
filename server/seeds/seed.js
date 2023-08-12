const connection = require('../config/connection');
const { User, Instrument } = require('../models');
const userSeeds = require('./userSeeds.json');
const instrumentSeeds = require('./instrumentSeeds.json');

connection.once('open', async () => {
  try {
    await Instrument.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < instrumentSeeds.length; i++) {
      const { _id, instrumentAuthor } = await Instrument.create(instrumentSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: instrumentAuthor },
        {
          $addToSet: {
            instruments: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
