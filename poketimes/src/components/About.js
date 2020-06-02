import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam distinctio facilis maiores laborum sequi incidunt facere similique commodi ipsum at quia illo obcaecati odit repellendus pariatur quos, deserunt animi quasi!</p>
        </div>
    )
}

export default Rainbow(About);