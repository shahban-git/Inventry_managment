const mongoose = require('mongoose');
mongoose.set('debug', true);


// mongoose.connect(
//   'mongodb://localhost:27017/e-commerce',
//   // { 
//   //   useNewUrlParser: true,
//   //   useUnifiedTopology: true,
//   //  },

// );


mongoose.connect('mongodb://0.0.0.0:27017/e-commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});





