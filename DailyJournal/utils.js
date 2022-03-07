exports.getDate = ()=>{
    today = new Date();
    const options = {
        weekday:'long',
        day:'numeric',
        month:'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric' 
    }
    return today.toLocaleDateString('id', options)
};
