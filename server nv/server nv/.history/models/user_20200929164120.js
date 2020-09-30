const crypto = require('crypto');
const mongoose = require('mongoose');
// user schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    role:{ type: String,
        default:'user',
              required: true

      }, 
       
      ntelephone:{ type: String,
        default:'0776677668',
      },
        sexe: {
        type: String,
        enum : ['women', 'man'],
        default: 'man'
    },
     birthdate:{ type: Date,
        default:'07/07/2020',
      }, 
    disabled: { 
            type: Boolean,
             default: true 
            },
           
    
      

    hashed_password: {
      type: String,
      required: true
    },
    salt: String,
    
    resetPasswordLink: {
      data: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

// virtual
userSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

 
  

// methods
userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },

  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  }
};

module.exports = mongoose.model('User', userSchema);
