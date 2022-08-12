import React, { useEffect } from 'react';

const Category = ({ filter }) => {



    return (
        <div className='container mt-3 '>
            <div className='row mb-3'>

                <div className='col-6 col-lg-3'>
                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-credit-card pe-1 ps-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        Pagos seguros
                    </div>

                </div>


                <div className='col-6 col-lg-3'>

                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-truck pe-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        Envio gratis</div>

                </div>


                <div className='col-6 col-lg-3'>

                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-lock pe-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        100% segura</div>
                </div>


                <div className='col-6 col-lg-3'>
                    <div className='border border-dark rounded text-center mt-3 mb-3 tl'>
                        <i className="fa-solid fa-tag pe-1 pt-2 pb-2 pt-md-3 pb-md-3"></i>
                        10% OFF promo</div>

                </div>

            </div>

            <div className='row'>
                <div className='col-12 col-sm-6'>

                    <div className='position-relative cur m-2' onClick={() => {
                        filter(2)
                        window.scrollTo( 0, 1400 )
                    }}>
                    <img className='img-fluid  im' src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>SMARTPHONE</h2>

                </div>

                <div className='position-relative cur m-2' onClick={() => { 
                    filter(1) 
                    window.scrollTo( 0, 1400 )}}>
                    <img className='img-fluid im' src="https://images.pexels.com/photos/4006158/pexels-photo-4006158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>COMPUTERS</h2>
                </div>

            </div>

            <div className='col-12 col-sm-6'>
                <div className='position-relative cur m-2' onClick={() => { 
                    filter(0) 
                    window.scrollTo( 0, 1400 )}}>
                    <img className='img-fluid im' src="https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>SMART TV</h2>
                </div>

                <div className='position-relative cur m-2'>
                    <img className='img-fluid im' src="https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h2 className='position-absolute top-50 start-50 translate-middle text-light sh'>OTHERS</h2>
                </div>

            </div>

        </div>


        </div >
    );
};

export default Category;