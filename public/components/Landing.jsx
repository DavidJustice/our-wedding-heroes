import React from 'react';
import {Col, Table, Image} from 'react-bootstrap';
import weddingProfile from '../services/weddingProfile';

import './Landing.styl';

class Landing extends React.Component {
    constructor() {
        super();

        this.state = {
            weddingProfile: {
                cover: {},
                aboutUs: '',
                aboutOurDay: '',
                aboutOurHoneymoon: '',
                honeymoonGiftListItems: [],
            },
        };
    }

    componentDidMount() {
        weddingProfile
            .get()
            .then((response) => {
                this.setState({
                    weddingProfile: response,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the wedding profile data'); //eslint-disable-line
                console.log('Error getting wedding profile data', error); //eslint-disable-line
            });
    }

    render() {
        return (
            <div className="landing">
                <header className="landing__header" style={{backgroundImage: `url(${this.state.weddingProfile.cover.imageUrl})`}}>
                    <div className="landing__header__overlay"></div>
                    <div className="landing__header__content">
                        <h1 className="landing__header__content__header">{this.state.weddingProfile.cover.title}</h1>
                    </div>
                </header>

                <section className="landing__section">
                    <h1 className="landing__section__heading">A little bit about us</h1>

                    <Col md={8} mdOffset={2}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutUs}
                        </span>
                    </Col>
                </section>

                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">About our day</h1>

                    <Col md={8} mdOffset={2}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurDay}
                        </span>
                    </Col>
                </section>

                <section className="landing__section">
                    <h1 className="landing__section__heading">About our honeymoon</h1>

                    <Col md={8} mdOffset={2}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurHoneymoon}
                        </span>
                    </Col>
                </section>

                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">Honeymoon Gift List</h1>

                    <Col md={10} mdOffset={1}>
                        <Table bordered condensed responsive>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Requested</th>
                                    <th>Remaining</th>
                                    <th>Price (£)</th>
                                    <th>Gift</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.weddingProfile.honeymoonGiftListItems.map(item => (
                                    <tr key={item._id}>
                                        <th style={{maxWidth: '200px'}}><Image src={item.imageUrl} circle responsive /></th>
                                        <th>{item.name}</th>
                                        <th>{item.description}</th>
                                        <th>{item.requested}</th>
                                        <th>{item.remaining}</th>
                                        <th>{item.price}</th>
                                        <th>Coming Soon!</th>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </section>
            </div>
        );
    }
}

export default Landing;
