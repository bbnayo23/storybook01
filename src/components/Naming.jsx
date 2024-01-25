import React from 'react';

const Naming = () => {
    return (
        <div className='guide-content'>
            <h2>네이밍 규칙</h2>

            <div className="tb-guide">
                <table>
                    <caption>공통 네이밍 규칙 예</caption>
                    <colgroup><col span="2" /></colgroup>
                    <thead>
                        <tr>
                            <th>설명</th>
                            <th>잘못된 예</th>
                            <th>올바른 예</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>시작이름은 영문 대문자, 숫자, 특수문자로 시작할 수 없다.(파일 및 폴더 제외)</td>
                            <td className="red">
                                Tit_pop.html<br/>
                                *-hidden-obj<br/>
                                03_btn_more.gif
                            </td>
                            <td className="blue">tit-section</td>
                        </tr>
                        <tr>
                            <td>네이밍의 조합은 <em>'형태_의미_(순서)_상태'</em> 을 기본 순서로 사용한다.</td>
                            <td className="red">cancle_btn_off_01.gif</td>
                            <td className="blue">btn_cancle_01_off.gif</td>
                        </tr>
                        <tr>
                            <td>언더바(_) 조합 : <em>파일,폴더, 이미지</em>에 사용한다.<br/>
                                HTML 문서 안에서 언더바(_)의 조합은 form, input 엘리먼트 등의 <em>name 속성</em>의 값을 사용하는 것을 권장한다. </td>
                            <td>customerService</td>
                            <td>customer_service</td>
                        </tr>
                        <tr>
                            <td>하이픈(-) 조합 : <em>CSS 클래스</em>에 사용하는 것을 권장한다.</td>
                            <td>obj_hidden</td>
                            <td>obj-hidden</td>
                        </tr>
                        <tr>
                            <td><em>파일 및 폴더</em>의 경우 1, 2과 같은 한자리 정수는 사용하지 않으며 01, 02과 같이 사용하며 사용을 권장한다.<br/>
                                대부분의 파일관리 유틸리티 프로그램들을 사용하여 파일의 이름으로 정렬할 때에 정렬의 순서를 보장하기 위함이다.</td>
                            <td>
                                table_center_1<br/>
                                table_center_2
                            </td>
                            <td>
                                cyber_center_01<br/>
                                cyber_center_02
                            </td>
                        </tr>
                        <tr>
                            <td>동일한 이름의 css 네이밍의 경우 가장 뒤에 숫자를 사용하여 분류지어 사용할 수 있으며(한자리정수), <em>첫번째 파일은 숫자를 생략</em>하여 사용할 수 있다.</td>
                            <td>
                                box-type1<br/>
                                box-type2<br/>
                                box-type3
                            </td>
                            <td>
                                box-type<br/>
                                box-type2<br/>
                                box-type3
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>파일 및 폴더</h3>
            <ul className="desc-guide">
                <li>개발과 기획에서 정의된 디렉토리 구조도 및 화면 아이디가 정의가 되어있다면 그에 준한 규칙에 따라 파일 및 폴더의 이름을 사용한다.</li>
            </ul>

            <h4>파일 및 폴더 네이밍 규칙 예</h4>
            <div className="tb-guide">
                <table>
                    <caption></caption>
                    <colgroup>
                        <col span="4" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colspan="3">경로/폴더</th>
                            <th>파일</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>사이트별 폴더</td>
                            <td>contents</td>
                            <td>1차메뉴 idx 2자리 (01, 02..)</td>
                            <td>**_**_**.jsp</td>
                            <td>
                                1차메뉴-현재메뉴 idx 2자리.jsp <br/>
                                ex&#41; 01_02_03_04.jsp
                            </td>
                        </tr>
                        <tr>
                            <td>css</td>
                            <td>layout.css</td>
                            <td>사이트 개별 레이아웃 (헤더, 좌측메뉴 등) 관련</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>아이디(id)</h3>

            <h4>아이디 네이밍 규칙 예</h4>
            <div className="tb-guide">
                <table>
                    <caption>아이디 네이밍 규칙 예</caption>
                    <thead>
                        <tr>
                            <th>잘못된 예</th>
                            <th>올바른 예</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="red">error_Message</td>
                            <td className="blue">errorMessage</td>
                        </tr>
                        <tr>
                            <td className="red">control_center</td>
                            <td className="blue">controlCenter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul className="desc-guide">
                <li>시작의 이름은 영문 소문자를 사용하되 <em>두 번째 단어부터 첫 번째 문자를 대문자로 처리하는 기법(카멜 케이스)</em>을 사용한다.</li>
                <li>동일한 이름의 id는 문서에서 한번만 사용이 가능하다.</li>
                <li>지정된 레이아웃 및 폼객체를 제외한 <em>스타일 지정을 위하여 id를 사용하지 않는다.</em></li>
                <li>앵커로서 사용되는 엘리먼트는 id 지정이 가능하다.</li>
                <li>User Interface 동작을 위하여 DOM 선택자로서의 id 지정은 가능하다.</li>
                <li>예약어가 있는 경우 예약어를 사용한다.</li>
            </ul>

            <h4>예약어</h4>
            <div className="tb-guide">
                <table>
                    <caption>예약어</caption>
                    <colgroup>
                        <col span="2" />
                    </colgroup>
                    <tead>
                        <tr>
                            <th>구분</th>
                            <th>예약어</th>
                            <th>설명</th>
                        </tr>
                    </tead>
                    <tbody>
                        <tr>
                            <td rowspan="9">레이아웃</td>
                            <td>#wrap</td>
                            <td>페이지 전체 영역 그룹핑</td>
                        </tr>
                        <tr>
                            <td>#m_contents</td>
                            <td>메인 본문영역</td>
                        </tr>
                        <tr>
                            <td>#container</td>
                            <td>서브 본문영역</td>
                        </tr>
                        <tr>
                            <td>#footer</td>
                            <td>하단 footer영역</td>
                        </tr>
                        <tr>
                            <td>#lnb</td>
                            <td>메인 네비게이션</td>
                        </tr>
                        <tr>
                            <td>#snbWrap</td>
                            <td>좌측 네비게이션</td>
                        </tr>
                        <tr>
                            <td>#navXXX</td>
                            <td>네비게이션요소를 지정<br/>예&#41; #navGnb / #navSnb</td>
                        </tr>
                        <tr>
                            <td>#popXXX</td>
                            <td>레이어팝업 페이지별 ID</td>
                        </tr>
                        <tr>
                            <td>#modalXXX</td>
                            <td>모달 페이지별 ID</td>
                        </tr>
                        <tr>
                            <td>기타컨텐츠그룹</td>
                            <td>#uiXXX</td>
                            <td>예&#41; #uiFloat</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>클래스(class)</h3>
            <h4>클래스 네이밍 규칙 예</h4>
            <div className="tb-guide">
                <table>
                    <caption>클래스 네이밍 규칙 예</caption>
                    <thead>
                        <tr>
                            <th>잘못된 예</th>
                            <th>올바른 예</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="red">error-Mesage</td>
                            <td className="blue">error-mesage</td>
                        </tr>
                        <tr>
                            <td className="red">control_center</td>
                            <td className="blue">control-center</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul className="desc-guide">
                <li>대표하는 프로젝트명을 축약하여 프리픽스(prefix)로 사용한다.</li>
                <li>네이밍은 - <em>(하이픈) 사용</em>을 기본으로 한다.<br/>
                    (클래스 네임이 서버사이드 스크립트의 변수와 자바스크립트의 변수 정의시 혼돈을 방지)</li>
                <li>시작의 이름은 영문 소문자를 사용하며 두 번째 단어부터 하이픈(-)으로 연결하며 <em>대문자는 사용하지 않는다.</em></li>
                <li>영문 소문자, 숫자, 하이픈(-)만 사용할 수 있다.</li>
                <li>하이픈(-)은 2개 이상의 단어를 조합할 때만 사용한다.</li>
                <li>하이픈(-)을 이용하여 3단계를 초과하여 사용하는 방법은 지양한다.</li>
                <li>숫자 없으면 '1'이라는 숫자가 생략된 것으로 간주한다.</li>
                <li>다중의 클래시 지정을 허용하며 <em>최대 3개 이상</em> 사용하지 않도록 주의한다.</li>
                <li>단, 여백 혹은 넓이를 지정하는 클래스는 예외로 한다.</li>
            </ul>

            <h4>기본적 클래스 예약어</h4>
            <div className="tb-guide">
                <table>
                    <caption>기본적 클래스 예약어</caption>
                    <thead>
                        <tr>
                            <th>예약어</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>.aside-*</td>
                            <td>보통 #container 또는 #content 에 종속 되며 곁가지 영역으로 불리기도 한다.</td>
                        </tr>
                        <tr>
                            <td>.section-*</td>
                            <td>콘텐츠를 분할하거나 그룹핑 하는 블럭. 보통 #content 내부에 배치한 다음 heading 태그와 함께 사용하는 것을 권장.</td>
                        </tr>
                        <tr>
                            <td>.nav-*</td>
                            <td>네비게이션 으로 사용되는 요소영역에 사용<br/>
                                예&#41; .nav-gnb / .nav-lnb ..</td>
                        </tr>
                        <tr>
                            <td>.path</td>
                            <td>현재 페이지의 경로를 지정한다. 보통 #container 또는 #content에 종속된다.</td>
                        </tr>
                        <tr>
                            <td>.open [.close]</td>
                            <td>
                                디스플레이 관련: display상태를 나타내며 기본스타일 클래스에 이중클래스로 사용.<br/>
                                css속성으로 컨트롤 가능한 요소는 스크립트 제어는 자제하도록 한다.
                            </td>
                        </tr>
                        <tr>
                            <td>.ico-xx (ex: ico-srch)</td>
                            <td>아이콘</td>
                        </tr>
                        <tr>
                            <td>.ui-xx (ex: ui-close)</td>
                            <td>기타 동작관련 셀렉터</td>
                        </tr>
                        <tr>
                            <td>.btn-xx</td>
                            <td>버튼</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>이미지 네이밍 규칙</h3>
            <p><strong>스프라이트기법으로 용량보다는 갯수 최소화 지향</strong></p>

            <h4>이미지 네이밍 규칙 예</h4>
            <ul className="desc-guide">
                <li>이미지 네이밍의 조합은 '<em>형태_의미_순서_상태</em>'의 순서로 조합한다.</li>
                <li>같은 이름의 이미지가 두 개 이상 존재하면 <em>숫자로 구분</em>한다.</li>
                <li>이미지 네이밍은 <em>이미지의 확장자에 관계 없이 순차적으로 적용</em>한다. 예&#41; btn_confirm.gif, btn_confirm_02.jpg, btn_confirm_03.png</li>
                <li>임시이미지에 한하여 <em>@특수문자를 처음으로 사용</em>할 수 있다.</li>
                <li>이미지 예약어에 숫자, 영문소문자, 언더바(_)를 조합하여 사용할 수 있다.</li>
            </ul>
            <div className="tb-guide">
                <table>
                    <caption>이미지 네이밍 규칙 예</caption>
                    <colgroup>
                        <col span="2"></col>
                    </colgroup>
                    
                    <thead>
                        <tr>
                            <th>잘못된 예</th>
                            <th>올바른 예</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="red">on_tab_info.gif</td>
                            <td className="blue">tab_info_01_on.gif</td>
                            <td>형태_의미_순서_상태 순서로 조합한다.</td>
                        </tr>
                        <tr>
                            <td className="red">tio.gif</td>
                            <td className="blue">tab_info_on.gif</td>
                            <td>임의로 축약하지 않는다.</td>
                        </tr>
                        <tr>
                            <td className="red">tbl_type_list_02_off.gif</td>
                            <td className="blue">tbl_list_02_off.gif</td>
                            <td>가급적 4단계 이하의 조합을 사용한다.</td>
                        </tr>
                        <tr>
                            <td className="red">btn_Active.gif</td>
                            <td className="blue">btn_active.gif</td>
                            <td>영문 소문자를 사용한다.</td>
                        </tr>
                        <tr>
                            <td className="red">dot_type1.gif</td>
                            <td className="blue">dot_1x1_b3b3b3.gif</td>
                            <td>동일이미지 중복생성을 피하기 위해 블릿, 도트 등은 네이밍으로 기본이미지를 구분할 수 있는 (사이즈, 색상 등) 네이밍을 사용한다.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4>이미지 예약어</h4>
            <div className="tb-guide">
                <table>
                    <caption>이미지 예약어</caption>
                    <colgroup>
                        <col span="2"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>분류</th>
                            <th>파일명</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>버튼</td>
                            <td>btn_</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>아이콘</td>
                            <td>ico_</td>
                            <td>아이콘</td>
                        </tr>
                        <tr>
                            <td>레이아웃</td>
                            <td>com_</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>화살표</td>
                            <td>arr_</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>배경</td>
                            <td>bak_</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>비쥬얼</td>
                            <td>vis_</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>스프라이트</td>
                            <td>spr_</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>임시</td>
                            <td>@*</td>
                            <td>관리자나 사용자에 의해 등록될 이미지 영역으로 기본코딩을 위한 임시이미지</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Naming;