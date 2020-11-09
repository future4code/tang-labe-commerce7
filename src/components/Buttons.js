import React from 'react';
import styled from 'styled-components';


const Buttons = styled.button`
display: inline-block;
padding: 0.35em 1.2em;
border:0.1em solid #FFFFFF;
margin:0.2em 0.3em;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
text-align:center;
transition: all 0.2s;
background-color: rgb(136,34,136);
&:hover {
color: rgb(136,34,136);
border: 0.1em solid rgb(136,34,136);
background-color: #FFFFFF;
}
`
export default Buttons;