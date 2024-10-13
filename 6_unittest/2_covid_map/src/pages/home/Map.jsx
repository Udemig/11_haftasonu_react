import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import Container from "../../components/container";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

  return (
    <Container designs="max-md:!p-0   mt-10 mb-20">
      <h1 className="p-5 text-2xl font-semibold">Ülke Seçin</h1>
      <div className="map border shadow-lg md:rounded-xl bg-gray-200">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => navigate(`/detail/${geo.id}`)}
                    style={{
                      default: {
                        fill: "white",
                        stroke: "gray",
                      },

                      hover: {
                        fill: "#DB2777",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </Container>
  );
};

export default Map;
