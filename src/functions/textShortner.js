
const short = (text="",len) => {
    
    if(text.length > len) 
    {
        return text.trim().substring(0,len) + "...";
    }

};


export default short;