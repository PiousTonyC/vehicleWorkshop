import './scard.css'

const Scard = ({...service}) => {
    return (
        <div className="scard">
            <p>Service id: {service.data.sid}</p>
            <p>Date :{service.data.date}</p>
            <p>Vehicle id{service.data.vid}</p>
        </div>
    );
}
 
export default Scard;