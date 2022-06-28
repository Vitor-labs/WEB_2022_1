import * as React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div align='center' style={{ border: 'solid', padding: '40px' }}>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/" class="btn btn-outline-success">Home</Link>
            </nav>
        </div>
    );
}

export default About