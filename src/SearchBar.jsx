import React from 'react'
import {useNavigate } from 'react-router';

function SearchBar({ApiKey, Results, setResults, setCdnUrl}) {

    let timeout = 0;

    const navigate = useNavigate()
    
    const ApiUrl = "https://kohpzvk9a1.execute-api.eu-central-1.amazonaws.com/GetVidListStage/GetVidList"

    if(Results[0] === 0){
        GetSearchResults("")
        
    }

    function GetSearchResults(data){

        let body = {
            "Condition": data
        }

        let headers = new Headers()
        headers.append("x-api-key" , ApiKey)

        let request = new Request(ApiUrl,
            {
                method:"POST",
                headers:headers,
                body: JSON.stringify(body)
            }
            )
        const response = fetch(request)

        response.then( (resp) => {return resp.json()}).then( (data) => {setCdnUrl(data["body"]["Url"]);
        //console.log("URL : " + data["body"]["Url"])
        setResults(data["body"]["Items"]);
        
    } ).catch(() => {navigate("/error")})
    }

    

    function Search(data){
        if(timeout !== 0){
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {GetSearchResults(data)}, 500)
    }

  return (
    <div className='w-full h-1/12 my-2'>
        <input onInput={(event) => {Search(event.target.value)}}className='w-full h-full outline-none bg-red 2 text-indigo text-center placeholder-indigo/50' placeholder='Enter Search Here'></input>
    </div>
  )
}

export default SearchBar