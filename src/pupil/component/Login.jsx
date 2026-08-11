import React from 'react'

function Login() {
    return (
        <>
            <section id="quotation" className="align-center  pb-5 mt-5 mb-5">
                <div className="row justify-content-center align-items-center">

                    <div className='col-xl-6 col-xxl-5 col-lg-8 col-md-10 col-sm-8'>
                        <form>
                            <div className="mb-3 ">
                                <label htmlFor="number" className="form-label">
                                    Phone  Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="number"
                                    aria-describedby="emailHelp"
                                />
                              
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                />
                            </div>
                          
                            <button type="submit" className="btn btn-primary " style={{ borderRadius: "10px" }}>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className=" col-xl-6  col-xxl-6  col-lg-12 col-md-12 col-sm-12 inner-content">
                        <h2 className="section-title divider">Quote of the day</h2>
                        <blockquote >
                            <q>
                                “The more that you read, the more things you will know. The more that
                                you learn, the more places you’ll go.”
                            </q>
                            <div className="author-name">Dr. Seuss</div>
                        </blockquote>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Login