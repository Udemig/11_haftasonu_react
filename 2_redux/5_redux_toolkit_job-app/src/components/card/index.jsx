import "./card.scss";
import Button from "./Button";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarAlt, FaSuitcase } from "react-icons/fa";

const Card = ({ job }) => {
  const colors = {
    Mülakat: "green",
    Reddedildi: "red",
    "Devam Ediyor": "orange",
  };

  return (
    <div className="card">
      <section className="head">
        <div className="letter">
          <span>A</span>
        </div>

        <div className="info">
          <p>{job.position}</p>
          <p>{job.company}</p>
        </div>

        <div>
          <Button id={job.id} />
        </div>
      </section>

      <section className="body">
        <div className="field">
          <MdLocationPin />
          <p>{job.location}</p>
        </div>

        <div className="field">
          <FaSuitcase />
          <p>{job.type}</p>
        </div>

        <div className="field">
          <FaCalendarAlt />
          <p>
            {new Date(job.date).toLocaleString("tr", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="status">
          <p
            style={{
              background: colors[job.status],
            }}
          >
            {job.status}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Card;
