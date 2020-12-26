import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.css';
import '../assets/css/icofont.css';
import '../assets/css/style.scss';
// import '../assets/css/color/color-default.scss';
import '../assets/css/responsive.css';
import '../assets/css/color-switcher.css';

import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
// import ColorSwitch from '../components/Shared/ColorSwitch';

export default class MyApp extends App {

    state = {
        tempColor: 'gradient-color-ten.css'
    };

    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    onColorSubmit = color => {
        this.setState({ tempColor: color });
    }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <title>HeroNext React + Next + Express - Multipurpose Creative App Landing Page Template</title>
                    <link rel="stylesheet" type="text/css" href={`/static/color/${this.state.tempColor}`} key="color" />
                </Head>
                <Component {...pageProps} />
                {/* <ColorSwitch onClick={this.onColorSubmit} /> */}
            </Container>
        )
    }
}