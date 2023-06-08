import React from 'react';
import Visual from 'components/templates/Visual';
import RecommendedGarden from 'components/templates/RecommendedGarden';
import Gallery from 'components/templates/Gallery';
import Promotion from 'components/templates/Promotion';


const MainPage = () => {
    return (
        <div>
            {/* 
            - 메인 페이지는 비주얼 영역, 추천 정원 영역, 갤러리 영역, 프로모션 영역으로 구성된다.
            */}

            {/* 브라우저가 열린 후 사이트에 접속할 때 로딩 애니메이션을 보여준다. */}
            {/* - 로딩 애니메이션은 사용자가 기다리면서 지루하지 않도록 흥미롭게 제작하고 2초 이내 애니메이션이 표시된다. */}

            <Visual/>
            <RecommendedGarden />
            <Gallery />
            <Promotion />

        </div>
    );
};

export default MainPage;