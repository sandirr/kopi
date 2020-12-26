import ReactWOW from 'react-wow';

export default class AppUsers extends React.Component {
    render() {
        return (
            <ReactWOW delay='0.3s' animation='fadeInUp'>
                <section className="app-users-section hidden-div">   
                    <div className="container"> 
                        <div className="row"> 
                            <div className="col-lg-2 offset-lg-5 col-xl-2 offset-xl-5"> 
                                <div className="single-user">
                                    <i className="icofont-brand-apple"></i>
                                    <h3>ios <br /> 205k</h3>
                                </div>
                            </div>
                            
                            <div className="col-lg-2 col-xl-2"> 
                                <div className="single-user">
                                    <i className="icofont-brand-android-robot"></i>
                                    <h3>Android <br /> 305k</h3>
                                </div>
                            </div>
                            
                            <div className="col-lg-2 col-xl-2"> 
                                <div className="single-user">
                                    <i className="icofont-cloud-download"></i>
                                    <h3>Download <br /> 510k</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ReactWOW>
        )
    }
}
