const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Database connection
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Simple route
app.get('/', (req, res) => {
  res.send('Hi For GET Request /,got response from server 3000');
  console.log('Get request (/) responded');
});

app.get('/gr', (req, res) => {
  res.send('Hi,For GET Request /gr ,got response from server 3000');
  console.log('Get request (/gr) responded');
});

app.get('/gr_method_protocal_secure_hn_ip_accepts_headers', (req, res) => {

  res.send('Get request /gr_method_protocal_secure_hn_ip_accepts_headers  responded from server port : 3000');

 const rm= req.method;
 const rp= req.protocol;
 const rs= req.secure;
 const rh= req.hostname;
 const ri= req.ip;
 const ra= req.accepts();
 const rg_h_ct= req.get('content-type');
 const rg_h_a= req.get('accept');



console.log('Get request from ( /gr_method_protocal_secure_hn_ip_accepts_headers responded');

console.log(rm,rp,rs,rh,ri,ra,rg_h_ct,rg_h_a);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
