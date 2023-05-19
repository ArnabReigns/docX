import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

export const navContext = createContext();


const NavContextController = (props) => {


    const [tab,setTab] = useState("1");
    const [user,setUser] = useState({username:"arnab", password:"verysecret"});


    var login = (username,password) => {

        if(username == "reigns" && password == "reigns")
        {
            setUser({
                username,password
            })
            return true;
        }
        else return false
        
    }


    useEffect(()=>{
        console.log(user);
    },[user])

    const value = {
        currentTab: tab,
        setTab: setTab,
        login:login,
        user:user
    };

    return (
    <navContext.Provider value={value}>
        {props.children}
    </navContext.Provider>
  )
}

export default NavContextController
