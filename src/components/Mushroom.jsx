import Logo from '../assets/Logo.jpg';

const Mushroom = ({mushroom}) => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <img className="img-fluid"
            src={Logo}
            alt="Mushroom"
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{mushroom.country}</h5>
        </div>
      </div>
    </div>
  );
}

export default Mushroom;