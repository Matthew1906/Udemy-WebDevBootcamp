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

exports.Post = class Post{
    constructor(date, body, last){
        this.date = date; // Journal Date
        this.body = body; // Journal Content
        this.last = last; // Last Update
    }
}