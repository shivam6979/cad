const mongoose = require('mongoose');
const UserSchema = mongoose.Schema ({
    name:{
        type:String,
        require:[true, 'is require' ]
    },
    email:{
        type:String,
        require:[true, 'is require' ],
        unique:true,
        index:true,
        validate:{
            validator:function(str){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
            },
            message:props=>`${props.value} is not a valid email`
        }
    },
    gender:{tye:String, require:[true, 'is require' ],enu:['male','female','other']},
    age:{tye:String, require:[true, 'is require' ]}
},{timestamps:true})

const User=mongoose.model('User',UserSchema)
module.exports=User