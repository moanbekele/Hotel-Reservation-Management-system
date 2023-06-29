const express = require('express') // express
const mongoose = require('mongoose'); // mongoose
const Room = require('./models/roomModel') // Room Model
const Customer = require('./models/customerModel') // Customer Model
const Reservation = require('./models/reservationModel') // Reservation Model

const app = express()

app.use(express.json()) // Use JSON requests
app.use(express.urlencoded({extended: false})) // Use URL Encoded


//!!! Routes :. AKA urls in other frame works

// =============================================
// ---------- Home Start-------------------------
// =============================================


//_____________________________________
//------  GET Start -------------------

app.get('/', (req,res) => {  // req == request from client, res == respond to client
    res.send('Response from the bitch ass api')
})
//------  GET End -------------------

//____________________________________
// =============================================
// ---------- Home End---------------------------
// =============================================













// =============================================
// ---------- Room Start------------------------
// =============================================

//_________________________________
//------ (Room)  POST Start  --------------

app.post('/rooms', async(req, res) => { // 'async' since we used 'await' below and interact with Database
    // Just Respond with the same request from JSON
    // console.log(req.body);
    // res.send(req.body);

    try {
        const room = await Room.create(req.body)
        res.status(200).json(room);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//------ (Room)  POST End -------------------
//____________________________________

//_____________________________________
//------ (Room)  GET Start -------------------

// Fetch Every Rooms
app.get('/rooms', async(req, res) => {
    try {
        const rooms = await Room.find({});
        res.status(200).json(rooms)
    }   catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Fetch Room By ID
app.get('/rooms/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const room = await Room.findById(id);
        res.status(200).json(room)
    }   catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


//------ (Room)  GET End -------------------
//__________________________________________


//_______________________________________
//------ (Room)  PUT Start --------------

// Update a Room
app.put('/rooms/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const room = await Room.findByIdAndUpdate(id, req.body);
        // Can't Find any room in database
        if(!room){
            return res.status(404).json({message: 'cannot find any Room with ID ${id}'})
        }
        const UpdatedRoom = await(Room.findById(id))  // Fetches Updated Result
        res.status(200).json(UpdatedRoom);
    } catch(error)  {
        res.status(500).json({message: error.message})
    }
})

//------ (Room)  PUT End -------------------
//__________________________________________



//___________________________________________
//------  (Room) DELETE Start --------------
app.delete('/rooms/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const room = await Room.findByIdAndDelete(id);
        // Can't Find any room in database
        if(!room){
            return res.status(404).json({message: 'cannot find any Room with ID ${id}'})
        }
        res.status(200).json(Room);
    } catch(error)  {
        res.status(500).json({message: error.message})
    }
})
//------ (Room)  DELETE End -------------------
//__________________________________________


// =============================================
// ---------- Room End---------------------------
// =============================================













// =============================================
// ---------- Customer Start--------------------
// =============================================

//_________________________________
//------  (Customer) POST Start --------------

app.post('/customers', async(req, res) => { // 'async' since we used 'await' below and interact with Database
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json(customer);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//------  (Customer)  POST End -------------------
//_________________________________________________


//_________________________________________________
//------  (Customer)  GET Start -------------------

// Fetch Every customer
app.get('/customers', async(req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).json(customers)
    }   catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Fetch Customer By ID
app.get('/customers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findById(id);
        res.status(200).json(customer)
    }   catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//------  (Customer)  GET End ---------
//_____________________________________



//_______________________________________
//------ (Customer)  PUT Start --------------

// Update a Customer
app.put('/customers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findByIdAndUpdate(id, req.body);
        // Can't Find any customers in database
        if(!customer){
            return res.status(404).json({message: 'cannot find any customer with ID ${id}'})
        }
        const UpdatedCustomer = await(Customer.findById(id))  // Fetches Updated Result
        res.status(200).json(UpdatedCustomer);
    } catch(error)  {
        res.status(500).json({message: error.message})
    }
})

//------ (Customer)  PUT End -------------------
//______________________________________________

//___________________________________________
//------  (Customer) DELETE Start --------------
app.delete('/customers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findByIdAndDelete(id);
        // Can't Find any room in database
        if(!customer){
            return res.status(404).json({message: 'cannot find any Customer with ID ${id}'})
        }
        res.status(200).json(Customer);
    } catch(error)  {
        res.status(500).json({message: error.message})
    }
})
//------ (Customer)  DELETE End -------------------
//_________________________________________________


// =============================================
// ---------- Customer End----------------------
// =============================================










// =============================================
// ---------- Reservation Start-----------------
// =============================================


//_______________________________________________
//------  (Reservation) POST Start --------------

app.post('/reservations', async(req, res) => { // 'async' since we used 'await' below and interact with Database
    try {
        const reservation = await Reservation.create(req.body)
        res.status(200).json(reservation);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//------  (Reservation)  POST End -------------------
//_________________________________________________


//_________________________________________________
//------  (Reservation)  GET Start -------------------

// Fetch Every Reservation
app.get('/reservations', async(req, res) => {
    try {
        const reservations = await Reservation.find({}).populate('room').populate('customer');
        res.status(200).json(reservations)
    }   catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


// Fetch Reservation By ID
app.get('/reservations/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const reservation = await Reservation.findById(id);
        res.status(200).json(reservation)
    }   catch (error) {
        // console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//------  (Reservation)  GET End ---------
//_____________________________________

//_______________________________________
//------ (Reservation)  PUT Start --------------

// Update a Reservation
app.put('/reservations/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const reservation = await Reservation.findByIdAndUpdate(id, req.body);
        // Can't Find any reservations in database
        if(!reservation){
            return res.status(404).json({message: 'cannot find any reservation with ID ${id}'})
        }
        const UpdatedReservation = await(Reservation.findById(id))  // Fetches Updated Result
        res.status(200).json(UpdatedReservation);
    } catch(error)  {
        res.status(500).json({message: error.message})
    }
})

//------ (Reservation)  PUT End -------------------
//_________________________________________________


//_________________________________________________
//------  (Reservation) DELETE Start -----------------
app.delete('/reservations/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const reservation = await Reservation.findByIdAndDelete(id);
        // Can't Find any room in database
        if(!reservation){
            return res.status(404).json({message: 'cannot find any Reservation with ID ${id}'})
        }
        res.status(200).json(Reservation);
    } catch(error)  {
        res.status(500).json({message: error.message})
    }
})
//------ (Reservation)  DELETE End -------------------
//____________________________________________________

// =============================================
// ---------- Reservation End-------------------
// =============================================



// mongoose.set('strictQuery', false)
mongoose.
connect('mongodb+srv://admin:admin123@moanapi.lppfpr1.mongodb.net/Node-API?retryWrites=true&w=majority') // Connect To MongoDB with URI
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, ()=> { // Listen on port 3000
        console.log("Running Server on port | 3000")
    });
    }
).catch((error) => {  
    console.log(error) // Show error on terminal
})

mongoose.set('strictQuery', false)


