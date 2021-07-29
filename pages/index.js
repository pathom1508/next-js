import React, { Component } from 'react'
import Navbar from './nev'
import Header from './head'
import Link from 'next/link'

export default class Homepage extends Component {
    render() {
        const paddingRounding = {
            'padding': '12px'
        }
        return (
            <div>
                <Header />
                <Navbar />
                <div className="columns">
                    <div className="column">
                        <figure class="image">
                            <img src="http://www.microlife-dns.com/welcome-paper-poster-with-colorful-brush-strokes-vector-21849225.jpeg"
                                width="100%" style={{ 'height': '500px' }} />
                        </figure>
                    </div>
                </div>
            
            </div>
        );
    }
}