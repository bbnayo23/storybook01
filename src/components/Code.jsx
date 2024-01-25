import React from 'react';
import { Link } from 'react-router-dom';

const Code = () => {
    return (
        <div className='guide-content'>
            <h2>HTML 코드 작성 규칙</h2>

            <h3>head 영역의 파일 링크</h3>
            <p>웹 문서 전송 속도를 높이기 위하여(Request Count 감소) 최소한의 파일을 사용한다.</p>

            <h3>표준 문법의 사용</h3>
            <ul className="desc-guide">
                <li>HTML은 해당 DTD의 명세에 맞게 작성하며, W3C validation을 통과해야 한다.</li>
                <li>DTD를 제외한 모든 엘리먼트와 속성은 소문자로 작성한다.</li>
                <li>속성의 값은 큰따움표("")로 묶는다.</li>
                <li>특수기호는 Entity name을 사용하여 entity 코드로 변환한다. Entity 코드는 ISO-8859-1을 기준으로 한다.</li>
                <li>마크업은 <Link to="http://www.w3.org/html/wg/drafts/html/master/" target="_blank" title="새창">w3c html5문법</Link>에 준하여 사용한다.</li>
                <li>종료 태그는 생략하지 않는다.</li>
            </ul>

            <h4>주의 해야할 특수기호 Entity name</h4>
            <div className="tb-guide">
                <table>
                    <caption>
                        <tbody>
                            <tr>
                                <th>Chatacter</th>
                                <td>&#8361;</td>
                                <td>"</td>
                                <td>&amp;</td>
                                <td>&lt;</td>
                                <td>&gt;</td>
                                <td>&nbsp;</td>
                                <td>&middot;</td>
                            </tr>
                            <tr>
                                <th>Entity Name</th>
                                <td>&amp;#8361;</td>
                                <td>&amp;quot;</td>
                                <td>&amp;amp;</td>
                                <td>&amp;lt;</td>
                                <td>&amp;gt;</td>
                                <td>&amp;nbsp;</td>
                                <td>&amp;middot;</td>
                            </tr>
                        </tbody>
                    </caption>
                </table>
            </div>
            <p className="txt-guide1"> * 참고 : <Link to="http://www.w3schools.com/html/html_entities.asp" target="_blank" title="새창">HTML Entities</Link></p>
            
            <h3>파일의 인코딩</h3>
            <p>*.html, *.css, *.js의 파일의 저장 방식을 UTF-8로 설정한다.</p>
            <div className="tb-guide">
                <table>
                    <caption>문자셋(charset)별 인코딩</caption>
                    <thead>
                        <tr>
                            <th>문자셋(charset)</th>
                            <th>기본 인코딩</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>charset=utf-8</td>
                            <td>utf-8</td>
                        </tr>
                        <tr>
                            <td>charset=euc-kr</td>
                            <td>ANSI</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>코드 들여쓰기</h3>
            <p>코드의 가독성을 높이고 전체 HTML 구조를 쉽게 파악하기 위하여 들여쓰기 규칙을 준수한다. 마크업의 중첩이 깊어질 때마다 <em>자식 엘리먼트는 1탭 들여 쓰고, 1탭의 크기는 공백 4칸으로 설정</em>한다.</p>

            <h4>들여쓰기를 하지 않는 경우</h4>
            <div className="guide-code">
                <pre><code className="syntax html">
                        &lt;!doctype html&gt;
                        &lt;html lang="ko"&gt;
                        &lt;head&gt;

                        &lt;/head&gt;
                        &lt;body&gt;
                        &lt;div id="wrap"&gt;

                        &lt;/div&gt;
                        &lt;/body&gt;
                        &lt;/html&gt;
                </code></pre>
            </div>
            <ul className="desc-guide">
                <li>html의 자식 엘리먼트인 head, body</li>
                <li>body의 자식 첫 번째 엘리먼트 div="wrap"</li>
            </ul>

            <h3>빈줄 / 주석</h3>
            <p>
                그룹을 감싸고 있는 객체를 구분하기 위하여 코드 그룹 간 1줄씩 빈 줄을 만드는 것은 허용한다.
                빈 줄의 간격이 1줄을 초과하지 않으며 <em>개발과 연동되는 그룹의 경우는 빈줄보다 주석을 작성</em>한다.
                코드의 가독성을 높이고 전체 HTML 구조를 쉽게 파악하기 위하여 주석사용을 준수한다.
            </p>
            <div className="guide-code">
                <pre><code className="syntax html">
                    &lt;!-- header --&gt;
                    &lt;div id="header"&gt;
                        &lt;!-- 로고 --&gt;
                        &lt;a href="#none"&gt;홈으로&lt;/a&gt;
                        &lt;!-- //로고 --&gt;
                    &lt;/div&gt;
                    &lt;!-- //header --&gt;
                    
                    &lt;!-- container --&gt;
                    &lt;div id="container"&gt;
                    
                    &lt;/div&gt;
                    &lt;!-- //container --&gt;
                    
                    &lt;!-- footer --&gt;
                    &lt;footer id="footer"&gt;
                    &lt;/footer&gt;
                    &lt;!-- //footer --&gt;
                </code></pre>
            </div>
            <ul className="desc-guide">
                <li>주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.</li>
                <li>시작과 종료주석의 내용은 동일해야 한다. 그룹간 1줄 빈줄이 있을경우(예:레이아웃관련)에는 종료주석을 생략할 수 있다.</li>
                <li>레이아웃 엘리먼트를 제외한 독립된 콘텐츠 영역의 주석 표기는 선택 사항이다.</li>
            </ul>
            
        
        </div>
    );
};

export default Code;