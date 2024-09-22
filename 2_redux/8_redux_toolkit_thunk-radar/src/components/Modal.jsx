import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../redux/actions";
import Loader from "./Loader";
import Error from "./Error";
import formatDate from "../utils/formatDate";

const Modal = ({ id, close }) => {
  const { isLoading, error, info } = useSelector((store) => store.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo(id));
  }, [id]);

  const isVIP = !info?.aircraft?.registration || !info?.airline?.name;

  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error msg={error} />
        ) : isVIP ? (
          <h3 className="loader-wrapper">Uçuş Bilgileri Gizlendi</h3>
        ) : (
          info && (
            <div className="info-wrapper">
              <div className="info">
                <h2>{info.aircraft?.model?.text}</h2>
                <h2>{info.aircraft?.model?.code}</h2>

                <p>
                  <span>Kuyruk Kodu</span>
                  <span>{info.aircraft?.registration}</span>
                </p>

                <img src={info.aircraft?.images.large?.[0]?.src} />

                <p>
                  <span>Şirket</span>
                  <span>{info.airline?.name}</span>
                </p>

                <p>
                  <span>Kalkış</span>
                  <a href={info.airport.origin?.website} target="_blank">
                    {info.airport.origin?.name}
                  </a>
                </p>

                <p>
                  <span>Hedef</span>
                  <a
                    href={info.airport.destination?.website}
                    target="_blank"
                  >
                    {info.airport.destination?.name}
                  </a>
                </p>

                <p>
                  <span>Kalkış Zamanı</span>
                  <span>{formatDate(info.time.scheduled.departure)}</span>
                </p>

                <p>
                  <span>İniş Zamanı</span>
                  <span>{formatDate(info.time.scheduled.arrival)}</span>
                </p>
              </div>

              <p className={`alert ${info.status.icon}`}>
                <span>{info.status.text}</span>
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
