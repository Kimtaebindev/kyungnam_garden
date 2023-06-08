import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

// const GardenInfoDropDown = styled.ul`
//     display: none;
// `;



const GardenReservationDropDown = styled.ul`

`;

const Header = () => {
    return (        
        <div>
            {/* - 헤더 영역은 모든 페이지에서 존재해야 한다. */}
            {/* - 헤더 영역은 선수가 직접 제작한 심볼이 포함된 로고, 메뉴 내비게이션, 로그인, 회원가입을 포함하여 사이트의 특성에 맞게 디자인되어야 한다. */}
            {/* - 메뉴 내비게이션 내의 각각의 메뉴는 마우스 오버 시 하이라이트 되어야 하고, 마우스 아웃 시 하이라이트가 해제되어야 한다. */}
        
            {/* 헤더 구조
            <p>
                <span>로고 (홈)</span>
                <span>홈</span>
                <span>정원안내</span>
                <ul>
                    <li>정원안내</li>
                    <li>정원검색</li>
                    <li>전체정원목록</li>
                </ul>
                <span>정원예약</span>
                <ul>
                    <li>예약확인</li>
                    <li>예약내역</li>
                </ul>
                <ul>
                    <li>로그인</li>
                    <li>회원가입</li>
                </ul>
            </p> */}

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">로고</Link>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item active"> <Link className="nav-link" to="/">홈 </Link> </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle infoDropdown-hover" to="/gardeninfo"> 정원안내  
                                    <ul className="dropdown-menu infoDropdown">
                                        <li><Link className="dropdown-item" to="/gardeninfo">정원안내</Link></li>
                                        <li><Link className="dropdown-item" to="/searchgarden">정원검색</Link></li>
                                        <li><Link className="dropdown-item" to="/gardenlist">전체정원목록</Link></li>
                                    </ul>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle reservationDropdown-hover" to="/gardeninfo"> 정원예약  
                                    <ul className="dropdown-menu reservationDropdown">
                                        <li><Link className="dropdown-item" to="/gardeninfo">예약확인</Link></li>
                                        <li><Link className="dropdown-item" to="/searchgarden">예약내역</Link></li>
                                    </ul>
                                </Link>
                            </li>
                            <li className="nav-item active"> <Link className="nav-link" to="/">로그인 </Link> </li>
                            <li className="nav-item active"> <Link className="nav-link" to="/">회원가입 </Link> </li>
                        </ul>
                    </div>
                </div> 
            </nav>
        </div>
    );
};

export default Header;