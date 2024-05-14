export const useSignup = async(values, setApiError, navigate)=>{
    try {
        const res = await fetch('http://localhost:3000/signup',
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
        const result = await res.json();
        console.log({ result });
        if(result?.error){
            setApiError(result.error)
        }
        else{
            navigate('/login')
        }
    }
    catch(error){
        console.log("signup api :", error)
    }
}