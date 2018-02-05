'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
	muffinId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Muffin'
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	auctionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Auctions'
	},
	transctionId: {
        type: String,
        minlength:10,
        maxlength: 30
      },

	createdAt: {
		type: Date,
		default: Date.now
	},
	transactionType: {
		type: String
	},
	natureOfCharges: {
		type: String
	},
	autionNoOfCharges: {
		type: String
	},
	totalBalance: {
		type: Number
	},
	dayNumber: {
		type: String
	},
	monthNumber: {
		type: String
	},
	amount: Number,
	text: String


});

module.exports = mongoose.model('Report', ReportSchema);

// The HotelGroup model

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var bookingsSchema = new Schema({
    bookingId: { type: String, required: true, unique: true },
    maximojoReservationId: { type: String },
    maximojoHotelId: { type: String},
    treeboReservationId: {type: String},
    treeboHotelId: {type: String},
    sourcedFrom: {type: String, default: 'BBS'},
    hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' },
    createdByUser: { type: Schema.Types.ObjectId, ref: 'User' },
    createdByUserName: { type: String },
    createdByUserEmail: {type: String },
    createdByUserMobile: { type: String },
    createdByUserAddress:{
        _id:false,
        line1: {
            type: String, default: ''
        },
        line2: {
            type: String, default: ''
        },
        locality: {
            type: String, default: ''
        },
        street: {
            type: String, default: ''
        },
        city: {
            type: String, default: ''
        },
        state: {
            type: String, default: ''
        },
        zipCode: {
            type: String, default: ''
        },
        country:{
            type: String, default: ''
        },
        locationLat: {
            type: Number
        },
        locationLng:{
            type: Number
        }   
    },
    roomType: { type: Schema.Types.ObjectId, ref: 'RoomType' },
    starRating:{
        type: Number, min: 0, max: 5, default: 1, required: true
    },
    userRating:{
      type: Number, min: 0, max: 5, default: 0, required: true
    },
    extraNumberOfBeds: { type: Number, min: 1 },
    extraNumberOfPersons: { type: Number, min: 1 },
    numberOfRooms: { type: Number, min: 1 },
    mainCheckInTime: { type: Date, default:  +new Date() },
    mainCheckOutTime: { type: Date, default: +new Date() + 24*60*60*1000 },
    roomName: { type: String },
    checkinTimeMinutes:{
        type: Number, min: 0, max: 1439, default: 840
    },
    checkoutTimeMinutes:{
        type: Number, min: 1, max: 1440, default: 660
    },
    hotelName: {type: String},
    slotName: { type: String },
    slotMinutes: { type: Number, min: 1, max: 1439 },
    numberOfNights: { type: Number, min: 1 },
    paymentTransaction: { type: Schema.Types.ObjectId, ref: 'PaymentTransaction' },
    refundTransaction: { type: Schema.Types.ObjectId, ref: 'PaymentTransaction' },
    paymentComplete: { type: Boolean, default: false, required: true },
    advancePaid: { type: Number, min: 0 },
    totalCost: { type: Number, min: 0, required: true },
    finalCost: { type: Number, min: 0, required: true },
    currencyCode: {type: String},
    cancelled: { type: Boolean, default: false },
    costExtras: [{ title: { type: String }, amount: { type: Number, min: 0 }, calcType: {type: String, enum: ['PERCENTAGE', 'AMOUNT']} }],
    discount: { desc: { type: String }, title: { type: String }, amount: { type: Number, min: 0 }, calcType: {type: String, enum: ['PERCENTAGE', 'AMOUNT']} },
    maxiMojoData:{
        partner_data:{
            DomainId: {type: String},
            HotelId: {type: String},
            RoomId: {type: String},
            RatePlanId: {type: String},
            PromotionId: {type: String}
        },
        final_price_at_checkout:{
            amount: {type: Number},
            currency: {type: String}
        },
        final_price_at_booking:{
            amount: {type: Number},
            currency: {type: String}
        },
        rooms:[{
            _id: false,
            party: {
                adults: {type: Number},
                children: [Number]
            },
            traveler_first_name: {type: String},
            traveler_last_name: {type: String}
        }],
        hotel_details:{type:  Schema.Types.Mixed}
    },
    treeboData:{
        partner_data:{
            hotelId:{type:String}
            },
            final_price_at_checkout:{
            amount: {type: Number},
            currency: {type: String}
        },
         final_price_at_booking:{
            amount: {type: Number},
            currency: {type: String}
         },
            rooms:[{
                _id:false,
                party:{
                    adults:{type:String},
                    children:[Number]
                },
                traveler_first_name:{type:String},
                traveler_last_name:{type:String}
            }],
             hotel_details:{type: Schema.Types.Mixed}
    },
    createdByApiUser: { type: Schema.Types.ObjectId, ref: 'ApiUser' },
    createdByApiUserCode: {type: String}
},
{
    timestamps: true
});


module.exports = mongoose.model('Booking', bookingsSchema);


// The User model

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String,  trim: true },
    email: { type: String, unique : true, required: true, trim: true },
    mobileNumber: {
        _id:false,
        numberType: { type: String, default: 'Mobile' },
        number: { type: String },
        countryCode: { type: Number },
        countryDigitCode: { type: String }
    },
    address_line1: {
        type: String, trim: true
    },
    address_line2: {
        type: String, trim: true
    },
    address_locality: {
        type: String, trim: true
    },
    address_city: {
        type: String, trim: true
    },
    address_state: {
        type: String, trim: true
    },
    address_country: {
        type: String, trim: true
    },
    address_zipCode: {
        type: String, trim: true
    },
    address_locationLat: {
            type: Number
        },
    address_locationLng: {
            type: Number
        },
    gender: {type: String},
    birthday: { type: String },
    password: { type: String, required: true },
    mobileVerified: { type: Boolean, default: false },
    mobileVerificationOtp: { type: String },
    emailVerified: { type: Boolean, default: false },
    emailVerificationToken: { type: String },
    facebookUserId: { type: String },
    googleUserId: { type: String },
    googleFCMToken: { type: String, default: "" },
    hotelGroupId: { type: Schema.Types.ObjectId, ref: 'HotelGroup' },
    hotelGroupAdmin: { type: Boolean, default: false },
    employeeOfHotelGroup: { type: Schema.Types.ObjectId, ref: 'HotelGroup' },
    hotelId: [{type: Schema.Types.ObjectId, ref: 'Hotel'}],
    userVerified: { type: Boolean, default: false, required: true },
    isBBSAdmin: { type: Boolean, default: false }
},
{
    timestamps: true
});

module.exports = mongoose.model('HotelAdminUser', userSchema);


// The HotelGroup model

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var roomTypeSchema = new Schema({
    parentHotel: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
    roomTypeName: {type: String, required: true },
    slotsAssigned: [{ 
                      _id: false,
                      name: { type: String },
                      slotMinutes: { type: Number, required: true, min: 1, max: 1439 },
                      slotCheckInTimeMinutes: { type: Number, min: 0, max: 1439 },
                      slotCheckOutTimeMinutes: { type: Number, min: 0, max: 1439 },
                      roomSlotPrice: { type: Number, min: 0 , required: true},
                      numberOfRooms: { type: Number, min: 0, required: true },
                      priceExtras:[{_id: false, extraName:{type: String}, amount: {type: Number, min: 0}, calcType: {type: String, enum: ['PERCENTAGE', 'AMOUNT']}}]
                    }],
    mainCheckInTime: { type: Number, min: 0, max: 1439, default: 840 },
    mainCheckOutTime: { type: Number, min: 1, max: 1440, default: 660 },
    extraConditionsOrInfo:[{
      _id:false,
      title: {
        type: String, default: ''
      },
      messages:[String]
    }],
    general_facilities:{
      breakfast: { type: Boolean },
      lunch: { type: Boolean },
      dinner: { type: Boolean },
      evening_snacks: { type: Boolean },
      tv: { type: Boolean },
      car_parking: { type: Boolean },
      swimming_pool: { type: Boolean },
      gym_facility: { type: Boolean },
      room_service: { type: Boolean },
      smoking: { type: Boolean },
      wifi: { type: Boolean },
      pets_allowed: { type: Boolean },
      bathtub: { type: Boolean },
      restaurant: { type: Boolean },
      bar: { type: Boolean },
      bed_type: { type: String }
    },
    totalNumberOfRoomsForBBS: { type: Number, min: 0, required: true },
    totalNumberOfRoomsOnAllOnlineSites: { type: Number, min: 0, required: true },
    totalNumberOfRoomsForNightLongBooking: { type: Number, min: 0, required: true },
    roomMainPrice: { type: Number, min: 0 , required: true },
    extraBeds: [{_id: false, title: {type: String}, numberOfBeds: { type: Number, min: 1 }, extraPrice: { type: Number, min: 0 }}],
    allowedNumberOfPersons: { type: Number, min: 1 },
    maxAllowedNumberOfPersons: { type: Number, min: 1 },
    addressLat: { type: Number },
    addressLng: { type: Number },
    mainRoomTypeDisplayImage:{
      fieldname: { type: String },
      originalname: {type: String},
      encoding: {type: String},
      mimetype: {type: String},
      size: {type: Number},
      destination: {type: String},
      filename: {type: String},
      path: {type: String}
    },
    mealPlan: {type: String, enum:['AP', 'MAP', 'CP', 'EP'], default: 'EP'},
    extraPersons: [{_id: false, title: {type:String}, numberOfPersons: {type: Number, min: 1}, extraPrice: {type: Number, min: 0}}],
    priceExtras:[{_id: false, extraName:{type: String}, amount: {type: Number, min: 0}, calcType: {type: String, enum: ['PERCENTAGE', 'AMOUNT']}}]
},
{
    timestamps: true
});


module.exports = mongoose.model('RoomType', roomTypeSchema);

//AP - Americal Plan - includes 3 Meals
//MAP - Modified American Plan - breakfast n either lunch or dinner
//CP - Continental Plan - Free breakfast
//EP - European Plan - Only Room