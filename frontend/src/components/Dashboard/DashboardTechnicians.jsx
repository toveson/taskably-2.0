import React, { Component } from 'react';
import API from '../../util/api';

class DashboardTechnicians extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tech: []
        };
    }

    componentDidMount() {
        API.getTechs().then(response => {
            // console.log('tech:', response.data);
            this.setState({ tech: response.data });
        });
    }

    render() {
        const { tech } = this.state;

        return (
            <div>
                {/* DashboardTechnicians */}
                <div className="card">
                    <div className="card-content cardDashboard">
                        <h2 className="title is-4"><u>Technicians</u></h2>
                        {
                            tech.slice(0, 3).map((tech) => (
                                <div className="media" key={tech.tech_id}>
                                    <div className="media-left is-marginless">
                                        <p className="number">
                                            {tech.tech_id}
                                        </p>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-5 is-spaced is-marginless">
                                            {tech.Tech}
                                        </p>
                                        <p className="subtitle is-6">
                                            {tech.Region}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                        < a className="button is-link is-outlined" id='buttonDashboard' href="techs" > View all technicians</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default DashboardTechnicians;
