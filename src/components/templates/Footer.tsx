import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className="my-5">
        {/* - 푸터 영역은 제공된 ‘Footer.txt’ 파일의 내용을 모두 사용하여 디자인한다. */}
        {/* - 푸터 영역은 모든 페이지에서 페이지 최하단에 존재해야 한다. */}
        {/* Copyright
            Copyright (c) 2021 ~ 2022 Gyeongnam Garden. All rights reserved.


            Help
            Call: (055) 126-0021
            Email: help@gyeongnam.garden
            Address: 경남 함양군 서성면 가르내길 202-1 (우 50002) 
        */}
        <footer className="text-white text-center text-lg-start bg-primary">
            <div className="container p-4">
                <div className="row mt-4">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <ul className="fa-ul" style={{marginLeft: '1.65em'}}>
                            <li className="mb-3">
                            <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Address: 경남 함양군 서성면 가르내길 202-1 (우 50002) </span>
                            </li>
                            <li className="mb-3">
                            <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">Email: help@gyeongnam.garden</span>
                            </li>
                            <li className="mb-3">
                            <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">Call: (055) 126-0021</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            Copyright (c) 2021 ~ 2022 Gyeongnam Garden. All rights reserved.
            </div>
        </footer>
    </div>
    );
};

export default Footer;