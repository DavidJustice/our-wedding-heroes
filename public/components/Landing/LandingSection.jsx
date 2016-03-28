import React from 'react';

import './LandingSection.styl';

function LandingSection(props) {
    return (
        <section className="landing-section">
            <h1 className="landing-section__title">{props.title}</h1>

            <div className="landing-section__content">
                {props.children}
            </div>

            {props.postContent}
        </section>
    );
}

LandingSection.propTypes = {
    children: React.PropTypes.element.isRequired,
    postContent: React.PropTypes.element,
    title: React.PropTypes.string.isRequired,
};

export default LandingSection;
