import React from 'react'

function Register() {
    return (
        <>
        <div className="flex item-center px-10 bg-yellow-100">
            <div className="flex flex-col justify-center items-center  bg-yellow-100 h-screen font-roboto py-50 px-10">
                <div className="flex flex-col justify shadow bg-yellow-50 p-20 items-center">
                <form className="">
                        <h1 className="text-3xl  font-black mb-14">
                        Register as a Client
                        </h1>
                        <label for="user name">Username: </label>
                        <input type="text" className="form-control mb-4" /><br/>
                        <label for="email">Email: </label>
                        <input type="email" className="form-control mb-4" /><br/>
                        <label for="password">Password: </label>
                        <input type="password" className="form-control mb-4" /><br/>
                        <label for="password">Confirm Password: </label>
                        <input type="password" className="form-control mb-4" /><br/><br/>
                        <button className="btn">Create Account</button> <br/>

                        <h1 className="text-1xl  font-black mb-14"> Already have an account?  
                            <a href="/"> Login</a>
                        </h1>
                    </form>
                </div>
            </div>
            
           
            <div className="flex flex-col justify-center items-center bg-yellow-100 h-screen font-roboto py-50 px-10">
                <div className="flex flex-col justify shadow bg-yellow-50 p-10 items-center">
                <form className="">
                        <h1 className="text-3xl  font-black mb-14">
                        Register as a Service Provider
                        </h1>
                        <label for="user name">Username: </label>
                        <input type="text" className="form-control mb-4" /><br/>
                        <label for="email">Email: </label>
                        <input type="email" className="form-control mb-4" /><br/>
                        <label for="business_name">Business name: </label>
                        <input type="email" className="form-control mb-4" /><br/>
                        <label for="location">Business Location: </label>
                        <input type="email" className="form-control mb-4" /><br/>
                        <label for="password">Create Password: </label>
                        <input type="password" className="form-control mb-4" /><br/>
                        <label for="password">Confirm Password: </label>
                        <input type="password" className="form-control mb-4" /><br/>
                        <input type="submit" className="btn btn-success mb-10" value="Create Account" /> <br/>

                        <h1 className="text-1xl  font-black mb-14"> Already have an account?  
                            <a href="/"> Login</a>
                        </h1>
                    </form>
                </div>  
            </div>
         
        </div>
            
        </>
    )
}

export default Register
