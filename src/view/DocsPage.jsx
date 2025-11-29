import React, { useEffect } from 'react'
import Docs from '../components/Docs/Docs'

const DocsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-dark-900">
            <Docs />
        </div>
    )
}

export default DocsPage
