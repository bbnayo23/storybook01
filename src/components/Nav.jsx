import React from 'react';
import Basic from './Basic';
import Naming from './Naming';
import Code from './Code';
import Element from './Element';
import CssCode from './CssCode';
import { Route, Routes, NavLink } from 'react-router-dom';


const Nav = () => {
    return (  
        <div className='wrap'>
            <aside>
                <div className='nav-sub'>
                    <ul>
                        <li><NavLink to="basic">기본정책</NavLink></li>
                        <li><NavLink to="naming">네이밍 규칙</NavLink></li>
                        <li><NavLink to="code">HTML 코드 작성 규칙</NavLink></li>
                        <li><NavLink to="element">HTML 엘리먼트 작성 규칙</NavLink></li>
                        <li><NavLink to="css">CSS 코드 작성 규칙</NavLink></li>
                    </ul>
                </div>
            </aside>
     
            <article>
                <Routes>
                    <Route path='basic' element={ <Basic /> } />
                    <Route path='naming' element={ <Naming /> } />
                    <Route path='code' element={ <Code /> } />
                    <Route path='element' element={ <Element /> } />
                    <Route path='csscode' element={ <CssCode /> } />
                </Routes>
            </article>
            
        </div>
    );
};

export default Nav;