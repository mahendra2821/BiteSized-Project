const Client = require('../models/Diabetes'); // Assuming the model is named 'Diabetes'

exports.getClients = async (req, res) => {
  try {
    const { search = '', status, page = 1, limit = 10 } = req.query;
    const filter = {
      $and: [
        {
          $or: [
            { name: new RegExp(search, 'i') },
            { email: new RegExp(search, 'i') }
          ]
        },
        ...(status && status !== 'All'
          ? [{ status }]
          : [])
      ]
    };

    const clients = await Client.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ name: 1 });

    const total = await Client.countDocuments(filter);
    res.json({ clients, totalPages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching clients', error: err.message });
  }
};

exports.createClient = async (req, res) => {
  try {
    const { name, age, email, status } = req.body;
    const newClient = await Client.create({ name, age, email, status });
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: 'Error creating client', error: err.message });
  }
};



// const Client = require('../models/Diabetes'); // Assuming the model is named 'Diabetes'

// exports.getClients = async (req, res) => {
//   try {
//     const { search = '', status, page = 1, limit = 10 } = req.query;
//     const filter = {
//       $and: [
//         {
//           $or: [
//             { name: new RegExp(search, 'i') },
//             { email: new RegExp(search, 'i') }
//           ]
//         },
//         ...(status && status !== 'All' ? [{ status }] : [])
//       ]
//     };

//     const clients = await Client.find(filter)
//       .skip((page - 1) * limit)
//       .limit(parseInt(limit))
//       .sort({ name: 1 });

//     const total = await Client.countDocuments(filter);
//     res.json({ clients, totalPages: Math.ceil(total / limit) });
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching clients', error: err.message });
//   }
// };

// exports.createClient = async (req, res) => {
//   try {
//     const { name, age, email, status } = req.body;
//     const newClient = await Client.create({ name, age, email, status });
//     res.status(201).json(newClient);
//   } catch (err) {
//     res.status(400).json({ message: 'Error creating client', error: err.message });
//   }
// };

// // New: Get count of clients, optionally filtered by search and status
// exports.getClientsCount = async (req, res) => {
//   try {
//     const { search = '', status } = req.query;
//     const filter = {
//       $and: [
//         {
//           $or: [
//             { name: new RegExp(search, 'i') },
//             { email: new RegExp(search, 'i') }
//           ]
//         },
//         ...(status && status !== 'All' ? [{ status }] : [])
//       ]
//     };

//     const count = await Client.countDocuments(filter);
//     res.json({ count });
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching count', error: err.message });
//   }
// };
