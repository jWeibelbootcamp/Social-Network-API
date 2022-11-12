module.exports = (timeStamp) => {
    const dateObject = new Date(timeStamp)    
    
    return dateObject.toLocalString();
};


// this needs work. just for formatting time stamp.