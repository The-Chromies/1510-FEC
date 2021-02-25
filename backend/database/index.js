//Mongo Mongoose
const mongoose = require('mongoose');

//Instantiation of Mongoose
mongoose;  //This can be the path from the cluster intially created on the mongoDB page.
mongoose.set('useNewUrlParser',true)
.set('useUnifiedTopology',true)
.set('useCreateIndex',true)
.connect('mongodb://localhost/catwalk') //adjusted to local catwalk db
.catch((err) => (console.log('Failure in connecting',err)))


//Connecting to Mongoose
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongooooooose!');
})

//Schema Definition
let fetchSchema = mongoose.Schema({
    repo_name: { type: String, required: true },
    avatar_url: String,
    owner_handle: String,
    owner_id: { type:Number, required: true }, //this is a cool way to ensure a data value is present
    stargazers_count: Number,
    watchers_count: Number,
    forks_count: { type:Number, default: 0 }, //nice way to slip a default in there if there are not any forks present.  I don't anticipate this to be true, but in case it isn't pretty cool.
    last_updated: Date,
    forks_url: String,
    git_url: String,
    clone_url: String,
    ssh_url: String
  });


//Naming and Utilization of Model
let Repo = mongoose.model('fetch', fetchSchema);

//Save data to the Mongo DB
let save = (gitObj) => { //Pass in fetch object returned from externalAPi

    const repo = new Repo({
      repo_name: gitObj.name,
      avatar_url: gitObj.owner.avatar_url,
      owner_handle: gitObj.owner.login,
      owner_id: gitObj.owner.id,
      stargazers_count: gitObj.stargazers_count,
      watchers_count: gitObj.watchers_count,
      forks_count: gitObj.forks_count,
      last_updated: gitObj.updated_at,
      forks_url: gitObj.forks_url,
      git_url: gitObj.git_url,
      clone_url: gitObj.clone_url,
      ssh_url: gitObj.ssh_url
    });
    console.log('Saving repo: ', gitObj.name)
    repo.save((err,result) => {  //This will save the data to the database.  REMEMBER when using this you should use promises
      if (err) {
        console.log(err)
      } else {
        console.log('success',result)
      }
    });
}


module.exports.save = save;