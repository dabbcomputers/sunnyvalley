import React from 'react'

const GoogleMap = () => {
    return (
        <div className="lg:pt-15 lg;pb-15 pb-10 pt-10 overflow-x-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d274.3622736834264!2d-121.95877299461863!3d49.14004453049789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDA4JzI0LjQiTiAxMjHCsDU3JzMxLjUiVw!5e0!3m2!1sen!2sca!4v1740468551518!5m2!1sen!2sca" width="1920" height="497" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default GoogleMap