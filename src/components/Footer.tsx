import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="text-center">
                    Made with<span role="img" aria-label="heart emoji" className='mx-2'>💙</span> by <a rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-mayorga/" className="text-light" style={{textDecoration: "underline"}} target="_blank">Alex Mayorga</a> <i className="bi bi-linkedin"></i> <i className="bi bi-github"></i> <i className="bi bi-twitter"></i>
                </div>
            </div>
        </footer>
    )
}