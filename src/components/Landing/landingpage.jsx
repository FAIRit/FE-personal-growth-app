/*WIP*/
import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import styled from 'styled-components';


const StyledDiv = styled.div`
    background: #FEAC5E;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);
    background: linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);
    text-align: center;
    position: fixed;
    display: inline-block;
    top: 10;
    left: 0;
    width: 100%;
    height: 100%;
`
const StyledTitle = styled.h1`
    font-size: 3rem;
    padding: 4rem;
    text-align: center;
    font-family: Sawarabi Mincho, sans-serif;
    display: inline-block;
    position: relative;
    margin-top: 4rem;
    margin-bottom: 2rem;
    color:rgb(255, 255, 255);
`

class Landing extends Component {
    render() {
        return (
            <StyledDiv>
                    <div className="header__text-box">
                        <StyledTitle>
                            <h1>Check how to measure your personal growth!</h1>
                        </StyledTitle>
                        <h2>Our aplication will help you change our life and control your habits.</h2>
                        <br />
                        <a href="login" className="btn btn--white btn---animated">Discover our app</a>
                    </div>
                <footer id="footer">
                    <p>COPYRIGHT © 2020 Ela Szulc</p>
                </footer>
            </StyledDiv>
        )
    }
}
export default Landing;