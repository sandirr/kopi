import Link from 'next/link';
import ReactWOW from 'react-wow';

export default class AppDownload extends React.Component {
    render() {
        return (
            <section id="app-download" className="app-download-section wave-two-download-section"> 
                <div className="wave-bg-section-tb-two"></div>
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.3s' animation='fadeInUp'>
                                <div className="section-title"> 
                                    <h2>NOW AVAILABLE</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ReactWOW delay='0.5s' animation='fadeInUp'>
                                <div className="app-download-content">
                                    <Link href="#">
                                        <a className="download-btn">
                                            <i className="icofont-brand-apple"></i>
                                            <span>
                                                available on
                                                <span className="large-text">App Store</span>
                                            </span>
                                        </a>
                                    </Link>
                                    
                                    <Link href="#">
                                        <a className="download-btn">
                                            <i className="icofont-brand-android-robot"></i>
                                            <span>
                                                available on
                                                <span className="large-text">Play Store</span>
                                            </span>
                                        </a>
                                    </Link>
                                    
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
