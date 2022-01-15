import styled from "styled-components"
import { useState } from "react"


const LandingPage = () => {

    const [imgFile, setImgFile] = useState();
    const [imgUrl, setImgUrl] = useState('');

    const handleChangeImg = (e) => {

        const input = e.target;

        //썸네일 바꾸기
        const reader = new FileReader();
        reader.onload = function (e) {
            setImgUrl(e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }

    return (
        <div style={{ padding: '20px' }}>

            <TitleWrap>[경고창 띄우기 예제]</TitleWrap>
            <button onClick={() => { alert("alert창 띄워짐") }}>경고창 띄우기</button><br />

            <TitleWrap>[사진 선택 예제]</TitleWrap>
            <ImgWrap>
                <ImgContent src={imgUrl} />
            </ImgWrap>
            <input type="file" placeholder="파일 선택하기" value={imgFile} onChange={handleChangeImg} accept="image/*" /> <br />

            <TitleWrap>[그외 input/select 예제]</TitleWrap>
            <input type="date" placeholder="날짜 선택하기" /><br /><br />
            <input type="time" placeholder="시간 선택하기" /><br /><br />
            <select name="job">
                <option value="">직업선택</option>
                <option value="학생">학생</option>
                <option value="회사원">회사원</option>
                <option value="기타">기타</option>
            </select>

            <TitleWrap>[외부 링크 예제]</TitleWrap>
            <a href="https://www.naver.com" target="_blank">외부 웹사이트 이동</a> <br /><br />
            <a href="https://itunes.apple.com/app/id1573142805" target="_blank">앱스토어 이동</a> <br /><br />
            <a href="https://play.google.com/store/apps/details?id=com.softsquared.Modu" target="_blank">플레이스토어 이동</a>

        </div>
    )
}

const TitleWrap = styled.div`
    font-size:20px;
    margin:30px 0 10px 0;
`;
const ImgWrap = styled.div`
    width:120px;
    height:120px;

    margin-bottom:10px;

    border:1px solid black;
    border-radius:6px;
`;
const ImgContent = styled.img`
    width:120px;
    height:120px;
`;
export default LandingPage