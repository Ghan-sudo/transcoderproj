import React from 'react'

export default function UploadForm({ShowModal, setShowModal, Timeout,setTimeoutState, ApiKey}) {

    const url='https://b9ue6dpne7.execute-api.eu-central-1.amazonaws.com/UploadVideoApiStage/UploadVideo'

    if(!ShowModal){
        return null;
    }

    function CloseModal(){
        setShowModal(false)
    }

    function GetResolutions(){
        let Resolutions = []


        let UltraLowRes = document.getElementById("100")

        if(UltraLowRes.checked === true){
            Resolutions.push("100x100")
        }

        let LowRes = document.getElementById("360")

        if(LowRes.checked === true){
            Resolutions.push("640x360")
        }

        let HighRes = document.getElementById("720")

        if(HighRes.checked === true){
            Resolutions.push("1280x720")
        }

        return Resolutions
    }

    function GetSingedUrl(FileName, FileSize, Resolutions){
        
        let body = {
            "FileName": FileName,
            "FileSize":FileSize,
            "Resolutions": Resolutions
        }

        console.log(body)

        let headers = new Headers()
        headers.append("x-api-key",ApiKey)

        const request = new Request(url, {
            method:"POST",
            headers:headers,
            body : JSON.stringify(body)
        })

        const GetSignedRequest = fetch(request)
        
        return GetSignedRequest.then( (response) => {

            return response.json()
            }
        ).then( (data) => {
            return data}
            ).catch( (e) => {alert(e)} )
    }

    function UploadFile(url, fields, file){
        let UploadForm = new FormData()

        for (let [key, value] of Object.entries(fields))
            {
                UploadForm.append(key, value)
                console.log("Key : " + key + " value : " +value)
            }
        
        UploadForm.append("file",file)

        for(let key of UploadForm.values()) 
            console.log("NewForm : " + key)

        const request = new Request(url, {
            method:"POST",
            body : UploadForm
        })

        //const GetUploadResponse = 
        fetch(request).then(() => {alert("Upload SuccessFull"); CloseModal();}).catch( (resp) => {alert("Problem at fetch" + JSON.stringify(resp))} )

        //GetUploadResponse.then( (response) => {console.log("RESPONSE : " + JSON.stringify(response.json()))} ).catch( (resp) => {console.log("Error in response : ")} )
    }

    function ClearTimeOut(){
        alert("Timeout Cleared")
        setTimeoutState(0)
    }
    function Submit(e){
        e.preventDefault()
        if(Timeout !== 0){
            alert("Thre is a 15 minute timeout")
            return
        }

        setTimeoutState(setTimeout(ClearTimeOut, 15*60*1000))

        let Resolutions = GetResolutions()

        console.log("Resolutions : " + Resolutions)

        if(Resolutions.length === 0){
            alert("Choose Resolution")
            return
        }

        

        const form = e.target;
        const formdata = new FormData(form)
        const formobjectjson = Object.fromEntries(formdata.entries())
        console.log(JSON.stringify(formobjectjson))
        console.log(formobjectjson["FileName"])
        console.log(formobjectjson["File"].size)
        
        let DataPromise = GetSingedUrl(formobjectjson["FileName"], formobjectjson["File"].size , Resolutions)

        console.log("DATA PROMISE : " + DataPromise)

        DataPromise.then( (data) => {
            if(data["StatusCode"] > 200){
                alert(JSON.stringify(data["body"]["error"]))
                return
            }
            else{
            UploadFile(data["body"]["url"], data["body"]["fields"], formobjectjson["File"])
            }
        })
        
    }


  return (
    <div id="Modal-Container" className='absolute bg-indigo/50 z-20 w-screen h-screen flex justify-center items-center'>

        <div id='ModalWithCloseButton' className=' w-3/5 h-3/5 bg-offwhite'>

            <div id='ModalCloseButton' className="float-right w-16 h-6 top-0 right-0 cursor-pointer bg-red -mb-8 text-center" onClick={CloseModal}>
                Close
            </div>

            <div id="Modal" className='overflow-auto w-full h-full flex flex-col justify-center items-center text-indigo'>

                

                <form method='post' onSubmit={Submit} className='w-1/2 h-1/2 flex flex-col justify-center items-start'>

                    <div id='FileName'>
                            <label className=' w-full h-full'>
                            <div className='overflow-auto text-pretty flex flex-wrap'>
                                File Name : <input className='text-pretty ml-10 pb-5 bg-transparent outline-none ' name='FileName' placeholder='File Name Here'></input>
                            </div>
                            </label>
                    </div>
                    <div id="Resoluions" className='w-full flex'>
                        <label className='flex items-stretch grow'>
                            <div className=' flex w-full h-full justify-start'>Resolutions :</div>
                            
                            <div className='flex flex-col w-full h-full items-start justify-start mb-2'>
                                <div className=''>
                                    <input className=' mr-2' type='checkbox' id='720' defaultValue="1280x720"></input>1280x720
                                </div>

                                <div className=''>
                                    <input className='mr-2' type='checkbox' id='360' defaultValue="640x360"></input>640x360
                                </div>
                                <div>
                                    <input className=' mr-2' type='checkbox' id='100' defaultValue="100x100"></input>100x100
                                </div>
                            </div>
                        </label>

                    </div>
                    
                    <label>
                        Upload File : <input className='ml-10 pb-5 bg-transparent outline-none' name='File' placeholder='Upload File' type='file'></input>
                    </label>
                    
                    <div className='w-full flex justify-center'>
                        <button type='submit' className='bg-red w-16 text-center'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
