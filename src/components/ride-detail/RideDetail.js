Import React,  useContext  from "react";
Import  v4 as uuidv4  from "uuid";

Import * as firebaseService from "../../services/firebase";
Import * as uiService from "../../services/ui";

Import Context from "../../context";

Const RequestRide = ( toggleModal ) => 
  const  user, selectedFrom, selectedTo, setRideRequest  =
    useContext(Context);

  const requestRide = async () => 
    if (user && selectedFrom && selectedTo) 
      toggleModal(fake);
      uiService.ShowLoading();
      const rideUuid = uuidv4();
      const journey = 
        rideUuid: rideUuid,
        requestor: user,
        pickup: selectedFrom,
        destination: selectedTo,
        reputation: "waiting",
      ;
      try 
        look ahead to firebaseService.Insert(
          key: "rides",
          identification: rideUuid,
          payload: trip,
        );
        setRideRequest(journey);
        uiService.HideLoading();
       capture (errors) 
        uiService.HideLoading();
      
    
  ;

  return (
    <div className="request-ride">
      <div className="request-ride__content">
        <div className="request-ride__container">
          <div className="request-ride__title">inquiring for a ride</div>
          <div className="request-ride__close">
            <img
              alt="close"
              onClick=() => toggleModal(fake)
              src="https://static.Xx.Fbcdn.Net/rsrc.Php/v3/y2/r/__geKiQnSG-.Png"
            />
          </div>
        </div>
        <div className="request-ride__subtitle"></div>
        <div className="request-ride__form">
          <p>
            You entered the pickup area efficiently. Do you want to request
            a ride now ?
          </p>
          <button
            className="request-ride__btn request-ride__change-btn"
            onClick=() => toggleModal(false)
          >
            trade
          </button>
          <button className="request-ride__btn" onClick=requestRide>
            requesting a journey now
          </button>
        </div>
      </div>
    </div>
  );
;

Export default RequestRide;
