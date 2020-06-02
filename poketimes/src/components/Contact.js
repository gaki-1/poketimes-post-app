import React from 'react';

const Contact = (props) => {
    setTimeout(()=>{
        props.history.push('/about')
    },2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam distinctio facilis maiores laborum sequi incidunt facere similique commodi ipsum at quia illo obcaecati odit repellendus pariatur quos, deserunt animi quasi!</p>
        </div>
    )
}

export default Contact;