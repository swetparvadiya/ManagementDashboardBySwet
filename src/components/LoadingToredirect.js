import React, {useState, useEffect} from 'react';

const LoadingToredirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((currentcount) => --currentcount)
        },1000)
        count === && navigate.push("/login")
        return() => clearInterval(interval);

    }, [count, navigate])
  return (
    <div>Redirecting you in {count} count</div>
  )
}

export default LoadingToredirect;