import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <div>
            <h1>홈</h1>
            <p>홈페이지용</p>
            <ul>
               <li>
                    <Link to={"/about"}>소개</Link>
               </li>
                <li>
                    <Link to={"/profiles/velopert"}>벨로퍼트 정보</Link>
                </li>
                <li>    
                    <Link to={"/profiles/gildong"}>길동의 정보</Link>
                </li>   
                <li>
                    <Link to={"/profiles/void"}>존재하지않은 프로필</Link>
                </li>
                <li>
                    <Link to={"/articles"}>기사보기</Link>
                </li>
            </ul>
        </div>
        
    );
};

export default Home;