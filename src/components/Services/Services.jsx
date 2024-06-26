import './Services.css';

const Services = ({ title }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className='services-container'>
                <div className="service-item">1</div>
                <div className="service-item">2</div>
                <div className="service-item">3</div>
                <div className="service-item">4</div>
                <div className="service-item">5</div>
                <div className="service-item">6</div>
            </div>
        </>
    )
}

export default Services;